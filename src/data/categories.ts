export type Category = {
    readonly id: string;
    name: string;
    slug: string;
    parentId?: string;
};

export const categories: Category[] = [
    {
        id: "mobile",
        name: "موبایل",
        slug: "mobile",
    },
    {
        id: "smartphones",
        name: "گوشی بر اساس قیمت",
        slug: "smartphones",
        parentId: "mobile",
    },
    {
        id: "foldable-phones",
        name: "گوشی بر اساس حافظه",
        slug: "foldable-phones",
        parentId: "mobile",
    },
    {
        id: "gaming-phones",
        name: "گوشی بر اساس عملکرد",
        slug: "gaming-phones",
        parentId: "mobile",
    },

    {
        id: "laptops",
        name: "لپ‌تاپ",
        slug: "laptops",
    },
    {
        id: "gaming-laptops",
        name: "لپ‌تاپ بر اساس کاربرد",
        slug: "gaming-laptops",
        parentId: "laptops",
    },
    {
        id: "ultrabooks",
        name: "لپ‌تاپ بر اساس پردازنده",
        slug: "ultrabooks",
        parentId: "laptops",
    },
    {
        id: "convertible-laptops",
        name: "لپ‌تاپ بر اساس قیمت",
        slug: "convertible-laptops",
        parentId: "laptops",
    },

    {
        id: "tablets",
        name: "تبلت",
        slug: "tablets",
    },
    {
        id: "android-tablets",
        name: "تبلت بر اساس برند",
        slug: "android-tablets",
        parentId: "tablets",
    },
    {
        id: "ipad",
        name: "تبلت بر اساس قیمت",
        slug: "ipad",
        parentId: "tablets",
    },
    {
        id: "gaming-tablets",
        name: "تبلت بر اساس کاربرد",
        slug: "gaming-tablets",
        parentId: "tablets",
    },

    // لوازم جانبی موبایل
    {
        id: "accessories",
        name: "لوازم جانبی",
        slug: "accessories",
    },
    {
        id: "mobile-accessories",
        name: "لوازم جانبی موبایل",
        slug: "mobile-accessories",
        parentId: "accessories",
    },
    {
        id: "mobile-cases",
        name: "قاب و کاور",
        slug: "cases",
        parentId: "mobile-accessories",
    },
    {
        id: "mobile-chargers",
        name: "شارژر",
        slug: "chargers",
        parentId: "mobile-accessories",
    },
    {
        id: "mobile-cables",
        name: "کابل",
        slug: "cables",
        parentId: "mobile-accessories",
    },
    {
        id: "power-banks",
        name: "پاوربانک",
        slug: "power-banks",
        parentId: "mobile-accessories",
    },

    {
        id: "audio",
        name: "هدفون و بلندگو",
        slug: "audio",
    },
    {
        id: "headphones",
        name: "هدفون",
        slug: "headphones",
        parentId: "audio",
    },
    {
        id: "in-ear-headphones",
        name: "هدفون داخل گوشی",
        slug: "in-ear",
        parentId: "headphones",
    },
    {
        id: "over-ear-headphones",
        name: "هدفون روگوشی",
        slug: "over-ear",
        parentId: "headphones",
    },
    {
        id: "speakers",
        name: "بلندگو",
        slug: "speakers",
        parentId: "audio",
    },
    {
        id: "portable-speakers",
        name: "اسپیکر قابل حمل",
        slug: "portable",
        parentId: "speakers",
    },
    {
        id: "desktop-speakers",
        name: "اسپیکر رومیزی",
        slug: "desktop",
        parentId: "speakers",
    },

    {
        id: "gaming",
        name: "گیمینگ",
        slug: "gaming",
    },
    {
        id: "gaming-monitors",
        name: "مانیتور گیمینگ",
        slug: "gaming-monitors",
        parentId: "gaming",
    },
    {
        id: "gaming-keyboards",
        name: "کیبورد گیمینگ",
        slug: "gaming-keyboards",
        parentId: "gaming",
    },
    {
        id: "gaming-mice",
        name: "ماوس گیمینگ",
        slug: "gaming-mice",
        parentId: "gaming",
    },
    {
        id: "gaming-headsets",
        name: "هدست گیمینگ",
        slug: "gaming-headsets",
        parentId: "gaming",
    },
];
