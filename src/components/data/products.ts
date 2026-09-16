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
        slug: "apple-iphone-13-pro-max",
        categoryId: "mobile",
        images: [
            "/products/iphone13/iphone-1.jpg",
            "/products/iphone13/iphone-2.jpg",
            "/products/iphone13/iphone-3.jpg",
            "/products/iphone13/iphone-4.jpg",
        ],
        info: {
            persianName:
                "گوشی موبایل اپل مدل iPhone 13 Pro Max A2644 دو سیم‌کارت ظرفیت 256 گیگابایت",
            englishName:
                "Apple iPhone 13 Pro Max A2644 Dual SIM 256GB And 6GB RAM Mobile Phone",
            rating: 4.8,
            colors: [
                { name: "نقره‌ای", value: "#C0C0C0" },
                { name: "طلایی", value: "#FFD700" },
                { name: "آبی سیر", value: "#1E3A8A" },
                { name: "خاکستری", value: "#4B5563" },
            ],
            features: [
                { label: "منطقه", value: "چین" },
                { label: "فناوری نمایشگر", value: "Super Retina XDR OLED" },
                { label: "سیستم‌عامل", value: "iOS 15" },
                { label: "دوربین", value: "12 مگاپیکسل (سه‌گانه)" },
                { label: "سایز", value: "6.7 اینچ" },
            ],
            description:
                "آیفون 13 پرو مکس با تراشه A15 Bionic، نمایشگر ProMotion با نرخ نوسازی 120 هرتز و سیستم دوربین سه‌گانه حرفه‌ای، یکی از قدرتمندترین گوشی‌های بازار است.",
        },
        purchasePanel: {
            storeName: "کالاچی",
            guarantee: "12 ماه گارانتی آواژنگ",
            stock: 12,
            price: 48_000_000,
            discountPrice: 45_000_000,
        },
    },

    {
        id: "2",
        slug: "asus-vivobook-15-x1504za",
        categoryId: "laptops",
        images: [
            "/products/vivobook/laptop-1.jpg",
            "/products/vivobook/laptop-2.jpg",
            "/products/vivobook/laptop-3.jpg",
            "/products/vivobook/laptop-4.jpg",
        ],
        info: {
            persianName:
                "لپ‌تاپ 15 اینچی ایسوس مدل Vivobook 15 X1504ZA با پردازنده Core i5 و 16 گیگابایت رم",
            englishName:
                "ASUS Vivobook 15 X1504ZA Core i5 1235U 16GB RAM 512GB SSD 15.6 inch",
            rating: 4.2,
            colors: [
                { name: "خاکستری", value: "#6B7280" },
                { name: "نقره‌ای", value: "#D1D5DB" },
                { name: "آبی", value: "#2563EB" },
            ],
            features: [
                { label: "منطقه", value: "تایوان" },
                { label: "فناوری نمایشگر", value: "IPS Full HD" },
                { label: "سیستم‌عامل", value: "Windows 11" },
                { label: "دوربین", value: "720p HD" },
                { label: "سایز", value: "15.6 اینچ" },
            ],
            description:
                "لپ‌تاپ ایسوس Vivobook 15 با پردازنده نسل دوازدهم اینتل Core i5، 16 گیگابایت رم DDR4 و 512 گیگابایت SSD، گزینه‌ای عالی برای کارهای اداری، دانشجویی و مولتی‌مدیا است.",
        },
        purchasePanel: {
            storeName: "کالاچی",
            guarantee: "12 ماه گارانتی سازگار",
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
            "/products/tablet/tablet-1.jpg",
            "/products/tablet/tablet-2.jpg",
            "/products/tablet/tablet-3.jpg",
            "/products/tablet/tablet-4.jpg",
        ],
        info: {
            persianName:
                "تبلت سامسونگ مدل Galaxy Tab S9 ظرفیت 256 گیگابایت",
            englishName:
                "Samsung Galaxy Tab S9 256GB WiFi Tablet",
            rating: 4.6,
            colors: [
                { name: "خاکستری", value: "#6B7280" },
                { name: "بژ", value: "#D6C7B0" },
            ],
            features: [
                { label: "منطقه", value: "کره جنوبی" },
                { label: "فناوری نمایشگر", value: "Dynamic AMOLED 2X" },
                { label: "سیستم‌عامل", value: "Android" },
                { label: "دوربین", value: "13 مگاپیکسل" },
                { label: "سایز", value: "11 اینچ" },
            ],
            description:
                "تبلت Galaxy Tab S9 با نمایشگر Dynamic AMOLED 2X، پردازنده قدرتمند و پشتیبانی از قلم S Pen، گزینه‌ای مناسب برای استفاده روزمره، مطالعه و کار است.",
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

