"use client"

import {
    FiHome,
    FiGrid,
    FiShoppingCart,
    FiFileText,
    FiUser,
} from "react-icons/fi";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { usePathname } from "next/navigation";

const navItems = [
    { id: "home", label: "خانه", icon: FiHome, href: "/" },
    { id: "categories", label: "دسته‌بندی‌ها", icon: FiGrid, href: "/category" },
    { id: "cart", label: "سبد خرید", icon: FiShoppingCart, href: "/cart" },
    { id: "articles", label: "مقالات", icon: FiFileText, href: "/articles" },
    { id: "account", label: "حساب کاربری", icon: FiUser, href: "/account" },
];

const BottomNavigation = () => {
    const pathname = usePathname();
    const items = useCartStore((state) => state.items);
    const quantity = items.reduce((total, item) => total + item.quantity ,0);
    

    return (
        <>
            {/* فاصله‌ی انتهای صفحه تا نویگیشن روی محتوا نیفته */}
            <div className="h-24 lg:hidden" />

            <nav
                dir="rtl"
                className="fixed inset-x-0 bottom-0 z-50 lg:hidden"
                style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
            >
                <div className="mx-auto max-w-3xl px-3 pb-3">
                    <ul className="flex items-stretch justify-between gap-1.5 rounded-2xl border border-slate-200 bg-white/90 p-1.5 shadow-lg shadow-slate-900/5 backdrop-blur-md">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;

                            return (
                                <li key={item.id} className="flex-1">
                                    <Link
                                        href={item.href}
                                        aria-label={item.label}
                                        aria-current={isActive ? "page" : undefined}
                                        className={[
                                            "relative flex w-full flex-col items-center justify-center gap-1",
                                            "rounded-xl px-1 py-2 transition-all duration-200",
                                            isActive
                                                ? "bg-indigo-50 text-indigo-600"
                                                : "text-slate-500 hover:bg-slate-100 hover:text-slate-700 active:scale-95",
                                        ].join(" ")}
                                    >
                                        <span className="relative">
                                            <Icon
                                                className={`text-[22px] ${isActive ? "stroke-[2.4]" : "stroke-[1.8]"
                                                    }`}
                                            />


                                            {item.id === "cart" && quantity > 0 && (
                                                <span className="absolute -top-1.5 -left-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[9px] font-bold text-white">
                                                    {quantity}
                                                </span>
                                            )}
                                        </span>

                                        <span
                                            className={`text-[10px] leading-none ${isActive ? "font-bold" : "font-medium"
                                                }`}
                                        >
                                            {item.label}
                                        </span>

                                        {/* خط کوچک زیر آیتم فعال */}
                                        {isActive && (
                                            <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-indigo-500" />
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default BottomNavigation;