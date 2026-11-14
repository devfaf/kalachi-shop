import ProductCard from "../product/ProductCard";
import { Product } from "@/data/products";
import PageContainer from "../common/PageContainer";

type CategoryProductGridProps = {
    products: Product[];
}

const CategoryProductGrid = ({ products }: CategoryProductGridProps) => {

    return (
        <PageContainer>
            <div className="grid gird-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={{
                                id: product.id,
                                slug: product.slug,
                                persianName: product.info.persianName,
                                englishName: product.info.englishName,
                                price: product.purchasePanel.finalPrice ?? product.purchasePanel.originalPrice,
                                originalPrice: product.purchasePanel.originalPrice,
                                images: product.images.map((url, index) => ({
                                    url,
                                    sortOrder: index,
                                })),
                            }}
                        />
                    ))
                }
            </div>

        </PageContainer>
    )
}
export default CategoryProductGrid