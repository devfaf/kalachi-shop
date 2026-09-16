import { notFound } from "next/navigation"
import { categories } from "@/components/data/categories"
import { products } from "@/components/data/products"

type CategoryPageProps = {
    params: Promise<{
        categorySlug: string;
    }>
}

const page = () => {
    return (
        <div>page</div>
    )
}
export default page