
import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { products } from "../src/data/products";
import { categories } from "../src/data/categories";

const pool = new Pool({
  connectionString: process.env.DIRECT_URL,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  for (const product of products) {
    const category = categories.find(
      (item) => item.id === product.categoryId
    );

    if (!category) {
      throw new Error(`Category not found for ${product.slug}`);
    }

    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {
        persianName: product.info.persianName,
        englishName: product.info.englishName,
        description: product.info.description,
        rating: product.info.rating,
        price:
          product.purchasePanel.finalPrice ??
          product.purchasePanel.originalPrice,
        originalPrice: product.purchasePanel.originalPrice,
        stock: product.purchasePanel.stock,
        storeName: product.purchasePanel.storeName,
        sellerRating: product.purchasePanel.sellerRating,
        guarantee: product.purchasePanel.guarantee,
        category: { connect: { slug: category.slug } },
        images: {
          deleteMany: {},
          create: product.images.map((url, index) => ({
            url,
            sortOrder: index,
          })),
        },
        colors: {
          deleteMany: {},
          create: product.info.colors.map((color) => ({
            name: color.name,
            value: color.value,
          })),
        },
        features: {
          deleteMany: {},
          create: product.info.features.map((feature) => ({
            label: feature.label,
            value: feature.value,
          })),
        },
      },
      create: {
        slug: product.slug,
        persianName: product.info.persianName,
        englishName: product.info.englishName,
        description: product.info.description,
        rating: product.info.rating,
        price:
          product.purchasePanel.finalPrice ??
          product.purchasePanel.originalPrice,
        originalPrice: product.purchasePanel.originalPrice,
        stock: product.purchasePanel.stock,
        storeName: product.purchasePanel.storeName,
        sellerRating: product.purchasePanel.sellerRating,
        guarantee: product.purchasePanel.guarantee,
        category: { connect: { slug: category.slug } },
        images: {
          create: product.images.map((url, index) => ({
            url,
            sortOrder: index,
          })),
        },
        colors: {
          create: product.info.colors.map((color) => ({
            name: color.name,
            value: color.value,
          })),
        },
        features: {
          create: product.info.features.map((feature) => ({
            label: feature.label,
            value: feature.value,
          })),
        },
      },
    });
  }

  console.log("Products seeded successfully.");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
