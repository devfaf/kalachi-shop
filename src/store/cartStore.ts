import { create } from "zustand";
import { Product } from "@/data/products";
import { persist } from "zustand/middleware";

export type CartItem = {
    product: Product;
    quantity: number;
}

type CartStore = {
    items: CartItem[];

    addItem: (product: Product) => void;
    increaseQuantity: (productId: string) => void;
    decreaseQuantity: (productId: string) => void;
    removeItem: (productId: string) => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
}
export const useCartStore = create<CartStore>()(
    persist(

        (set, get) => ({
            items: [],
            getTotalItems: () =>
                get().items.reduce(
                    (total, item) => total + item.quantity,
                    0
                ),

            getTotalPrice: () =>
                get().items.reduce(
                    (total, item) =>
                        total +
                        (item.product.purchasePanel.finalPrice ??
                            item.product.purchasePanel.originalPrice) *
                        item.quantity,
                    0
                ),

            addItem: (product) =>
                set((state) => {
                    const existingItem = state.items.find((item) =>
                        item.product.id === product.id
                    )

                    if (existingItem) {
                        return {
                            items: state.items.map((item) =>
                                item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                            )
                        }
                    }

                    return {
                        items: [...state.items, { product, quantity: 1 }]
                    }

                }),

            increaseQuantity: (productId) =>
                set((state) => ({
                    items: state.items.map((item) =>
                        item.product.id === productId &&
                            item.quantity < item.product.purchasePanel.stock
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                })),

            decreaseQuantity: (productId) =>
                set((state) => ({
                    items: state.items.map((item) =>
                        item.product.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
                    ),
                })),

            removeItem: (productId) =>
                set((state) => ({
                    items: state.items.filter((item) =>
                        item.product.id !== productId
                    )
                }))
        }),
        {
            name: "cart-store"
        }


    )
)
