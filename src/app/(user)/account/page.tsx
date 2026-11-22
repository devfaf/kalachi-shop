
import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  UserRound,
  ShoppingBag,
} from "lucide-react";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase-server";
import { prisma } from "@/lib/prisma";

export default async function AccountPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const purchaseCount = await prisma.order.count({
    where: {
      userId: user.id,
      status: {
        in: ["PROCESSING", "SHIPPED", "DELIVERED"],
      },
    },
  });

  const sections = [
    {
      title: "تعداد خریدهای موفق",
      description: "تعداد سفارش‌هایی که با موفقیت پرداخت کرده‌ای",
      value: purchaseCount.toLocaleString("fa-IR"),
      icon: ShoppingBag,
      iconStyle: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    },
    {
      title: "سفارش‌های من",
      description: "مشاهده وضعیت و جزئیات سفارش‌های ثبت‌شده",
      icon: Package,
      href: "/account/orders",
      iconStyle: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    },
    {
      title: "اطلاعات حساب",
      description: "مشاهده و ویرایش اطلاعات حساب کاربری",
      icon: UserRound,
      href: "/account/profile",
      iconStyle: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
    },
  ];

  return (
    <main className="space-y-8">
      <div>
        <div className="mb-2 flex items-center gap-2 text-[var(--primary)]">
          <LayoutDashboard size={20} />
          <span className="text-sm font-medium">داشبورد</span>
        </div>

        <h1 className="text-2xl font-bold text-[var(--foreground)]">
          پنل کاربری کالاچی
        </h1>

        <p className="mt-2 text-sm text-[var(--muted-foreground)]">
          از این بخش می‌تونی حساب کاربری و سفارش‌های خودت رو مدیریت کنی.
        </p>
      </div>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {sections.map(({ title, description, value, icon: Icon, href, iconStyle }) => {
          const content = (
            <>
              <div
                className={`mb-4 flex size-11 items-center justify-center rounded-xl ${iconStyle}`}
              >
                <Icon size={22} />
              </div>

              <h2 className="font-semibold text-[var(--foreground)]">
                {title}
              </h2>

              {value !== undefined ? (
                <p className="mt-2 text-2xl font-bold tabular-nums text-[var(--foreground)]">
                  {value}
                </p>
              ) : (
                <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                  {description}
                </p>
              )}
            </>
          );

          return href ? (
            <Link
              key={href}
              href={href}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 transition-colors hover:bg-[var(--accent)]"
            >
              {content}
            </Link>
          ) : (
            <div
              key={title}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5"
            >
              {content}
            </div>
          );
        })}
      </section>
    </main>
  );
}
