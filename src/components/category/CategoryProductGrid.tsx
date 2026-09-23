import ProductCard from "../product/ProductCard";
import { Product } from "@/data/products";
import PageContainer from "../common/PageContainer";

type CategoryProductGridProps = {
    products: Product[];
}

const CategoryProductGrid = ({products}: CategoryProductGridProps) => {

  return (
            <PageContainer>
    <div className="grid gird-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
        {
            products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))
        }
    </div>

            </PageContainer>
  )
}
export default CategoryProductGrid