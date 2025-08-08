import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const spinnerVariants = cva("flex flex-col gap-4 justify-center items-center", {
  variants: {
    variant: {
      default: "",
      destructive: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Spinner({
  className,
  variant,
  children,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof spinnerVariants> & { children?: React.ReactNode }) {
  return (
    <div className={cn(spinnerVariants({ variant }), className)} {...props}>
      <div className="w-12 h-12 rounded-full border-4 border-dotted animate-spin border-blue-600 dark:border-blue-400  border-t-transparent dark:border-t-transparent" />
      {children && <div className="animate-pulse-text">{children}</div>}
    </div>
  );
}

export { Spinner };
