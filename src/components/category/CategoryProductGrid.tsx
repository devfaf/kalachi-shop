import ProductCard from "@/components/product/ProductCard";
import type { Product } from "@/data/products";

type CategoryProductGridProps = {
    products: Product[];
};

const CategoryProductGrid = ({
    products,
}: CategoryProductGridProps) => {
    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
}
export default CategoryProductGrid