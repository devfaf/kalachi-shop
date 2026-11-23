
"use client";

import { FaWhatsapp } from "react-icons/fa";
import { SiAparat } from "react-icons/si";
import EitaaIcon from "@/assets/social/eitaa.svg";
import BaleIcon from "@/assets/social/bale.svg";
import AppInput from "@/components/common/AppInput";
import Image from "next/image";

const socialLinks = [
  {
    title: "واتساپ",
    icon: <FaWhatsapp size={25} />,
    href: "#",
  },
  {
    title: "آپارات",
    icon: <SiAparat size={25} />,
    href: "#",
  },
  {
    title: "بله",
    icon: <Image src={BaleIcon} alt="" width={25} height={25} />,
    href: "#",
  },
  {
    title: "ایتا",
    icon: <Image src={EitaaIcon} alt="" width={25} height={25} />,
    href: "#",
  },
];

const FooterSocials = () => {
  return (
    <div className="flex flex-col items-center gap-7">
      <div className="flex w-full flex-col items-center gap-4">
        <h3 className="text-center text-sm font-bold text-foreground sm:text-base">
          ما را در شبکه‌های اجتماعی دنبال کنید
        </h3>

        <div className="flex items-center justify-center gap-3">
          {socialLinks.map(({ title, icon, href }) => (
            <a
              key={title}
              href={href}
              aria-label={title}
              className="group flex size-11 items-center justify-center rounded-xl border border-border bg-muted/40 text-xl text-muted-foreground transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
            >
              <span className="text-black transition-colors group-hover:text-primary dark:text-white">
                {icon}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="w-full border-t border-border pt-6">
        <div className="mb-4 text-center">
          <h3 className="text-sm font-bold text-foreground sm:text-base">
            عضویت در خبرنامه
          </h3>
          <p className="mt-2 text-xs leading-6 text-muted-foreground">
            برای اطلاع از جدیدترین محصولات و پیشنهادها عضو شوید.
          </p>
        </div>

        <div className="mx-auto w-full max-w-md">
          <AppInput
            placeholder="شماره موبایل خود را وارد نمایید"
            buttonText="ثبت"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterSocials;
