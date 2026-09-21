import { products } from "@/components/data/products"
import { notFound } from "next/navigation";

type ProductDetailsPageProps = {
    params: Promise<{
        slug: string;
    }>
}


export default async function productDetailsPage ({ params }: ProductDetailsPageProps) {
    const { slug } = await params

    const product = products.find((product) => product.slug === slug)

    if (!product) {
        notFound()
    }

    return (
        <div>
            <div>
                {product.info.persianName}
            </div>
            <div>
                {product.info.description}
            </div>
            <div>
                {product.purchasePanel.price}
            </div>
        </div>
    )
}