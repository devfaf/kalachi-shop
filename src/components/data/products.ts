
export type PurchasePanel = {
    storeName: string;
    guarantee: string;
    stock: number;
    price: number;
}

export type ProductInfo = {
    persianName: string;
    englishName: string;
    rating: number;
    color: {
        name: string,
        value: string,
    }[];
    features: ProductFeature[];
    description: string;
}

export type ProductFeature = {
    label: string;
    value: string;
}


export type Product = {
    readonly id: string;
    slug: string;
    discountPrice?: number;
    categoryId: string;
    images: string[];
    info: ProductInfo;
    purchasePanel: PurchasePanel;
}

export const products: Product[] = [
    // ─────────────────────────── محصول ۱: تلویزیون ───────────────────────────
    {
        id: "1",
        slug: "samsung-55cu8000",
        discountPrice: 10_500_000,
        categoryId: "tv",
        images: [

            "/products/tv/tv-1.jpg",
            "/products/tv/tv-2.jpg",
            "/products/tv/tv-3.jpg",
            "/products/tv/tv-4.jpg",

        ],
        info: {
            persianName: "تلویزیون سامسونگ مدل 55CU8000 سایز 55 اینچ",
            englishName: "Samsung 55CU8000 55 inch Crystal UHD 4K Smart TV",
            rating: 4.5,
            color: [
                { name: "مشکی", value: "#000000" },
                { name: "خاکستری", value: "#808080" },
            ],
            features: [
                { label: "منطقه", value: "کره جنوبی" },
                { label: "فناوری نمایشگر", value: "Crystal UHD" },
                { label: "سیستم‌عامل", value: "Tizen" },
                { label: "دوربین", value: "ندارد" },
                { label: "سایز", value: "55 اینچ" },
            ],
            description:
                "تلویزیون سامسونگ 55CU8000 با کیفیت تصویر Crystal UHD و رزولوشن 4K، تجربه‌ای بی‌نظیر از تماشای فیلم و ورزش را ارائه می‌دهد. مجهز به سیستم‌عامل Tizen و پشتیبانی از دستیار صوتی.",
        },
        purchasePanel: {
            storeName: "کالاچی",
            guarantee: "18 ماه گارانتی شرکتی",
            stock: 8,
            price: 12_000_000,
        },
    },

    // ─────────────────────────── محصول ۲: گوشی موبایل ───────────────────────────
    {
        id: "2",
        slug: "apple-iphone-13-pro-max",
        discountPrice: 45_000_000,
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
            color: [
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
        },
    },

    // ─────────────────────────── محصول ۳: لپ‌تاپ ───────────────────────────
    {
        id: "3",
        slug: "asus-vivobook-15-x1504za",
        discountPrice: 28_000_000,
        categoryId: "laptop",
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
            color: [
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
        },
    },
];