import { Plus, Trash2 } from "lucide-react";

type Color = {
  name: string;
  value: string;
};

type Props = {
  colors: Color[];
  onChange: (colors: Color[]) => void;
};

export default function ProductColors({ colors, onChange }: Props) {
  const addColor = () => {
    onChange([...colors, { name: "", value: "#000000" }]);
  };

  const updateColor = (
    index: number,
    field: keyof Color,
    value: string
  ) => {
    onChange(
      colors.map((color, i) =>
        i === index ? { ...color, [field]: value } : color
      )
    );
  };

  const removeColor = (index: number) => {
    onChange(colors.filter((_, i) => i !== index));
  };

  return (
    <section className="space-y-5 rounded-xl border border-[var(--border)] bg-[var(--card)] p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-[var(--foreground)]">
          رنگ‌های محصول
        </h2>

        <button
          type="button"
          onClick={addColor}
          className="flex items-center gap-2 rounded-lg bg-[var(--primary)] px-3 py-2 text-sm text-white transition-opacity hover:opacity-90"
        >
          <Plus size={16} />
          افزودن رنگ
        </button>
      </div>

      {colors.length === 0 ? (
        <p className="text-sm text-[var(--muted-foreground)]">
          هنوز رنگی اضافه نشده است.
        </p>
      ) : (
        <div className="space-y-3">
          {colors.map((color, index) => (
            <div
              key={index}
              className="grid grid-cols-[1fr_1fr_auto_auto] items-center gap-3"
            >
              <input
                value={color.name}
                onChange={(event) =>
                  updateColor(index, "name", event.target.value)
                }
                placeholder="نام رنگ"
                className="min-w-0 rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2.5 text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
              />

              <input
                type="text"
                value={color.value}
                onChange={(event) =>
                  updateColor(index, "value", event.target.value)
                }
                placeholder="#000000"
                dir="ltr"
                className="min-w-0 rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2.5 text-left text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
              />

              <input
                type="color"
                value={/^#[0-9A-Fa-f]{6}$/.test(color.value)
                  ? color.value
                  : "#000000"}
                onChange={(event) =>
                  updateColor(index, "value", event.target.value)
                }
                aria-label="انتخاب رنگ"
                className="size-10 cursor-pointer rounded-lg border border-[var(--border)] bg-transparent p-1"
              />

              <button
                type="button"
                onClick={() => removeColor(index)}
                aria-label="حذف رنگ"
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