import { Button } from "@mui/material"
import {
  LocationOnOutlined,
} from "@mui/icons-material";

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
            startIcon={<LocationOnOutlined />}
            sx={{
              ...navButtonSx,
              flexShrink: 0,
            }}
          >
            انتخاب شهر
          </Button>
  )
}
export default Location