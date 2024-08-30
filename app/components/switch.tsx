import { cn } from "@/lib/utils";

export const Switch = ({
  className = '',
  onChange,
}: {
  className?: string;
  onChange: VoidFunction;
}) => {
  return (
    <div className={cn("w-4 h-8 bg-gray-500", className)}>
      <button onClick={onChange} className="absolute inset-0">
        <span className="sr-only">switch</span>
      </button>
    </div>
  );
};