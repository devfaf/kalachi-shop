
import Link from "next/link";
import { RiArrowLeftSLine } from "react-icons/ri";
import {
  FaMobileAlt,
  FaLaptop,
  FaTabletAlt,
  FaPlug,
  FaHeadphones,
  FaDesktop,
} from "react-icons/fa";

const featuredCategories = [
  {
    categoryId: "mobile",
    slug: "mobile",
    name: "موبایل",
    icon: FaMobileAlt,
  },
  {
    categoryId: "laptops",
    slug: "laptops",
    name: "لپ‌تاپ",
    icon: FaLaptop,
  },
  {
    categoryId: "tablets",
    slug: "tablets",
    name: "تبلت",
    icon: FaTabletAlt,
  },
  {
    categoryId: "accessories",
    slug: "accessories",
    name: "لوازم جانبی",
    icon: FaPlug,
  },
  {
    categoryId: "audio",
    slug: "audio",
    name: "هدفون و بلندگو",
    icon: FaHeadphones,
  },
  {
    categoryId: "gaming",
    slug: "gaming",
    name: "گیمینگ",
    icon: FaDesktop,
  },
];

const FeaturedCategories = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 md:py-12 lg:px-8">
      <div className="mb-6 flex items-center justify-between md:mb-8">
        <h2 className="text-lg font-bold text-foreground md:text-2xl">
          دسته‌بندی‌های محبوب
        </h2>

        <Link
          href="/products"
          className="group flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-primary md:text-sm"
        >
          مشاهده همه
          <RiArrowLeftSLine className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-6">
        {featuredCategories.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.categoryId}
              href={`/products?category=${item.slug}`}
              className="group flex min-h-28 flex-col items-center justify-center gap-3 rounded-xl border border-border bg-card px-3 py-5 text-center transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 md:min-h-32"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-colors duration-200 group-hover:bg-primary/10 group-hover:text-primary md:h-14 md:w-14">
                <Icon className="h-6 w-6 md:h-7 md:w-7" />
              </span>

              <span className="text-xs font-semibold text-foreground transition-colors group-hover:text-primary md:text-sm">
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedCategories;
