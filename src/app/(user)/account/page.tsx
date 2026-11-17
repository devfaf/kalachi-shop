
import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  UserRound,
} from "lucide-react";

const sections = [
  {
    title: "سفارش‌های من",
    description: "مشاهده وضعیت و جزئیات سفارش‌های ثبت‌شده",
    icon: Package,
    href: "/account/orders",
  },
  {
    title: "اطلاعات حساب",
    description: "مشاهده و ویرایش اطلاعات حساب کاربری",
    icon: UserRound,
    href: "/account/profile",
  },
];

export default function AccountPage() {
  return (
    <main className="space-y-8">
      <div>
        <div className="mb-2 flex items-center gap-2 text-[var(--primary)]">
          <LayoutDashboard size={20} />
          <span className="text-sm font-medium">داشبورد</span>
        </div>

        <h1 className="text-2xl font-bold text-[var(--foreground)]">
          پنل کاربری کالاچی
        </h1>

        <p className="mt-2 text-sm text-[var(--muted-foreground)]">
          از این بخش می‌تونی حساب کاربری و سفارش‌های خودت رو مدیریت کنی.
        </p>
      </div>

      <section className="grid gap-4 sm:grid-cols-2">
        {sections.map(({ title, description, icon: Icon, href }) => (
          <Link
            key={href}
            href={href}
            className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 transition-colors hover:bg-[var(--accent)]"
          >
            <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-[var(--accent)] text-[var(--primary)]">
              <Icon size={22} />
            </div>

            <h2 className="font-semibold text-[var(--foreground)]">
              {title}
            </h2>

            <p className="mt-2 text-sm text-[var(--muted-foreground)]">
              {description}
            </p>
          </Link>
        ))}
      </section>
    </main>
  );
}
