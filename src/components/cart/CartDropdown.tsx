import { useCartStore } from "@/store/cartStore"
import CartItem from "./CartItem"
import { toPersianNumber } from "@/lib/utils/farsiNumbers"
import AppButton from "../common/AppButton"
import Image from "next/image";

const CartDropdown = () => {
  const cartItems = useCartStore((state) => state.items)

  const totalQuantity = cartItems.reduce((total, item) =>
    total + item.quantity
    , 0)

  const totalPrice = cartItems.reduce((total, item) => {
    const price = item.product.purchasePanel.finalPrice ??
      item.product.purchasePanel.originalPrice

    return total + price * item.quantity
  }
    , 0)


  return (
    <div className="w-90 max-w-[90vw] rounded-xl bg-white shadow-xl ring-1 ring-gray-200 flex flex-col">
      {/* هدر */}
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
        <h2 className="text-base font-bold text-gray-800">سبد خرید شما</h2>
        <span className="text-xs text-gray-400">
          {toPersianNumber(totalQuantity)} کالا
        </span>
      </div>

      {/* لیست آیتم‌ها */}
      {
        cartItems.length === 0 ?
          <div className="flex items-center w-full justify-center p-3">
            <Image
              src="/images/cart/empty-cart.png"
              alt="سبد خرید خالی"
              width={250}
              height={150}
            />
          </div>
          :
          <>
            <div className="max-h-[400px] space-y-2 overflow-y-auto p-3">
              {cartItems.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>
            <div className="grid grid-cols-2 place-items-center p-3 pt-0">
              <AppButton className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 !text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 cursor-pointer w-full">
                ثبت سفارش
              </AppButton>
              <div className="flex gap-1 items-center">
                <div className="text-lg font-bold">{toPersianNumber(totalPrice)}</div>
                <div className="text-sm">تومان</div>
              </div>
            </div>

          </>
      }

    </div>
  )
}
export default CartDropdown