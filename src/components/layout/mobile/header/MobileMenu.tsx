
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  X,
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
} from "lucide-react";

import { navItems } from "@/data/navItems";
import { useCategories } from "@/hooks/use-categories";
import Logo from "../../header/Logo";

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
    normalizedName.includes("لپ‌تاپ") ||
    normalizedName.includes("لپ تاپ")
  ) {
    return Laptop;
  }

  return categoryIcons[slug] ?? Package;
};

type MobileMenuProps = {
  onClose: () => void;
};

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  const { categories, isLoading, error } = useCategories();

  const mainCategories = categories.filter(
    (category) => !category.parentId
  );

  const [isCategoryMenuExpanded, setIsCategoryMenuExpanded] =
    useState(false);

  const [expandedCategoryId, setExpandedCategoryId] =
    useState<string | null>(null);

  return (
    <div className="flex h-full w-full flex-col">
      <div className="relative flex h-20 shrink-0 items-center border-b border-border px-4">
        <Logo />

        <button
          type="button"
          onClick={onClose}
          aria-label="بستن منو"
          className="absolute left-3 top-0 flex size-9 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted hover:text-primary mt-2"
        >
          <X size={22} />
        </button>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden">
        <nav className="flex flex-col">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isCategoryMenu = item.label === "دسته‌بندی کالاها";

            if (isCategoryMenu) {
              return (
                <div key={item.label} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() =>
                      setIsCategoryMenuExpanded((prev) => !prev)
                    }
                    aria-expanded={isCategoryMenuExpanded}
                    className="flex w-full items-center justify-between px-4 py-4 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
                  >
                    <span className="flex items-center gap-2">
                      {Icon ? <Icon size={24} /> : null}
                      {item.label}
                    </span>

                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        isCategoryMenuExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isCategoryMenuExpanded && (
                    <>
                      {isLoading ? (
                        <p className="px-4 pb-4 text-xs text-muted-foreground">
                          در حال دریافت دسته‌بندی‌ها...
                        </p>
                      ) : error ? (
                        <p className="px-4 pb-4 text-xs text-destructive">
                          دریافت دسته‌بندی‌ها ناموفق بود.
                        </p>
                      ) : (
                        <div className="flex flex-col pb-2">
                          <Link
                            href="/products"
                            onClick={onClose}
                            className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
                          >
                            <Package size={19} />
                            مشاهده همه محصولات
                          </Link>

                          {mainCategories.map((category) => {
                            const isCategoryExpanded =
                              expandedCategoryId === category.id;

                            const CategoryIcon = getCategoryIcon(
                              category.slug,
                              category.name
                            );

                            const children = categories.filter(
                              (child) => child.parentId === category.id
                            );

                            return (
                              <div key={category.id}>
                                <button
                                  type="button"
                                  onClick={() =>
                                    setExpandedCategoryId(
                                      isCategoryExpanded ? null : category.id
                                    )
                                  }
                                  aria-expanded={isCategoryExpanded}
                                  className="flex w-full items-center justify-between px-4 py-3 text-sm text-foreground transition-colors hover:bg-muted hover:text-primary"
                                >
                                  <span className="flex items-center gap-2">
                                    <CategoryIcon size={19} />
                                    {category.name}
                                  </span>

                                  <ChevronDown
                                    size={16}
                                    className={`transition-transform ${
                                      isCategoryExpanded ? "rotate-180" : ""
                                    }`}
                                  />
                                </button>

                                {isCategoryExpanded && (
                                  <div className="mr-4 flex flex-col border-r border-border py-1">
                                    <Link
                                      href={`/products?category=${category.slug}`}
                                      onClick={onClose}
                                      className="px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-muted hover:text-primary"
                                    >
                                      مشاهده همه
                                    </Link>

                                    {children.map((child) => {

                                      return (
                                        <Link
                                          key={child.id}
                                          href={`/products?category=${child.slug}`}
                                          onClick={onClose}
                                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                                        >
                                          {child.name}
                                        </Link>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href ?? "#"}
                onClick={onClose}
                className="flex items-center gap-1.5 border-b border-border px-4 py-4 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {Icon ? <Icon size={24} /> : null}
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
