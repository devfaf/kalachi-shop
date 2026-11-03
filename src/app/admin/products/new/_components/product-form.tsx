"use client";

import { useState } from "react";
import { useEffect } from "react";
import type { ProductFormData, Category } from "../../_components/products-types";

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
    };

    const [formData, setFormData] = useState<ProductFormData>(initialFormData);

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

    return (
        <form className="space-y-6">
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
        </form>
    );
}