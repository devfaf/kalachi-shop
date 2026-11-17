
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase-server";
import { UserRound, Mail } from "lucide-react";

export default async function ProfilePage() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/login");
  }

  const name =
    user.user_metadata?.name ||
    user.user_metadata?.full_name ||
    "کاربر کالاچی";

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[var(--foreground)]">
          اطلاعات حساب
        </h1>

        <p className="mt-2 text-sm text-[var(--muted-foreground)]">
          اطلاعات حساب کاربری خودت رو مشاهده کن.
        </p>
      </div>

      <section className="max-w-2xl space-y-5 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
        <div className="flex items-center gap-4">
          <div className="flex size-14 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--primary)]">
            <UserRound size={26} />
          </div>

          <div>
            <h2 className="font-semibold text-[var(--foreground)]">
              {name}
            </h2>
            <p className="text-sm text-[var(--muted-foreground)]">
              حساب کاربری کالاچی
            </p>
          </div>
        </div>

        <div className="border-t border-[var(--border)] pt-5">
          <div className="flex items-center gap-3">
            <Mail size={20} className="text-[var(--muted-foreground)]" />
            <div>
              <p className="text-xs text-[var(--muted-foreground)]">
                ایمیل
              </p>
              <p dir="ltr" className="mt-1 text-sm text-[var(--foreground)]">
                {user.email}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
