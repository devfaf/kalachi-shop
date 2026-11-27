
"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Package,
  Smartphone,
  Tablet,
  Laptop,
  Monitor,
  Tv,
  Watch,
  Headphones,
  Gamepad2,
  Camera,
  Refrigerator,
  Cable,
  ChevronLeft,
} from "lucide-react";

import { useCategories } from "@/hooks/use-categories";

const categoryIcons: Record<string, typeof Package> = {
  mobile: Smartphone,
  tablet: Tablet,
  laptop: Laptop,
  computer: Monitor,
  tv: Tv,
  smartwatch: Watch,
  audio: Headphones,
  gaming: Gamepad2,
  camera: Camera,
  "home-appliance": Refrigerator,
  accessories: Cable,
};

const getCategoryIcon = (slug: string, name: string) => {
  const normalizedSlug = slug.toLowerCase();
  const normalizedName = name.toLowerCase();

  if (
    normalizedSlug.includes("tablet") ||
    normalizedName.includes("تبلت")
  ) {
    return Tablet;
  }

  if (
    normalizedSlug.includes("mobile") ||
    normalizedName.includes("موبایل") ||
    normalizedName.includes("گوشی")
  ) {
    return Smartphone;
  }

  if (
    normalizedSlug.includes("laptop") ||
    normalizedName.includes("لپ تاپ")
  ) {
    return Laptop;
  }

  return categoryIcons[slug] ?? Package;
};

export default function CategoriesPage() {
  const { categories, isLoading, error } = useCategories();
  const router = useRouter();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    if (mediaQuery.matches) {
      router.replace("/");
    }
  }, [router]);

  const mainCategories = categories.filter(
    (category) => !category.parentId
  );

  if (isLoading) {
    return (
      <main className="mx-auto w-full max-w-7xl px-3 py-6 sm:px-5 md:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground">
          در حال دریافت دسته‌بندی‌ها...
        </p>
      </main>
    );
  }

  if (error) {
    return (
      <div className="mx-auto w-full max-w-7xl px-3 py-6 sm:px-5 md:px-6 lg:px-8">
        <p className="text-center text-sm text-destructive">
          دریافت دسته‌بندی‌ها ناموفق بود.
        </p>
      </div>
    );
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-3 py-5 sm:px-5 sm:py-6 md:px-6 md:py-7 lg:px-8">
      <div className="mb-5 sm:mb-6">
        <h1 className="text-xl font-bold text-foreground">
          دسته‌بندی کالاها
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          دسته‌بندی موردنظرت رو انتخاب کن.
        </p>
      </div>
      <Link
        href="/products"
        className="mb-5 flex items-center justify-between rounded-xl border border-border bg-card p-3 transition-colors hover:border-primary sm:mt-6 sm:rounded-2xl sm:p-4"
      >
        <span className="flex items-center gap-3 text-sm font-medium text-foreground">
          <Package className="size-6 shrink-0 text-primary" />
          مشاهده همه محصولات
        </span>

        <ChevronLeft className="size-5 text-muted-foreground" />
      </Link>

      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-4">
        {mainCategories.map((category) => {
          const CategoryIcon = getCategoryIcon(
            category.slug,
            category.name
          );

          const children = categories.filter(
            (child) => child.parentId === category.id
          );

          return (
            <section
              key={category.id}
              className="flex min-w-0 flex-col rounded-xl border border-border bg-card p-3 sm:rounded-2xl sm:p-4"
            >
              <Link
                href={`/products?category=${category.slug}`}
                className="group flex min-w-0 items-center gap-2 border-b border-border pb-3"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground sm:size-10 sm:rounded-xl">
                  <CategoryIcon className="size-5" />
                </div>

                <h2 className="min-w-0 text-base font-bold text-foreground transition-colors group-hover:text-primary">
                  {category.name}
                </h2>
              </Link>

              <div className="mt-2 flex flex-col">
                {children.map((child) => (
                  <Link
                    key={child.id}
                    href={`/products?category=${child.slug}`}
                    className="flex min-w-0 items-center justify-between gap-1 rounded-lg px-1 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                  >
                    <span className="min-w-0">{child.name}</span>
                    <ChevronLeft className="size-3.5 shrink-0" />
                  </Link>
                ))}
              </div>

              <Link
                href={`/products?category=${category.slug}`}
                className="mt-auto flex items-center justify-center gap-1 border-t border-border pt-3 text-xs font-medium text-primary"
              >
                مشاهده همه
                <ChevronLeft className="size-3.5" />
              </Link>
            </section>
          );
        })}
      </div>
    </main>
  );
}
