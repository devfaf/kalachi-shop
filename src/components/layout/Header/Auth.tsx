import AppButton from "@/components/common/AppButton";
import { AiOutlineUser } from "react-icons/ai";
import { Box } from "@mui/material";

const Auth = () => {
  return (
    <AppButton
      startIcon={
        <AiOutlineUser
          style={{
            fontSize: "20px",
          }}
        />
      }
      sx={{
        height: 45,
        minWidth: {
          xs: 44,
          md: "auto",
        },
        color: "text.primary",

        "& .MuiButton-startIcon svg": {
          fontSize: {
            xs: 28,
            md: 20,
          },
        },

        "& .MuiButton-endIcon": {
          display: "none",
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
    </AppButton>
  );
};

export default Auth;