import { HiOutlineShoppingCart } from "react-icons/hi2";
import { toPersianNumber } from "@/lib/utils/farsiNumbers";
import { useState } from "react";
import Cart from "@/components/cart/Cart";

const CardWrapper = () => {
  const [isCartDisplay, setIsCartDisplay] = useState(false);

  return (
    <div className="relative">
      <button
        onMouseEnter={() => setIsCartDisplay(true)}
        onMouseLeave={() => setIsCartDisplay(false)}
        type="button"
        aria-label="آیتم در سبد خرید"
        className="relative inline-flex items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
      >
        <HiOutlineShoppingCart size={30} />

        <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold leading-none text-primary-foreground">
          {toPersianNumber(3)}
        </span>
      </button>

      {isCartDisplay && (
        <div
          onMouseEnter={() => setIsCartDisplay(true)}
          onMouseLeave={() => setIsCartDisplay(false)}
          className="absolute top-8 end-0 z-50"
        >
          <Cart />
        </div>
      )}
    </div>
  );
};

export default CardWrapper;