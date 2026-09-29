import { create } from "zustand";
import { Product } from "@/data/products"

export type cartItem = {
    product: Product;
    quantity: number;
}

type cartStore = {
    items: cartItem[];

    addItem: (product: Product) => void;
    increaseQuantity: (productId: string) => void;
    decreaseQuantity: (productId: string) => void;
    removeItem: (productId: string) => void;
}

export const useCartStore = create<cartStore>((set) => ({
    items: [],

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
                item.product.id === productId ? { ...item, quantity: item.quantity + 1 } : item
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
}))
