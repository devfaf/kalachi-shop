import { Plus, Trash2 } from "lucide-react";

type Feature = {
  label: string;
  value: string;
};

type Props = {
  features: Feature[];
  onChange: (features: Feature[]) => void;
};

export default function ProductFeatures({ features, onChange }: Props) {
  const addFeature = () => {
    onChange([...features, { label: "", value: "" }]);
  };

  const updateFeature = (
    index: number,
    field: keyof Feature,
    value: string
  ) => {
    onChange(
      features.map((feature, i) =>
        i === index ? { ...feature, [field]: value } : feature
      )
    );
  };

  const removeFeature = (index: number) => {
    onChange(features.filter((_, i) => i !== index));
  };

  return (
    <section className="space-y-5 rounded-xl border border-[var(--border)] bg-[var(--card)] p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-[var(--foreground)]">
          ویژگی‌های محصول
        </h2>

        <button
          type="button"
          onClick={addFeature}
          className="flex items-center gap-2 rounded-lg bg-[var(--primary)] px-3 py-2 text-sm text-white transition-opacity hover:opacity-90"
        >
          <Plus size={16} />
          افزودن ویژگی
        </button>
      </div>

      {features.length === 0 ? (
        <p className="text-sm text-[var(--muted-foreground)]">
          هنوز ویژگی‌ای اضافه نشده است.
        </p>
      ) : (
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="grid grid-cols-[1fr_1fr_auto] items-center gap-3"
            >
              <input
                value={feature.label}
                onChange={(event) =>
                  updateFeature(index, "label", event.target.value)
                }
                placeholder="عنوان ویژگی"
                className="min-w-0 rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2.5 text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
              />

              <input
                value={feature.value}
                onChange={(event) =>
                  updateFeature(index, "value", event.target.value)
                }
                placeholder="مقدار ویژگی"
                className="min-w-0 rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2.5 text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
              />

              <button
                type="button"
                onClick={() => removeFeature(index)}
                aria-label="حذف ویژگی"
                className="flex size-9 items-center justify-center rounded-lg text-red-500 transition-colors hover:bg-red-500/10"
              >
                <Trash2 size={17} />
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}