import Link from "next/link";
import { products } from "@/data/products";

const ProductList = () => {
  return (
    <div className="flex flex-col gap-2">
      {products.map((p) => (
        <Link
          key={p.id}
          href={`/products/${p.slug}`}
          className="text-sm text-foreground transition-colors hover:text-primary"
        >
          {p.info.persianName}
        </Link>
      ))}
    </div>
  );
};

export default ProductList;