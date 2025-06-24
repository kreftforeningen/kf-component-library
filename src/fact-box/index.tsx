import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button } from "../button";
import React, { useState, createContext, useContext } from "react";
import { ArrowDown } from "lucide-react";

const factBoxVariants = cva("bg-blue-100 rounded-xl dark:bg-blue-950", {
  variants: {
    variant: {
      default: "",
    },
  },
});

const FactBoxContext = createContext<
  | {
      expanded: boolean;
      toggle: () => void;
    }
  | undefined
>(undefined);

function FactBox({
  className,
  variant,
  children,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof factBoxVariants>) {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded((prev) => !prev);
  return (
    <FactBoxContext.Provider value={{ expanded, toggle }}>
      <div
        data-slot="fact-box"
        className={cn("fact-box", factBoxVariants({ variant }), className)}
        {...props}
      >
        {children}
      </div>
    </FactBoxContext.Provider>
  );
}

function FactBoxTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="fact-box-title"
      className={cn("text-2xl font-bold mt-0 mb-4", className)}
      {...props}
    />
  );
}

function FactBoxContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="fact-box-content"
      className={cn("p-8", className)}
      {...props}
    />
  );
}

function FactBoxDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const context = useContext(FactBoxContext);
  const expanded = context?.expanded;
  return (
    <div
      data-slot="fact-box-content"
      className={cn(
        "relative ",
        expanded
          ? "h-auto"
          : "h-[80px] overflow-hidden [mask-image:linear-gradient(to_bottom,black,transparent)]",
        className
      )}
      {...props}
    />
  );
}

function FactBoxAction({ className, ...props }: React.ComponentProps<"div">) {
  const context = useContext(FactBoxContext);
  if (!context) return null;
  const { expanded, toggle } = context;
  return (
    <div
      data-slot="fact-box-footer"
      className={cn("flex justify-center mt-4 relative", className)}
      {...props}
    >
      <Button
        onClick={toggle}
        className={cn(
          "transition-all duration-600 w-10 h-10 absolute bottom-0 translate-y-1/2",
          expanded ? "rotate-180" : ""
        )}
      >
        <ArrowDown />
      </Button>
    </div>
  );
}

export {
  FactBox,
  FactBoxTitle,
  FactBoxDescription,
  FactBoxAction,
  FactBoxContent,
};
