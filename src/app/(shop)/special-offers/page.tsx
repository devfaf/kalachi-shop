
"use client";

import { useEffect, useState } from "react";
import { Flame } from "lucide-react";
import ProductCard, {
  type ProductCardData,
} from "@/components/product/ProductCard";

const AmazingOffersPage = () => {
  const [products, setProducts] = useState<ProductCardData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products/amazing-offers");

        if (!response.ok) {
          throw new Error("دریافت محصولات ناموفق بود");
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex size-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
          <Flame size={26} />
        </div>

        <div>
          <h1 className="text-xl font-bold text-foreground sm:text-2xl">
            فروش ویژه
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            محصولات منتخب با قیمت ویژه
          </p>
        </div>
      </div>

      {loading ? (
        <p className="py-16 text-center text-muted-foreground">
          در حال دریافت محصولات...
        </p>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-border bg-card px-4 py-16 text-center">
          <Flame className="mx-auto mb-4 text-muted-foreground" size={36} />
          <h2 className="font-semibold text-foreground">
            در حال حاضر محصولی در فروش ویژه نیست
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            به زودی محصولات جدیدی به این بخش اضافه می‌شوند.
          </p>
        </div>
      )}
    </main>
  );
};

export default AmazingOffersPage;
