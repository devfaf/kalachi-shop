import { Button } from "@mui/material";
import type { ButtonProps } from "@mui/material";

const AppButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      sx={{
        height: 50,
        fontSize: 14,
        fontWeight: 400,
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

        "& .MuiButton-startIcon": {
          margin: 0,
        },

        "& .MuiButton-endIcon": {
          display: {
            xs: "none",
            md: "inline-flex",
          },
        },

        ...props.sx,
      }}
    />
  );
};

export default AppButton;