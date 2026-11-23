
import { FolderTree, Clock3 } from "lucide-react";

export default function CategoriesPage() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-5 flex size-20 items-center justify-center rounded-2xl bg-[var(--accent)] text-[var(--primary)]">
        <FolderTree size={38} strokeWidth={1.7} />
      </div>

      <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-medium text-[var(--primary)]">
        <Clock3 size={14} />
        به‌زودی
      </span>

      <h1 className="text-xl font-bold text-[var(--foreground)]">
        مدیریت دسته‌بندی‌ها
      </h1>

      <p className="mt-3 max-w-sm text-sm leading-7 text-[var(--muted-foreground)]">
        به زودی
      </p>
    </section>
  );
}
