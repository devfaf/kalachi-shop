import { z } from "zod";

export const createProductSchema = z.object({
    persianName: z.string().trim().min(1).max(250),
    englishName: z.string().trim().min(1).max(250),
    description: z.string().trim().min(1).max(5000),
    categoryId: z.string().min(1),
    guarantee: z.string().trim().min(1).max(150),

    originalPrice: z.number().int().nonnegative(),
    price: z.number().int().nonnegative(),
    stock: z.number().int().nonnegative(),

    images: z.array(
        z.object({
            url: z.string().url(),
            sortOrder: z.number().int().nonnegative(),
        })
    ).min(1, "حداقل یک تصویر برای محصول الزامی است.")
    .max(8, "حداکثر ۸ تصویر برای هر محصول مجاز است."),

    colors: z.array(
        z.object({
            name: z.string().trim().max(80),
            value: z.string().trim().max(80),
        })
    ),

    features: z.array(
        z.object({
            label: z.string().trim().max(100),
            value: z.string().trim().max(500),
        })
    ),

});

export const productFormSchema = createProductSchema.omit({
    images: true,
});

export const productImagesSchema = z
    .array(
        z.instanceof(File).refine(
            (file) => file.type.startsWith("image/"),
            "فقط فایل تصویری مجاز است."
        ).refine(
            (file) => file.size <= 10 * 1024 * 1024,
            "حجم هر تصویر نباید بیشتر از ۱۰ مگابایت باشد."
        )
    )
    .min(1, "انتخاب حداقل یک تصویر الزامی است.")
    .max(8, "حداکثر ۸ تصویر برای هر محصول مجاز است.")