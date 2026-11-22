"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import AppButton from "@/components/common/AppButton";
import { createClient } from "@/lib/supabase-browser";

type UserRole = "USER" | "ADMIN" | "DEMO" | null;

const Auth = () => {
    const [role, setRole] = useState<UserRole>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const supabase = createClient();

        async function fetchRole() {
            try {
                const response = await fetch("/api/auth/role", {
                    cache: "no-store",
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch auth role");
                }

                const data = await response.json();
                setRole(data.role);
            } catch (error) {
                console.error("Auth status error:", error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchRole();

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange(() => {
            setIsLoading(true);
            fetchRole();
        });

        return () => subscription.unsubscribe();
    }, []);

    const href =
        role === "ADMIN" || role === "DEMO"
            ? "/admin"
            : role === "USER"
                ? "/account"
                : "/login";

    const label =
        role === "ADMIN" || role === "DEMO"
            ? "پنل مدیریت"
            : role === "USER"
                ? "پنل کاربری"
                : "ورود / ثبت‌نام";

    if (isLoading) return null;

    return (
        <Link href={href}>
            <AppButton
                startIcon={
                    <AiOutlineUser className="text-[22px] md:text-[20px]" />
                }
                className="h-11 min-w-11 whitespace-nowrap px-2.5 text-xs text-foreground md:px-3 md:text-sm"
            >
                <span className="md:hidden">
                    {role === "ADMIN" || role === "DEMO"
                        ? "پنل"
                        : "ورود"}
                </span>

                <span className="hidden md:inline">{label}</span>
            </AppButton>
        </Link>
    );
};

export default Auth;