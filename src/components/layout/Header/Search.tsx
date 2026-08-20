import { Box, TextField, IconButton, InputAdornment } from "@mui/material"
import {
    SearchOutlined,
    CameraAltOutlined,
} from "@mui/icons-material";

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
                size="small"
                placeholder="جستجوی محصول..."
                sx={{
                    "& .MuiOutlinedInput-root": {
                        height: 48,
                        borderRadius: 2.5,
                        bgcolor: "background.default",

                        "& fieldset": {
                            borderColor: "#E5E7EB",
                        },

                        "&:hover fieldset": {
                            borderColor: "#E5E7EB",
                        },

                        "&.Mui-focused fieldset": {
                            borderColor: "#E5E7EB",
                        },
                    },

                    "& .MuiInputBase-input": {
                        textAlign: "right",
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
                                        width: 40,
                                        height: 40,
                                        bgcolor: "primary.main",
                                        color: "#fff",
                                        borderRadius: 2,

                                        "&:hover": {
                                            bgcolor: "primary.main",
                                        },
                                    }}
                                >
                                    <SearchOutlined />
                                </IconButton>
                            </InputAdornment>
                        ),

                        endAdornment: (
                            <InputAdornment position="start">
                                <IconButton
                                    size="small"
                                    aria-label="جستجوی تصویری"
                                    sx={{ color: "text.secondary" }}
                                >
                                    <CameraAltOutlined />
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