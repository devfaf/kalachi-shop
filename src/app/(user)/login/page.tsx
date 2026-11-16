
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, LockKeyhole, Mail, UserRound } from "lucide-react";
import { createClient } from "@/lib/supabase-browser";

type AuthMode = "login" | "signup";

export default function UserLoginPage() {
    const [mode, setMode] = useState<AuthMode>("login");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();
    const supabase = createClient();

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    function changeMode(newMode: AuthMode) {
        setMode(newMode);
        setErrorMessage("");
        setSuccessMessage("");
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setLoading(true);
        setErrorMessage("");
        setSuccessMessage("");

        try {
            if (mode === "signup") {
                const { data, error } = await supabase.auth.signUp({
                    email: email.trim(),
                    password,
                    options: {
                        data: {
                            name: name.trim(),
                        },
                    },
                });

                if (error) {
                    if (
                        error.message.toLowerCase().includes("already registered") ||
                        error.message.toLowerCase().includes("already been registered")
                    ) {
                        setErrorMessage("این ایمیل قبلا ثبت‌نام کرده است.");
                    } else {
                        setErrorMessage(error.message);
                    }
                    return;
                }

                if (data.session) {
                    router.replace("/");
                    router.refresh();
                    return;
                }

                setSuccessMessage("ثبت‌نام انجام شد. لطفا وارد حساب خود شوید.");
                setMode("login");
                setPassword("");
                return;
            }

            const { error } = await supabase.auth.signInWithPassword({
                email: email.trim(),
                password,
            });

            if (error) {
                setErrorMessage("ایمیل یا رمز عبور اشتباه است.");
                return;
            }

            router.replace("/");
            router.refresh();
        } catch {
            setErrorMessage("خطایی رخ داد. لطفا دوباره تلاش کنید.");
        } finally {
            setLoading(false);
        }
    }

    const isSignup = mode === "signup";

    return (
        <main className="relative flex min-h-screen items-center justify-center bg-[var(--background)] p-4">
<button
    type="button"
    onClick={() => router.back()}
    aria-label="بازگشت"
    className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] transition-colors hover:bg-[var(--muted)] sm:right-6 sm:top-6"
>
    <ArrowRight size={20} />
</button>

            <div className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm sm:p-8">
                <div className="mb-8 text-center">
                    <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
                        {isSignup ? (
                            <UserRound size={26} />
                        ) : (
                            <LockKeyhole size={26} />
                        )}
                    </div>

                    <h1 className="text-2xl font-bold text-[var(--foreground)]">
                        {isSignup ? "ساخت حساب کاربری" : "ورود به حساب کاربری"}
                    </h1>

                    <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                        {isSignup
                            ? "برای ساخت حساب، اطلاعات خود را وارد کنید."
                            : "برای ادامه خرید، وارد حساب کاربری خود شوید."}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {isSignup && (
                        <div>
                            <label className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                                نام و نام خانوادگی
                            </label>

                            <div className="relative">
                                <UserRound
                                    size={18}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]"
                                />

                                <input
                                    type="text"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    placeholder="نام خود را وارد کنید"
                                    required
                                    minLength={2}
                                    className="w-full rounded-lg border border-[var(--border)] bg-transparent py-3 pl-3 pr-10 text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
                                />
                            </div>
                        </div>
                    )}

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
                                required
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
                            required
                            minLength={6}
                            className="w-full rounded-lg border border-[var(--border)] bg-transparent px-3 py-3 text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
                        />

                        {isSignup && (
                            <p className="mt-2 text-xs text-[var(--muted-foreground)]">
                                رمز عبور باید حداقل ۶ کاراکتر باشد.
                            </p>
                        )}
                    </div>

                    {errorMessage && (
                        <p className="rounded-lg bg-red-500/10 p-3 text-sm text-red-500">
                            {errorMessage}
                        </p>
                    )}

                    {successMessage && (
                        <p className="rounded-lg bg-green-500/10 p-3 text-sm text-green-600">
                            {successMessage}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-lg bg-[var(--primary)] py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {loading
                            ? "لطفا صبر کنید..."
                            : isSignup
                                ? "ثبت‌نام"
                                : "ورود به حساب"}
                    </button>
                </form>

                <div className="mt-6 border-t border-[var(--border)] pt-5 text-center text-sm">
                    <span className="text-[var(--muted-foreground)]">
                        {isSignup
                            ? "قبلا حساب ساخته‌اید؟"
                            : "هنوز حساب کاربری ندارید؟"}
                    </span>

                    <button
                        type="button"
                        onClick={() => changeMode(isSignup ? "login" : "signup")}
                        className="mr-2 font-semibold text-[var(--primary)] hover:opacity-80"
                    >
                        {isSignup ? "ورود" : "ثبت‌نام"}
                    </button>
                </div>
            </div>
        </main>
    );
}
