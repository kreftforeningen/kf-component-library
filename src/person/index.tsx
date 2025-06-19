import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const personVariants = cva("", {
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

const personItemVariants = cva("", {
  variants: {
    color: {
      default: "bg-grey-100 dark:bg-grey-800",
      blue: "bg-blue-100 dark:bg-blue-950",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

function Person({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof personVariants>) {
  return (
    <div
      data-slot="person"
      className={cn("grid gap-4", personVariants({ variant }), className)}
      {...props}
    />
  );
}

function PersonItem({
  className,
  color,
  ...props
}: React.ComponentProps<"article"> & VariantProps<typeof personItemVariants>) {
  return (
    <article
      data-slot="person-item"
      className={cn(
        "flex flex-row gap-4 rounded-md p-4 items-center",
        personItemVariants({ color }),
        className
      )}
      {...props}
    />
  );
}

function PersonItemImage({
  className,
  fallback,
  ...props
}: React.ComponentProps<"img"> & { fallback?: string }) {
  return (
    <Avatar
      data-slot="person-item-image"
      className={cn("w-16 h-16 rounded-full shrink-0 grow-0 ", className)}
    >
      <AvatarImage {...props} />
      <AvatarFallback className="bg-grey-700 dark:bg-grey-100 text-grey-100 dark:text-grey-700">
        {fallback}
      </AvatarFallback>
    </Avatar>
  );
}

function PersonItemContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="person-item-content"
      className={cn("overflow-hidden flex flex-col gap-1", className)}
      {...props}
    />
  );
}

function PersonItemName({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="person-item-name"
      className={cn("m-0 text-base", className)}
      {...props}
    />
  );
}

function PersonItemTitle({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="person-item-title"
      className={cn("text-sm text-grey-700 dark:text-grey-100", className)}
      {...props}
    />
  );
}

function PersonItemEmail({ className, ...props }: React.ComponentProps<"a">) {
  return (
    <a
      data-slot="person-item-email"
      className={cn(
        "text-sm truncate text-blue-800 hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-300 hover:underline hover:cursor-pointer block data-slot='person-item-email'",
        className
      )}
      aria-label={`Email ${props.href}`}
      {...props}
    />
  );
}

function PersonItemPhone({ className, ...props }: React.ComponentProps<"a">) {
  return (
    <a
      data-slot="person-item-phone"
      className={cn(
        "text-sm truncate text-blue-800 hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-300 block hover:underline hover:cursor-pointer data-slot='person-item-phone'",
        className
      )}
      aria-label={`Phone ${props.href}`}
      {...props}
    />
  );
}

function PersonItemDescription({
  className,
  children,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <Popover data-slot="person-item-description">
      <PopoverTrigger
        data-slot="person-item-description-trigger"
        className={cn(
          "text-sm text-blue-800 hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-300 hover:underline hover:cursor-pointer block text-left",
          className
        )}
        {...props}
      >
        Les mer
      </PopoverTrigger>
      <PopoverContent data-slot="person-item-description-content">
        {children}
      </PopoverContent>
    </Popover>
  );
}

export {
  Person,
  PersonItem,
  PersonItemImage,
  PersonItemContent,
  PersonItemName,
  PersonItemTitle,
  PersonItemEmail,
  PersonItemPhone,
  PersonItemDescription,
};
