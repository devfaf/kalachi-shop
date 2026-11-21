
"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import type { Product } from "@/data/products";

export type ProductCardData = {
  id: string;
  slug: string;
  categoryId: string;
  persianName: string;
  englishName: string;
  price: number;
  originalPrice: number;
  stock: number;
  rating: number;
  sellerRating: number;
  guarantee: string;
  storeName: string;
  description: string;
  images: {
    url: string;
    sortOrder: number;
  }[];
  colors: {
    name: string;
    value: string;
  }[];
  features: {
    label: string;
    value: string;
  }[];
};

type ProductCardProps = {
  product: ProductCardData;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore((state) => state.addItem);

  const discount =
    product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) /
            product.originalPrice) *
            100
        )
      : 0;

  const image = [...product.images].sort(
    (a, b) => a.sortOrder - b.sortOrder
  )[0]?.url;

  const cartProduct: Product = {
    id: product.id,
    slug: product.slug,
    categoryId: product.categoryId,
    images: product.images.map((image) => image.url),
    info: {
      persianName: product.persianName,
      englishName: product.englishName,
      rating: product.rating,
      colors: product.colors,
      features: product.features,
      description: product.description,
    },
    purchasePanel: {
      storeName: product.storeName,
      sellerRating: product.sellerRating,
      guarantee: product.guarantee,
      stock: product.stock,
      originalPrice: product.originalPrice,
      finalPrice:
        product.price < product.originalPrice
          ? product.price
          : undefined,
    },
  };

  const handleAddToCart = () => {
    if (product.stock <= 0) return;
    addItem(cartProduct);
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-muted/30 to-muted/60">
          {image && (
            <img
              src={image}
              alt={product.persianName}
              className="h-full w-full object-contain p-6"
            />
          )}

          {discount > 0 && (
            <span className="absolute right-3 top-3 rounded-full bg-destructive px-2.5 py-1 text-xs font-bold text-destructive-foreground shadow-md">
              {discount.toLocaleString("fa-IR")}٪
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2 p-4">
          <h2 className="line-clamp-2 min-h-[2.75rem] font-semibold leading-snug text-card-foreground transition-colors duration-200 group-hover:text-primary">
            {product.persianName}
          </h2>

          <p className="line-clamp-1 text-xs text-muted-foreground">
            {product.englishName}
          </p>

          <div className="mt-2 flex items-center justify-between gap-2">
            <div className="min-w-0">
              <p className="flex flex-wrap items-baseline gap-1 font-bold text-foreground">
                <span className="text-lg">
                  {product.price.toLocaleString("fa-IR")}
                </span>
                <span className="text-xs font-normal text-muted-foreground">
                  تومان
                </span>
              </p>

              {discount > 0 && (
                <p className="text-xs text-muted-foreground line-through">
                  {product.originalPrice.toLocaleString("fa-IR")} تومان
                </p>
              )}
            </div>
          </div>
        </div>
      </Link>

      <button
        type="button"
        onClick={handleAddToCart}
        disabled={product.stock <= 0}
        aria-label="افزودن به سبد خرید"
        title={product.stock <= 0 ? "ناموجود" : "افزودن به سبد خرید"}
        className="absolute bottom-4 left-4 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ShoppingCart size={16} strokeWidth={2} />
      </button>
    </div>
  );
};

export default ProductCard;
