// data/navigation.ts

import {
    HiOutlineHome,
    HiOutlineQuestionMarkCircle,
    HiOutlineNewspaper,
    HiOutlinePhone,
    HiOutlineSquares2X2,
    HiOutlineTruck,
    HiOutlineListBullet
} from "react-icons/hi2";

export type NavItem = {
    label:string;
    href:string;
    icon:React.ElementType;
    children?:NavChild[];
}

type NavChild = {
    label:string;
    href?:string;
    children?:NavChild[];
}

export const navItems : NavItem[] = [
    {
        label: "دسته‌بندی کالاها",
        icon: HiOutlineSquares2X2,
        href: "menu",
        children: [
            {
                label: "موبایل و تبلت",
                children: [
                    {
                        label: "گوشی موبایل",
                        href: "/products/mobile/phones",
                    },
                    {
                        label: "تبلت",
                        href: "/products/mobile/tablets",
                    },
                ],
            },

            {
                label: "لوازم دیجیتال",
                children: [
                    {
                        label: "هدفون",
                        href: "/products/digital/headphones",
                    },
                    {
                        label: "ساعت هوشمند",
                        href: "/products/digital/smart-watches",
                    },
                ],
            },
        ],
    },
    {
        label: "صفحه اصلی",
        href: "/",
        icon: HiOutlineHome,
    },

    {
        label: "لیست کالاها",
        href: "/products",
        icon: HiOutlineListBullet,
        children : [
            {
                label: "کالای دیجیتال",
                href: "/products/digital"
            },
            {
                label: "موبایل و لپ تاپ",
                href: "/products/mobile-laptop"
            }
        ]
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