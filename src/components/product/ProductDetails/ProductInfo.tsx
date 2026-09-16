import { products } from "@/components/data/products"
import { Box } from "@mui/material"

type productInfoProps = {
  slug: string;
}

const ProductInfo = ({slug}:productInfoProps) => {
  const productsInfo = products.find(p => p.slug === slug)
  console.log(productsInfo);
  

  return (
    <Box>
      {
          <Box>
            <Box>{productsInfo?.info.persianName}</Box>
          </Box>
      }
    </Box>
  )
}
export default ProductInfo