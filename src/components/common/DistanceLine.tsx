import { cn } from "@/lib/utils";

interface DistanceLineProps {
  className?: string;
}

const DistanceLine = ({ className }: DistanceLineProps) => {
  return (
    <div
      className={cn(
        "h-4 w-px shrink-0 bg-border",
        className
      )}
    />
  );
};

export default DistanceLine;