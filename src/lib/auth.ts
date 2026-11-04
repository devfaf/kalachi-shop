
import "server-only";

import { createClient as createServerSupabaseClient } from "@/lib/supabase-server";
import { supabase as supabaseAdmin } from "@/lib/supabase";

export type UserRole = "ADMIN" | "DEMO";

export async function getCurrentUserRole(): Promise<UserRole | null> {
  const authClient = await createServerSupabaseClient();

  const { data, error } = await authClient.auth.getClaims();

  const userId = data?.claims?.sub;

  if (error || typeof userId !== "string") {
    return null;
  }

  const { data: roleData, error: roleError } = await supabaseAdmin
    .from("user_roles")
    .select("role")
    .eq("id", userId)
    .maybeSingle();

  if (roleError || !roleData) {
    return null;
  }

  if (roleData.role !== "ADMIN" && roleData.role !== "DEMO") {
    return null;
  }

  return roleData.role;
}
