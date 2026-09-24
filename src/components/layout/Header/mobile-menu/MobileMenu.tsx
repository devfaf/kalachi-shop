import Link from "next/link";
import { HiOutlineXMark } from "react-icons/hi2";
import { navItems } from "@/data/navItems";
import Logo from "../Logo";

type MobileMenuProps = {
  onClose: () => void;
};

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  return (
    <div className="w-[300px]">
      {/* Header: Logo + Close */}
      <div className="flex items-center justify-between border-b border-border p-4">
        <Logo />
        <button
          type="button"
          onClick={onClose}
          aria-label="بستن منو"
          className="inline-flex items-center justify-center p-1 text-foreground transition-colors hover:text-primary"
        >
          <HiOutlineXMark size={26} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href ?? "#"}
              onClick={onClose}
              className="flex items-center gap-1.5 border-b border-border px-4 py-4 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {Icon ? <Icon size={24} /> : null}
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default MobileMenu;