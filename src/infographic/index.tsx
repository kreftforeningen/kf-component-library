import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const infographicVariants = cva("", {
  variants: {
    variant: {
      default: "grid-cols-1 md:grid-cols-2",
      list: "grid-cols-1",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Infographic({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof infographicVariants>) {
  return (
    <div
      data-slot="infographic"
      className={cn("grid gap-8", infographicVariants({ variant }), className)}
      {...props}
    />
  );
}

function InfographicItem({
  className,
  ...props
}: React.ComponentProps<"article">) {
  return (
    <article
      data-slot="infographic-item"
      className={cn("p-10 bg-gray-100 dark:bg-gray-800 rounded-xl", className)}
      {...props}
    />
  );
}

function InfographicItemIcon({ ...props }: React.ComponentProps<"div">) {
  return <div data-slot="infographic-item-icon" {...props} />;
}

function InfographicItemTitle({
  className,
  ...props
}: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="infographic-item-title"
      className={cn("text-lg font-bold", className)}
      {...props}
    />
  );
}

function InfographicItemTitleNumber({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="infographic-item-title-number"
      className={cn("text-2xl font-bold mt-4 mb-2block", className)}
      {...props}
    />
  );
}

function InfographicItemTitleText({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="infographic-item-title-text"
      className={cn("text-lg font-bold block", className)}
      {...props}
    />
  );
}

function InfographicItemDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="infographic-item-description"
      className={cn("text-base", className)}
      {...props}
    />
  );
}

export {
  Infographic,
  InfographicItem,
  InfographicItemIcon,
  InfographicItemTitle,
  InfographicItemTitleNumber,
  InfographicItemTitleText,
  InfographicItemDescription,
};
