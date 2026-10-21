
"use client";

import { useEffect, useState } from "react";
import PageContainer from "../common/PageContainer";
import ProductCard from "../product/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";

type Campaign = {
  endsAt: string;
};

type OfferProduct = {
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

const AmazingOffers = () => {
  const [products, setProducts] = useState<OfferProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products/amazing-offers");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data: OfferProduct[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching offer products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Timer
  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const response = await fetch(
          "/api/products/amazing-offers/campaign"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch campaign");
        }

        const data = await response.json();
        setCampaign(data);
      } catch (error) {
        console.error("Error fetching campaign:", error);
      }
    };

    fetchCampaign();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeLeft = campaign
    ? Math.max(0, Math.floor((new Date(campaign.endsAt).getTime() - now) / 1000))
    : 0;

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  const formatTime = (value: number) => String(value).padStart(2, "0");

  return (
    <section className="bg-primary text-primary-foreground py-4">
      <PageContainer>
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className=" flex gap-4 items-center">
            <div className="flex flex-col">
              <h2 className="text-xl font-bold md:text-2xl">
                شگفت‌انگیز کالاچی
              </h2>

              <p className="mt-1 text-sm text-primary-foreground/75">
                پیشنهادهای ویژه با قیمت استثنایی
              </p>
            </div>
            {campaign && (
              <div
                dir="ltr"
                className="flex shrink-0 items-center gap-1.5 text-sm font-bold"
              >
                <span className="rounded-md bg-primary-foreground/15 px-2 py-1 tabular-nums">
                  {formatTime(hours).replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)])}
                </span>
                :
                <span className="rounded-md bg-primary-foreground/15 px-2 py-1 tabular-nums">
                  {formatTime(minutes).replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)])}
                </span>
                :
                <span className="rounded-md bg-primary-foreground/15 px-2 py-1 tabular-nums">
                  {formatTime(seconds).replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)])}
                </span>
              </div>
            )}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => swiper?.slidePrev()}
              disabled={!swiper}
              aria-label="محصولات قبلی"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-primary-foreground/20 disabled:opacity-40"
            >
              <ChevronRight size={14} strokeWidth={2} />
            </button>

            <button
              type="button"
              onClick={() => swiper?.slideNext()}
              disabled={!swiper}
              aria-label="محصولات بعدی"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-primary-foreground/20 disabled:opacity-40"
            >
              <ChevronLeft size={14} strokeWidth={2} />
            </button>
          </div>
        </div>

        {loading ? (
          <p className="py-10 text-center text-sm">
            در حال دریافت محصولات...
          </p>
        ) : products.length === 0 ? (
          <p className="py-10 text-center text-sm">
            محصولی برای نمایش وجود ندارد.
          </p>
        ) : (
          <div className="min-w-0 overflow-hidden">
            <Swiper
              onSwiper={(instance) => setSwiper(instance)}
              dir="rtl"
              spaceBetween={12}
              slidesPerView={1.4}
              breakpoints={{
                480: { slidesPerView: 2, spaceBetween: 16 },
                768: { slidesPerView: 3, spaceBetween: 16 },
                1024: { slidesPerView: 4, spaceBetween: 16 },
                1280: { slidesPerView: 5, spaceBetween: 16 },
              }}
              className="w-full !overflow-hidden"
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

export default AmazingOffers;
