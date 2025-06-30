import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-md font-medium transition-all disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus:border-ring focus:ring-2 focus:ring-offset-2 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-2 focus-visible:ring-offset-2 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:cursor-pointer border-2",
  {
    variants: {
      variant: {
        default:
          "bg-blue-700 text-blue-50 hover:bg-blue-800 focus-visible:ring-blue-700 focus:ring-blue-700 border-blue-700 hover:border-blue-800 focus:border-blue-700 focus-visible:border-blue-700 dark:focus-visible:ring-offset-blue-950 dark:focus:ring-offset-blue-950",
        destructive:
          "bg-red-700 text-red-50 hover:bg-red-800 focus-visible:ring-red-700 focus:ring-red-700 border-red-700 hover:border-red-800 focus:border-red-700 focus-visible:border-red-700 dark:focus-visible:ring-offset-red-950 dark:focus:ring-offset-red-950",
        outline:
          "bg-white text-blue-700 hover:text-blue-50 hover:border-blue-700 hover:bg-blue-700 focus-visible:ring-blue-700 focus:ring-blue-700 border-blue-700 hover:border-blue-700 focus:border-blue-700 focus-visible:border-blue-700 focus-visible:bg-blue-700 focus:bg-blue-700 focus:text-blue-50 focus-visible:text-blue-50 dark:focus-visible:ring-offset-blue-950 dark:focus:ring-offset-blue-950 dark:bg-transparent dark:text-blue-200 dark:border-blue-200 dark:focus-visible:ring-blue-200 dark:focus:ring-blue-200 dark:hover:bg-blue-200 dark:hover:text-blue-950 dark:focus-visible:bg-blue-200 dark:focus:bg-blue-200 dark:focus:text-blue-950 dark:focus-visible:text-blue-950",
        secondary:
          "bg-pink-700 text-pink-50 hover:bg-pink-800 focus-visible:ring-pink-700 focus:ring-pink-700 border-pink-700 hover:border-pink-800 focus:border-pink-700 focus-visible:border-pink-700 dark:focus-visible:ring-offset-pink-950 dark:focus:ring-offset-pink-950",
        ghost:
          "hover:bg-grey-200 hover:text-grey-950 border-none focus:ring-grey-200 focus-visible:ring-grey-200 focus-visible:bg-grey-200 focus:bg-grey-200 focus:text-grey-950 focus-visible:text-grey-950 dark:hover:bg-grey-700 dark:hover:text-grey-50 dark:focus:ring-grey-700 dark:focus-visible:ring-grey-700 dark:focus-visible:bg-grey-700 dark:focus:bg-grey-700 dark:focus:text-grey-50 dark:focus-visible:text-grey-50 dark:focus-visible:ring-offset-grey-950 dark:focus:ring-offset-grey-950",
        link: "text-primary underline-offset-4 hover:underline border-none bg-transparent focus:ring-transparent focus-visible:ring-transparent focus:ring-offset-transparent focus-visible:ring-offset-transparent focus:underline focus-visible:underline",
      },
      size: {
        default: "h-11 px-4 py-2 has-[>svg]:px-3",
        sm: "h-9 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
      shape: {
        default: "rounded-full",
        square: "rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  shape,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, shape, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
