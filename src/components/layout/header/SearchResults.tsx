
import Image from "next/image";
import Link from "next/link";
import { Package, Search as SearchIcon } from "lucide-react";
import type { SearchProduct } from "./useProductSearch";

type SearchResultsProps = {
  results: SearchProduct[];
  loading: boolean;
  error: boolean;
  value: string;
  onSelect?: () => void;
};

const SearchResults = ({
  results,
  loading,
  error,
  value,
  onSelect,
}: SearchResultsProps) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center gap-2 p-6 text-sm text-muted-foreground">
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        در حال جستجو...
      </div>
    );
  }

  if (error) {
    return (
      <p className="p-6 text-center text-sm text-destructive">
        دریافت محصولات با خطا مواجه شد.
      </p>
    );
  }

  if (results.length > 0) {
    return (
      <div className="divide-y divide-border">
        {results.map((product) => {
          const image = product.images?.[0]?.url;

          return (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              onClick={onSelect}
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
          onClick={onSelect}
          className="flex items-center justify-center gap-2 p-3 text-sm font-medium text-primary transition-colors hover:bg-muted/60"
        >
          مشاهده همه نتایج
          <SearchIcon size={15} />
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 text-center">
      <SearchIcon className="mx-auto mb-2 h-7 w-7 text-muted-foreground" />

      <p className="text-sm font-medium text-foreground">
        محصولی پیدا نشد
      </p>

      <p className="mt-1 text-xs text-muted-foreground">
        عبارت جستجو را تغییر بده.
      </p>
    </div>
  );
};

export default SearchResults;
