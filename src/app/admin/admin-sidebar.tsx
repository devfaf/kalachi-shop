
import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  Tags,
  Sparkles,
  Store,
} from "lucide-react";

const menuItems = [
  { label: "داشبورد", href: "/admin", icon: LayoutDashboard },
  { label: "محصولات", href: "/admin/products", icon: Package },
  { label: "دسته‌بندی‌ها", href: "/admin/categories", icon: Tags },
  {
    label: "کمپین شگفت‌انگیز",
    href: "/admin/amazing-offers",
    icon: Sparkles,
  },
];

export default function AdminSidebar() {
  return (
    <aside className="flex min-h-screen w-64 flex-col border-l border-[var(--border)] bg-[var(--card)] p-4">
      <Link
        href="/"
        className="mb-8 flex items-center gap-2 px-3 py-4 text-lg font-bold text-[var(--foreground)]"
      >
        <Store size={24} className="text-[var(--primary)]" />
        پنل مدیریت کالاچی
      </Link>

      <nav className="flex flex-col gap-2">
        {menuItems.map(({ label, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-[var(--muted-foreground)] transition-colors hover:bg-[var(--accent)] hover:text-[var(--foreground)]"
          >
            <Icon size={20} />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
