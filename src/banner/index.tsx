import * as React from "react";
import { useRef, useEffect, useState, forwardRef } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const bannerVariants = cva(
  "flex flex-col sm:flex-row rounded-xl bg-blue-200 min-h-[400px] overflow-hidden",
  {
    variants: {
      variant: {
        default: "",
        right: "",
        full: "",
      },
      color: {
        default: "bg-blue-200",
        red: "bg-red-200",
        green: "bg-green-200",
        orange: "bg-orange-200",
        purple: "bg-purple-200",
        grey: "bg-grey-200",
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
  const contentRef = useRef<HTMLDivElement>(null);
  const [imageHeight, setImageHeight] = useState(400);

  useEffect(() => {
    const updateImageHeight = () => {
      if (contentRef.current) {
        const contentHeight = contentRef.current.offsetHeight;
        // Use content height, but minimum 400px
        const newHeight = Math.max(contentHeight, 400);
        setImageHeight(newHeight);
      }
    };

    updateImageHeight();

    // Update on window resize
    window.addEventListener("resize", updateImageHeight);

    // Use ResizeObserver to watch for content changes
    const resizeObserver = new ResizeObserver(updateImageHeight);
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateImageHeight);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      data-slot="banner"
      data-variant={variant}
      className={cn(bannerVariants({ variant, color, className }))}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === BannerContent) {
            return React.cloneElement(
              child as React.ReactElement<
                React.ComponentProps<typeof BannerContent>
              >,
              { ref: contentRef }
            );
          }
          if (child.type === BannerImage) {
            return React.cloneElement(
              child as React.ReactElement<
                React.ComponentProps<typeof BannerImage>
              >,
              { style: { height: `${imageHeight}px` } }
            );
          }
        }
        return child;
      })}
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
        "flex-1 w-full object-cover data-[variant=right]:order-2",
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
          "py-16 px-16 flex-1 flex flex-col gap-2 data-[variant=right]:order-1",
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

export {
  Banner,
  BannerTitle,
  BannerContent,
  BannerDescription,
  BannerButtons,
  BannerImage,
};
