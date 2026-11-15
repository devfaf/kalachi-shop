import { Package } from "lucide-react";

type Props = {
  isEmpty: boolean;
};

export default function ProductsEmptyState({ isEmpty }: Props) {
  return (
    <div className="flex min-h-52 flex-col items-center justify-center gap-2 p-6 text-center">
      <Package size={32} className="text-[var(--muted-foreground)]" />

      <p className="font-medium text-[var(--foreground)]">
        {isEmpty
          ? "هنوز محصولی ثبت نشده است."
          : "محصولی با این مشخصات پیدا نشد."}
      </p>

      <p className="text-sm text-[var(--muted-foreground)]">
        {isEmpty
          ? "بعدا می‌توانی محصولات فروشگاه را از این بخش اضافه کنی."
          : "عبارت جست‌وجو یا فیلترها را تغییر بده."}
      </p>
    </div>
  );
}