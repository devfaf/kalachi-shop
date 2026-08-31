import { Box, TextField, IconButton, InputAdornment } from "@mui/material"
import {
    SearchOutlined,
} from "@mui/icons-material";
import { HiOutlineCamera } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";

const Search = () => {
    return (

        <Box
            sx={{
                width: "100%",
                maxWidth: 500,
            }}
        >
            <TextField
                fullWidth
                placeholder="جستجو در بین ۱۵۰۰ محصول تخفیف‌دار"
                sx={{
                    height: 50,
                    "& .MuiOutlinedInput-root": {
                        height: 64,
                        padding: 0,
                        borderRadius: 1,

                        "& fieldset": {
                            border: "1px solid",
                            borderColor: "divider",
                            borderWidth: "1px !important",
                        },

                        "&:hover fieldset": {
                            borderColor: "divider",
                            borderWidth: "1px !important",
                        },

                        "&.Mui-focused fieldset": {
                            borderColor: "divider",
                            borderWidth: "1px !important",
                        },
                    },
                }}
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    size="small"
                                    aria-label="جستجو"
                                    sx={{
                                        width: 50,
                                        height: 50,
                                        padding: 0,
                                        border: "10px solid",
                                        borderColor: "primary.main",
                                        borderRadius: 1,

                                        bgcolor: "primary.main",
                                        color: "primary.contrastText",

                                        "&:hover": {
                                            bgcolor: "primary.main",
                                        },
                                    }}
                                >
                                    <Box
                                        component={CiSearch}
                                        sx={{ fontSize: 30 }} />
                                </IconButton>
                            </InputAdornment>
                        ),

                        endAdornment: (
                            <InputAdornment position="start">
                                <IconButton
                                    size="small"
                                    aria-label="جستجوی تصویری"
                                    sx={{
                                        pl: 2,

                                        "&:active": {
                                            transform: "scale(0.85)",
                                        },

                                        transition: "transform 150ms ease",
                                    }}
                                >
                                    <Box
                                        component={HiOutlineCamera}
                                        sx={{
                                            fontSize: 30,
                                            color: "primary.main",
                                        }}

                                    />
                                </IconButton>
                            </InputAdornment>
                        ),
                    },
                }}
            />
        </Box>
    )
}
export default Search