
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import PageContainer from "@/components/common/PageContainer";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import PurchasePanel from "@/components/product/PurchasePanel";
import Breadcrumb from "@/components/common/Breadcrumb";

type ProductDetailsPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function ProductDetailsPage({
    params,
}: ProductDetailsPageProps) {
    const { slug } = await params;

    const product = await prisma.product.findUnique({
        where: { slug },
        include: {
            images: { orderBy: { sortOrder: "asc" } },
            colors: true,
            features: true,
            category: true,
        },
    });

    if (!product) {
        notFound();
    }

    const productData = {
        id: product.id,
        slug: product.slug,
        categoryId: product.categoryId,
        images: product.images.map((image) => image.url),
        info: {
            persianName: product.persianName,
            englishName: product.englishName,
            rating: product.rating,
            colors: product.colors.map((color) => ({
                name: color.name,
                value: color.value,
            })),
            features: product.features.map((feature) => ({
                label: feature.label,
                value: feature.value,
            })),
            description: product.description,
        },
        purchasePanel: {
            storeName: product.storeName,
            sellerRating: product.sellerRating,
            guarantee: product.guarantee,
            stock: product.stock,
            originalPrice: product.originalPrice,
            finalPrice:
                product.price < product.originalPrice
                    ? product.price
                    : undefined,
        },
    };

    return (
        <PageContainer>
            <Breadcrumb />

            <div className="product-layout flex flex-col gap-4 md:flex-row">
                <div className="product-main flex flex-col gap-4 md:flex-row">
                    <ProductGallery images={productData.images} />
                    <ProductInfo info={productData.info} />
                </div>

                <PurchasePanel
                    purchase={productData.purchasePanel}
                    product={productData}
                />
            </div>
        </PageContainer>
    );
}
