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
    bg: "bg-blue-500/15",
    border: "border-blue-400/40",
    hoverBg: "group-hover:bg-blue-500/25",
    hoverBorder: "group-hover:border-blue-500",
    iconColor: "text-blue-600",
    hoverIcon: "group-hover:text-blue-500",
    glow: "group-hover:shadow-blue-400/50",
    textHover: "group-hover:text-blue-600",
  },
  {
    categoryId: "gaming-laptops",
    slug: "gaming-laptops",
    name: "لپ‌تاپ گیمینگ",
    icon: FaLaptop,
    bg: "bg-purple-500/15",
    border: "border-purple-400/40",
    hoverBg: "group-hover:bg-purple-500/25",
    hoverBorder: "group-hover:border-purple-500",
    iconColor: "text-purple-600",
    hoverIcon: "group-hover:text-purple-500",
    glow: "group-hover:shadow-purple-400/50",
    textHover: "group-hover:text-purple-600",
  },
  {
    categoryId: "ipad",
    slug: "ipad",
    name: "آیپد",
    icon: FaTabletAlt,
    bg: "bg-cyan-500/15",
    border: "border-cyan-400/40",
    hoverBg: "group-hover:bg-cyan-500/25",
    hoverBorder: "group-hover:border-cyan-500",
    iconColor: "text-cyan-600",
    hoverIcon: "group-hover:text-cyan-500",
    glow: "group-hover:shadow-cyan-400/50",
    textHover: "group-hover:text-cyan-600",
  },
  {
    categoryId: "power-banks",
    slug: "power-banks",
    name: "پاوربانک",
    icon: FaPlug,
    bg: "bg-red-500/15",
    border: "border-red-400/40",
    hoverBg: "group-hover:bg-red-500/25",
    hoverBorder: "group-hover:border-red-500",
    iconColor: "text-red-600",
    hoverIcon: "group-hover:text-red-500",
    glow: "group-hover:shadow-red-400/50",
    textHover: "group-hover:text-red-600",
  },
  {
    categoryId: "headphones",
    slug: "headphones",
    name: "هدفون",
    icon: FaHeadphones,
    bg: "bg-pink-500/15",
    border: "border-pink-400/40",
    hoverBg: "group-hover:bg-pink-500/25",
    hoverBorder: "group-hover:border-pink-500",
    iconColor: "text-pink-600",
    hoverIcon: "group-hover:text-pink-500",
    glow: "group-hover:shadow-pink-400/50",
    textHover: "group-hover:text-pink-600",
  },
  {
    categoryId: "gaming-monitors",
    slug: "gaming-monitors",
    name: "مانیتور گیمینگ",
    icon: FaDesktop,
    bg: "bg-orange-500/15",
    border: "border-orange-400/40",
    hoverBg: "group-hover:bg-orange-500/25",
    hoverBorder: "group-hover:border-orange-500",
    iconColor: "text-orange-600",
    hoverIcon: "group-hover:text-orange-500",
    glow: "group-hover:shadow-orange-400/50",
    textHover: "group-hover:text-orange-600",
  },
  {
    categoryId: "gaming-keyboards",
    slug: "gaming-keyboards",
    name: "کیبورد گیمینگ",
    icon: FaKeyboard,
    bg: "bg-emerald-500/15",
    border: "border-emerald-400/40",
    hoverBg: "group-hover:bg-emerald-500/25",
    hoverBorder: "group-hover:border-emerald-500",
    iconColor: "text-emerald-600",
    hoverIcon: "group-hover:text-emerald-500",
    glow: "group-hover:shadow-emerald-400/50",
    textHover: "group-hover:text-emerald-600",
  },
  {
    categoryId: "speakers",
    slug: "speakers",
    name: "اسپیکر",
    icon: FaVolumeUp,
    bg: "bg-indigo-500/15",
    border: "border-indigo-400/40",
    hoverBg: "group-hover:bg-indigo-500/25",
    hoverBorder: "group-hover:border-indigo-500",
    iconColor: "text-indigo-600",
    hoverIcon: "group-hover:text-indigo-500",
    glow: "group-hover:shadow-indigo-400/50",
    textHover: "group-hover:text-indigo-600",
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-6 md:py-10 px-3 md:px-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <h2 className="text-lg md:text-2xl font-bold text-gray-800">
          دسته‌بندی‌های محبوب
        </h2>
        <Link
          href="/categories"
          className="text-sm md:text-base text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          مشاهده همه
        </Link>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-5 lg:gap-7">
        {featuredCategories.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.categoryId}
              href={`/category/${item.slug}`}
              className="group flex flex-col items-center gap-2 md:gap-3 cursor-pointer"
            >
              <div
                className={`relative w-full aspect-square max-w-[110px] md:max-w-[130px] lg:max-w-[150px] rounded-full backdrop-blur-md border shadow-sm group-hover:shadow-lg transition-all duration-300 flex items-center justify-center overflow-hidden ${item.bg} ${item.border} ${item.hoverBg} ${item.hoverBorder} ${item.glow}`}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/50 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2/3 h-1/3 bg-white/50 rounded-full blur-md pointer-events-none" />

                <Icon
                  className={`relative text-3xl md:text-4xl lg:text-5xl drop-shadow-sm group-hover:scale-110 transition-all duration-300 ${item.iconColor} ${item.hoverIcon}`}
                />
              </div>

              <p
                className={`text-[11px] md:text-sm text-center text-gray-700 font-medium leading-tight line-clamp-2 transition-colors duration-200 ${item.textHover}`}
              >
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