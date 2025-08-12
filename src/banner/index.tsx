import * as React from "react";
import { forwardRef } from "react";

import { Button } from "@/button";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const bannerVariants = cva(
  "group grid grid-cols-1 sm:grid-cols-2 rounded-xl sm:min-h-[400px] overflow-hidden",
  {
    variants: {
      variant: {
        default: "",
        right: "",
        full: "",
      },
      color: {
        default: "bg-blue-100 dark:bg-blue-900",
      },
    },
    defaultVariants: {
      variant: "default",
      color: "default",
    },
  }
);

function Banner({
  variant,
  color,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof bannerVariants>) {
  return (
    <div
      data-slot="banner"
      data-variant={variant}
      className={cn(bannerVariants({ variant, color, className }))}
      {...props}
    >
      {children}
    </div>
  );
}

function BannerImage({
  className,
  style,
  ...props
}: React.ComponentProps<"img">) {
  return (
    <img
      className={cn(
        "order-1 sm:order-none w-full h-full object-cover object-center group-data-[variant=right]:sm:order-2 max-h-[300px] sm:max-h-full",
        className
      )}
      style={style}
      {...props}
    />
  );
}

const BannerContent = forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "p-8 flex flex-col gap-2 order-2 sm:order-none group-data-[variant=right]:sm:order-1",
          className
        )}
        {...props}
      />
    );
  }
);
BannerContent.displayName = "BannerContent";

function BannerTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return <h3 className={cn("text-2xl font-bold mt-0", className)} {...props} />;
}

function BannerDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("text-sm", className)} {...props} />;
}

function BannerButtons({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex gap-2 ", className)} {...props} />;
}

function BannerButtonPrimary({
  className,
  href,
  ...props
}: React.ComponentProps<"button"> & { href: string }) {
  if (!props.children || props.children === "" || !href || href === "") {
    return null;
  }
  return (
    <a href={href}>
      <Button className={cn("", className)} variant="default" {...props} />
    </a>
  );
}

function BannerButtonSecondary({
  className,
  href,
  ...props
}: React.ComponentProps<"button"> & { href: string }) {
  if (!props.children || props.children === "" || !href || href === "") {
    return null;
  }
  return (
    <a href={href}>
      <Button
        className={cn("bg-transparent", className)}
        variant="outline"
        {...props}
      />
    </a>
  );
}

export {
  Banner,
  BannerTitle,
  BannerContent,
  BannerDescription,
  BannerButtons,
  BannerImage,
  BannerButtonPrimary,
  BannerButtonSecondary,
};
