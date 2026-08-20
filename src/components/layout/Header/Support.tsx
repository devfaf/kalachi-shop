import { IconButton } from "@mui/material"
import {
    PhoneOutlined,

} from "@mui/icons-material";

const Support = () => {
    return (
        <IconButton
            sx={{ color: "text.secondary" }}
            aria-label="تماس با پشتیبانی"
            component="a"
        >
            <PhoneOutlined />
        </IconButton>
    )
}
export default Support