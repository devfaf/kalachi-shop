import { Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { AiOutlineUser } from "react-icons/ai";
import AppButton from "@/components/common/AppButton";

const Auth = () => {
  return (
    <AppButton
      startIcon={
        <Box
          component={AiOutlineUser}
          sx={{
            fontSize: {
              xs: 28,
              md: 20,
            },
          }}
        />
      }
      endIcon={<KeyboardArrowDownIcon />}
      sx={{
        height: 44,

        minWidth: {
          xs: 44,
          md: "auto",
        },

        px: {
          xs: 1,
          md: 1.5,
        },

        fontSize: 14,
        fontWeight: 400,
        color: "text.primary",

        "& .MuiButton-startIcon": {
          marginLeft: 0.5,
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
    </AppButton>
  );
};

export default Auth;