
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { categories } from "../src/data/categories";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  for (const category of categories) {
    const { id, parentId, ...data } = category;

    await prisma.category.upsert({
      where: { slug: data.slug },
      update: {
        name: data.name,
        parent: parentId
          ? { connect: { slug: parentId } }
          : { disconnect: true },
      },
      create: {
        name: data.name,
        slug: data.slug,
        ...(parentId && {
          parent: { connect: { slug: categories.find((item) => item.id === parentId)!.slug } },
        }),
      },
    });
  }

  console.log("Categories seeded successfully.");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
