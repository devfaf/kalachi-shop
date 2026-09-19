// data/navigation.ts

import {
    HiOutlineHome,
    HiOutlineQuestionMarkCircle,
    HiOutlineNewspaper,
    HiOutlinePhone,
    HiOutlineSquares2X2,
    HiOutlineTruck,
} from "react-icons/hi2";

export type NavItem = {
    label: string;
    href?: string;
    icon: React.ElementType;
    children?: NavChild[];
}

export type NavChild = {
    label: string;
    href?: string;
    children?: NavChild[];
}

export const navItems: NavItem[] = [
    {
        label: "دسته‌بندی کالاها",
        icon: HiOutlineSquares2X2,
        children: [
            {
                label: "موبایل",
                href: "/category/mobile",
            },
            {
                label: "لپ‌تاپ",
                href: "/category/laptops",
            },
            {
                label: "تبلت",
                href: "/category/tablets",
            },
            {
                label: "لوازم جانبی موبایل",
                href: "/category/mobile-accessories",
            },
            {
                label: "هدفون",
                href: "/category/headphones",
            },
            {
                label: "بلندگو",
                href: "/category/speakers",
            },
        ],
    },

    {
        label: "صفحه اصلی",
        href: "/",
        icon: HiOutlineHome,
    },

    {
        label: "سوالی دارید؟",
        href: "/faq",
        icon: HiOutlineQuestionMarkCircle,
    },

    {
        label: "پیگیری سفارش",
        href: "/track-your-order",
        icon: HiOutlineTruck,
    },

    {
        label: "وبلاگ",
        href: "/blog",
        icon: HiOutlineNewspaper,
    },

    {
        label: "تماس با ما",
        href: "/contact",
        icon: HiOutlinePhone,
    },
];