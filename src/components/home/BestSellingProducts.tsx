"use client";

import { useEffect, useState } from "react";
import ProductCard, {
  type ProductCardData,
} from "../product/ProductCard";

import PageContainer from "../common/PageContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";

const BestSellingProducts = () => {
  const [products, setProducts] = useState<ProductCardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products/random");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data: ProductCardData[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching random products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-8">
      <PageContainer>
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-foreground md:text-2xl">
              پرفروش‌ترین کالاها
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              محصولات منتخب کالاچی
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => swiper?.slidePrev()}
              disabled={!swiper}
              aria-label="محصولات قبلی"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted disabled:opacity-40"
            >
              <ChevronRight size={17} />
            </button>

            <button
              type="button"
              onClick={() => swiper?.slideNext()}
              disabled={!swiper}
              aria-label="محصولات بعدی"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted disabled:opacity-40"
            >
              <ChevronLeft size={17} />
            </button>
          </div>
        </div>

        {loading ? (
          <p className="py-10 text-center text-sm text-muted-foreground">
            در حال دریافت محصولات...
          </p>
        ) : products.length === 0 ? (
          <p className="py-10 text-center text-sm text-muted-foreground">
            محصولی برای نمایش وجود ندارد.
          </p>
        ) : (
          <div className="min-w-0 overflow-hidden">
            <Swiper
              onSwiper={setSwiper}
              dir="rtl"
              spaceBetween={12}
              slidesPerView={1.4}
              breakpoints={{
                480: { slidesPerView: 2, spaceBetween: 16 },
                768: { slidesPerView: 3, spaceBetween: 16 },
                1024: { slidesPerView: 4, spaceBetween: 16 },
                1280: { slidesPerView: 5, spaceBetween: 16 },
              }}
              className="w-full"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id} className="h-auto">
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </PageContainer>
    </section>
  );
};

export default BestSellingProducts;