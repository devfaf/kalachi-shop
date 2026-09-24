"use client";

import { useState } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import Logo from "../Logo";
import Search from "../Search";
import Contact from "../Contact";
import Auth from "../Auth";
import Cart from "../Cart";
import MobileMenu from "./MobileMenu";

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mobileMenuHandler = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex w-full flex-col gap-3 md:hidden">
      {/* Row 1 */}
      <div className="relative flex h-[60px] items-center justify-between">
        {/* Hamburger */}
        <button
          type="button"
          onClick={mobileMenuHandler}
          aria-label="باز کردن منو"
          className="inline-flex items-center justify-center p-2 text-foreground transition-colors hover:text-primary"
        >
          <HiOutlineBars3 size={30} />
        </button>

        {/* Logo - دقیقاً وسط */}
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
        <Cart />
      </div>

      {/* Drawer */}
      <Drawer
        open={isMenuOpen}
        onClose={mobileMenuHandler}
        side="right"
      >
        <MobileMenu onClose={mobileMenuHandler} />
      </Drawer>
    </div>
  );
};

/* ---------- Drawer ---------- */

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  side?: "left" | "right";
  children: React.ReactNode;
}

const Drawer = ({ open, onClose, side = "right", children }: DrawerProps) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        className={`fixed inset-y-0 z-50 w-72 max-w-[85vw] bg-background shadow-lg transition-transform duration-300 ${
          side === "right" ? "right-0" : "left-0"
        } ${open ? "translate-x-0" : side === "right" ? "translate-x-full" : "-translate-x-full"}`}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="بستن منو"
          className="absolute left-3 top-3 inline-flex items-center justify-center p-1 text-muted-foreground transition-colors hover:text-foreground"
        >
          <HiOutlineXMark size={22} />
        </button>

        <div className="h-full overflow-y-auto pt-12">
          {children}
        </div>
      </aside>
    </>
  );
};

export default MobileHeader;