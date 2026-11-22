
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
      className="flex flex-col gap-8 border-t border-border py-8 md:flex-row md:items-center md:justify-between md:gap-10"
    >
      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <h2 className="text-base font-bold leading-8 text-foreground sm:text-lg">
          فروشگاه اینترنتی کالاچی، بررسی، انتخاب و خرید آنلاین
        </h2>

        <p className="max-w-3xl text-sm leading-8 text-muted-foreground">
          کالاچی به عنوان یکی از فروشگاه‌های اینترنتی، با پایبندی به اصول
          مشتری‌مداری، تضمین کیفیت و ارائه خدمات مناسب تلاش می‌کند تجربه‌ای
          مطمئن و آسان برای خرید آنلاین فراهم کند. در کالاچی می‌توانید محصولات
          مورد نیاز خود را بررسی کرده، مقایسه کنید و با اطمینان خرید خود را
          انجام دهید.
        </p>
      </div>

      <div className="flex shrink-0 items-center justify-center gap-3 sm:gap-4">
        {validityBadges.map(({ src, alt }) => (
          <div
            key={alt}
            className="group flex size-[76px] items-center justify-center rounded-xl border border-border bg-card p-2 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md sm:size-[88px]"
          >
            <Image
              src={src}
              alt={alt}
              width={80}
              height={80}
              className="size-full object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FooterAbout;
