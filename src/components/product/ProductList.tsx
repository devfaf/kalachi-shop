import { products } from "@/components/data/products"
import { Box } from "@mui/material";
import Link from "next/link";

const ProductList = () => {
  return (
        <Box>
            {
                products.map(p => 
                    <Link href={`/products/${p.slug}`} key={p.id}>
                        {p.name}
                    </Link>
                )
            }
        </Box>
  )
}
export default ProductList