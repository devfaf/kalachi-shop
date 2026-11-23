
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase-browser";

import type { Category, ProductFormData } from "../../_components/products-types";
import type { ExistingImage, InitialProduct } from "./productFormTypes";

import {
    productFormSchema,
    productImagesSchema,
} from "@/lib/validations/product";

const emptyForm: ProductFormData = {
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

type Props = {
    role: "ADMIN" | "DEMO";
    productId?: string;
};

export function useProductForm({ role, productId }: Props) {
    const router = useRouter();

    const [categories, setCategories] = useState<Category[]>([]);
    const [formData, setFormData] = useState<ProductFormData>(emptyForm);
    const [existingImages, setExistingImages] = useState<ExistingImage[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(Boolean(productId));
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const isEditing = Boolean(productId);

    // ایجاد و پاک‌سازی پیش‌نمایش تصاویر
    useEffect(() => {
        const previews = formData.images.map((file) =>
            URL.createObjectURL(file)
        );

        setImagePreviews(previews);

        return () => {
            previews.forEach((url) => URL.revokeObjectURL(url));
        };
    }, [formData.images]);

    // دریافت دسته‌بندی‌ها و اطلاعات محصول
    useEffect(() => {
        async function loadFormData() {
            try {
                const categoriesResponse = await fetch("/api/categories");

                if (!categoriesResponse.ok) {
                    throw new Error("دریافت دسته‌بندی‌ها ناموفق بود.");
                }

                const categoriesData: Category[] =
                    await categoriesResponse.json();

                setCategories(categoriesData);

                if (!productId) return;

                const response = await fetch(
                    `/api/admin/products/${productId}`
                );

                if (!response.ok) {
                    const data = await response.json();
                    throw new Error(
                        data.error || "دریافت اطلاعات محصول ناموفق بود."
                    );
                }

                const product: InitialProduct = await response.json();

                setFormData({
                    persianName: product.persianName,
                    englishName: product.englishName,
                    description: product.description,
                    categoryId: product.categoryId,
                    guarantee: product.guarantee,
                    originalPrice: String(product.originalPrice),
                    price: String(product.price),
                    stock: String(product.stock),
                    images: [],
                    colors: product.colors.map((color) => ({
                        name: color.name,
                        value: color.value,
                    })),
                    features: product.features.map((feature) => ({
                        label: feature.label,
                        value: feature.value,
                    })),
                });

                setExistingImages(product.images);
            } catch (error) {
                setSubmitError(
                    error instanceof Error
                        ? error.message
                        : "دریافت اطلاعات ناموفق بود."
                );
            } finally {
                setIsLoading(false);
            }
        }

        loadFormData();
    }, [productId]);

    // تغییر فیلدهای فرم
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

    // افزودن تصاویر جدید
    function handleAddImages(files: FileList | null) {
        if (!files) return;

        const selectedFiles = Array.from(files);

        setFormData((prev) => ({
            ...prev,
            images: [...prev.images, ...selectedFiles],
        }));
    }

    // حذف تصویر جدید
    function handleRemoveNewImage(index: number) {
        setFormData((prev) => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index),
        }));
    }

    // حذف تصویر قبلی
    function handleRemoveExistingImage(id: string) {
        setExistingImages((prev) =>
            prev.filter((image) => image.id !== id)
        );
    }

    // آپلود تصاویر در Supabase
    async function uploadImages() {
        if (role !== "ADMIN") {
            throw new Error("اجازه آپلود تصویر را ندارید.");
        }

        const supabase = createClient();
        const uploadedImages: { url: string; sortOrder: number }[] = [];

        for (const [index, file] of formData.images.entries()) {
            const fileExtension = file.name.split(".").pop()?.toLowerCase() || "webp";
            const filePath = `${crypto.randomUUID()}.${fileExtension}`;

            const { error } = await supabase.storage
                .from("product-images")
                .upload(filePath, file);

            if (error) {
                throw new Error(error.message);
            }

            const { data } = supabase.storage
                .from("product-images")
                .getPublicUrl(filePath);

            uploadedImages.push({
                url: data.publicUrl,
                sortOrder: existingImages.length + index,
            });
        }

        return uploadedImages;
    }

    // ثبت یا ویرایش محصول
    async function handleSubmit(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        if (role !== "ADMIN") return;

        try {
            setIsSubmitting(true);
            setSubmitError("");

            if (
                !formData.originalPrice.trim() ||
                !formData.price.trim() ||
                !formData.stock.trim()
            ) {
                throw new Error(
                    "لطفا قیمت اصلی، قیمت فروش و موجودی را وارد کنید."
                );
            }

            const validation = productFormSchema.safeParse({
                ...formData,
                originalPrice: Number(formData.originalPrice),
                price: Number(formData.price),
                stock: Number(formData.stock),
            });

            if (!validation.success) {
                throw new Error(
                    "اطلاعات واردشده معتبر نیست. لطفا فیلدها را بررسی کنید."
                );
            }

            const imageValidation = productImagesSchema.safeParse(
                formData.images
            );

            if (!imageValidation.success) {
                throw new Error(imageValidation.error.issues[0].message);
            }

            const uploadedImages = await uploadImages();

            const response = await fetch(
                isEditing
                    ? `/api/admin/products/${productId}`
                    : "/api/admin/products",
                {
                    method: isEditing ? "PATCH" : "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        ...validation.data,
                        images: [
                            ...existingImages.map((image, index) => ({
                                url: image.url,
                                sortOrder: index,
                            })),
                            ...uploadedImages,
                        ],
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.error ||
                    (isEditing
                        ? "ویرایش محصول ناموفق بود."
                        : "ثبت محصول ناموفق بود.")
                );
            }

            router.push("/admin/products");
            router.refresh();
        } catch (error) {
            console.error("Failed to save product:", error);

            setSubmitError(
                error instanceof Error
                    ? error.message
                    : "ذخیره محصول ناموفق بود."
            );
        } finally {
            setIsSubmitting(false);
        }
    }

    return {
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
    };
}
