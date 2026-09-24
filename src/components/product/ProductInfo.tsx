import { products } from "@/data/products";

type ProductInfoProps = {
  slug: string;
};

const ProductInfo = ({ slug }: ProductInfoProps) => {
  const product = products.find((p) => p.slug === slug);

  return (
    <div>
      <div>
        <div>{product?.info.persianName}</div>
      </div>
    </div>
  );
};

export default ProductInfo;