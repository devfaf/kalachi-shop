
import { redirect } from "next/navigation";
import AdminSidebar from "./admin-sidebar";
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
      <div className="flex min-h-screen">
        <AdminSidebar />

        <main className="min-w-0 flex-1 p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
