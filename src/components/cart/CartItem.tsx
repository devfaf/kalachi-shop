"use client"

import { IoTrashOutline } from "react-icons/io5";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FiMoreVertical } from "react-icons/fi";
import Image from "next/image";

import { cartItem as CartItemType, useCartStore } from "@/store/cartStore";

type CartItemProps = {
    item: CartItemType;
};

const CartItem = ({ item }: CartItemProps) => {
    const increaseQuantity = useCartStore((state) => state.increaseQuantity);
    const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
    const removeItem = useCartStore((state) => state.removeItem);

    const { product, quantity } = item;

    const price =
        product.purchasePanel.finalPrice ?? product.purchasePanel.originalPrice;
    const originalPrice = product.purchasePanel.originalPrice;
    const hasDiscount =
        product.purchasePanel.finalPrice != null &&
        product.purchasePanel.finalPrice < originalPrice;

    const totalPrice = price * quantity;

    return (
        <div className="flex min-h-0 w-full flex-col pb-2 border-b border-gray-200">
            <div className="flex items-start gap-3">
                {/* Image */}
                <div className="relative h-18 w-18 shrink-0 overflow-hidden rounded-lg bg-gray-50">
                    <Image
                        src={product.images[0]}
                        alt={product.info.persianName}
                        fill
                        sizes="64px"
                        className="object-cover"
                    />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1 py-2">
                    {/* Title */}
                    <h3 className="truncate text-base font-semibold text-gray-800">
                        {product.info.persianName}
                    </h3>

                    <div className="mt-2 flex items-center justify-between gap-3">
                        {/* Quantity */}
                        <div className="flex shrink-0 items-center gap-0.5 rounded-full border border-gray-200 bg-gray-50 p-0.5">
                            <button
                                type="button"
                                onClick={() => increaseQuantity(product.id)}
                                aria-label="افزودن"
                                disabled={quantity >= (product.purchasePanel.stock ?? Infinity)}
                                className="flex h-7 w-7 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-white hover:text-gray-900 disabled:opacity-40"
                            >
                                <FiPlus className="h-3.5 w-3.5" />
                            </button>

                            <span className="min-w-[1.5rem] text-center text-sm font-semibold text-gray-800 tabular-nums">
                                {quantity.toLocaleString("fa-IR")}
                            </span>

                            {quantity === 1 ? (
                                <button
                                    type="button"
                                    onClick={() => removeItem(product.id)}
                                    aria-label="حذف"
                                    className="flex h-7 w-7 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-white hover:text-gray-900"
                                >
                                    <IoTrashOutline className="h-3.5 w-3.5 text-red-500" />
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => decreaseQuantity(product.id)}
                                    aria-label="کاهش"
                                    className="flex h-7 w-7 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-white hover:text-gray-900"
                                >
                                    <FiMinus className="h-3.5 w-3.5" />
                                </button>
                            )}
                        </div>

                        {/* Price */}
                        <div className="flex shrink-0 flex-col items-end">
                            {hasDiscount && (
                                <span className="text-xs text-gray-400 line-through">
                                    {originalPrice.toLocaleString("fa-IR")}
                                </span>
                            )}
                            <span className="text-sm font-bold text-gray-900">
                                {price.toLocaleString("fa-IR")}
                                <span className="mr-1 text-xs font-normal text-gray-500">تومان</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;