import { AiOutlineUser } from "react-icons/ai";
import AppButton from "@/components/common/AppButton";

const Auth = () => {
  return (
    <AppButton
      startIcon={
        <AiOutlineUser className="text-[28px] md:text-[20px]" />
      }
      className="h-11 min-w-11 text-foreground md:min-w-0"
    >
      <span className="hidden md:inline">ورود / ثبت‌نام</span>
    </AppButton>
  );
};

export default Auth;