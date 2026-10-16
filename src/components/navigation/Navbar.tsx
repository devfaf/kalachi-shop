"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { navItems } from "@/data/navItems";
import { useCategories } from "@/hooks/use-categories";
import { cn } from "cn";
import { ChevronLeftIcon, LayoutGrid } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const { categories, isLoading, error } = useCategories();

  // دسته والدِ در حال نمایش (اگر null باشد، اولین والد پیش‌فرض است)
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);

  const categoryParents = categories.filter((c) => !c.parentId);

  // اگر کاربر روی والدی hover نکرده، اولین والد پیش‌فرض انتخاب می‌شود
  const activeId = activeCategoryId ?? categoryParents[0]?.id ?? null;

  const activeCategory = categoryParents.find((c) => c.id === activeId) ?? null;

  const categoryChildren = categories.filter((c) => c.parentId === activeId);

  if (isLoading) return null;
  if (error) {
    console.error(error);
    return null;
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navItems.map((item) => {
          const isCategoryMenu = item.label === "دسته‌بندی کالاها";

          if (isCategoryMenu) {
            return (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>

                <NavigationMenuContent className="w-[640px] max-w-[90vw] p-0">
                  <div className="grid h-[420px] grid-cols-1 sm:grid-cols-[220px_1fr]">
                    {/* ───────── ستون دسته‌های والد ───────── */}
                    <ul className="flex flex-col gap-0.5 overflow-y-auto border-b border-border/60 p-2 sm:border-b-0 sm:border-e">
                      {categoryParents.map((category) => {
                        const isActive = category.id === activeId;
                        return (
                          <li key={category.id}>
                            <NavigationMenuLink
                              href={`/category/${category.slug}`}
                              onMouseEnter={() =>
                                setActiveCategoryId(category.id)
                              }
                              onFocus={() => setActiveCategoryId(category.id)}
                              className={cn(
                                "flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                                isActive
                                  ? "bg-primary/10 font-medium text-primary"
                                  : "text-foreground/80 hover:bg-muted hover:text-foreground"
                              )}
                            >
                              <span className="flex items-center gap-2">
                                <LayoutGrid
                                  className={cn(
                                    "size-4 shrink-0 transition-colors",
                                    isActive
                                      ? "text-primary"
                                      : "text-muted-foreground"
                                  )}
                                />
                                <span>{category.name}</span>
                              </span>
                              <ChevronLeftIcon
                                className={cn(
                                  "size-4 shrink-0 transition-transform",
                                  isActive
                                    ? "text-primary"
                                    : "text-muted-foreground/60"
                                )}
                                aria-hidden="true"
                              />
                            </NavigationMenuLink>
                          </li>
                        );
                      })}
                    </ul>

                    {/* ───────── ستون زیر‌دسته‌ها ───────── */}
                    <div className="flex flex-col overflow-hidden">
                      {activeCategory ? (
                        <>
                          <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
                            <h3 className="text-sm font-semibold text-foreground">
                              {activeCategory.name}
                            </h3>
                            <NavigationMenuLink
                              href={`/category/${activeCategory.slug}`}
                              className="rounded-md px-0 py-0 text-xs font-medium text-primary hover:underline focus-visible:ring-0"
                            >
                              مشاهده همه
                            </NavigationMenuLink>
                          </div>

                          <div className="flex-1 overflow-y-auto p-2">
                            {categoryChildren.length > 0 ? (
                              <div className="grid grid-cols-1 gap-0.5 sm:grid-cols-2">
                                {categoryChildren.map((sub) => (
                                  <NavigationMenuLink
                                    key={sub.id}
                                    href={`/category/${sub.slug}`}
                                    className="rounded-md px-3 py-2 text-sm text-foreground/75 transition-colors hover:bg-muted hover:text-foreground"
                                  >
                                    {sub.name}
                                  </NavigationMenuLink>
                                ))}
                              </div>
                            ) : (
                              <p className="px-3 py-6 text-center text-xs text-muted-foreground">
                                زیر‌دسته‌ای برای این دسته ثبت نشده است.
                              </p>
                            )}
                          </div>
                        </>
                      ) : (
                        <p className="m-auto px-4 text-center text-xs text-muted-foreground">
                          دسته‌ای برای نمایش وجود ندارد.
                        </p>
                      )}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }

          // سایر آیتم‌های نوار (بدون زیرمنو)
          return (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink href={item.href}>
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}