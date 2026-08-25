import { Box, IconButton, Button } from "@mui/material";
import { AiOutlineUser } from "react-icons/ai";
import { navButtonSx } from "../Navigation/style/navButtonStyle";

const Auth = () => {
    return (
        <Button
            sx={{
                ...navButtonSx,
                height: 50,
                fontSize: 16,
                borderRadius: 2,

                border: {
                    xs: "none",
                    md: "1px solid",
                },

                borderColor: {
                    md: "divider",
                },

                minWidth: {
                    xs: 40,
                    md: "auto",
                },

                px: {
                    xs: 1,
                    md: 2,
                },

                // مخفی کردن متن
                "& .MuiButton-startIcon": {
                    margin: 0,
                },

                "& .MuiButton-endIcon": {
                    display: {
                        xs: "none",
                        md: "inline-flex",
                    },
                },
            }}
        >
            <IconButton
                sx={{
                    p: 0,
                }}
            >
                <Box
                    component={AiOutlineUser}
                    sx={{
                        fontSize: {
                            xs: "30px",
                            md: "20px"
                        },
                    }}
                />
            </IconButton>
            <Box
                component="span"
                sx={{
                    display: {
                        xs: "none",
                        md: "inline",
                    },
                }}
            >
                ورود / ثبت‌نام
            </Box>
        </Button>
    )
}
export default Auth