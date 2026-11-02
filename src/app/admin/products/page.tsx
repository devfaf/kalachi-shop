import { Package } from "lucide-react";

export default function AdminProductsPage() {
  return (
    <section className="space-y-6">
      <div>
        <div className="mb-2 flex items-center gap-2 text-[var(--primary)]">
          <Package size={20} />
          <span className="text-sm font-medium">مدیریت فروشگاه</span>
        </div>

        <h1 className="text-2xl font-bold text-[var(--foreground)]">
          مدیریت محصولات
        </h1>

        <p className="mt-2 text-sm text-[var(--muted-foreground)]">
          محصولات فروشگاه را از این بخش مدیریت کن.
        </p>
      </div>
    </section>
  );
}
