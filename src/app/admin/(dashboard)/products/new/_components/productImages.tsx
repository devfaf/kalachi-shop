import Image from "next/image";
import { ImagePlus, X } from "lucide-react";
import type { ExistingImage } from "./productFormTypes";

type Props = {
  existingImages: ExistingImage[];
  newImages: File[];
  onAdd: (files: FileList | null) => void;
  onRemoveExisting: (id: string) => void;
  onRemoveNew: (index: number) => void;
};

export default function ProductImages({
  existingImages,
  newImages,
  onAdd,
  onRemoveExisting,
  onRemoveNew,
}: Props) {
  return (
    <section className="space-y-5 rounded-xl border border-[var(--border)] bg-[var(--card)] p-5">
      <h2 className="text-lg font-semibold text-[var(--foreground)]">
        تصاویر محصول
      </h2>

      <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-[var(--border)] p-8 text-center transition-colors hover:border-[var(--primary)]">
        <ImagePlus size={28} className="text-[var(--muted-foreground)]" />
        <span className="text-sm text-[var(--foreground)]">
          برای انتخاب تصاویر کلیک کنید
        </span>
        <span className="text-xs text-[var(--muted-foreground)]">
          امکان انتخاب چند تصویر وجود دارد
        </span>
        <input
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(event) => {
            onAdd(event.target.files);
            event.target.value = "";
          }}
        />
      </label>

      {(existingImages.length > 0 || newImages.length > 0) && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {existingImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-lg border border-[var(--border)]"
            >
              <Image
                src={image.url}
                alt="تصویر محصول"
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover"
              />

              <button
                type="button"
                onClick={() => onRemoveExisting(image.id)}
                aria-label="حذف تصویر"
                className="absolute left-2 top-2 flex size-8 items-center justify-center rounded-full bg-red-500 text-white transition-colors hover:bg-red-600"
              >
                <X size={16} />
              </button>
            </div>
          ))}

          {newImages.map((file, index) => (
            <div
              key={`${file.name}-${index}`}
              className="relative aspect-square overflow-hidden rounded-lg border border-[var(--border)]"
            >
              <Image
                src={URL.createObjectURL(file)}
                alt={file.name}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover"
              />

              <button
                type="button"
                onClick={() => onRemoveNew(index)}
                aria-label="حذف تصویر انتخاب‌شده"
                className="absolute left-2 top-2 flex size-8 items-center justify-center rounded-full bg-red-500 text-white transition-colors hover:bg-red-600"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}