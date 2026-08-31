import { Button } from "@mui/material";
import type { ButtonProps } from "@mui/material";

const AppButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      sx={{
        height: 45,
        fontSize: 14,
        fontWeight: 400,
        borderRadius: 1,

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
          marginLeft: "4px",
          marginRight: 0,
        },

        "& .MuiButton-endIcon": {
          display: {
            xs: "none",
            md: "inline-flex",
          },
          marginLeft: 0,
          marginRight: "4px",
        },

        ...props.sx,
      }}
    />
  );
};

export default AppButton;