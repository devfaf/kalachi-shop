import { Button } from "@mui/material"
import { VscLocation } from "react-icons/vsc";
import { KeyboardArrowDown } from "@mui/icons-material";

const Location = () => {
  return (
    <Button
      startIcon={<VscLocation />}
      endIcon={<KeyboardArrowDown />}
      sx={{
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