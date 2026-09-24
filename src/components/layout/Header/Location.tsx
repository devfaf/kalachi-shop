import { VscLocation } from "react-icons/vsc";
import { HiOutlineChevronDown } from "react-icons/hi2";
import AppButton from "@/components/common/AppButton";

const Location = () => {
  return (
    <AppButton
      startIcon={<VscLocation size={18} />}
      endIcon={<HiOutlineChevronDown size={15} />}
      className="h-[50px] shrink-0 text-foreground"
    >
      انتخاب شهر
    </AppButton>
  );
};

export default Location;