import { Box } from "@mui/material";
import { Button } from "@mui/material"
import { AiOutlineUser } from "react-icons/ai";
import { navButtonSx } from "../Navigation/style/navButtonStyle";

const Auth = () => {
    return (
        <Button
            startIcon={
                <Box
                    component={AiOutlineUser}
                    sx={{
                        fontSize: 25,
                    }}
                />
            }
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