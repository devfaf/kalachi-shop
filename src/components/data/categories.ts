export type Category = {
    readonly id: string;
    name: string;
    slug: string;
};

export const categories: Category[] = [
    {
        id: "mobile",
        name: "موبایل",
        slug: "mobile",
    },
    {
        id: "laptops",
        name: "لپ‌تاپ",
        slug: "laptops",
    },
    {
        id: "tablets",
        name: "تبلت",
        slug: "tablets",
    },
    {
        id: "mobile-accessories",
        name: "لوازم جانبی موبایل",
        slug: "mobile-accessories",
    },
    {
        id: "headphones",
        name: "هدفون",
        slug: "headphones",
    },
    {
        id: "speakers",
        name: "بلندگو",
        slug: "speakers",
    },
];