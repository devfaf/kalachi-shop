
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  LayoutGrid,
  ShoppingCart,
  Heart,
  User,
} from "lucide-react";

import { useCartStore } from "@/store/cartStore";

const MobileNav = () => {
  const pathname = usePathname();
  const itemsCount = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  const items = [
    { label: "خانه", icon: Home, href: "/" },
    { label: "دسته‌بندی", icon: LayoutGrid, href: "/categories" },
    {
      label: "سبد خرید",
      icon: ShoppingCart,
      href: "/cart",
      badge: itemsCount,
    },
    { label: "علاقه‌مندی", icon: Heart, href: "#" },
    { label: "پروفایل", icon: User, href: "/account" },
  ];

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 lg:hidden">
      <div className="mx-auto max-w-md px-3 pb-3">
        <div className="flex items-center justify-around rounded-2xl border border-border bg-card/90 px-1 py-2 shadow-lg backdrop-blur-lg">
          {items.map(({ label, icon: Icon, href, badge }) => {
            const isActive =
              href !== "#" &&
              (pathname === href ||
                (href !== "/" && pathname.startsWith(`${href}/`)));

            return (
              <Link
                key={label}
                href={href}
                className={`group relative flex flex-col items-center gap-1 rounded-xl px-3 py-2 transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                <div className="relative">
                  <Icon
                    className="h-5 w-5 transition-transform group-hover:scale-110"
                    strokeWidth={2}
                  />

                  {badge ? (
                    <span className="absolute -right-2 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
                      {badge}
                    </span>
                  ) : null}
                </div>

                <span className="text-[10px] font-medium leading-none">
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
