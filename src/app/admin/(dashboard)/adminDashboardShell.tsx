
"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { Menu, Store, X } from "lucide-react";

import AdminSidebar from "./adminSidebar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function AdminDashboardShell({
  children,
}: {
  children: ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:block">
        <AdminSidebar />
      </div>

      <div className="min-w-0 flex-1">
        <header className="flex h-16 items-center border-b border-[var(--border)] px-4 lg:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger
              type="button"
              aria-label="باز کردن منو"
              className="flex size-10 items-center justify-center rounded-lg text-[var(--foreground)] transition-colors hover:bg-[var(--accent)]"
            >
              <Menu size={24} />
            </SheetTrigger>

            <SheetContent
              side="right"
              showCloseButton={false}
              className="w-[280px] gap-0 border-l border-[var(--border)] bg-[var(--card)] p-0 sm:w-[320px]"
            >
              <div className="relative flex h-20 shrink-0 items-center border-b border-[var(--border)] px-4">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2 text-lg font-bold text-[var(--foreground)]"
                >
                  <Store
                    size={24}
                    className="text-[var(--primary)]"
                  />
                  پنل مدیریت کالاچی
                </Link>

                <SheetClose
                  aria-label="بستن منو"
                  className="absolute left-3 top-0 mt-2 flex size-9 items-center justify-center rounded-lg text-[var(--foreground)] transition-colors hover:bg-[var(--accent)] hover:text-[var(--primary)]"
                >
                  <X size={22} />
                </SheetClose>
              </div>

              <AdminSidebar
                mobile
                onNavigate={() => setIsMenuOpen(false)}
              />
            </SheetContent>
          </Sheet>

          <span className="mr-3 font-semibold text-[var(--foreground)]">
            پنل مدیریت کالاچی
          </span>
        </header>

        <main className="min-w-0 p-4 sm:p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
