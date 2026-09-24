"use client";

import Image from "next/image";

import Enamad from "@/assets/validity/enamad.png";
import Samandehi from "@/assets/validity/samandehi.png";
import Union from "@/assets/validity/union.png";

const validityBadges = [
  { src: Enamad, alt: "نماد اعتماد الکترونیکی" },
  { src: Samandehi, alt: "نماد ساماندهی" },
  { src: Union, alt: "عضو اتحادیه کسب و کارهای مجازی" },
];

const FooterAbout = () => {
  return (
    <section
      dir="rtl"
      className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
    >
      {/* About */}
      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-bold text-foreground md:text-xl">
          فروشگاه اینترنتی کالاچی، بررسی، انتخاب و خرید آنلاین
        </h2>

        <p className="max-w-3xl text-sm leading-8 text-muted-foreground md:text-[15px]">
          کالاچی به عنوان یکی از فروشگاه‌های اینترنتی، با پایبندی به اصول
          مشتری‌مداری، تضمین کیفیت و ارائه خدمات مناسب تلاش می‌کند تجربه‌ای
          مطمئن و آسان برای خرید آنلاین فراهم کند. در کالاچی می‌توانید محصولات
          مورد نیاز خود را بررسی کرده، مقایسه کنید و با اطمینان خرید خود را
          انجام دهید.
        </p>
      </div>

      {/* Validity */}
      <div className="flex shrink-0 items-center justify-center gap-3 md:gap-4">
        {validityBadges.map(({ src, alt }) => (
          <div
            key={alt}
            className="group flex items-center justify-center rounded-xl border border-border/60 bg-background p-2 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
          >
            <Image
              src={src}
              alt={alt}
              width={80}
              height={80}
              className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-105 md:h-20 md:w-20"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FooterAbout;