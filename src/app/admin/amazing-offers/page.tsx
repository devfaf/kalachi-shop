"use client";

import { useEffect, useState } from "react";
import { Save, Sparkles } from "lucide-react";
import { Clock, CalendarDays, RefreshCw } from "lucide-react";

function formatDateTimeLocal(date: string | Date) {
    const value = new Date(date);
    const offset = value.getTimezoneOffset() * 60000;

    return new Date(value.getTime() - offset)
        .toISOString()
        .slice(0, 16);
}

export default function AmazingOffersPage() {
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState("شگفت‌انگیز کالاچی");
    const [startsAt, setStartsAt] = useState("");
    const [durationHours, setDurationHours] = useState(12);
    const [isActive, setIsActive] = useState(true);
    const [autoRenew, setAutoRenew] = useState(false);
    const [pendingChange, setPendingChange] = useState<{
        type: "active" | "autoRenew";
        value: boolean;
    } | null>(null);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");

    function requestToggleChange(
        type: "active" | "autoRenew",
        value: boolean
    ) {
        setPendingChange({ type, value });
    }

    function confirmToggleChange() {
        if (!pendingChange) return;

        if (pendingChange.type === "active") {
            setIsActive(pendingChange.value);
        } else {
            setAutoRenew(pendingChange.value);
        }

        setPendingChange(null);
    }

    async function handleSave() {
        setSaving(true);
        setMessage("");

        try {
            const response = await fetch(
                "/api/admin/amazing-offers/campaign",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        startsAt,
                        durationHours,
                        isActive,
                        autoRenew,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "ذخیره تنظیمات ناموفق بود.");
            }

            setMessage("تنظیمات کمپین با موفقیت ذخیره شد.");
        } catch (error) {
            setMessage(
                error instanceof Error
                    ? error.message
                    : "خطایی هنگام ذخیره رخ داد."
            );
        } finally {
            setSaving(false);
        }
    }

    useEffect(() => {
        async function fetchCampaign() {
            try {
                const response = await fetch(
                    "/api/admin/amazing-offers/campaign"
                );

                if (!response.ok) {
                    throw new Error("دریافت اطلاعات کمپین ناموفق بود.");
                }

                const data = await response.json();
                if (data) {
                    setName(data.name);
                    setStartsAt(formatDateTimeLocal(data.startsAt));
                    setDurationHours(data.durationHours);
                    setIsActive(data.isActive);
                    setAutoRenew(data.autoRenew);
                } else {
                    setStartsAt(formatDateTimeLocal(new Date()));
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchCampaign();
    }, []);

    if (loading) {
        return <p className="text-sm text-[var(--muted-foreground)]">در حال دریافت اطلاعات...</p>;
    }

    return (
        <main className="space-y-6">
            <div>
                <div className="mb-2 flex items-center gap-2 text-[var(--primary)]">
                    <Sparkles size={20} />
                    <span className="text-sm font-medium">مدیریت کمپین</span>
                </div>

                <h1 className="text-2xl font-bold text-[var(--foreground)]">
                    کمپین شگفت‌انگیز کالاچی
                </h1>

                <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                    تنظیم زمان، وضعیت و تمدید کمپین فروش ویژه
                </p>
            </div>

            <section className="max-w-3xl rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 sm:p-6">
                <div className="mb-6 flex items-center gap-2">
                    <Sparkles size={20} className="text-[var(--primary)]" />
                    <h2 className="font-semibold text-[var(--foreground)]">
                        تنظیمات کمپین
                    </h2>
                </div>

                <div className="space-y-5">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                            نام کمپین
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
                        />
                    </div>

                    <div>
                        <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[var(--foreground)]">
                            <CalendarDays size={16} />
                            زمان شروع کمپین
                        </label>
                        <input
                            type="datetime-local"
                            value={startsAt}
                            onChange={(e) => setStartsAt(e.target.value)}
                            className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
                        />
                    </div>

                    <div>
                        <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[var(--foreground)]">
                            <Clock size={16} />
                            مدت کمپین
                        </label>
                        <select
                            value={durationHours}
                            onChange={(e) => setDurationHours(Number(e.target.value))}
                            className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
                        >
                            <option value={12}>۱۲ ساعت</option>
                            <option value={24}>۲۴ ساعت</option>
                            <option value={48}>۴۸ ساعت</option>
                            <option value={72}>۷۲ ساعت</option>
                        </select>
                    </div>

                    <div className="space-y-4 border-t border-[var(--border)] pt-5">
                        <label className="flex cursor-pointer items-center justify-between gap-4">
                            <div>
                                <p className="text-sm font-medium text-[var(--foreground)]">
                                    فعال بودن کمپین
                                </p>
                                <p className="mt-1 text-xs text-[var(--muted-foreground)]">
                                    نمایش یا توقف کمپین در فروشگاه
                                </p>
                            </div>
                            <input
                                type="checkbox"
                                checked={isActive}
                                onChange={(e) =>
                                    requestToggleChange("active", e.target.checked)
                                }
                                className="size-5 accent-[var(--primary)]"
                            />
                        </label>

                        <label className="flex cursor-pointer items-center justify-between gap-4">
                            <div>
                                <p className="flex items-center gap-2 text-sm font-medium text-[var(--foreground)]">
                                    <RefreshCw size={16} />
                                    تمدید خودکار
                                </p>
                                <p className="mt-1 text-xs text-[var(--muted-foreground)]">
                                    شروع مجدد کمپین پس از پایان زمان آن
                                </p>
                            </div>
                            <input
                                type="checkbox"
                                checked={autoRenew}
                                onChange={(e) =>
                                    requestToggleChange("autoRenew", e.target.checked)
                                }
                                className="size-5 accent-[var(--primary)]"
                            />
                        </label>
                    </div>
                </div>
                <div className="mt-6 border-t border-[var(--border)] pt-5">
                    {message && (
                        <p className="mb-4 text-sm text-green-600 dark:text-green-400">
                            {message}
                        </p>
                    )}

                    <button
                        type="button"
                        onClick={handleSave}
                        disabled={saving}
                        className="flex items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <Save size={18} />
                        {saving ? "در حال ذخیره..." : "ذخیره تنظیمات"}
                    </button>
                </div>
            </section>
            {pendingChange && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="w-full max-w-sm rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-xl">
                        <h3 className="text-lg font-bold text-[var(--foreground)]">
                            تایید تغییر تنظیمات
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
                            آیا از{" "}
                            {pendingChange.value ? "فعال کردن" : "غیرفعال کردن"}{" "}
                            {pendingChange.type === "active"
                                ? "کمپین"
                                : "تمدید خودکار کمپین"}{" "}
                            اطمینان دارید؟
                        </p>

                        <div className="mt-6 flex gap-3">
                            <button
                                type="button"
                                onClick={() => setPendingChange(null)}
                                className="flex-1 rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm text-[var(--foreground)] transition hover:bg-[var(--muted)]"
                            >
                                انصراف
                            </button>

                            <button
                                type="button"
                                onClick={confirmToggleChange}
                                className="flex-1 rounded-xl bg-[var(--primary)] px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
                            >
                                تایید
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}