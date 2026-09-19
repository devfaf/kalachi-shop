import { notFound } from "next/navigation"
import { categories } from "@/components/data/categories"
import { products } from "@/components/data/products"

type CategoryPageProps = {
    params: Promise<{
        categorySlug: string;
    }>
}

export default async function CategoryPage ({params}: CategoryPageProps){
    const {categorySlug} = await params

    const category = categories.find(category => category.slug === categorySlug)

    if(!category){
        notFound()
    }

    const categoryProducts = products.filter((product) => product.categoryId === category.id)

    return(
        <main>
            <h1>{category.name}</h1>
            {
                categoryProducts.map((product) => (
                    <div>
                        <h2>{product.info.persianName}</h2>

                        <p>
                            {(
                            product.purchasePanel.discountPrice ?? product.purchasePanel.price
                            ).toLocaleString()}{" "}
                            تومان
                        </p>
                    </div>
                ))
            }
        </main>
    )

}