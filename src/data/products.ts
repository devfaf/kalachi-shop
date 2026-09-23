export type ProductFeature = {
    label: string;
    value: string;
};

export type PurchasePanel = {
    storeName: string;
    guarantee: string;
    stock: number;
    price: number;
    discountPrice?: number;
};

export type ProductInfo = {
    persianName: string;
    englishName: string;
    rating: number;
    colors: {
        name: string;
        value: string;
    }[];
    features: ProductFeature[];
    description: string;
};

export type Product = {
    readonly id: string;
    slug: string;
    categoryId: string;
    images: string[];
    info: ProductInfo;
    purchasePanel: PurchasePanel;
};

export const products: Product[] = [
    {
        id: "1",
        slug: "apple-iphone-17",
        categoryId: "mobile",
        images: [
            "/images/products/iphone-17/1.webp",
            "/images/products/iphone-17/2.webp",
            "/images/products/iphone-17/3.webp",
            "/images/products/iphone-17/4.webp",
            "/images/products/iphone-17/5.webp",
            "/images/products/iphone-17/6.webp",
        ],
        info: {
            persianName:
                "گوشی موبایل اپل مدل iPhone 17 ظرفیت 256 گیگابایت",
            englishName:
                "Apple iPhone 17 256GB Smartphone",
            rating: 4.8,
            colors: [
                { name: "مشکی", value: "#111827" },
                { name: "آبی مه‌آلود", value: "#9CA3AF" },
                { name: "سبز متمایل به خاکستری", value: "#A8B5A0" },
            ],
            features: [
                { label: "نمایشگر", value: "6.3 اینچ Super Retina XDR OLED" },
                { label: "پردازنده", value: "Apple A19" },
                { label: "حافظه داخلی", value: "256 گیگابایت" },
                { label: "دوربین", value: "48 مگاپیکسل دوگانه" },
                { label: "نرخ نوسازی", value: "تا 120 هرتز" },
            ],
            description:
                "iPhone 17 با نمایشگر OLED، تراشه A19 و سیستم دوربین دوگانه 48 مگاپیکسلی.",
        },
        purchasePanel: {
            storeName: "کالاچی",
            guarantee: "18 ماه گارانتی شرکتی",
            stock: 8,
            price: 89_000_000,
            discountPrice: 84_000_000,
        },
    },

    {
        id: "2",
        slug: "asus-vivobook-15-x1504za",
        categoryId: "laptops",
        images: [
            "/images/products/vivobook-15/1.webp",
            "/images/products/vivobook-15/2.webp",
            "/images/products/vivobook-15/3.webp",
            "/images/products/vivobook-15/4.webp",
        ],
        info: {
            persianName:
                "لپ‌تاپ 15.6 اینچی ایسوس Vivobook 15 X1504ZA",
            englishName:
                "ASUS Vivobook 15 X1504ZA Core i5",
            rating: 4.4,
            colors: [
                { name: "نقره‌ای", value: "#D1D5DB" },
            ],
            features: [
                { label: "پردازنده", value: "Intel Core i5-1235U" },
                { label: "رم", value: "16 گیگابایت" },
                { label: "حافظه", value: "512 گیگابایت SSD" },
                { label: "نمایشگر", value: "15.6 اینچ Full HD" },
                { label: "سیستم‌عامل", value: "Windows 11" },
            ],
            description:
                "لپ‌تاپ Vivobook 15 برای استفاده روزمره، کاری و دانشجویی با نمایشگر 15.6 اینچی و حافظه SSD.",
        },
        purchasePanel: {
            storeName: "کالاچی",
            guarantee: "18 ماه گارانتی سازگار",
            stock: 5,
            price: 30_000_000,
            discountPrice: 28_000_000,
        },
    },

    {
        id: "3",
        slug: "samsung-galaxy-tab-s9",
        categoryId: "tablets",
        images: [
            "/images/products/galaxy-tab-s9/1.webp",
            "/images/products/galaxy-tab-s9/2.webp",
            "/images/products/galaxy-tab-s9/3.webp",
            "/images/products/galaxy-tab-s9/4.webp",
        ],
        info: {
            persianName:
                "تبلت سامسونگ Galaxy Tab S9 ظرفیت 256 گیگابایت",
            englishName:
                "Samsung Galaxy Tab S9 256GB WiFi",
            rating: 4.6,
            colors: [
                { name: "خاکستری", value: "#6B7280" },
                { name: "بژ", value: "#D6C7B0" },
            ],
            features: [
                { label: "نمایشگر", value: "11 اینچ Dynamic AMOLED 2X" },
                { label: "حافظه داخلی", value: "256 گیگابایت" },
                { label: "رم", value: "12 گیگابایت" },
                { label: "دوربین", value: "13 مگاپیکسل" },
                { label: "قلم", value: "پشتیبانی از S Pen" },
            ],
            description:
                "Galaxy Tab S9 با نمایشگر Dynamic AMOLED 2X، پشتیبانی از S Pen و طراحی باریک.",
        },
        purchasePanel: {
            storeName: "کالاچی",
            guarantee: "18 ماه گارانتی شرکتی",
            stock: 7,
            price: 35_000_000,
            discountPrice: 32_000_000,
        },
    },
];