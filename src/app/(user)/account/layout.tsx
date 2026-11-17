
import type { ReactNode } from "react";
import UserSidebar from "./_components/userSidebar";

export default function AccountLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[var(--background)]">
      <UserSidebar />

      <main className="min-w-0 flex-1 p-6 sm:p-8">
        {children}
      </main>
    </div>
  );
}
