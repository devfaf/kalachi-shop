export type ProductFeature = {
  label: string;
  value: string;
};

export type PurchasePanel = {
  storeName: string;
  sellerRating: number;
  guarantee: string;
  stock: number;
  originalPrice: number;
  finalPrice?: number;
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
  // 1. Apple iPhone 18 Pro
  {
    id: "1",
    slug: "apple-iphone-18-pro",
    categoryId: "smartphones",
    images: [
      "/images/products/iphone-18-pro/1.webp",
      "/images/products/iphone-18-pro/2.webp",
      "/images/products/iphone-18-pro/3.webp",
    ],
    info: {
      persianName: "گوشی موبایل اپل مدل iPhone 18 Pro ظرفیت 256 گیگابایت",
      englishName: "Apple iPhone 18 Pro 256GB",
      rating: 4.9,
      colors: [
        { name: "مشکی", value: "#292929" },
        { name: "نقره‌ای", value: "#D5D5D5" },
        { name: "زرشکی", value: "#672B39" },
        { name: "یخی", value: "#C9DDE8" },
      ],
      features: [
        { label: "نمایشگر", value: "6.3 اینچ Super Retina XDR OLED" },
        { label: "پردازنده", value: "Apple A20 Pro" },
        { label: "حافظه داخلی", value: "256 گیگابایت" },
        { label: "دوربین اصلی", value: "48 مگاپیکسل با دیافراگم متغیر" },
        { label: "نرخ نوسازی", value: "تا 120 هرتز" },
      ],
      description:
        "آیفون 18 پرو با نمایشگر OLED، تراشه A20 Pro و سیستم دوربین پیشرفته، برای کاربرانی طراحی شده که به عملکرد بالا، عکاسی و فیلم‌برداری باکیفیت و تجربه نرم‌افزاری روان اهمیت می‌دهند.",
    },
    purchasePanel: {
      storeName: "کالاچی",
      sellerRating: 4.9,
      guarantee: "18 ماه گارانتی شرکتی",
      stock: 3,
      originalPrice: 180_000_000,
      finalPrice: 175_000_000,
    },
  },

  // 2. Samsung Galaxy A56 5G
  {
    id: "2",
    slug: "samsung-galaxy-a56-5g",
    categoryId: "foldable-phones",
    images: [
      "/images/products/samsung-galaxy-a56/1.webp",
      "/images/products/samsung-galaxy-a56/2.webp",
      "/images/products/samsung-galaxy-a56/3.webp",
    ],
    info: {
      persianName: "گوشی موبایل سامسونگ Galaxy A56 5G ظرفیت 256 گیگابایت",
      englishName: "Samsung Galaxy A56 5G 256GB",
      rating: 4.7,
      colors: [
        { name: "گرافیتی", value: "#424242" },
        { name: "خاکستری", value: "#B8B8B8" },
        { name: "صورتی", value: "#D9BFC6" },
      ],
      features: [
        { label: "نمایشگر", value: "6.7 اینچ Super AMOLED" },
        { label: "پردازنده", value: "Exynos 1580" },
        { label: "رم", value: "8 گیگابایت" },
        { label: "حافظه داخلی", value: "256 گیگابایت" },
        { label: "دوربین اصلی", value: "50 مگاپیکسل با لرزشگیر اپتیکال" },
      ],
      description:
        "گلکسی A56 5G یک گوشی میان‌رده با نمایشگر بزرگ AMOLED، دوربین اصلی مجهز به لرزشگیر اپتیکال و پشتیبانی از شبکه 5G است که برای استفاده روزمره، عکاسی و سرگرمی مناسب است.",
    },
    purchasePanel: {
      storeName: "کالاچی",
      sellerRating: 4.7,
      guarantee: "18 ماه گارانتی شرکتی",
      stock: 8,
      originalPrice: 43_000_000,
      finalPrice: 40_500_000,
    },
  },

  // 3. ASUS ROG Phone 9
  {
    id: "3",
    slug: "asus-rog-phone-9",
    categoryId: "gaming-phones",
    images: [
      "/images/products/asus-rog-phone-9/1.webp",
      "/images/products/asus-rog-phone-9/2.webp",
      "/images/products/asus-rog-phone-9/3.webp",
    ],
    info: {
      persianName: "گوشی گیمینگ ایسوس ROG Phone 9 ظرفیت 512 گیگابایت",
      englishName: "ASUS ROG Phone 9 512GB",
      rating: 4.8,
      colors: [
        { name: "مشکی", value: "#202124" },
        { name: "سفید", value: "#E7E7E7" },
      ],
      features: [
        { label: "نمایشگر", value: "6.78 اینچ AMOLED" },
        { label: "پردازنده", value: "Qualcomm Snapdragon 8 Elite" },
        { label: "رم", value: "16 گیگابایت" },
        { label: "حافظه داخلی", value: "512 گیگابایت" },
        { label: "نرخ نوسازی", value: "تا 185 هرتز" },
      ],
      description:
        "ROG Phone 9 با سخت‌افزار قدرتمند، نمایشگر سریع و امکانات ویژه بازی، برای گیمرهایی مناسب است که اجرای روان بازی‌ها و عملکرد پایدار را در اولویت قرار می‌دهند.",
    },
    purchasePanel: {
      storeName: "کالاچی",
      sellerRating: 4.8,
      guarantee: "18 ماه گارانتی شرکتی",
      stock: 2,
      originalPrice: 115_000_000,
      finalPrice: 109_000_000,
    },
  },

  // 4. Lenovo LOQ 15IRX9
  {
    id: "4",
    slug: "lenovo-loq-15irx9",
    categoryId: "gaming-laptops",
    images: [
      "/images/products/lenovo-loq-15irx9/1.webp",
      "/images/products/lenovo-loq-15irx9/2.webp",
      "/images/products/lenovo-loq-15irx9/3.webp",
    ],
    info: {
      persianName: "لپ‌تاپ گیمینگ لنوو LOQ 15IRX9",
      englishName: "Lenovo LOQ 15IRX9",
      rating: 4.7,
      colors: [{ name: "خاکستری", value: "#55565A" }],
      features: [
        { label: "پردازنده", value: "Intel Core i7-13650HX" },
        { label: "پردازنده گرافیکی", value: "NVIDIA GeForce RTX 4060" },
        { label: "رم", value: "16 گیگابایت" },
        { label: "حافظه داخلی", value: "512 گیگابایت SSD" },
        { label: "نمایشگر", value: "15.6 اینچ Full HD" },
      ],
      description:
        "لپ‌تاپ گیمینگ Lenovo LOQ برای اجرای بازی‌ها و نرم‌افزارهای سنگین طراحی شده است. ترکیب پردازنده سری HX و گرافیک مجزا، آن را برای بازی، تدوین و کارهای گرافیکی مناسب می‌کند.",
    },
    purchasePanel: {
      storeName: "کالاچی",
      sellerRating: 4.7,
      guarantee: "18 ماه گارانتی شرکتی",
      stock: 4,
      originalPrice: 105_000_000,
      finalPrice: 99_000_000,
    },
  },

  // 5. Lenovo Yoga 7 2-in-1
  {
    id: "5",
    slug: "lenovo-yoga-7-2-in-1",
    categoryId: "ultrabooks",
    images: [
      "/images/products/lenovo-yoga-7-2-in-1/1.webp",
      "/images/products/lenovo-yoga-7-2-in-1/2.webp",
      "/images/products/lenovo-yoga-7-2-in-1/3.webp",
    ],
    info: {
      persianName: "لپ‌تاپ لنوو Yoga 7 دوکاره 14 اینچی",
      englishName: "Lenovo Yoga 7 2-in-1 14-inch",
      rating: 4.6,
      colors: [{ name: "خاکستری", value: "#777777" }],
      features: [
        { label: "پردازنده", value: "Intel Core Ultra 5" },
        { label: "رم", value: "16 گیگابایت" },
        { label: "حافظه داخلی", value: "512 گیگابایت SSD" },
        { label: "اندازه نمایشگر", value: "14 اینچ" },
        { label: "طراحی", value: "تبدیل‌پذیر با لولای 360 درجه" },
      ],
      description:
        "Lenovo Yoga 7 یک لپ‌تاپ دوکاره با طراحی تبدیل‌پذیر است که امکان استفاده در حالت لپ‌تاپ و تبلت را فراهم می‌کند و برای کار، مطالعه و جابه‌جایی روزانه گزینه‌ای کاربردی است.",
    },
    purchasePanel: {
      storeName: "کالاچی",
      sellerRating: 4.6,
      guarantee: "18 ماه گارانتی شرکتی",
      stock: 3,
      originalPrice: 95_000_000,
      finalPrice: 91_000_000,
    },
  },

  // 6. Lenovo IdeaPad Slim 3
  {
    id: "6",
    slug: "lenovo-ideapad-slim-3",
    categoryId: "convertible-laptops",
    images: [
      "/images/products/lenovo-ideapad-slim-3/1.webp",
      "/images/products/lenovo-ideapad-slim-3/2.webp",
      "/images/products/lenovo-ideapad-slim-3/3.webp",
    ],
    info: {
      persianName: "لپ‌تاپ لنوو IdeaPad Slim 3 پانزده اینچی",
      englishName: "Lenovo IdeaPad Slim 3 15-inch",
      rating: 4.5,
      colors: [{ name: "خاکستری", value: "#777777" }],
      features: [
        { label: "پردازنده", value: "Intel Core 5 210H" },
        { label: "رم", value: "16 گیگابایت" },
        { label: "حافظه داخلی", value: "512 گیگابایت SSD" },
        { label: "نمایشگر", value: "15.3 اینچ" },
        { label: "کاربری", value: "روزمره، دانشجویی و اداری" },
      ],
      description:
        "IdeaPad Slim 3 برای کارهای روزمره، امور اداری و استفاده دانشجویی طراحی شده است. حافظه SSD و طراحی نسبتاً سبک، استفاده روزانه از آن را ساده‌تر می‌کنند.",
    },
    purchasePanel: {
      storeName: "کالاچی",
      sellerRating: 4.5,
      guarantee: "18 ماه گارانتی شرکتی",
      stock: 6,
      originalPrice: 48_000_000,
      finalPrice: 45_000_000,
    },
  },

  // 7. Samsung Galaxy Tab S10 FE
  {
    id: "7",
    slug: "samsung-galaxy-tab-s10-fe",
    categoryId: "android-tablets",
    images: [
      "/images/products/samsung-galaxy-tab-s10-fe/1.webp",
      "/images/products/samsung-galaxy-tab-s10-fe/2.webp",
      "/images/products/samsung-galaxy-tab-s10-fe/3.webp",
    ],
    info: {
      persianName: "تبلت سامسونگ Galaxy Tab S10 FE ظرفیت 128 گیگابایت",
      englishName: "Samsung Galaxy Tab S10 FE 128GB",
      rating: 4.7,
      colors: [
        { name: "خاکستری", value: "#777777" },
        { name: "آبی", value: "#A7C5DC" },
        { name: "نقره‌ای", value: "#D8D8D8" },
      ],
      features: [
        { label: "نمایشگر", value: "10.9 اینچ LCD با نرخ نوسازی 90 هرتز" },
        { label: "پردازنده", value: "Exynos 1580" },
        { label: "رم", value: "8 گیگابایت" },
        { label: "حافظه داخلی", value: "128 گیگابایت" },
        { label: "قلم", value: "پشتیبانی از S Pen" },
      ],
      description:
        "Galaxy Tab S10 FE برای مطالعه، یادداشت‌برداری، تماشای محتوا و انجام کارهای روزمره مناسب است و از قلم S Pen پشتیبانی می‌کند.",
    },
    purchasePanel: {
      storeName: "کالاچی",
      sellerRating: 4.7,
      guarantee: "18 ماه گارانتی شرکتی",
      stock: 5,
      originalPrice: 43_000_000,
      finalPrice: 40_000_000,
    },
  },

  // 8. Apple iPad Air M3
  {
    id: "8",
    slug: "apple-ipad-air-m3",
    categoryId: "ipad",
    images: [
      "/images/products/ipad-air-m3/1.webp",
      "/images/products/ipad-air-m3/2.webp",
      "/images/products/ipad-air-m3/3.webp",
    ],
    info: {
      persianName: "تبلت اپل iPad Air M3 یازده اینچی ظرفیت 128 گیگابایت",
      englishName: "Apple iPad Air 11-inch M3 128GB",
      rating: 4.8,
      colors: [
        { name: "آبی", value: "#9CBFE0" },
        { name: "بنفش", value: "#B8A6D9" },
        { name: "خاکستری", value: "#777777" },
        { name: "نقره‌ای", value: "#D8D8D8" },
      ],
      features: [
        { label: "نمایشگر", value: "11 اینچ Liquid Retina" },
        { label: "پردازنده", value: "Apple M3" },
        { label: "حافظه داخلی", value: "128 گیگابایت" },
        { label: "اتصالات", value: "Wi-Fi" },
        { label: "قلم", value: "سازگار با Apple Pencil" },
      ],
      description:
        "iPad Air با تراشه M3 عملکرد قدرتمندی را در بدنه‌ای باریک ارائه می‌دهد و برای مطالعه، طراحی، ویرایش محتوا و استفاده از برنامه‌های حرفه‌ای مناسب است.",
    },
    purchasePanel: {
      storeName: "کالاچی",
      sellerRating: 4.8,
      guarantee: "18 ماه گارانتی شرکتی",
      stock: 3,
      originalPrice: 72_000_000,
      finalPrice: 68_000_000,
    },
  },

  // 9. Xiaomi Pad 7
  {
    id: "9",
    slug: "xiaomi-pad-7",
    categoryId: "gaming-tablets",
    images: [
      "/images/products/xiaomi-pad-7/1.webp",
      "/images/products/xiaomi-pad-7/2.webp",
      "/images/products/xiaomi-pad-7/3.webp",
    ],
    info: {
      persianName: "تبلت شیائومی Pad 7 ظرفیت 256 گیگابایت",
      englishName: "Xiaomi Pad 7 256GB",
      rating: 4.7,
      colors: [
        { name: "مشکی", value: "#353535" },
        { name: "آبی", value: "#A8C9DF" },
        { name: "سبز", value: "#B9C9B6" },
      ],
      features: [
        { label: "نمایشگر", value: "11.2 اینچ با نرخ نوسازی 144 هرتز" },
        { label: "پردازنده", value: "Qualcomm Snapdragon 7+ Gen 3" },
        { label: "رم", value: "8 گیگابایت" },
        { label: "حافظه داخلی", value: "256 گیگابایت" },
        { label: "کاربری", value: "سرگرمی، بازی و چندوظیفگی" },
      ],
      description:
        "Xiaomi Pad 7 با نمایشگر سریع و سخت‌افزار توانمند برای تماشای فیلم، بازی، مطالعه و انجام هم‌زمان چند کار طراحی شده است.",
    },
    purchasePanel: {
      storeName: "کالاچی",
      sellerRating: 4.7,
      guarantee: "18 ماه گارانتی شرکتی",
      stock: 7,
      originalPrice: 39_000_000,
      finalPrice: 36_500_000,
    },
  },

  // 10. Anker Nano 30W
  {
    id: "10",
    slug: "anker-nano-30w",
    categoryId: "mobile-chargers",
    images: [
      "/images/products/anker-nano-30w/1.webp",
      "/images/products/anker-nano-30w/2.webp",
      "/images/products/anker-nano-30w/3.webp",
    ],
    info: {
      persianName: "شارژر دیواری انکر Nano توان 30 وات",
      englishName: "Anker Nano 30W USB-C Charger",
      rating: 4.6,
      colors: [
        { name: "سفید", value: "#F4F4F4" },
        { name: "مشکی", value: "#292929" },
      ],
      features: [
        { label: "توان خروجی", value: "30 وات" },
        { label: "درگاه خروجی", value: "USB-C" },
        { label: "نوع شارژ", value: "شارژ سریع" },
        { label: "کاربری", value: "گوشی و دستگاه‌های سازگار" },
        { label: "طراحی", value: "جمع‌وجور و قابل حمل" },
      ],
      description:
        "شارژر Anker Nano با توان 30 وات و طراحی جمع‌وجور برای شارژ دستگاه‌های سازگار مناسب است. سرعت شارژ نهایی به دستگاه و کابل مورد استفاده بستگی دارد.",
    },
    purchasePanel: {
      storeName: "کالاچی",
      sellerRating: 4.6,
      guarantee: "18 ماه گارانتی شرکتی",
      stock: 12,
      originalPrice: 2_500_000,
      finalPrice: 2_200_000,
    },
  },
];