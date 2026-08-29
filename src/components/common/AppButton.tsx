import { Button } from "@mui/material";
import type { ButtonProps } from "@mui/material";
import { navButtonSx } from "../layout/Navigation/style/navButtonStyle";

const AppButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
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
    />
  );
};

export default AppButton;