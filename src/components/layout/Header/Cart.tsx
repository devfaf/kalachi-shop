import { IconButton, Badge } from "@mui/material"
import {
  ShoppingCartOutlined,
} from "@mui/icons-material";

const Cart = () => {
  return (

              <IconButton
                sx={{ color: "text.secondary" }}
                aria-label={`آیتم در سبد خرید`}
              >
                <Badge badgeContent={3} color="secondary">
                  <ShoppingCartOutlined />
                </Badge>
              </IconButton>
  )
}
export default Cart