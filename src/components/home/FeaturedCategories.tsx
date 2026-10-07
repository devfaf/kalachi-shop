import Link from "next/link";
import {
  FaMobileAlt,
  FaLaptop,
  FaTabletAlt,
  FaPlug,
  FaHeadphones,
  FaDesktop,
  FaKeyboard,
  FaVolumeUp,
} from "react-icons/fa";

const featuredCategories = [
  {
    categoryId: "foldable-phones",
    slug: "foldable-phones",
    name: "گوشی تاشو",
    icon: FaMobileAlt,
  },
  {
    categoryId: "gaming-laptops",
    slug: "gaming-laptops",
    name: "لپ‌تاپ گیمینگ",
    icon: FaLaptop,
  },
  {
    categoryId: "ipad",
    slug: "ipad",
    name: "آیپد",
    icon: FaTabletAlt,
  },
  {
    categoryId: "power-banks",
    slug: "power-banks",
    name: "پاوربانک",
    icon: FaPlug,
  },
  {
    categoryId: "headphones",
    slug: "headphones",
    name: "هدفون",
    icon: FaHeadphones,
  },
  {
    categoryId: "gaming-monitors",
    slug: "gaming-monitors",
    name: "مانیتور گیمینگ",
    icon: FaDesktop,
  },
  {
    categoryId: "gaming-keyboards",
    slug: "gaming-keyboards",
    name: "کیبورد گیمینگ",
    icon: FaKeyboard,
  },
  {
    categoryId: "speakers",
    slug: "speakers",
    name: "اسپیکر",
    icon: FaVolumeUp,
  },
];

const FeaturedCategories = () => {
  return (
    <section className="relative py-10 md:py-14 px-3 md:px-6 max-w-7xl mx-auto overflow-hidden">
      {/* 🌈 پس‌زمینه گرادیانی آبی-بنفش-سبز */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400" />

      {/* ✨ بلاب‌های نور برای عمق بیشتر */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-300/40 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-400/40 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10" />

      {/* عنوان بخش */}
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <h2 className="text-lg md:text-2xl font-bold text-white drop-shadow-md">
          دسته‌بندی‌های محبوب
        </h2>
        <Link
          href="/categories"
          className="text-sm md:text-base text-white/80 hover:text-white font-medium transition-colors flex items-center gap-1 group"
        >
          مشاهده همه
          <span className="group-hover:-translate-x-1 transition-transform duration-200">
            ←
          </span>
        </Link>
      </div>

      {/* گرید دسته‌بندی‌ها */}
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-5 lg:gap-7">
        {featuredCategories.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.categoryId}
              href={`/category/${item.slug}`}
              className="group flex flex-col items-center gap-2 md:gap-3 cursor-pointer"
            >
              {/* 🫧 آیکون دایره‌ای شیشه‌ای */}
              <div className="relative w-full aspect-square max-w-[110px] md:max-w-[130px] lg:max-w-[150px] rounded-full bg-white/15 backdrop-blur-md border border-white/30 group-hover:bg-white/25 group-hover:border-white/60 shadow-lg shadow-blue-900/20 group-hover:shadow-xl group-hover:shadow-cyan-300/30 transition-all duration-300 flex items-center justify-center overflow-hidden">
                {/* براقی شیشه */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* هایلایت بالای دایره */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2/3 h-1/3 bg-white/30 rounded-full blur-md pointer-events-none" />

                {/* آیکون */}
                <Icon className="relative text-3xl md:text-4xl lg:text-5xl text-white drop-shadow-md group-hover:scale-110 group-hover:text-cyan-100 transition-all duration-300" />
              </div>

              {/* نام دسته */}
              <p className="text-[11px] md:text-sm text-center text-white/90 group-hover:text-white font-medium leading-tight line-clamp-2 transition-colors duration-200 drop-shadow-sm">
                {item.name}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedCategories;