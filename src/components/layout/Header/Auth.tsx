"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import AppButton from "@/components/common/AppButton";

type UserRole = "USER" | "ADMIN" | "DEMO" | null;

const Auth = () => {
    const [role, setRole] = useState<UserRole>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchRole() {
            try {
                const response = await fetch("/api/auth/role");
                const data = await response.json();

                setRole(data.role);
            } catch (error) {
                console.error("Auth status error:", error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchRole();
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
                    <AiOutlineUser className="text-[28px] md:text-[20px]" />
                }
                className="h-11 min-w-11 text-foreground md:min-w-0"
            >
                <span className="hidden md:inline">{label}</span>
            </AppButton>
        </Link>
    );
};

export default Auth;