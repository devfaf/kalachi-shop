
"use client";

import Logo from "../../header/Logo";
import Search from "../../header/Search";

const MobileHeader = () => {
  return (
    <div className="flex w-full items-center justify-between lg:hidden">
      <div className="shrink-0">
        <Logo />
      </div>

      <Search variant="icon" />
    </div>
  );
};

export default MobileHeader;
