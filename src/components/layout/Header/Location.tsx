import { Button } from "@mui/material"
import { VscLocation } from "react-icons/vsc";
import { KeyboardArrowDown } from "@mui/icons-material";

const Location = () => {
  const navButtonSx = {
    minWidth: "auto",
    px: 1.4,
    py: 1,
    color: "text.primary",
    whiteSpace: "nowrap",
    fontWeight: 500,
    gap: 1,

    "& .MuiButton-startIcon": {
      margin: 0,
      color: "text.secondary",
    },

    "& .MuiButton-endIcon": {
      margin: 0,
      color: "text.secondary",
    },
  };
  return (
    <Button
      startIcon={<VscLocation />}
      endIcon={<KeyboardArrowDown />}
      sx={{
        ...navButtonSx,
        flexShrink: 0,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        height: 50,
      }}
    >
      انتخاب شهر
    </Button>
  )
}
export default Location