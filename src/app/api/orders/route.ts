
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-server";
import { prisma } from "@/lib/prisma";

const ZARINPAL_REQUEST_URL =
    "https://sandbox.zarinpal.com/pg/v4/payment/request.json";

const ZARINPAL_START_PAY_URL =
    "https://sandbox.zarinpal.com/pg/StartPay";

const MAX_PAYMENT_AMOUNT = 200_000_000;

async function cancelOrderAndRestoreStock(orderId: string) {
    await prisma.$transaction(async (tx) => {
        const cancelled = await tx.order.updateMany({
            where: {
                id: orderId,
                status: "PENDING",
            },
            data: {
                status: "CANCELLED",
            },
        });

        if (cancelled.count !== 1) return;

        const items = await tx.orderItem.findMany({
            where: { orderId },
            select: {
                productId: true,
                quantity: true,
            },
        });

        for (const item of items) {
            await tx.product.update({
                where: { id: item.productId },
                data: {
                    stock: { increment: item.quantity },
                },
            });
        }
    });
}

export async function POST(request: NextRequest) {
    try {
        const merchantId = process.env.ZARINPAL_MERCHANT_ID;
        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

        if (!merchantId || !siteUrl) {
            return NextResponse.json(
                { error: "تنظیمات درگاه پرداخت کامل نیست." },
                { status: 503 }
            );
        }

        const supabase = await createClient();

        const {
            data: { user },
        } = await supabase.auth.getUser();

        if (!user || !user.email) {
            return NextResponse.json(
                { error: "برای ثبت سفارش ابتدا وارد حساب خود شوید." },
                { status: 401 }
            );
        }

        const body = await request.json();
        const rawItems: unknown = body.items;

        if (!Array.isArray(rawItems) || rawItems.length === 0) {
            return NextResponse.json(
                { error: "سبد خرید خالی است." },
                { status: 400 }
            );
        }

        const quantities = new Map<string, number>();

        for (const item of rawItems) {
            if (!item || typeof item !== "object") {
                return NextResponse.json(
                    { error: "اطلاعات محصولات معتبر نیست." },
                    { status: 400 }
                );
            }

            const { productId, quantity } = item as {
                productId?: unknown;
                quantity?: unknown;
            };

            if (
                typeof productId !== "string" ||
                !productId ||
                !Number.isInteger(quantity) ||
                (quantity as number) < 1
            ) {
                return NextResponse.json(
                    { error: "اطلاعات محصولات معتبر نیست." },
                    { status: 400 }
                );
            }

            quantities.set(
                productId,
                (quantities.get(productId) ?? 0) + (quantity as number)
            );
        }

        const order = await prisma.$transaction(async (tx) => {
            const orderItems: {
                productId: string;
                quantity: number;
                price: number;
            }[] = [];

            let total = 0;

            for (const [productId, quantity] of quantities) {
                const product = await tx.product.findUnique({
                    where: { id: productId },
                    select: {
                        id: true,
                        price: true,
                        stock: true,
                    },
                });

                if (!product) {
                    throw new Error("PRODUCT_NOT_FOUND");
                }

                if (product.stock < quantity) {
                    throw new Error("INSUFFICIENT_STOCK");
                }

                total += product.price * quantity;

                if (total >= MAX_PAYMENT_AMOUNT) {
                    throw new Error("PAYMENT_LIMIT_EXCEEDED");
                }

                const updated = await tx.product.updateMany({
                    where: {
                        id: productId,
                        stock: { gte: quantity },
                    },
                    data: {
                        stock: { decrement: quantity },
                    },
                });

                if (updated.count !== 1) {
                    throw new Error("INSUFFICIENT_STOCK");
                }

                orderItems.push({
                    productId,
                    quantity,
                    price: product.price,
                });
            }

            const name =
                typeof user.user_metadata?.name === "string"
                    ? user.user_metadata.name
                    : user.email!.split("@")[0];

            await tx.user.upsert({
                where: { id: user.id },
                update: {
                    email: user.email!,
                    name,
                },
                create: {
                    id: user.id,
                    email: user.email!,
                    name,
                },
            });

            return tx.order.create({
                data: {
                    userId: user.id,
                    total,
                    items: {
                        create: orderItems,
                    },
                },
                select: {
                    id: true,
                    total: true,
                    status: true,
                },
            });
        });

        // تبدیل تومان به ریال
        const amount = order.total * 10;

        let paymentResponse: {
            data?: {
                code?: number;
                authority?: string;
            };
        };

        try {
            const response = await fetch(ZARINPAL_REQUEST_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    merchant_id: merchantId,
                    amount,
                    callback_url: `${siteUrl.replace(/\/$/, "")}/api/payment/zarinpal/verify`,
                    description: `پرداخت سفارش ${order.id} در فروشگاه کالاچی`,
                    metadata: {
                        email: user.email,
                    },
                }),
            });

            paymentResponse = await response.json();

            if (
                !response.ok ||
                paymentResponse.data?.code !== 100 ||
                !paymentResponse.data.authority
            ) {
                await cancelOrderAndRestoreStock(order.id);

                return NextResponse.json(
                    { error: "دریافت اطلاعات پرداخت از زرین‌پال ناموفق بود." },
                    { status: 502 }
                );
            }
        } catch (error) {
            await cancelOrderAndRestoreStock(order.id);
            throw error;
        }

        const authority = paymentResponse.data!.authority!;

        await prisma.order.update({
            where: { id: order.id },
            data: {
                paymentAuthority: authority,
            },
        });

        return NextResponse.json(
            {
                order,
                paymentUrl: `${ZARINPAL_START_PAY_URL}/${authority}`,
            },
            { status: 201 }
        );
    } catch (error) {
        if (error instanceof Error) {
            if (error.message === "PRODUCT_NOT_FOUND") {
                return NextResponse.json(
                    { error: "یکی از محصولات سفارش پیدا نشد." },
                    { status: 404 }
                );
            }

            if (error.message === "INSUFFICIENT_STOCK") {
                return NextResponse.json(
                    { error: "موجودی یکی از محصولات کافی نیست." },
                    { status: 409 }
                );
            }

            if (error.message === "PAYMENT_LIMIT_EXCEEDED") {
                return NextResponse.json(
                    {
                        code: "PAYMENT_LIMIT_EXCEEDED",
                        error: "مبلغ سفارش از سقف پرداخت آنلاین بیشتر است. لطفا سفارش خود را به چند سفارش جداگانه با مبلغ کمتر از ۲۰۰ میلیون تومان تقسیم کنید.",
                    },
                    { status: 400 }
                );
            }
        }

        console.error("Create order error:", error);

        return NextResponse.json(
            { error: "ثبت سفارش با خطا مواجه شد." },
            { status: 500 }
        );
    }
}
