import Link from "next/link";


import {
  Home,
  LayoutGrid,
  ShoppingCart,
  Heart,
  User,
} from "lucide-react";

const MobileNav = () => {
  const items = [
    { label: "خانه", icon: Home, href: "#" },
    { label: "دسته‌بندی", icon: LayoutGrid, href: "#" },
    { label: "سبد خرید", icon: ShoppingCart, href: "#", badge: 3 },
    { label: "علاقه‌مندی", icon: Heart, href: "#" },
    { label: "پروفایل", icon: User, href: "#" },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 lg:hidden">
      <div className="mx-auto max-w-md px-3 pb-3">
        <div className="flex items-center justify-around rounded-2xl border border-white/10 bg-neutral-900/80 backdrop-blur-lg px-1 py-2 shadow-lg shadow-black/40">
          {items.map(({ label, icon: Icon, href, badge }) => (
            <Link
              key={label}
              href={href}
              className="group relative flex flex-col items-center gap-1 rounded-xl px-3 py-2 text-neutral-400 transition hover:text-white"
            >
              <div className="relative">
                <Icon
                  className="h-5 w-5 transition group-hover:scale-110"
                  strokeWidth={2}
                />
                {badge ? (
                  <span className="absolute -right-2 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-bold text-white ring-2 ring-neutral-900">
                    {badge}
                  </span>
                ) : null}
              </div>
              <span className="text-[10px] font-medium leading-none">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;