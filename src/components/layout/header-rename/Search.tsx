
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineCamera } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { Package, Search as SearchIcon } from "lucide-react";
import type { ProductCardData } from "@/components/product/ProductCard";

type SearchProduct = Pick<
  ProductCardData,
  "id" | "slug" | "persianName" | "englishName" | "stock" | "images"
>;

const Search = () => {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [products, setProducts] = useState<SearchProduct[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      setLoading(true);
      setError(false);

      try {
        const response = await fetch("/api/products", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data: SearchProduct[] = await response.json();
        setProducts(data);
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          return;
        }

        setError(true);
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchProducts();

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: PointerEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [value]);

  const results = useMemo(() => {
    const query = debouncedValue.trim().toLowerCase();

    if (query.length < 2) return [];

    return products
      .filter(
        (product) =>
          product.persianName.toLowerCase().includes(query) ||
          product.englishName.toLowerCase().includes(query)
      )
      .slice(0, 5);
  }, [products, debouncedValue]);

  const hasQuery = value.trim().length >= 2;

  return (
    <div ref={containerRef} className="relative min-w-0 flex-1">
      <div className="flex h-12 items-center overflow-hidden rounded-md border border-border bg-background transition-colors focus-within:border-primary/60">
        <button
          type="button"
          aria-label="جستجو"
          onClick={() => setIsOpen(true)}
          className="flex h-full w-11 shrink-0 items-center justify-center bg-primary text-primary-foreground transition-colors hover:bg-primary/90 active:scale-95"
        >
          <CiSearch size={26} />
        </button>

        <input
          type="text"
          value={value}
          onFocus={() => setIsOpen(true)}
          onChange={(event) => {
            setValue(event.target.value);
            setIsOpen(true);
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setIsOpen(false);
            }

            if (event.key === "Enter" && hasQuery) {
              window.location.href = `/products?search=${encodeURIComponent(value.trim())}`;
            }
          }}
          placeholder="جستجو در بین محصولات..."
          className="h-full min-w-0 flex-1 border-0 bg-transparent px-2 text-xs text-foreground outline-none placeholder:text-muted-foreground sm:text-sm"
        />

        <button
          type="button"
          aria-label="جستجوی تصویری"
          className="flex h-full w-10 shrink-0 items-center justify-center text-primary transition-transform duration-150 active:scale-[0.85]"
        >
          <HiOutlineCamera size={25} />
        </button>
      </div>

      {isOpen && hasQuery && (
        <div className="absolute inset-x-0 top-full z-50 mt-2 max-h-[min(420px,70vh)] overflow-y-auto rounded-xl border border-border bg-card shadow-xl">
          {loading ? (
            <div className="flex items-center justify-center gap-2 p-6 text-sm text-muted-foreground">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
              در حال جستجو...
            </div>
          ) : error ? (
            <p className="p-6 text-center text-sm text-destructive">
              دریافت محصولات با خطا مواجه شد.
            </p>
          ) : results.length > 0 ? (
            <div className="divide-y divide-border">
              {results.map((product) => {
                const image = product.images?.[0]?.url;

                return (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 p-3 transition-colors hover:bg-muted/60"
                  >
                    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-muted">
                      {image ? (
                        <Image
                          src={image}
                          alt={product.persianName}
                          fill
                          sizes="56px"
                          className="object-contain p-1"
                        />
                      ) : (
                        <Package className="h-6 w-6 text-muted-foreground" />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-foreground">
                        {product.persianName}
                      </p>

                      <p className="mt-1 truncate text-xs text-muted-foreground">
                        {product.englishName}
                      </p>
                    </div>

                    <span
                      className={`shrink-0 text-[11px] ${
                        product.stock > 0
                          ? "text-emerald-600 dark:text-emerald-400"
                          : "text-muted-foreground"
                      }`}
                    >
                      {product.stock > 0 ? "موجود" : "ناموجود"}
                    </span>
                  </Link>
                );
              })}

              <Link
                href={`/products?search=${encodeURIComponent(value.trim())}`}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 p-3 text-sm font-medium text-primary transition-colors hover:bg-muted/60"
              >
                مشاهده همه نتایج
                <SearchIcon size={15} />
              </Link>
            </div>
          ) : (
            <div className="p-6 text-center">
              <SearchIcon className="mx-auto mb-2 h-7 w-7 text-muted-foreground" />
              <p className="text-sm font-medium text-foreground">
                محصولی پیدا نشد
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                عبارت جستجو را تغییر بده.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
