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
    icon: <FaWhatsapp />,
    href: "#",
  },
  {
    title: "آپارات",
    icon: <SiAparat />,
    href: "#",
  },
  {
    title: "بله",
    icon: <Image src={BaleIcon} alt="" width={32} height={32} />,
    href: "#",
  },
  {
    title: "ایتا",
    icon: <Image src={EitaaIcon} alt="" width={32} height={32} />,
    href: "#",
  },
];

const FooterSocials = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="pt-2 text-lg font-bold text-foreground">
        ما را در شبکه‌های اجتماعی دنبال کنید
      </h3>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {socialLinks.map(({ title, icon, href }) => (
          <a
            key={title}
            href={href}
            aria-label={title}
            className="group flex size-10 items-center justify-center text-3xl text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:text-primary"
          >
            <span className="flex [&_img]:block [&_img]:transition [&_img]:duration-200 [&_img]:[filter:grayscale(1)_brightness(0)] group-hover:[&_img]:[filter:brightness(0)_saturate(100%)_invert(33%)_sepia(39%)_saturate(1014%)_hue-rotate(128deg)_brightness(88%)_contrast(91%)]">
              {icon}
            </span>
          </a>
        ))}
      </div>

      <p className="mt-1 text-lg font-bold text-foreground">
        عضویت در خبرنامه
      </p>

      <AppInput
        placeholder="شماره موبایل خود را وارد نمایید"
        buttonText="ثبت"
      />
    </div>
  );
};

export default FooterSocials;