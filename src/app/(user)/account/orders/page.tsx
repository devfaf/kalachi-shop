
import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase-server";
import { prisma } from "@/lib/prisma";
import { Package, ExternalLink, Store } from "lucide-react";

export default async function OrdersPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const orders = await prisma.order.findMany({
    where: {
      userId: user.id,
    },
    include: {
      items: {
        include: {
          product: {
            select: {
              persianName: true,
              slug: true,
              images: {
                take: 1,
                orderBy: {
                  sortOrder: "asc",
                },
              },
            },
          },
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const statusLabels = {
    PENDING: "در انتظار پرداخت",
    PROCESSING: "پرداخت موفق · در حال پردازش",
    SHIPPED: "ارسال شده",
    DELIVERED: "تحویل شده",
    CANCELLED: "لغو شده",
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">
            سفارش‌های من
          </h1>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">
            فهرست سفارش‌هایی که ثبت کرده‌ای.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          <Store size={18} />
          رفتن به فروشگاه
        </Link>
      </div>

      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--card)] px-6 py-16 text-center">
          <Package size={40} className="mb-4 text-[var(--muted-foreground)]" />
          <h2 className="font-semibold text-[var(--foreground)]">
            هنوز سفارشی ثبت نکرده‌ای
          </h2>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">
            بعد از ثبت سفارش، اطلاعات آن را اینجا مشاهده می‌کنی.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <section
              key={order.id}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-4">
                <div>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    شماره سفارش
                  </p>
                  <p className="mt-1 text-sm font-medium text-[var(--foreground)]">
                    {order.id}
                  </p>
                </div>

                <span
                  className={`rounded-lg px-3 py-2 text-xs font-medium ${
                    order.status === "PROCESSING"
                      ? "bg-green-500/10 text-green-600 dark:text-green-400"
                      : order.status === "CANCELLED"
                        ? "bg-red-500/10 text-red-600 dark:text-red-400"
                        : order.status === "DELIVERED"
                          ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                          : "bg-[var(--accent)] text-[var(--primary)]"
                  }`}
                >
                  {statusLabels[order.status]}
                </span>
              </div>

              <div className="space-y-4 py-4">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-wrap items-center justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <Link
                        href={`/products/${item.product.slug}`}
                        className="text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--primary)]"
                      >
                        {item.product.persianName}
                      </Link>

                      <p className="mt-1 text-xs text-[var(--muted-foreground)]">
                        تعداد: {item.quantity}
                      </p>
                    </div>

                    <div className="flex shrink-0 flex-col items-end gap-2">
                      <span className="text-sm text-[var(--muted-foreground)]">
                        {(item.price * item.quantity).toLocaleString("fa-IR")} تومان
                      </span>

                      <Link
                        href={`/products/${item.product.slug}`}
                        className="flex items-center gap-1 text-xs font-medium text-[var(--primary)] hover:opacity-75"
                      >
                        <ExternalLink size={13} />
                        مشاهده محصول
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border)] pt-4">
                <span className="text-xs text-[var(--muted-foreground)]">
                  {new Date(order.createdAt).toLocaleDateString("fa-IR")}
                </span>
                <p className="text-sm font-bold text-[var(--foreground)]">
                  مبلغ کل: {order.total.toLocaleString("fa-IR")} تومان
                </p>
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
