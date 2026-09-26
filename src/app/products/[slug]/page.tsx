import { products } from "@/data/products"
import { notFound } from "next/navigation";
import PageContainer from "@/components/common/PageContainer";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import PurchasePanel from "@/components/product/PurchasePanel";
import Breadcrumb from "@/components/common/Breadcrumb";

type ProductDetailsPageProps = {
    params: Promise<{
        slug: string;
    }>
}


export default async function productDetailsPage({ params }: ProductDetailsPageProps) {
    const { slug } = await params

    const product = products.find((product) => product.slug === slug)

    if (!product) {
        notFound()
    }

    return (
        <PageContainer>
                <Breadcrumb/>
            <div className="product-layout flex flex-col md:flex-row gap-4">
                <div className="product-main flex flex-col md:flex-row gap-4">
                    <ProductGallery images={product.images} />
                    <ProductInfo info={product.info} />
                </div>

                {/* <PurchasePanel purchase={product.purchasePanel} /> */}

            </div>
        </PageContainer>
    )
}