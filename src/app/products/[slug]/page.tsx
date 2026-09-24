import { products } from "@/data/products"
import { notFound } from "next/navigation";
import PageContainer from "@/components/common/PageContainer";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import PurchasePanel from "@/components/product/PurchasePanel";

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
  <div className="product-layout">

    <div className="product-main">
      <ProductGallery images={product.images} />
      {/* <ProductInfo product={product.info} /> */}
    </div>

    {/* <PurchasePanel purchase={product.purchasePanel} /> */}

  </div>
</PageContainer>
    )
}