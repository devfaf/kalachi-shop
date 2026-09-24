import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type AppButtonProps = React.ComponentProps<typeof Button> & {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

const AppButton = React.forwardRef<HTMLButtonElement, AppButtonProps>(
  ({ className, children, startIcon, endIcon, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="outline"
        className={cn(
          "h-11 gap-1.5 rounded-md border-0 px-2 text-sm font-normal",
          "md:min-w-0 md:border md:border-border md:px-3",
          "min-w-10 [&_svg]:size-4 [&_svg]:shrink-0",
          className
        )}
        {...props}
      >
        {startIcon}
        {children}
        {endIcon}
      </Button>
    );
  }
);

AppButton.displayName = "AppButton";

export default AppButton;