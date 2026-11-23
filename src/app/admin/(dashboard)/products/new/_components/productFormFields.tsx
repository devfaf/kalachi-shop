import type { ProductFormFieldsProps } from "./productFormTypes";

export default function ProductFormFields({
  formData,
  categories,
  onChange,
}: ProductFormFieldsProps) {
  return (
    <section className="space-y-5 rounded-xl border border-[var(--border)] bg-[var(--card)] p-5">
      <h2 className="text-lg font-semibold text-[var(--foreground)]">
        اطلاعات اصلی محصول
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm text-[var(--foreground)]">
            نام فارسی محصول
          </label>
          <input
            name="persianName"
            value={formData.persianName}
            onChange={onChange}
            required
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2.5 text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-[var(--foreground)]">
            نام انگلیسی محصول
          </label>
          <input
            name="englishName"
            value={formData.englishName}
            onChange={onChange}
            required
            dir="ltr"
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2.5 text-left text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-[var(--foreground)]">دسته‌بندی</label>
          <select
            name="categoryId"
            value={formData.categoryId}
            onChange={onChange}
            required
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2.5 text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
          >
            <option value="">انتخاب دسته‌بندی</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-[var(--foreground)]">گارانتی</label>
          <input
            name="guarantee"
            value={formData.guarantee}
            onChange={onChange}
            required
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2.5 text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-[var(--foreground)]">قیمت اصلی</label>
          <input
            name="originalPrice"
            type="number"
            min="0"
            value={formData.originalPrice}
            onChange={onChange}
            required
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2.5 text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-[var(--foreground)]">
            قیمت با تخفیف
          </label>
          <input
            name="price"
            type="number"
            min="0"
            value={formData.price}
            onChange={onChange}
            required
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2.5 text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-[var(--foreground)]">موجودی</label>
          <input
            name="stock"
            type="number"
            min="0"
            value={formData.stock}
            onChange={onChange}
            required
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2.5 text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm text-[var(--foreground)]">توضیحات</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={onChange}
          rows={4}
          required
          className="w-full resize-y rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2.5 text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
        />
      </div>
    </section>
  );
}