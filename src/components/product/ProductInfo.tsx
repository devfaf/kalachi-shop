import type { ProductInfo } from "@/data/products";

type ProductInfoProps = {
  info: ProductInfo;
};

const ProductInfo = ({ info }: ProductInfoProps) => {

  return (
    <div>
      <div>
        <div>{info.persianName}</div>
      </div>
    </div>
  );
};

export default ProductInfo;