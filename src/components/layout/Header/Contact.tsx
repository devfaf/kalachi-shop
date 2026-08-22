import { IconButton, Box } from "@mui/material"
import { PiPhoneCallLight } from "react-icons/pi";


const Contact = () => {
    return (
        <IconButton
            sx={{ 
                color: "text.secondary",
                p:0,
             }}
            aria-label="تماس با پشتیبانی"
            component="a"
        >
            <Box
                component={PiPhoneCallLight}
                sx={{
                    fontSize: 30,
                    transition: "transform 200ms ease",
                    "&:hover": {
                        transform: "translateY(-3px)",
                        color: "primary.main",
                    },
                }}
            />
        </IconButton>
    )
}
export default Contact