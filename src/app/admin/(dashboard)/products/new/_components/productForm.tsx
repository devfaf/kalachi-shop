
"use client";

import type { ProductFormProps } from "./productFormTypes";

import { useProductForm } from "./useProductForm";
import ProductFormFields from "./productFormFields";
import ProductImages from "./productImages";
import ProductColors from "./productColors";
import ProductFeatures from "./productFeatures";

export function ProductForm({ role, productId }: ProductFormProps) {
  const {
    categories,
    formData,
    setFormData,
    existingImages,
    imagePreviews,
    isLoading,
    isSubmitting,
    submitError,
    isEditing,
    handleChange,
    handleAddImages,
    handleRemoveNewImage,
    handleRemoveExistingImage,
    handleSubmit,
  } = useProductForm({ role, productId });

  if (isLoading) {
    return (
      <p className="py-10 text-center text-sm text-[var(--muted-foreground)]">
        در حال دریافت اطلاعات محصول...
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <ProductFormFields
        formData={formData}
        categories={categories}
        onChange={handleChange}
      />

      <ProductImages
        existingImages={existingImages}
        newImages={formData.images}
        onAdd={handleAddImages}
        onRemoveExisting={handleRemoveExistingImage}
        onRemoveNew={handleRemoveNewImage}
      />

      <ProductColors
        colors={formData.colors}
        onChange={(colors) =>
          setFormData((prev) => ({ ...prev, colors }))
        }
      />

      <ProductFeatures
        features={formData.features}
        onChange={(features) =>
          setFormData((prev) => ({ ...prev, features }))
        }
      />

      {submitError && (
        <p className="text-sm text-[var(--destructive)]">
          {submitError}
        </p>
      )}

      <div className="flex justify-end">
        {role === "ADMIN" ? (
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-lg bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting
              ? "در حال ذخیره..."
              : isEditing
                ? "ذخیره تغییرات"
                : "ثبت محصول"}
          </button>
        ) : (
          <p className="text-sm text-[var(--muted-foreground)]">
            حالت نمایشی: اطلاعات فقط برای پیش‌نمایش هستند و ثبت نمی‌شوند.
          </p>
        )}
      </div>
    </form>
  );
}
