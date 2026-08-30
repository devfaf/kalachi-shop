import { Box, Button, TextField } from "@mui/material";

type AppInputProps = {
    placeholder?: string;
    buttonText?: string;
};

const AppInput = ({
    placeholder,
    buttonText = "ثبت",
}: AppInputProps) => {
    return (
        <Box
            sx={{
                display: "flex",
                width: "100%",
                maxWidth: 420,
                gap: 1,
            }}
        >
            <TextField
                fullWidth
                placeholder={placeholder}
                size="small"
            />

            <Button
                variant="contained"
                sx={{
                    minWidth: 100,
                    flexShrink: 0,
                }}
            >
                {buttonText}
            </Button>
        </Box>
    );
};

export default AppInput;