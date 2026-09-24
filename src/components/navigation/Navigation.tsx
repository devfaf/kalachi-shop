import Link from "next/link";
import { LiaFireAltSolid } from "react-icons/lia";
import Navbar from "./Navbar";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-4">
      <Navbar />

      <ul className="m-0 list-none p-0">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1.5 p-2.5 font-bold text-foreground transition-colors duration-200 hover:text-primary/80"
          >
            <LiaFireAltSolid size={25} />
            فروش ویژه
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;