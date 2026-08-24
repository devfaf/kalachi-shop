import { IconButton, Badge, Box } from "@mui/material"
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { toPersianNumber } from "@/lib/utils/farsiNumbers";

const Cart = () => {
  return (

    <IconButton
      sx={{
        color: "text.secondary",
        p: 0,
      }}
      aria-label={`آیتم در سبد خرید`}
    >
      <Badge 
      sx={{
        
      }}
      badgeContent={toPersianNumber(3)} 
      color="primary">
        <Box
        sx={{
          fontSize:30,
        }}
        component={HiOutlineShoppingCart}
        />
      </Badge>
    </IconButton>
  )
}
export default Cart