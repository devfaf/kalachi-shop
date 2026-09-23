import { notFound } from "next/navigation"
import { categories } from "@/data/categories"
import { products } from "@/data/products"
import Link from "next/link"
import CategoryProductGrid from "@/components/category/CategoryProductGrid"

type CategoryPageProps = {
    params: Promise<{
        categorySlug: string;
    }>
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { categorySlug } = await params

    const category = categories.find(category => category.slug === categorySlug)

    if (!category) {
        notFound()
    }

    const categoryProducts = products.filter((product) => product.categoryId === category.id)

    return (
        <main className="container mx-auto px-4 py-8">
<div className="mb-8 flex flex-row items-center justify-between gap-2">
    <h1 className="text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
        {category.name}
    </h1>
    <p className="shrink-0 text-xs text-muted-foreground sm:text-sm">
        {categoryProducts.length} محصول
    </p>
</div>
            {
                categoryProducts.length === 0 ? (
                    <p>محصولی در این دسته‌بندی وجود ندارد</p>
                ) : (
                    <CategoryProductGrid 
                    products={categoryProducts} />
                )
            }
        </main>
    )
}