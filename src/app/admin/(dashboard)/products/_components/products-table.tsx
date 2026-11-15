import { Image as ImageIcon } from "lucide-react";
import type { Product } from "./products-types";

type Props = {
  products: Product[];
};

export default function ProductsTable({ products }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[850px] text-right text-sm">
        <thead className="border-b border-[var(--border)] bg-[var(--accent)]">
          <tr className="text-[var(--muted-foreground)]">
            <th className="px-5 py-4 font-medium">محصول</th>
            <th className="px-5 py-4 font-medium">دسته‌بندی</th>
            <th className="px-5 py-4 font-medium">قیمت</th>
            <th className="px-5 py-4 font-medium">موجودی</th>
            <th className="px-5 py-4 font-medium">وضعیت</th>
            <th className="px-5 py-4 font-medium">شگفت‌انگیز</th>
            <th className="px-5 py-4 font-medium">عملیات</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-[var(--border)]">
          {products.map((product) => (
            <tr
              key={product.id}
              className="transition-colors hover:bg-[var(--accent)]/50"
            >
              <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--background)]">
                    {product.images[0]?.url ? (
                      <img
                        src={product.images[0].url}
                        alt={product.persianName}
                        className="size-full object-contain"
                      />
                    ) : (
                      <ImageIcon
                        size={20}
                        className="text-[var(--muted-foreground)]"
                      />
                    )}
                  </div>

                  <div className="max-w-52">
                    <p className="truncate font-medium text-[var(--foreground)]">
                      {product.persianName}
                    </p>
                    <p className="mt-1 truncate text-xs text-[var(--muted-foreground)]">
                      {product.englishName}
                    </p>
                  </div>
                </div>
              </td>

              <td className="px-5 py-4 text-[var(--muted-foreground)]">
                {product.category.name}
              </td>

              <td className="px-5 py-4 font-medium text-[var(--foreground)]">
                {product.price.toLocaleString("fa-IR")} تومان
              </td>

              <td className="px-5 py-4 text-[var(--foreground)]">
                {product.stock.toLocaleString("fa-IR")}
              </td>

              <td className="px-5 py-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    product.stock > 0
                      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                      : "bg-red-500/10 text-red-600 dark:text-red-400"
                  }`}
                >
                  {product.stock > 0 ? "موجود" : "ناموجود"}
                </span>
              </td>

              <td className="px-5 py-4">
                {product.isAmazingOffer ? (
                  <span className="text-xs font-medium text-[var(--primary)]">
                    فعال
                  </span>
                ) : (
                  <span className="text-xs text-[var(--muted-foreground)]">
                    غیرفعال
                  </span>
                )}
              </td>

              <td className="px-5 py-4 text-[var(--muted-foreground)]">
                —
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}