
import { redirect } from "next/navigation";
import AdminDashboardShell from "./adminDashboardShell";
import { getCurrentUserRole } from "@/lib/auth";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const role = await getCurrentUserRole();

  if (!role) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-[var(--background)]" dir="rtl">
      <AdminDashboardShell>{children}</AdminDashboardShell>
    </div>
  );
}
