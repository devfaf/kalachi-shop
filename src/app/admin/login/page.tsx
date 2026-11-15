"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LockKeyhole, Mail } from "lucide-react";
import { createClient } from "@/lib/supabase-browser";

export default function AdminLoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();
    const supabase = createClient();

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setLoading(true);
        setErrorMessage("");

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                setErrorMessage("ایمیل یا رمز عبور اشتباه است.");
                return;
            }

            router.replace("/admin");
            router.refresh();
        } catch {
            setErrorMessage("خطایی در ورود رخ داد. لطفا دوباره تلاش کنید.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-[var(--background)] p-4">
            <div className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm">
                <div className="mb-8 text-center">
                    <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
                        <LockKeyhole size={26} />
                    </div>

                    <h1 className="text-2xl font-bold text-[var(--foreground)]">
                        ورود به پنل مدیریت
                    </h1>

                    <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                        برای ادامه، اطلاعات حساب خود را وارد کنید.
                    </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                            ایمیل
                        </label>

                        <div className="relative">
                            <Mail
                                size={18}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]"
                            />

                            <input
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="example@email.com"
                                dir="ltr"
                                className="w-full rounded-lg border border-[var(--border)] bg-transparent py-3 pl-3 pr-10 text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                            رمز عبور
                        </label>

                        <input
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder="رمز عبور خود را وارد کنید"
                            dir="ltr"
                            className="w-full rounded-lg border border-[var(--border)] bg-transparent px-3 py-3 text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
                        />
                    </div>
                    {errorMessage && (
                        <p className="rounded-lg bg-red-500/10 p-3 text-sm text-red-500">
                            {errorMessage}
                        </p>
                    )}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-lg bg-[var(--primary)] py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {loading ? "در حال ورود..." : "ورود به پنل"}
                    </button>
                </form>
            </div>
        </main>
    );
}