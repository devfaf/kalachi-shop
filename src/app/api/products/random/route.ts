import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      where: {
        stock: {
          gt: 0,
        },
      },
      include: {
        images: {
          orderBy: { sortOrder: "asc" },
        },
        colors: true,
        features: true,
      },
    });

    // Fisher-Yates shuffle
    for (let i = products.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [products[i], products[j]] = [products[j], products[i]];
    }

    return NextResponse.json(products.slice(0, 10));
  } catch (error) {
    console.error("Failed to fetch random products:", error);

    return NextResponse.json(
      { error: "Failed to fetch random products" },
      { status: 500 }
    );
  }
}