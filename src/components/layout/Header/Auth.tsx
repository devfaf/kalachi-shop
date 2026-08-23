import { Button } from "@mui/material"
import { AiOutlineUser } from "react-icons/ai";
import { KeyboardArrowDown } from "@mui/icons-material";
import { navButtonSx } from "../Navigation/style/navButtonStyle";

const Auth = () => {
    return (
        <Button
            startIcon={<AiOutlineUser />}
            endIcon={<KeyboardArrowDown />}
            sx={{
                ...navButtonSx,
                flexShrink: 0,
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 2,
                height: 50,
                fontSize:16,
            }}
        >
            ورود / ثبت‌نام
        </Button>
    )
}
export default Auth