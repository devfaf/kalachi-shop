"use client";

import { useState } from "react";
import { useEffect } from "react";
import type { ProductFormData, Category } from "../../_components/products-types";
import { createClient } from "@/lib/supabase-browser";
import { useRouter } from "next/navigation";
import { ImagePlus } from "lucide-react";

export function ProductForm() {
    const [categories, setCategories] = useState<Category[]>([]);
    const initialFormData: ProductFormData = {
        persianName: "",
        englishName: "",
        description: "",
        categoryId: "",
        guarantee: "",
        originalPrice: "",
        price: "",
        stock: "",
        images: [],
        colors: [],
        features: [],
    };
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const [formData, setFormData] = useState<ProductFormData>(initialFormData);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);

    useEffect(() => {
        const previews = formData.images.map((file) =>
            URL.createObjectURL(file)
        );

        setImagePreviews(previews);

        return () => {
            previews.forEach((url) => URL.revokeObjectURL(url));
        };
    }, [formData.images]);

    function handleChange(
        event: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await fetch("/api/categories");

                if (!response.ok) {
                    throw new Error("Failed to fetch categories");
                }

                const data: Category[] = await response.json();
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        }

        fetchCategories();
    }, []);

    async function uploadImages() {
        const supabase = createClient();
        const uploadedImages: { url: string; sortOrder: number }[] = [];

        for (const [index, file] of formData.images.entries()) {
            const filePath = `${crypto.randomUUID()}-${file.name}`;

            const { error } = await supabase.storage
                .from("product-images")
                .upload(filePath, file);

            if (error) {
                console.error("Supabase Storage Error:", error);
                throw new Error(error.message);
            }

            const { data } = supabase.storage
                .from("product-images")
                .getPublicUrl(filePath);

            uploadedImages.push({
                url: data.publicUrl,
                sortOrder: index,
            });
        }

        return uploadedImages;
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            setIsSubmitting(true);
            setSubmitError("");

            const uploadedImages = await uploadImages();

            const response = await fetch("/api/admin/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    originalPrice: Number(formData.originalPrice),
                    price: Number(formData.price),
                    stock: Number(formData.stock),
                    images: uploadedImages,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "ثبت محصول ناموفق بود.");
            }

            router.push("/admin/products");
            router.refresh();
        } catch (error) {
            console.error("Failed to create product:", error);
            setSubmitError(
                error instanceof Error
                    ? error.message
                    : "ثبت محصول ناموفق بود."
            );
        } finally {
            setIsSubmitting(false);
        }
    }

    return (

        <form onSubmit={handleSubmit} className="space-y-6">
            <section className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
                <h2 className="mb-5 text-lg font-semibold text-[var(--foreground)]">
                    اطلاعات اصلی محصول
                </h2>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-sm text-[var(--foreground)]">
                            نام فارسی محصول
                        </label>
                        <input
                            type="text"
                            name="persianName"
                            value={formData.persianName}
                            onChange={handleChange}
                            placeholder="مثلا گوشی موبایل سامسونگ"
                            className="w-full rounded-lg border border-[var(--border)] bg-transparent px-3 py-2.5 text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-[var(--foreground)]">
                            نام انگلیسی محصول
                        </label>
                        <input
                            type="text"
                            name="englishName"
                            value={formData.englishName}
                            onChange={handleChange}
                            placeholder="Samsung Galaxy..."
                            dir="ltr"
                            className="w-full rounded-lg border border-[var(--border)] bg-transparent px-3 py-2.5 text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="mb-2 block text-sm text-[var(--foreground)]">
                            توضیحات محصول
                        </label>
                        <textarea
                            rows={4}
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="توضیحات کامل محصول را وارد کنید..."
                            className="w-full resize-y rounded-lg border border-[var(--border)] bg-transparent px-3 py-2.5 text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-[var(--foreground)]">
                            دسته‌بندی
                        </label>
                        <select
                            name="categoryId"
                            value={formData.categoryId}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-2.5 text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
                        >
                            <option value="" disabled>
                                انتخاب دسته‌بندی
                            </option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-[var(--foreground)]">
                            گارانتی
                        </label>
                        <input
                            type="text"
                            name="guarantee"
                            value={formData.guarantee}
                            onChange={handleChange}
                            placeholder="مثلا ۱۸ ماه گارانتی شرکتی"
                            className="w-full rounded-lg border border-[var(--border)] bg-transparent px-3 py-2.5 text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-[var(--foreground)]">
                            قیمت اصلی (تومان)
                        </label>
                        <input
                            name="originalPrice"
                            value={formData.originalPrice}
                            onChange={handleChange}
                            type="number"
                            min="0"
                            placeholder="0"
                            className="w-full rounded-lg border border-[var(--border)] bg-transparent px-3 py-2.5 text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-[var(--foreground)]">
                            قیمت فروش (تومان)
                        </label>
                        <input
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            type="number"
                            min="0"
                            placeholder="0"
                            className="w-full rounded-lg border border-[var(--border)] bg-transparent px-3 py-2.5 text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-[var(--foreground)]">
                            موجودی انبار
                        </label>
                        <input
                            name="stock"
                            value={formData.stock}
                            onChange={handleChange}
                            type="number"
                            min="0"
                            placeholder="0"
                            className="w-full rounded-lg border border-[var(--border)] bg-transparent px-3 py-2.5 text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
                        />
                    </div>
                </div>
            </section>

            {/* Product Images */}
            <section className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
                <h2 className="mb-5 text-lg font-semibold text-[var(--foreground)]">
                    تصاویر محصول
                </h2>

                <label className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-[var(--border)] bg-[var(--muted)]/40 px-6 py-10 text-center transition-colors hover:border-[var(--primary)] hover:bg-[var(--muted)]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--card)] text-[var(--primary)]">
                        <ImagePlus size={28} />
                    </div>

                    <div>
                        <p className="text-sm font-medium text-[var(--foreground)]">
                            برای انتخاب تصاویر کلیک کن
                        </p>
                        <p className="mt-2 text-xs text-[var(--muted-foreground)]">
                            می‌توانی چند تصویر انتخاب کنی
                        </p>
                    </div>

                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={(event) => {
                            const files = Array.from(event.target.files ?? []);

                            setFormData((prev) => ({
                                ...prev,
                                images: [...prev.images, ...files],
                            }));

                            event.target.value = "";
                        }}
                    />
                </label>

                {imagePreviews.length > 0 && (
                    <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                        {imagePreviews.map((preview, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-xl border border-[var(--border)]"
                            >
                                <img
                                    src={preview}
                                    alt={`تصویر محصول ${index + 1}`}
                                    className="h-32 w-full object-cover"
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            images: prev.images.filter(
                                                (_, i) => i !== index
                                            ),
                                        }))
                                    }
                                    className="absolute right-2 top-2 rounded-md bg-red-600 px-2 py-1 text-xs text-white"
                                >
                                    حذف
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* Product Colors */}
            <section className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
                <div className="mb-5 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-[var(--foreground)]">
                        رنگ‌های محصول
                    </h2>

                    <button
                        type="button"
                        onClick={() =>
                            setFormData((prev) => ({
                                ...prev,
                                colors: [
                                    ...prev.colors,
                                    { name: "", value: "#000000" },
                                ],
                            }))
                        }
                        className="rounded-lg bg-[var(--primary)] px-3 py-2 text-sm text-white"
                    >
                        افزودن رنگ
                    </button>
                </div>

                <div className="space-y-4">
                    {formData.colors.map((color, index) => (
                        <div
                            key={index}
                            className="flex flex-wrap items-center gap-3"
                        >
                            <input
                                type="text"
                                value={color.name}
                                onChange={(event) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        colors: prev.colors.map((item, i) =>
                                            i === index
                                                ? { ...item, name: event.target.value }
                                                : item
                                        ),
                                    }))
                                }
                                placeholder="نام رنگ"
                                className="min-w-0 flex-1 rounded-lg border border-[var(--border)] bg-transparent px-3 py-2.5 text-sm text-[var(--foreground)]"
                            />

                            <input
                                type="color"
                                value={color.value}
                                onChange={(event) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        colors: prev.colors.map((item, i) =>
                                            i === index
                                                ? { ...item, value: event.target.value }
                                                : item
                                        ),
                                    }))
                                }
                                className="h-10 w-12 cursor-pointer rounded border border-[var(--border)]"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        colors: prev.colors.filter((_, i) => i !== index),
                                    }))
                                }
                                className="text-sm text-[var(--destructive)]"
                            >
                                حذف
                            </button>
                        </div>
                    ))}
                </div>
            </section>
            {/* Product Features */}
            <section className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
                <div className="mb-5 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-[var(--foreground)]">
                        ویژگی‌های محصول
                    </h2>

                    <button
                        type="button"
                        onClick={() =>
                            setFormData((prev) => ({
                                ...prev,
                                features: [
                                    ...prev.features,
                                    { label: "", value: "" },
                                ],
                            }))
                        }
                        className="rounded-lg bg-[var(--primary)] px-3 py-2 text-sm text-white"
                    >
                        افزودن ویژگی
                    </button>
                </div>

                <div className="space-y-4">
                    {formData.features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-wrap items-center gap-3"
                        >
                            <input
                                type="text"
                                value={feature.label}
                                onChange={(event) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        features: prev.features.map((item, i) =>
                                            i === index
                                                ? { ...item, label: event.target.value }
                                                : item
                                        ),
                                    }))
                                }
                                placeholder="عنوان ویژگی (مثلا وزن)"
                                className="min-w-0 flex-1 rounded-lg border border-[var(--border)] bg-transparent px-3 py-2.5 text-sm text-[var(--foreground)]"
                            />

                            <input
                                type="text"
                                value={feature.value}
                                onChange={(event) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        features: prev.features.map((item, i) =>
                                            i === index
                                                ? { ...item, value: event.target.value }
                                                : item
                                        ),
                                    }))
                                }
                                placeholder="مقدار (مثلا ۲ کیلوگرم)"
                                className="min-w-0 flex-1 rounded-lg border border-[var(--border)] bg-transparent px-3 py-2.5 text-sm text-[var(--foreground)]"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        features: prev.features.filter((_, i) => i !== index),
                                    }))
                                }
                                className="text-sm text-[var(--destructive)]"
                            >
                                حذف
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {submitError && (
                <p className="text-sm text-[var(--destructive)]">
                    {submitError}
                </p>
            )}

            <div className="flex justify-end">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-lg bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {isSubmitting ? "در حال ثبت محصول..." : "ثبت محصول"}
                </button>
            </div>
        </form>
    );
}