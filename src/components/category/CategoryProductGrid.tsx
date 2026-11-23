import ProductCard from "../product/ProductCard";
import { Product } from "@/data/products";
import PageContainer from "../common/PageContainer";

type CategoryProductGridProps = {
    products: Product[];
}

const CategoryProductGrid = ({ products }: CategoryProductGridProps) => {

    return (
        <PageContainer>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={{
                                id: product.id,
                                slug: product.slug,
                                categoryId: product.categoryId,
                                persianName: product.info.persianName,
                                englishName: product.info.englishName,
                                price: product.purchasePanel.finalPrice ?? product.purchasePanel.originalPrice,
                                originalPrice: product.purchasePanel.originalPrice,
                                stock: product.purchasePanel.stock,
                                rating: product.info.rating,
                                sellerRating: product.purchasePanel.sellerRating,
                                guarantee: product.purchasePanel.guarantee,
                                storeName: product.purchasePanel.storeName,
                                description: product.info.description,
                                images: product.images.map((url, index) => ({
                                    url,
                                    sortOrder: index,
                                })),
                                colors: product.info.colors,
                                features: product.info.features,
                            }}
                        />
                    ))
                }
            </div>

        </PageContainer>
    )
}
export default CategoryProductGrid