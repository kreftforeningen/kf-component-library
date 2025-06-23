import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";

const linkListVariants = cva("grid  gap-8", {
  variants: {
    variant: {
      default: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      list: "grid-cols-1",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function LinkList({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof linkListVariants>) {
  return (
    <div
      data-slot="linklist"
      className={cn(linkListVariants({ variant }), className)}
      {...props}
    />
  );
}

function LinkListItem({ className, ...props }: React.ComponentProps<"a">) {
  return (
    <a
      data-slot="linklist-item"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function LinkListTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className="flex flex-row gap-2 items-center text-blue-800 hover:text-blue-900 hover:underline hover:cursor-pointer dark:text-blue-200 dark:hover:text-blue-300">
      <h3 className={cn("m-0", className)} {...props} />
      <ArrowRight />
    </div>
  );
}

function LinkListDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return <p className={cn("m-0", className)} {...props} />;
}

export { LinkList, LinkListItem, LinkListTitle, LinkListDescription };
