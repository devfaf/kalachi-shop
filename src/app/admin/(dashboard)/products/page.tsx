
"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Package,
  RefreshCw,
  Plus
} from "lucide-react";
import Link from "next/link";
import type { Product, StockFilter } from "./_components/products-types";
import ProductsFilters from "./_components/products-filters";
import ProductsTable from "./_components/products-table";
import ProductsEmptyState from "./_components/products-empty-state";

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [stockFilter, setStockFilter] = useState<StockFilter>("all");

  async function fetchProducts() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/products");

      if (!response.ok) {
        throw new Error("دریافت محصولات با خطا مواجه شد.");
      }

      const data: Product[] = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setError("دریافت محصولات ناموفق بود. لطفا دوباره تلاش کن.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const categories = useMemo(() => {
    const uniqueCategories = new Map<string, string>();

    products.forEach((product) => {
      uniqueCategories.set(product.category.id, product.category.name);
    });

    return Array.from(uniqueCategories, ([id, name]) => ({
      id,
      name,
    }));
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const searchTerm = search.trim().toLowerCase();

      const matchesSearch =
        product.persianName.toLowerCase().includes(searchTerm) ||
        product.englishName.toLowerCase().includes(searchTerm);

      const matchesCategory =
        categoryFilter === "all" ||
        product.categoryId === categoryFilter;

      const matchesStock =
        stockFilter === "all" ||
        (stockFilter === "available" && product.stock > 0) ||
        (stockFilter === "unavailable" && product.stock <= 0);

      return matchesSearch && matchesCategory && matchesStock;
    });
  }, [products, search, categoryFilter, stockFilter]);

  return (
    <section className="space-y-6">
      {/* Page Header */}
      <div>
        <div className="mb-2 flex items-center gap-2 text-[var(--primary)]">
          <Package size={20} />
          <span className="text-sm font-medium">مدیریت فروشگاه</span>
        </div>

        <h1 className="text-2xl font-bold text-[var(--foreground)]">
          مدیریت محصولات
        </h1>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">
            محصولات فروشگاه را از این بخش مدیریت کن.
          </p>
          <Link
            href="/admin/products/new"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--primary)] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <Plus size={18} />
            افزودن محصول
          </Link>

        </div>
      </div>

      {/* Products Summary */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-[var(--muted-foreground)]">
          تعداد محصولات:{" "}
          <span className="font-semibold text-[var(--foreground)]">
            {products.length.toLocaleString("fa-IR")}
          </span>
        </p>

        <button
          type="button"
          onClick={fetchProducts}
          disabled={loading}
          className="flex items-center gap-2 rounded-lg border border-[var(--border)] px-3 py-2 text-sm text-[var(--foreground)] transition-colors hover:bg-[var(--accent)] disabled:opacity-50"
        >
          <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
          بروزرسانی
        </button>
      </div>

      {/* Filters */}
      <ProductsFilters
        search={search}
        categoryFilter={categoryFilter}
        stockFilter={stockFilter}
        categories={categories}
        onSearchChange={setSearch}
        onCategoryChange={setCategoryFilter}
        onStockChange={setStockFilter}
      />

      {/* Products Table */}
      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]">
        {loading ? (
          <div className="flex min-h-52 items-center justify-center text-sm text-[var(--muted-foreground)]">
            در حال دریافت محصولات...
          </div>
        ) : error ? (
          <div className="flex min-h-52 flex-col items-center justify-center gap-4 p-6 text-center">
            <p className="text-sm text-[var(--destructive)]">{error}</p>
            <button
              type="button"
              onClick={fetchProducts}
              className="rounded-lg bg-[var(--primary)] px-4 py-2 text-sm text-white"
            >
              تلاش مجدد
            </button>
          </div>
        ) : filteredProducts.length === 0 ? (
          <ProductsEmptyState isEmpty={products.length === 0} />
        ) : (
          <ProductsTable products={filteredProducts} />
        )}
      </div>

      {!loading && !error && filteredProducts.length > 0 && (
        <p className="text-xs text-[var(--muted-foreground)]">
          نمایش {filteredProducts.length.toLocaleString("fa-IR")} محصول از{" "}
          {products.length.toLocaleString("fa-IR")} محصول
        </p>
      )}
    </section>
  );
}
