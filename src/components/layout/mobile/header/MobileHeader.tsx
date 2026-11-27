
"use client";

import Logo from "../../header/Logo";
import Search from "../../header/Search";
import Contact from "../../header/Contact";
import Auth from "../../header/Auth";
import CardWrapper from "../../header/CardWrapper";

const MobileHeader = () => {
  return (
    <div className="flex w-full flex-col gap-3 md:hidden">
      {/* Row 1 */}
      <div className="relative flex h-[60px] items-center justify-between">
        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Logo />
        </div>

        {/* Contact */}
        <Contact />
      </div>

      {/* Row 2 */}
      <div className="flex w-full items-center gap-2">
        <Search />
        <Auth />
        <CardWrapper />
      </div>
    </div>
  );
};

export default MobileHeader;
