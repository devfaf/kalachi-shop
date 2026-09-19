export type Category = {
    readonly id: string;
    name: string;
    slug: string;
    parentId?: string;
};

export const categories: Category[] = [
    // موبایل
    {
        id: "mobile",
        name: "موبایل",
        slug: "mobile",
    },
    {
        id: "smartphones",
        name: "گوشی هوشمند",
        slug: "smartphones",
        parentId: "mobile",
    },
    {
        id: "foldable-phones",
        name: "گوشی تاشو",
        slug: "foldable-phones",
        parentId: "mobile",
    },
    {
        id: "gaming-phones",
        name: "گوشی گیمینگ",
        slug: "gaming-phones",
        parentId: "mobile",
    },

    // لپ‌تاپ
    {
        id: "laptops",
        name: "لپ‌تاپ",
        slug: "laptops",
    },
    {
        id: "gaming-laptops",
        name: "لپ‌تاپ گیمینگ",
        slug: "gaming-laptops",
        parentId: "laptops",
    },
    {
        id: "ultrabooks",
        name: "لپ‌تاپ سبک و باریک",
        slug: "ultrabooks",
        parentId: "laptops",
    },
    {
        id: "convertible-laptops",
        name: "لپ‌تاپ دوکاره",
        slug: "convertible-laptops",
        parentId: "laptops",
    },

    // تبلت
    {
        id: "tablets",
        name: "تبلت",
        slug: "tablets",
    },
    {
        id: "android-tablets",
        name: "تبلت اندرویدی",
        slug: "android-tablets",
        parentId: "tablets",
    },
    {
        id: "ipad",
        name: "آیپد",
        slug: "ipad",
        parentId: "tablets",
    },
    {
        id: "gaming-tablets",
        name: "تبلت گیمینگ",
        slug: "gaming-tablets",
        parentId: "tablets",
    },

    // لوازم جانبی موبایل
    {
        id: "mobile-accessories",
        name: "لوازم جانبی موبایل",
        slug: "mobile-accessories",
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

    // هدفون
    {
        id: "headphones",
        name: "هدفون",
        slug: "headphones",
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

    // بلندگو
    {
        id: "speakers",
        name: "بلندگو",
        slug: "speakers",
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
];