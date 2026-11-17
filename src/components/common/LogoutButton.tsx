"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { createClient } from "@/lib/supabase-browser";

export default function LogoutButton() {
    const router = useRouter();

    async function handleLogout() {
        const supabase = createClient();

        const { error } = await supabase.auth.signOut();

        if (error) {
            console.error("Logout error:", error.message);
            return;
        }

        router.replace("/");
        router.refresh();
    }

    return (
        <button
            type="button"
            onClick={handleLogout}
            className="mt-auto flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-red-500 transition-colors hover:bg-red-500/10"
        >
            <LogOut size={20} />
            <span>خروج از حساب</span>
        </button>
    );
}