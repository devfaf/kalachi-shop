import { VscLocation } from "react-icons/vsc";
import { HiOutlineChevronDown } from "react-icons/hi2";
import AppButton from "@/components/common/AppButton";

const Location = () => {
  return (
    <AppButton
      startIcon={<VscLocation size={18} />}
      endIcon={<HiOutlineChevronDown size={15} />}
      sx={{
        flexShrink: 0,
        height: 50,
        color: "text.primary",

        "& .MuiButton-startIcon": {
          marginRight: 0,
          marginLeft: "6px",
        },

        "& .MuiButton-endIcon": {
          display: "inline-flex",
          marginLeft: 0,
          marginRight: "6px",
        },
      }}
    >
      انتخاب شهر
    </AppButton>
  );
};

export default Location;

