import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUserRole } from "@/lib/auth";
import { randomUUID } from "crypto";
import { createProductSchema } from "@/lib/validations/product";

export async function POST(request: Request) {
    const role = await getCurrentUserRole();

    if (role !== "ADMIN") {
        return NextResponse.json(
            { error: "شما اجازه انجام این عملیات را ندارید." },
            { status: 403 }
        );
    }

    try {
        const body = await request.json();

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

        const baseSlug = englishName
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "");

        const slug = `${baseSlug || "product"}-${randomUUID().slice(0, 8)}`;

        const product = await prisma.product.create({
            data: {
                persianName: persianName.trim(),
                englishName: englishName.trim(),
                description: description.trim(),
                categoryId,
                guarantee: guarantee.trim(),
                originalPrice: Number(originalPrice),
                price: Number(price),
                stock: Number(stock),
                slug,

                images: {
                    create: images.map(
                        (image: { url: string; sortOrder: number }) => ({
                            url: image.url,
                            sortOrder: image.sortOrder,
                        })
                    ),
                },

                colors: {
                    create: colors
                        .filter(
                            (color: { name: string; value: string }) =>
                                color.name.trim() && color.value.trim()
                        )
                        .map((color: { name: string; value: string }) => ({
                            name: color.name.trim(),
                            value: color.value,
                        })),
                },

                features: {
                    create: features
                        .filter(
                            (feature: { label: string; value: string }) =>
                                feature.label.trim() && feature.value.trim()
                        )
                        .map(
                            (feature: { label: string; value: string }) => ({
                                label: feature.label.trim(),
                                value: feature.value.trim(),
                            })
                        ),
                },
            },
            include: {
                images: true,
                colors: true,
                features: true,
                category: true,
            },
        });

        return NextResponse.json(product, { status: 201 });
    } catch (error) {
        console.error("Failed to create product:", error);

        return NextResponse.json(
            { error: "ثبت محصول ناموفق بود." },
            { status: 500 }
        );
    }
}