"use client";
import Logo from "../header/Logo";
import AppButton from "@/components/common/AppButton";
import DistanceLine from "@/components/common/DistanceLine";
import { HiOutlineChevronUp } from "react-icons/hi2";

const FooterContacts = () => {
  return (
    <div className="border-b border-border pb-7">
      <div className="flex items-center justify-between gap-3 pb-6">
        <Logo />

        <AppButton
          variant="ghost"
          size="sm"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="gap-2 rounded-lg text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-primary sm:text-sm"
        >
          برگشت به بالا
          <HiOutlineChevronUp size={16} />
        </AppButton>
      </div>

      <div className="flex flex-col gap-4 text-sm md:flex-row md:flex-wrap md:items-center md:gap-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-muted-foreground">شماره تماس:</span>
          <span dir="ltr" className="font-semibold text-foreground">
            061-535-10225
          </span>
        </div>

        <DistanceLine className="hidden md:block" />

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-muted-foreground">آدرس ایمیل:</span>
          <a
            href="mailto:info@parskala.com"
            dir="ltr"
            className="font-semibold text-foreground transition-colors hover:text-primary"
          >
            info@parskala.com
          </a>
        </div>

        <DistanceLine className="hidden md:block" />

        <p className="text-xs leading-7 text-muted-foreground sm:text-sm">
          هفت روز هفته، ۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم.
        </p>
      </div>
    </div>
  );
};

export default FooterContacts;
