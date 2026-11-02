
import AdminSidebar from "./admin-sidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
