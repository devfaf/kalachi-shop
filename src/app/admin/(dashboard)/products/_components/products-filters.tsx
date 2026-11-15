"use client";

import { Search } from "lucide-react";
import type { StockFilter } from "./products-types";

type Props = {
  search: string;
  categoryFilter: string;
  stockFilter: StockFilter;
  categories: { id: string; name: string }[];
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onStockChange: (value: StockFilter) => void;
};

export default function ProductsFilters({
  search,
  categoryFilter,
  stockFilter,
  categories,
  onSearchChange,
  onCategoryChange,
  onStockChange,
}: Props) {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="relative">
        <Search
          size={18}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]"
        />
        <input
          type="text"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="جست‌وجوی نام محصول..."
          className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] py-3 pr-10 pl-3 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted-foreground)] focus:border-[var(--primary)]"
        />
      </div>

      <select
        value={categoryFilter}
        onChange={(event) => onCategoryChange(event.target.value)}
        className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-3 text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
      >
        <option value="all">همه دسته‌بندی‌ها</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      <select
        value={stockFilter}
        onChange={(event) =>
          onStockChange(event.target.value as StockFilter)
        }
        className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-3 text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
      >
        <option value="all">همه وضعیت‌ها</option>
        <option value="available">موجود</option>
        <option value="unavailable">ناموجود</option>
      </select>
    </div>
  );
}