import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-server";
import { getCurrentUserRole } from "@/lib/auth";

export async function GET() {
    const supabase = await createClient();

    const {
        data: { user },
        error,
    } = await supabase.auth.getUser();

    if (error || !user) {
        return NextResponse.json({ role: null });
    }

    const role = await getCurrentUserRole();

    return NextResponse.json({
        role: role ?? "USER",
    });
}