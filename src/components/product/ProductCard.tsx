import { Product } from "@/data/products"
import Link from "next/link"
import Image from "next/image"

type ProductCardProps = {
    product: Product;
}

const ProductCard = ({product}: ProductCardProps) => {
    const price = product.purchasePanel.discountPrice ?? product.purchasePanel.price

  return (
    <article>
        <Link href={`/products/${product.slug}`}>
            <div>
                <Image src={product.images[0]}
                alt={product.info.persianName}
                fill

                />
            </div>

            <div>
                <h2 className="line-clamp-2 font-medium">
                    {product.info.persianName}
                </h2>
                <p className="text-sm text-muted-foreground">
                    {product.info.englishName}
                </p>

                <p className="font-bold">
                    {price.toLocaleString("fa-IR")} تومان
                </p>
            </div>
        </Link>
    </article>
  )
}
export default ProductCard