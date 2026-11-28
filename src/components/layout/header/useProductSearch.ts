
import { useEffect, useMemo, useState } from "react";
import type { ProductCardData } from "@/components/product/ProductCard";

type SearchProduct = Pick<
  ProductCardData,
  "id" | "slug" | "persianName" | "englishName" | "stock" | "images"
>;

export const useProductSearch = () => {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [products, setProducts] = useState<SearchProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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

    return () => controller.abort();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, 300);

    return () => clearTimeout(timeout);
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

  return {
    value,
    setValue,
    products,
    results,
    loading,
    error,
    hasQuery: value.trim().length >= 2,
  };
};

export type { SearchProduct };
