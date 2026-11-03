
import {
  LayoutDashboard,
  Package,
  Tags,
  Sparkles,
} from "lucide-react";
import Link from "next/link";


const sections = [
  {
    title: "مدیریت محصولات",
    description: "افزودن و مدیریت محصولات فروشگاه",
    icon: Package,
    href: "/admin/products",
  },
  {
    title: "مدیریت دسته‌بندی‌ها",
    description: "مدیریت دسته‌بندی‌های محصولات",
    icon: Tags,
    href: "/admin/categories",
  },
  {
    title: "کمپین شگفت‌انگیز",
    description: "مدیریت کمپین‌های فروش ویژه",
    icon: Sparkles,
    href: "/admin/amazing-offers",
  },
];

export default function AdminPage() {
  return (
    <main className="space-y-8">
      <div>
        <div className="mb-2 flex items-center gap-2 text-[var(--primary)]">
          <LayoutDashboard size={20} />
          <span className="text-sm font-medium">داشبورد</span>
        </div>

        <h1 className="text-2xl font-bold text-[var(--foreground)]">
          پنل مدیریت کالاچی
        </h1>

        <p className="mt-2 text-sm text-[var(--muted-foreground)]">
          از این بخش می‌تونی بخش‌های مختلف فروشگاه رو مدیریت کنی.
        </p>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
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
