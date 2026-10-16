"use client";

import { useEffect, useState } from "react";
import type { Category } from "@/types/category";

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch("/api/categories");

        if (!response.ok) {
          throw new Error("دریافت دسته‌بندی‌ها ناموفق بود");
        }

        const data: Category[] = await response.json();
        setCategories(data);
      } catch {
        setError("خطا در دریافت دسته‌بندی‌ها");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCategories();
  }, []);

  return { categories, isLoading, error };
}