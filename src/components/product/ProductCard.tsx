
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export type ProductCardData = {
  id: string;
  slug: string;
  persianName: string;
  englishName: string;
  price: number;
  originalPrice: number;
  images: {
    url: string;
    sortOrder: number;
  }[];
};

type ProductCardProps = {
  product: ProductCardData;
};

const ProductCard = ({ product }: ProductCardProps) => {
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

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-muted/30 to-muted/60">
          <img
            src={image}
            alt={product.persianName}
            className="h-full w-full object-contain p-6"
          />

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

            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
              <ShoppingCart size={16} strokeWidth={2} />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
