
"use client";

import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    Minus,
    Plus,
    ShoppingBag,
    Trash2,
} from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";

function formatPrice(price: number) {
    return price.toLocaleString("fa-IR") + " تومان";
}

export default function CartPage() {
    const router = useRouter();

    const items = useCartStore((state) => state.items);
    const increaseQuantity = useCartStore((state) => state.increaseQuantity);
    const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
    const removeItem = useCartStore((state) => state.removeItem);

    const totalItems = items.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const originalTotal = items.reduce(
        (total, item) =>
            total + item.product.purchasePanel.originalPrice * item.quantity,
        0
    );

    const finalTotal = items.reduce(
        (total, item) =>
            total +
            (item.product.purchasePanel.finalPrice ??
                item.product.purchasePanel.originalPrice) *
            item.quantity,
        0
    );

    const discount = originalTotal - finalTotal;

    if (items.length === 0) {
        return (
            <main className="min-h-screen bg-[var(--background)] px-4 py-16">
                <div className="mx-auto flex max-w-xl flex-col items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--card)] px-6 py-16 text-center">
                    <ShoppingBag
                        size={56}
                        className="mb-5 text-[var(--muted-foreground)]"
                    />

                    <h1 className="mb-3 text-xl font-bold">
                        سبد خرید شما خالی است
                    </h1>

                    <p className="mb-7 text-sm text-[var(--muted-foreground)]">
                        هنوز محصولی به سبد خرید خود اضافه نکرده‌اید.
                    </p>

                    <Link
                        href="/"
                        className="rounded-xl bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    >
                        مشاهده محصولات
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[var(--background)] px-4 py-8 pb-36 lg:pb-8">
            <div className="mx-auto max-w-7xl">

                {/* عنوان صفحه */}
                <div className="mb-8 flex items-center justify-start gap-4">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="group flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-[var(--muted-foreground)] transition-all duration-200 hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] active:scale-95"
                    >
                        <ArrowRight
                            size={18}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                        بازگشت
                    </button>

                    <h1 className="text-2xl font-bold">
                        سبد خرید
                    </h1>
                </div>

                {/* محصولات و خلاصه سفارش */}
                <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_340px]">

                    {/* لیست محصولات */}
                    <section className="space-y-4">

                        {items.map((item) => {
                            const product = item.product;

                            const originalPrice =
                                product.purchasePanel.originalPrice;

                            const finalPrice =
                                product.purchasePanel.finalPrice ?? originalPrice;

                            const hasDiscount = finalPrice < originalPrice;

                            return (
                                <div
                                    key={product.id}
                                    className="flex flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 sm:flex-row"
                                >
                                    {/* تصویر محصول */}
                                    <Link
                                        href={`/products/${product.slug}`}
                                        className="flex h-32 w-full shrink-0 items-center justify-center rounded-xl bg-[var(--background)] sm:w-32"
                                    >
                                        {product.images[0] && (
                                            <img
                                                src={product.images[0]}
                                                alt={product.info.persianName}
                                                className="h-full w-full rounded-xl object-contain"
                                            />
                                        )}
                                    </Link>

                                    {/* اطلاعات محصول */}
                                    <div className="flex min-w-0 flex-1 flex-col justify-between gap-4">
                                        <div>
                                            <Link
                                                href={`/products/${product.slug}`}
                                                className="font-semibold transition-colors hover:text-[var(--primary)]"
                                            >
                                                {product.info.persianName}
                                            </Link>

                                            {product.info.englishName && (
                                                <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                                                    {product.info.englishName}
                                                </p>
                                            )}
                                        </div>

                                        <div className="flex flex-wrap items-center justify-between gap-4">

                                            {/* کنترل تعداد */}
                                            <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] px-3 py-2">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        increaseQuantity(product.id)
                                                    }
                                                    disabled={
                                                        item.quantity >=
                                                        product.purchasePanel.stock
                                                    }
                                                    className="text-[var(--foreground)] transition-colors hover:text-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-30"
                                                    aria-label="افزایش تعداد"
                                                >
                                                    <Plus size={17} />
                                                </button>

                                                <span className="min-w-5 text-center text-sm font-semibold">
                                                    {item.quantity.toLocaleString("fa-IR")}
                                                </span>

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        decreaseQuantity(product.id)
                                                    }
                                                    disabled={item.quantity <= 1}
                                                    className="text-[var(--foreground)] transition-colors hover:text-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-30"
                                                    aria-label="کاهش تعداد"
                                                >
                                                    <Minus size={17} />
                                                </button>
                                            </div>

                                            {/* قیمت و حذف */}
                                            <div className="flex items-center gap-4">
                                                <div className="text-left">
                                                    {hasDiscount && (
                                                        <p className="text-xs text-[var(--muted-foreground)] line-through">
                                                            {formatPrice(originalPrice * item.quantity)}
                                                        </p>
                                                    )}

                                                    <p className="font-bold">
                                                        {formatPrice(finalPrice * item.quantity)}
                                                    </p>
                                                </div>

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        removeItem(product.id)
                                                    }
                                                    className="rounded-lg p-2 text-[var(--muted-foreground)] transition-colors hover:bg-[var(--destructive)]/10 hover:text-[var(--destructive)]"
                                                    aria-label="حذف محصول"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        {/* خلاصه سفارش موبایل و تبلت */}
                        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 lg:hidden">
                            <h2 className="mb-5 text-lg font-bold">
                                خلاصه سفارش
                            </h2>

                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-[var(--muted-foreground)]">
                                        تعداد محصولات
                                    </span>
                                    <span className="font-medium">
                                        {totalItems.toLocaleString("fa-IR")} عدد
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-[var(--muted-foreground)]">
                                        قیمت محصولات
                                    </span>
                                    <span>
                                        {formatPrice(originalTotal)}
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-[var(--muted-foreground)]">
                                        تخفیف
                                    </span>
                                    <span className="font-medium text-green-600">
                                        {formatPrice(discount)}
                                    </span>
                                </div>

                                <div className="border-t border-[var(--border)] pt-4">
                                    <div className="flex justify-between font-bold">
                                        <span>مبلغ قابل پرداخت</span>
                                        <span className="text-[var(--primary)]">
                                            {formatPrice(finalTotal)}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <Link
                                href="/checkout"
                                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-5 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                            >
                                ادامه فرایند خرید
                                <ArrowLeft size={17} />
                            </Link>
                        </div>
                    </section>

                    {/* خلاصه سفارش دسکتاپ */}
                    <aside className="hidden lg:sticky lg:top-24 lg:block">
                        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
                            <h2 className="mb-6 text-lg font-bold">
                                خلاصه سفارش
                            </h2>

                            <div className="space-y-5 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-[var(--muted-foreground)]">
                                        تعداد محصولات
                                    </span>
                                    <span className="font-medium">
                                        {totalItems.toLocaleString("fa-IR")} عدد
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-[var(--muted-foreground)]">
                                        قیمت محصولات
                                    </span>
                                    <span>
                                        {formatPrice(originalTotal)}
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-[var(--muted-foreground)]">
                                        تخفیف
                                    </span>
                                    <span className="font-medium text-green-600">
                                        {formatPrice(discount)}
                                    </span>
                                </div>

                                <div className="border-t border-[var(--border)] pt-5">
                                    <div className="flex justify-between font-bold">
                                        <span>مبلغ قابل پرداخت</span>
                                        <span className="text-[var(--primary)]">
                                            {formatPrice(finalTotal)}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <Link
                                href="/checkout"
                                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-5 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                            >
                                ادامه فرایند خرید
                                <ArrowLeft size={17} />
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>

            {/* نوار پرداخت موبایل و تبلت */}
            <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--border)] bg-[var(--card)] p-4 shadow-lg lg:hidden">
                <div className="mx-auto flex max-w-7xl items-center gap-4">

                    <Link
                        href="/checkout"
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    >
                        ادامه خرید
                        <ArrowLeft size={17} />
                    </Link>

                    <div className="shrink-0">
                        <p className="mb-1 text-xs text-[var(--muted-foreground)]">
                            مبلغ قابل پرداخت
                        </p>

                        <p className="whitespace-nowrap font-bold text-black dark:text-white">
                            {formatPrice(finalTotal)}
                        </p>
                    </div>

                </div>
            </div>
        </main>
    );
}
