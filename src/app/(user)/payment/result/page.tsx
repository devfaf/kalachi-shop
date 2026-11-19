
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { toPersianNumber } from "@/lib/utils/farsiNumbers";

type PaymentStatus = "success" | "failed" | "error" | "loading";

export default function PaymentResultPage() {
    const clearCart = useCartStore((state) => state.clearCart);
    const [status, setStatus] = useState<PaymentStatus>("loading");
    const [orderId, setOrderId] = useState("");

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const paymentStatus = params.get("status");
        const id = params.get("orderId");

        if (paymentStatus === "success") {
            setStatus("success");
            if (id) setOrderId(id);
            clearCart();
        } else if (paymentStatus === "failed") {
            setStatus("failed");
        } else {
            setStatus("error");
        }
    }, [clearCart]);

    if (status === "loading") {
        return (
            <main className="flex min-h-[60vh] items-center justify-center">
                <p className="text-muted-foreground">در حال بررسی نتیجه پرداخت...</p>
            </main>
        );
    }

    const result = {
        success: {
            icon: <CheckCircle2 className="size-16 text-green-500" />,
            title: "پرداخت با موفقیت انجام شد",
            description: "سفارش شما ثبت شد و در حال پردازش است.",
        },
        failed: {
            icon: <XCircle className="size-16 text-red-500" />,
            title: "پرداخت ناموفق بود",
            description: "پرداخت انجام نشد یا توسط شما لغو شد. می‌توانید دوباره سفارش خود را ثبت کنید.",
        },
        error: {
            icon: <AlertCircle className="size-16 text-amber-500" />,
            title: "خطا در بررسی پرداخت",
            description: "بررسی نتیجه پرداخت با مشکل مواجه شد. لطفا وضعیت سفارش خود را بررسی کنید.",
        },
        loading: {
            icon: null,
            title: "",
            description: "",
        },
    }[status];

    return (
        <main className="flex min-h-[60vh] items-center justify-center px-4 py-12">
            <section className="flex w-full max-w-lg flex-col items-center rounded-2xl border border-border bg-card p-8 text-center">
                {result.icon}

                <h1 className="mt-5 text-xl font-bold text-foreground">
                    {result.title}
                </h1>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {result.description}
                </p>

                {orderId && (
                    <p className="mt-4 text-sm text-muted-foreground">
                        شماره سفارش: {toPersianNumber(orderId)}
                    </p>
                )}

                <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
                    <Link
                        href="/account/orders"
                        className="flex-1 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                        مشاهده سفارش‌ها
                    </Link>

                    <Link
                        href="/"
                        className="flex-1 rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                    >
                        بازگشت به فروشگاه
                    </Link>
                </div>
            </section>
        </main>
    );
}
