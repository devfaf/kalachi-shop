
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { toPersianNumber } from "@/lib/utils/farsiNumbers";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2, Plus, Minus, Info, ArrowRight } from "lucide-react";

export default function Page() {
  const items = useCartStore((state) => state.items);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const totalPrice = useCartStore((state) => state.getTotalPrice());

  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isPaymentLimitError, setIsPaymentLimitError] = useState(false);

  async function handleSubmitOrder() {
    if (isSubmitting || items.length === 0) return;

    setIsSubmitting(true);
    setErrorMessage("");
    setIsPaymentLimitError(false);

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: items.map(({ product, quantity }) => ({
            productId: product.id,
            quantity,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          router.push("/login?next=/checkout");
          return;
        }

        if (data.error === "PAYMENT_LIMIT_EXCEEDED") {
          setIsPaymentLimitError(true);
          setErrorMessage(
            "مبلغ سفارش از سقف پرداخت آنلاین بیشتر است. لطفا سفارش خود را به چند سفارش جداگانه با مبلغ کمتر از ۲۰۰ میلیون تومان تقسیم کنید."
          );
          return;
        }

        throw new Error(data.error || "ثبت سفارش انجام نشد.");
      }

      if (!data.paymentUrl) {
        throw new Error("آدرس درگاه پرداخت دریافت نشد.");
      }

      window.location.assign(data.paymentUrl);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "خطایی در ثبت سفارش رخ داد."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-xl font-bold text-foreground">
          سبد خرید شما خالی است
        </h1>
        <p className="text-sm text-muted-foreground">
          برای ثبت سفارش ابتدا محصولی به سبد خرید اضافه کنید.
        </p>
        <Link
          href="/"
          className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
        >
          بازگشت به فروشگاه
        </Link>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 text-foreground">
      <div className="mb-8 flex items-center gap-3">
        <button
          type="button"
          onClick={() => router.back()}
          className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border transition-colors hover:bg-muted"
          aria-label="بازگشت به صفحه قبل"
        >
          <ArrowRight size={20} />
        </button>

        <h1 className="text-2xl font-bold">تکمیل سفارش</h1>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
        <section className="space-y-4">
          <h2 className="text-lg font-semibold">محصولات سفارش</h2>

          {items.map(({ product, quantity }) => {
            const price =
              product.purchasePanel.finalPrice ??
              product.purchasePanel.originalPrice;

            return (
              <article
                key={product.id}
                className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-center"
              >
                <Image
                  src={product.images[0]}
                  alt={product.info.persianName}
                  width={100}
                  height={100}
                  className="size-24 rounded-lg object-contain"
                />

                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold">
                    {product.info.persianName}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {toPersianNumber(price)} تومان
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => increaseQuantity(product.id)}
                    disabled={quantity >= product.purchasePanel.stock}
                    className="flex size-8 items-center justify-center rounded-lg border border-border transition-colors hover:bg-primary/10 disabled:opacity-40"
                    aria-label="افزایش تعداد"
                  >
                    <Plus size={16} />
                  </button>

                  <span className="min-w-5 text-center">
                    {toPersianNumber(quantity)}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      quantity === 1
                        ? removeItem(product.id)
                        : decreaseQuantity(product.id)
                    }
                    className="flex size-8 items-center justify-center rounded-lg border border-border text-red-500 transition-colors hover:bg-red-500/10"
                    aria-label={quantity === 1 ? "حذف محصول" : "کاهش تعداد"}
                  >
                    {quantity === 1 ? <Trash2 size={16} /> : <Minus size={16} />}
                  </button>
                </div>
              </article>
            );
          })}
        </section>

        <aside className="h-fit rounded-xl border border-border bg-card p-5">
          <h2 className="mb-5 text-lg font-bold">صورتحساب</h2>

          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">تعداد کالا</span>
            <span>
              {toPersianNumber(
                items.reduce((total, item) => total + item.quantity, 0)
              )}
            </span>
          </div>

          <div className="my-4 border-t border-border" />

          <div className="flex justify-between gap-3 font-bold">
            <span>مبلغ قابل پرداخت</span>
            <span className="text-primary">
              {toPersianNumber(totalPrice)} تومان
            </span>
          </div>

          {errorMessage && (
            <div
              role="alert"
              className={`mt-4 flex items-start gap-2 rounded-lg p-3 text-sm ${isPaymentLimitError
                  ? "border border-blue-500/20 bg-blue-500/5 text-foreground"
                  : "border border-red-500/20 bg-red-500/5 text-red-500"
                }`}
            >
              {isPaymentLimitError && (
                <Info
                  size={18}
                  className="mt-0.5 shrink-0 text-blue-500"
                />
              )}
              <p>{errorMessage}</p>
            </div>
          )}

          <button
            type="button"
            onClick={handleSubmitOrder}
            disabled={isSubmitting || items.length === 0}
            className="mt-6 w-full rounded-lg bg-primary py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "در حال ثبت سفارش..." : "ثبت نهایی سفارش"}
          </button>
        </aside>
      </div>
    </main>
  );
}
