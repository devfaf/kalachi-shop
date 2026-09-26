"use client"

import type { PurchasePanel } from "@/data/products"
import HorizontalSpacer from "../common/HorizontalSpacer"
import { GoShieldCheck } from "react-icons/go";
import Image from "next/image";


type PurchasePanelProps = {
  purchase: PurchasePanel;
}

const PurchasePanel = ({ purchase }: PurchasePanelProps) => {
  const getSellerRatingLabel = (rating: number) => {
    if (rating >= 4.5) return "عالی";
    if (rating >= 4) return "خوب";
    if (rating >= 3) return "متوسط";
    return "ضعیف";
  }

  const sellerRatingLabel = getSellerRatingLabel(purchase.sellerRating);

  const discountAmount = purchase.discountPrice ? purchase.discountPrice - purchase.price : 0

  const discountPercent = purchase.discountPrice ? Math.abs(Math.round((discountAmount / purchase.discountPrice) * 100)) : 0


  return (
    <>
      <aside className="hidden md:flex md:w-[28%] md:shrink-0 flex-col gap-4 bg-gray-100 rounded-xl p-4 h-fit">

        <div className="flex gap-1 items-center">
          <div className="text-sm text-gray-500">فروشنده</div>
          <div className="font-bold text-gray-800">{purchase.storeName}</div>
        </div>

        <div className="flex gap-1 items-center">
          <div className="text-sm text-gray-500">عملکرد</div>
          <div className={`font-bold ${sellerRatingLabel === "عالی" || sellerRatingLabel === "خوب" ?
            "text-green-600" :
            sellerRatingLabel === "متوسط" ?
              "text-yellow-600" : "text-red-600"
            }`}>
            {
              sellerRatingLabel
            }
          </div>
        </div>

        <HorizontalSpacer />

        <div className="flex flex-col gap-1">
          {purchase.discountPrice && (
            <div className="flex gap-4 items-center">
              <div className="line-through text-sm text-gray-400">
                {purchase.discountPrice}
              </div>
              <div className="text-xs bg-red-600 text-white py-[2px] px-2.5 rounded-xl text-center font-bold">
                {discountPercent}%
              </div>
            </div>
          )}
          <div className="text-lg font-bold text-gray-900">{purchase.price}</div>
        </div>

        {purchase.stock <= 3 && (
          <div className="flex gap-1 items-center">
            <Image
              src="/images/icons/fire.png"
              alt="آتش"
              width={20}
              height={20}
            />
            <div className="text-sm text-red-500">
              تنها {purchase.stock} عدد در انبار باقی مانده
            </div>
          </div>
        )}

        <button
          type="button"
          className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800
             text-white font-medium py-2.5 px-4 rounded-lg
             transition-colors duration-200 cursor-pointer"
        >
          افزودن به سبد خرید
        </button>

        <div className="flex gap-1 items-center">
          <GoShieldCheck className="text-lg" />
          <div className="text-sm text-gray-600">
            {purchase.guarantee}
          </div>
        </div>
      </aside>

      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 flex items-center gap-3 bg-white border-t border-gray-200 p-3 shadow-lg">
        <button
          type="button"
          className="flex-1 bg-blue-600 hover:bg-blue-700 active:bg-blue-800
             text-white font-medium py-2 px-4 rounded-lg
             transition-colors duration-200"
        >
          افزودن به سبد خرید
        </button>

        <div className="flex flex-col leading-tight">
          <div className="font-bold text-gray-900">{purchase.price}</div>
          {purchase?.discountPrice && (
            <div className="line-through text-xs text-gray-500">
              {purchase.discountPrice}
            </div>
          )}
        </div>

      </div>
    </>
  )
}
export default PurchasePanel