import Link from "next/link";
import { RiArrowLeftSLine } from "react-icons/ri";
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

// پالت شیشه‌ای: آبی / بنفش / ایندیگو / فیروزه‌ای
const glassGradients = [
  "from-blue-500/60 via-blue-400/40 to-cyan-400/60",
  "from-indigo-500/60 via-indigo-400/40 to-purple-400/60",
  "from-purple-500/60 via-purple-400/40 to-blue-400/60",
  "from-cyan-500/60 via-cyan-400/40 to-indigo-400/60",
  "from-blue-500/60 via-indigo-500/40 to-purple-400/60",
  "from-indigo-500/60 via-blue-400/40 to-cyan-400/60",
  "from-purple-500/60 via-indigo-400/40 to-blue-400/60",
  "from-cyan-500/60 via-blue-400/40 to-purple-400/60",
];

const FeaturedCategories = () => {
  return (
    <section className="py-10 md:py-14 px-3 md:px-6 max-w-7xl mx-auto">
      {/* عنوان بخش */}
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <h2 className="text-lg md:text-2xl font-bold text-foreground">
          دسته‌بندی‌های محبوب
        </h2>
        <Link
          href="/categories"
          className="text-xs md:text-sm text-muted-foreground hover:text-foreground font-medium transition-colors flex items-center gap-1 group"
        >
          مشاهده همه
          <RiArrowLeftSLine className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:-translate-x-1 transition-transform duration-200" />
        </Link>
      </div>

      {/* گرید دسته‌بندی‌ها */}
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-5 lg:gap-7">
        {featuredCategories.map((item, index) => {
          const Icon = item.icon;
          const gradient = glassGradients[index % glassGradients.length];

          return (
            <Link
              key={item.categoryId}
              href={`/category/${item.slug}`}
              className="group flex flex-col items-center gap-2 md:gap-3 cursor-pointer"
            >
              {/* 🫧 دایره شیشه‌ای رنگی */}
              <div
                className={`relative w-full aspect-square max-w-[110px] md:max-w-[130px] lg:max-w-[150px] rounded-full bg-gradient-to-br ${gradient} backdrop-blur-xl border border-white/40 shadow-md shadow-indigo-500/10 group-hover:border-white/60 group-hover:shadow-lg group-hover:shadow-indigo-400/25 transition-all duration-300 flex items-center justify-center overflow-hidden`}
              >
                {/* براقی شیشه */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300" />

                {/* هایلایت بالای دایره */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2/3 h-1/3 bg-white/30 rounded-full blur-md pointer-events-none" />

                {/* آیکون */}
                <Icon className="relative text-3xl md:text-4xl lg:text-5xl text-white drop-shadow-md group-hover:scale-105 transition-transform duration-300" />
              </div>

              {/* نام دسته */}
              <p className="text-[11px] md:text-sm text-center text-foreground/80 group-hover:text-foreground font-medium leading-tight line-clamp-2 transition-colors duration-200">
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