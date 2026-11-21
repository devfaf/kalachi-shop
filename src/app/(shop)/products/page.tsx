
"use client";

import { useEffect, useMemo, useState } from "react";
import {
    Search,
    Package,
    Smartphone,
    Laptop,
    Tablet,
    Headphones,
    Gamepad2,
    LayoutGrid,
    type LucideIcon,
} from "lucide-react";
import ProductCard, {
    type ProductCardData,
} from "@/components/product/ProductCard";

type Category = {
    id: string;
    name: string;
    slug: string;
    parentId: string | null;
};

type Product = ProductCardData & {
    categoryId: string;
};

const getCategoryIcon = (category: Category): LucideIcon => {
    const value = `${category.name} ${category.slug}`.toLowerCase();

    if (value.includes("موبایل") || value.includes("mobile")) {
        return Smartphone;
    }

    if (value.includes("لپ") || value.includes("laptop")) {
        return Laptop;
    }

    if (value.includes("تبلت") || value.includes("tablet")) {
        return Tablet;
    }

    if (
        value.includes("هدفون") ||
        value.includes("صوت") ||
        value.includes("audio")
    ) {
        return Headphones;
    }

    if (value.includes("گیم") || value.includes("gaming")) {
        return Gamepad2;
    }

    return Package;
};

const getCategoryTreeIds = (
    parentId: string,
    categories: Category[]
): string[] => {
    const result = [parentId];
    const children = categories.filter(
        (category) => category.parentId === parentId
    );

    for (const child of children) {
        result.push(...getCategoryTreeIds(child.id, categories));
    }

    return result;
};

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null
    );
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [productsResponse, categoriesResponse] = await Promise.all([
                    fetch("/api/products"),
                    fetch("/api/categories"),
                ]);

                if (!productsResponse.ok || !categoriesResponse.ok) {
                    throw new Error("Failed to fetch data");
                }

                const [productsData, categoriesData] = await Promise.all([
                    productsResponse.json(),
                    categoriesResponse.json(),
                ]);

                setProducts(productsData);
                setCategories(categoriesData);
            } catch {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (categories.length === 0) return;

        const params = new URLSearchParams(window.location.search);
        const categorySlug = params.get("category");

        if (!categorySlug) return;

        const category = categories.find(
            (item) => item.slug === categorySlug
        );

        if (category) {
            setSelectedCategory(category.id);
        }
    }, [categories]);

    const mainCategories = useMemo(
        () => categories.filter((category) => !category.parentId),
        [categories]
    );

    const filteredProducts = useMemo(() => {
        const normalizedSearch = search.trim().toLowerCase();

        const categoryIds = selectedCategory
            ? getCategoryTreeIds(selectedCategory, categories)
            : null;

        return products.filter((product) => {
            const matchesSearch =
                product.persianName.toLowerCase().includes(normalizedSearch) ||
                product.englishName.toLowerCase().includes(normalizedSearch);

            const matchesCategory =
                !categoryIds || categoryIds.includes(product.categoryId);

            return matchesSearch && matchesCategory;
        });
    }, [products, categories, search, selectedCategory]);

    return (
        <main className="container mx-auto min-h-screen px-4 py-8 md:px-6">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-foreground md:text-3xl">
                    همه محصولات
                </h1>
                <p className="mt-2 text-sm text-muted-foreground">
                    محصولات مورد نظرت را جستجو و انتخاب کن.
                </p>
            </div>

            <div className="mb-8">
                <h2 className="mb-4 text-base font-semibold text-foreground">
                    دسته‌بندی محصولات
                </h2>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                    <button
                        type="button"
                        onClick={() => setSelectedCategory(null)}
                        className={`flex min-h-24 flex-col items-center justify-center gap-2 rounded-2xl border p-3 text-sm transition-colors ${selectedCategory === null
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border bg-card text-foreground hover:border-primary/50"
                            }`}
                    >
                        <LayoutGrid size={25} />
                        <span className="font-medium">همه محصولات</span>
                    </button>

                    {mainCategories.map((category) => {
                        const Icon = getCategoryIcon(category);
                        const isActive = selectedCategory === category.id;

                        return (
                            <button
                                key={category.id}
                                type="button"
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex min-h-24 flex-col items-center justify-center gap-2 rounded-2xl border p-3 text-sm transition-colors ${isActive
                                        ? "border-primary bg-primary/10 text-primary"
                                        : "border-border bg-card text-foreground hover:border-primary/50"
                                    }`}
                            >
                                <Icon size={25} />
                                <span className="font-medium text-center">
                                    {category.name}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="mb-6">
                <div className="relative">
                    <Search
                        size={20}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />
                    <input
                        type="search"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="جستجوی نام محصول..."
                        className="h-12 w-full rounded-xl border border-border bg-background pr-11 pl-4 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
                    />
                </div>
            </div>

            {loading ? (
                <div className="py-20 text-center text-muted-foreground">
                    در حال بارگذاری محصولات...
                </div>
            ) : error ? (
                <div className="py-20 text-center text-destructive">
                    دریافت محصولات با خطا مواجه شد. لطفا دوباره تلاش کن.
                </div>
            ) : (
                <>
                    <div className="mb-5 flex items-center justify-between gap-3">
                        <h2 className="font-semibold text-foreground">
                            {selectedCategory
                                ? mainCategories.find((c) => c.id === selectedCategory)?.name
                                : "تمام محصولات"}
                        </h2>

                        <span className="text-sm text-muted-foreground">
                            {filteredProducts.length.toLocaleString("fa-IR")} محصول
                        </span>
                    </div>

                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-5 lg:grid-cols-4 xl:grid-cols-5">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-2xl border border-dashed border-border py-20 text-center">
                            <p className="font-semibold text-foreground">
                                محصولی پیدا نشد
                            </p>
                            <p className="mt-2 text-sm text-muted-foreground">
                                دسته‌بندی یا عبارت جستجو را تغییر بده.
                            </p>
                        </div>
                    )}
                </>
            )}
        </main>
    );
}
