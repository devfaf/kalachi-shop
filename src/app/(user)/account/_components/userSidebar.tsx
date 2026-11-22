
import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  UserRound,
} from "lucide-react";

import LogoutButton from "@/components/common/LogoutButton";

const menuItems = [
  { label: "داشبورد", href: "/account", icon: LayoutDashboard },
  { label: "سفارش‌های من", href: "/account/orders", icon: Package },
  { label: "اطلاعات حساب", href: "/account/profile", icon: UserRound },
];

type UserSidebarProps = {
  mobile?: boolean;
  onNavigate?: () => void;
};

export default function UserSidebar({
  mobile = false,
  onNavigate,
}: UserSidebarProps) {
  return (
    <aside
      className={`flex flex-col border-l border-[var(--border)] bg-[var(--card)] p-4 ${
        mobile
          ? "h-full w-full"
          : "min-h-screen w-64 shrink-0"
      }`}
    >
      <nav className="flex flex-col gap-2">
        {menuItems.map(({ label, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            onClick={onNavigate}
            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-[var(--muted-foreground)] transition-colors hover:bg-[var(--accent)] hover:text-[var(--foreground)]"
          >
            <Icon size={20} />
            <span>{label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto pt-6">
        <LogoutButton />
      </div>
    </aside>
  );
}
