"use client";

import Logo from "./Logo";
import Search from "./Search";
import Location from "./Location";
import Contact from "./Contact";
import Auth from "./Auth";
import Cart from "./Cart";
import Navigation from "../../navigation/Navigation";
import MobileHeader from "./mobile-menu/MobileHeader";
import DistanceLine from "@/components/common/DistanceLine";

const Header = () => {
  return (
    <header className="border-b border-border bg-background pb-2 text-foreground md:pb-0">
      {/* ================= TOP HEADER ================= */}
      <div className="flex min-h-[105px] items-center gap-4 px-4 md:px-6">
        {/* Logo + Search + Location (Desktop) */}
        <div className="hidden h-20 min-w-0 flex-1 items-center gap-2 md:flex">
          <Logo />
          <Search />
          <Location />
        </div>

        {/* Other Actions (Desktop) */}
        <div className="hidden shrink-0 items-center gap-4 pl-4 md:flex">
          <Contact />
          <DistanceLine />
          <Auth />
          <DistanceLine />
          <Cart />
        </div>

        {/* Mobile / Tablet */}
        <MobileHeader />
      </div>

      {/* ================= NAVIGATION ================= */}
      <div className="hidden md:block">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;