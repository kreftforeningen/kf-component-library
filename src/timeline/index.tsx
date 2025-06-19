import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const timelineVariants = cva("", {
  variants: {
    variant: {
      default: "",
      icon: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type TimelineItemProps = React.ComponentProps<"div"> &
  VariantProps<typeof timelineVariants> & {
    isLast?: boolean;
  };

function Timeline({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof timelineVariants>) {
  return (
    <div
      data-slot="timeline"
      className={cn(timelineVariants({ variant }), className)}
      {...props}
    />
  );
}

function TimelineItem({
  className,
  children,
  isLast,
  ...props
}: TimelineItemProps) {
  return (
    <div
      data-slot="timeline-item"
      className={cn(
        "flex flex-col justify-between min-[960px]:flex-row gap-4 min-[960px]:gap-10",
        className
      )}
      {...props}
    >
      <div className="flex gap-4 min-[960px]:max-w-md">
        <div className="flex flex-col items-center">
          <span className="h-3 shrink-0"></span>
          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-600"></span>
          <span className="h-2 shrink-0"></span>
          <span
            className={isLast ? "" : "h-14 w-[2px] shrink-0 bg-red-600"}
          ></span>
        </div>
        <div className="flex flex-col gap-2 py-2 px-4">{children}</div>
      </div>
    </div>
  );
}

function TimelineItemTitle({
  className,
  ...props
}: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="timeline-item-title"
      className={cn("text-base m-0", className)}
      {...props}
    />
  );
}

function TimelineItemDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="timeline-item-description"
      className={cn("", className)}
      {...props}
    />
  );
}

export { Timeline, TimelineItem, TimelineItemTitle, TimelineItemDescription };
