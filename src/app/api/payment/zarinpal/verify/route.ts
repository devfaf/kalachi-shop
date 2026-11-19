
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const ZARINPAL_VERIFY_URL =
    "https://sandbox.zarinpal.com/pg/v4/payment/verify.json";

const RESULT_URL = "/payment/result";

export async function GET(request: NextRequest) {
    try {
        const merchantId = process.env.ZARINPAL_MERCHANT_ID;
        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

        if (!merchantId || !siteUrl) {
            return NextResponse.redirect(
                new URL(`${RESULT_URL}?status=error`, request.url)
            );
        }

        const authority = request.nextUrl.searchParams.get("Authority");
        const paymentStatus = request.nextUrl.searchParams.get("Status");

        if (!authority) {
            return NextResponse.redirect(
                new URL(`${RESULT_URL}?status=error`, request.url)
            );
        }

        const order = await prisma.order.findUnique({
            where: { paymentAuthority: authority },
            include: { items: true },
        });

        if (!order) {
            return NextResponse.redirect(
                new URL(`${RESULT_URL}?status=error`, request.url)
            );
        }

        // جلوگیری از پردازش دوباره سفارش پرداخت‌شده
        if (order.status === "PROCESSING" && order.paymentRefId) {
            return NextResponse.redirect(
                new URL(
                    `${RESULT_URL}?status=success&orderId=${order.id}`,
                    request.url
                )
            );
        }

        if (order.status !== "PENDING") {
            return NextResponse.redirect(
                new URL(`${RESULT_URL}?status=failed`, request.url)
            );
        }

        // کاربر پرداخت را لغو کرده است.
        if (paymentStatus !== "OK") {
            await cancelOrderAndRestoreStock(order.id);

            return NextResponse.redirect(
                new URL(`${RESULT_URL}?status=failed`, request.url)
            );
        }

        const response = await fetch(ZARINPAL_VERIFY_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                merchant_id: merchantId,
                amount: order.total * 10,
                authority,
            }),
        });

        const result = await response.json();

        if (
            !response.ok ||
            (result.data?.code !== 100 && result.data?.code !== 101)
        ) {
            await cancelOrderAndRestoreStock(order.id);

            return NextResponse.redirect(
                new URL(`${RESULT_URL}?status=failed`, request.url)
            );
        }

        const referenceId = String(result.data.ref_id);


        if (result.data?.ref_id == null) {
            await cancelOrderAndRestoreStock(order.id);

            return NextResponse.redirect(
                new URL(`${RESULT_URL}?status=failed`, request.url)
            );
        }

        const updated = await prisma.order.updateMany({
            where: {
                id: order.id,
                status: "PENDING",
            },
            data: {
                status: "PROCESSING",
                paymentRefId: referenceId,
            },
        });

        if (updated.count !== 1) {
            const latestOrder = await prisma.order.findUnique({
                where: { id: order.id },
            });

            if (
                latestOrder?.status === "PROCESSING" &&
                latestOrder.paymentRefId
            ) {
                return NextResponse.redirect(
                    new URL(
                        `${RESULT_URL}?status=success&orderId=${order.id}`,
                        request.url
                    )
                );
            }

            return NextResponse.redirect(
                new URL(`${RESULT_URL}?status=failed`, request.url)
            );
        }


        if (!updated) {
            const latestOrder = await prisma.order.findUnique({
                where: { id: order.id },
            });

            if (
                latestOrder?.status === "PROCESSING" &&
                latestOrder.paymentRefId
            ) {
                return NextResponse.redirect(
                    new URL(
                        `${RESULT_URL}?status=success&orderId=${order.id}`,
                        request.url
                    )
                );
            }

            return NextResponse.redirect(
                new URL(`${RESULT_URL}?status=failed`, request.url)
            );
        }

        return NextResponse.redirect(
            new URL(
                `${RESULT_URL}?status=success&orderId=${order.id}`,
                request.url
            )
        );
    } catch (error) {
        console.error("Zarinpal verification error:", error);

        return NextResponse.redirect(
            new URL(`${RESULT_URL}?status=error`, request.url)
        );
    }
}


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

        // اگر قبلا لغو شده یا پرداخت شده، موجودی برنگردد.
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
