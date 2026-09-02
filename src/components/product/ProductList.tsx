import { products } from "@/components/data/products"
import { Box } from "@mui/material";

const ProductList = () => {
  return (
        <Box>
            {
                products.map(p => 
                    <Box key={p.id}>
                        {p.name}
                    </Box>
                )
            }
        </Box>
  )
}
export default ProductList