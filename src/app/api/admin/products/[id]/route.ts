
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUserRole } from "@/lib/auth";
import { createProductSchema } from "@/lib/validations/product";

type RouteContext = {
    params: Promise<{ id: string }>;
};

// دریافت اطلاعات یک محصول
export async function GET(
    request: Request,
    { params }: RouteContext
) {
    const role = await getCurrentUserRole();

    if (role !== "ADMIN" && role !== "DEMO") {
        return NextResponse.json(
            { error: "شما اجازه مشاهده این اطلاعات را ندارید." },
            { status: 403 }
        );
    }

    try {
        const { id } = await params;

        const product = await prisma.product.findUnique({
            where: { id },
            include: {
                images: { orderBy: { sortOrder: "asc" } },
                colors: true,
                features: true,
                category: true,
            },
        });

        if (!product) {
            return NextResponse.json(
                { error: "محصول موردنظر پیدا نشد." },
                { status: 404 }
            );
        }

        return NextResponse.json(product);
    } catch (error) {
        console.error("Failed to fetch product:", error);

        return NextResponse.json(
            { error: "دریافت اطلاعات محصول ناموفق بود." },
            { status: 500 }
        );
    }
}

// ویرایش محصول
export async function PATCH(
    request: Request,
    { params }: RouteContext
) {
    const role = await getCurrentUserRole();

    if (role !== "ADMIN") {
        return NextResponse.json(
            { error: "شما اجازه انجام این عملیات را ندارید." },
            { status: 403 }
        );
    }

    try {
        const { id } = await params;
        const body = await request.json().catch(() => null);

        const validation = createProductSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json(
                { error: "اطلاعات محصول معتبر نیست." },
                { status: 400 }
            );
        }

        const {
            persianName,
            englishName,
            description,
            categoryId,
            guarantee,
            originalPrice,
            price,
            stock,
            images,
            colors,
            features,
        } = validation.data;

        const existingProduct = await prisma.product.findUnique({
            where: { id },
            select: { id: true },
        });

        if (!existingProduct) {
            return NextResponse.json(
                { error: "محصول موردنظر پیدا نشد." },
                { status: 404 }
            );
        }

        const product = await prisma.product.update({
            where: { id },
            data: {
                persianName: persianName.trim(),
                englishName: englishName.trim(),
                description: description.trim(),
                categoryId,
                guarantee: guarantee.trim(),
                originalPrice: Number(originalPrice),
                price: Number(price),
                stock: Number(stock),

                images: {
                    deleteMany: {},
                    create: images.map((image) => ({
                        url: image.url,
                        sortOrder: image.sortOrder,
                    })),
                },

                colors: {
                    deleteMany: {},
                    create: colors
                        .filter((color) => color.name.trim() && color.value.trim())
                        .map((color) => ({
                            name: color.name.trim(),
                            value: color.value,
                        })),
                },

                features: {
                    deleteMany: {},
                    create: features
                        .filter((feature) => feature.label.trim() && feature.value.trim())
                        .map((feature) => ({
                            label: feature.label.trim(),
                            value: feature.value.trim(),
                        })),
                },
            },
            include: {
                images: { orderBy: { sortOrder: "asc" } },
                colors: true,
                features: true,
                category: true,
            },
        });

        return NextResponse.json(product);
    } catch (error) {
        console.error("Failed to update product:", error);

        return NextResponse.json(
            { error: "ویرایش محصول ناموفق بود." },
            { status: 500 }
        );
    }
}
