import Logo from "../Header/Logo";
import AppButton from "@/components/common/AppButton";
import DistanceLine from "@/components/common/DistanceLine";
import { HiOutlineChevronUp } from "react-icons/hi2";

const FooterContacts = () => {
  return (
    <div className="border-b border-border pb-6">
      {/* Top row: logo + back to top */}
      <div className="flex items-center justify-between pb-4">
        <Logo />
        <AppButton
          variant="ghost"
          size="sm"
          className="gap-2 text-muted-foreground hover:text-foreground"
        >
          برگشت به بالا
          <HiOutlineChevronUp size={15} />
        </AppButton>
      </div>

      {/* Contact info row */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
        <div className="text-sm">
          <span className="text-muted-foreground">شماره تماس: </span>
          <span
            dir="ltr"
            className="font-medium text-foreground"
          >
            061-535-10225
          </span>
        </div>

        <DistanceLine className="hidden md:block" />

        <div className="text-sm">
          <span className="text-muted-foreground">آدرس ایمیل: </span>
          <a
            href="mailto:info@parskala.com"
            dir="ltr"
            className="font-medium text-foreground transition-colors hover:text-primary"
          >
            info@parskala.com
          </a>
        </div>

        <DistanceLine className="hidden md:block" />

        <p className="text-sm text-muted-foreground">
          هفت روز هفته، ۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم.
        </p>
      </div>
    </div>
  );
};

export default FooterContacts;