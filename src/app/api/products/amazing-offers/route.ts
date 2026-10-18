import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      where: {
        isAmazingOffer: true,
      },
      include: {
        images: {
          orderBy: { sortOrder: "asc" },
        },
      },
      orderBy: {
        persianName: "asc",
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error("Failed to fetch amazing offers:", error);

    return NextResponse.json(
      { error: "Failed to fetch amazing offers" },
      { status: 500 }
    );
  }
}