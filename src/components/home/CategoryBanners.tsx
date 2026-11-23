
import Link from "next/link";
import Image from "next/image";

const banners = [
  {
    image: "/images/banners/mobile.webp",
    href: "/products?category=mobile",
    alt: "محصولات موبایل",
  },
  {
    image: "/images/banners/laptop.webp",
    href: "/products?category=laptops",
    alt: "محصولات لپ تاپ",
  },
];

const CategoryBanners = () => {
    return (
<section className="py-5 md:py-7">
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-3 px-4 sm:px-6 md:grid-cols-2 md:gap-4 lg:px-8">
        {banners.map((banner) => (
            <Link
                key={banner.href}
                href={banner.href}
                className="group block overflow-hidden rounded-xl"
            >
                <Image
                    src={banner.image}
                    alt={banner.alt}
                    width={1200}
                    height={525}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="h-auto w-full rounded-xl object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                />
            </Link>
        ))}
    </div>
</section>
    );
};

export default CategoryBanners;
