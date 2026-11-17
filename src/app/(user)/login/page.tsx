
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    ArrowRight,
    LockKeyhole,
    Mail,
    UserRound,
    ShieldCheck,
} from "lucide-react";
import { createClient } from "@/lib/supabase-browser";

type AuthMode = "login" | "signup";
type AuthTab = "user" | "admin";

const DEMO_EMAIL = "demo@kalachi.test";
const DEMO_PASSWORD = "258036";

export default function UserLoginPage() {
    const [activeTab, setActiveTab] = useState<AuthTab>("user");
    const [mode, setMode] = useState<AuthMode>("login");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const router = useRouter();
    const supabase = createClient();

    const isAdmin = activeTab === "admin";
    const isSignup = !isAdmin && mode === "signup";

    function changeTab(tab: AuthTab) {
        setActiveTab(tab);
        setMode("login");
        setErrorMessage("");
        setSuccessMessage("");
    }

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
            if (isAdmin) {
                const { error } = await supabase.auth.signInWithPassword({
                    email: DEMO_EMAIL,
                    password: DEMO_PASSWORD,
                });

                if (error) {
                    setErrorMessage("ورود به پنل نمایشی با مشکل مواجه شد.");
                    return;
                }

                router.replace("/auth/redirect");
                router.refresh();
                return;
            }

            if (isSignup) {
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
                    router.replace("/auth/redirect");
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

            router.replace("/auth/redirect");
            router.refresh();
            
        } catch {
            setErrorMessage("خطایی رخ داد. لطفا دوباره تلاش کنید.");
        } finally {
            setLoading(false);
        }
    }

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

                {/* Login tabs */}
                <div className="mb-7 grid grid-cols-2 rounded-lg bg-[var(--muted)] p-1">
                    <button
                        type="button"
                        onClick={() => changeTab("user")}
                        className={`flex h-10 items-center justify-center gap-2 rounded-md text-sm font-medium transition-all ${!isAdmin
                            ? "bg-[#4B73FF] text-white shadow-sm"
                            : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                            }`}
                    >
                        <UserRound size={17} />
                        کاربر
                    </button>

                    <button
                        type="button"
                        onClick={() => changeTab("admin")}
                        className={`flex h-10 items-center justify-center gap-2 rounded-md text-sm font-medium transition-all ${isAdmin
                            ? "bg-[#8469FF] text-white shadow-sm"
                            : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                            }`}
                    >
                        <ShieldCheck size={17} />
                        مدیریت
                    </button>
                </div>

                {/* Form heading */}
                <div className="mb-7 text-center">
                    <div
                        className={`mx-auto mb-4 flex size-14 items-center justify-center rounded-xl ${isAdmin
                            ? "bg-[#8469FF]/10 text-[#8469FF]"
                            : "bg-[#4B73FF]/10 text-[#4B73FF]"
                            }`}
                    >
                        {isAdmin ? (
                            <ShieldCheck size={26} />
                        ) : isSignup ? (
                            <UserRound size={26} />
                        ) : (
                            <LockKeyhole size={26} />
                        )}
                    </div>

                    <h1 className="text-2xl font-bold text-[var(--foreground)]">
                        {isAdmin
                            ? "ورود به پنل مدیریت"
                            : isSignup
                                ? "ساخت حساب کاربری"
                                : "ورود به حساب کاربری"}
                    </h1>

                    <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                        {isAdmin
                            ? "مشاهده نسخه نمایشی پنل مدیریت کالاچی"
                            : isSignup
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
                                    className="w-full rounded-lg border border-[var(--border)] bg-transparent py-3 pl-3 pr-10 text-sm text-[var(--foreground)] outline-none focus:border-[#4B73FF]"
                                />
                            </div>
                        </div>
                    )}

                    <div>
                        <label className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                            ایمیل
                        </label>

                        <div className="relative">
                            {!isAdmin && (
                                <Mail
                                    size={18}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]"
                                />
                            )}

                            <input
                                type="email"
                                value={isAdmin ? DEMO_EMAIL : email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="example@email.com"
                                dir="ltr"
                                required
                                readOnly={isAdmin}
                                className={`w-full rounded-lg border border-[var(--border)] bg-transparent py-3 text-sm text-[var(--foreground)] outline-none focus:border-[#4B73FF] ${isAdmin ? "px-3" : "pl-3 pr-10"
                                    }`}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                            رمز عبور
                        </label>

                        <input
                            type="password"
                            value={isAdmin ? DEMO_PASSWORD : password}
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder="رمز عبور خود را وارد کنید"
                            dir="ltr"
                            required
                            minLength={6}
                            readOnly={isAdmin}
                            className="w-full rounded-lg border border-[var(--border)] bg-transparent px-3 py-3 text-sm text-[var(--foreground)] outline-none focus:border-[#4B73FF]"
                        />

                        {isSignup && (
                            <p className="mt-2 text-xs text-[var(--muted-foreground)]">
                                رمز عبور باید حداقل ۶ کاراکتر باشد.
                            </p>
                        )}

                        {isAdmin && (
                            <p className="mt-2 text-xs text-[var(--muted-foreground)]">
                                این حساب نمایشی فقط امکان مشاهده اطلاعات را دارد.
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
                        className={`w-full rounded-lg py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 ${isAdmin ? "bg-[#8469FF]" : "bg-[#4B73FF]"
                            }`}
                    >
                        {loading
                            ? "لطفا صبر کنید..."
                            : isAdmin
                                ? "ورود به پنل مدیریت"
                                : isSignup
                                    ? "ثبت‌نام"
                                    : "ورود به حساب"}
                    </button>
                </form>

                {!isAdmin && (
                    <div className="mt-6 border-t border-[var(--border)] pt-5 text-center text-sm">
                        <span className="text-[var(--muted-foreground)]">
                            {isSignup
                                ? "قبلا حساب ساخته‌اید؟"
                                : "هنوز حساب کاربری ندارید؟"}
                        </span>

                        <button
                            type="button"
                            onClick={() => changeMode(isSignup ? "login" : "signup")}
                            className="mr-2 font-semibold text-[#4B73FF] hover:opacity-80"
                        >
                            {isSignup ? "ورود" : "ثبت‌نام"}
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}
