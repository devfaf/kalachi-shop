import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase-server";
import { getCurrentUserRole } from "@/lib/auth";

export default async function AuthRedirectPage() {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        redirect("/login");
    }

    const role = await getCurrentUserRole();

    if (role === "ADMIN" || role === "DEMO") {
        redirect("/admin");
    }

    redirect("/account");
}