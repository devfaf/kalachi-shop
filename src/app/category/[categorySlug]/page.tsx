import { notFound } from "next/navigation"
import { categories } from "@/components/data/categories"
import { products } from "@/components/data/products"

type CategoryPageProps = {
    params: Promise<{
        categorySlug: string;
    }>
}

export default async function CategoryPage ({params}: CategoryPageProps){
    const {categorySlug} 

}