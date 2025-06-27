import { Download as DownloadIcon, ShoppingCart } from "lucide-react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const downloadVariants = cva(
  "flex flex-col sm:flex-row gap-4 bg-grey-100 dark:bg-grey-800 overflow-hidden rounded-xl my-4",
  {
    variants: {
      variant: {
        default: "",
        destructive: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Download({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof downloadVariants>) {
  return (
    <article
      data-slot="download"
      className={cn(downloadVariants({ variant }), className)}
      {...props}
    />
  );
}

function DownloadImage({
  className,
  src,
  ...props
}: React.ComponentProps<"img">) {
  if (!src) return null;
  return (
    <img
      data-slot="download-image"
      className={cn("h-32 w-20 object-cover rounded-sm", className)}
      src={src}
      {...props}
    />
  );
}

function DownloadContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="download-content"
      className={cn("flex flex-row gap-4 p-4 sm:grow", className)}
      {...props}
    />
  );
}

function DownloadMain({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="download-main" className={cn(className)} {...props} />;
}

function DownloadTitle({
  className,
  children,
  ...props
}: React.ComponentProps<"h3">) {
  if (!children) return null;
  return (
    <h3
      data-slot="download-title"
      className={cn("pt-0 m-0", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

function DownloadDescription({
  className,
  children,
  ...props
}: React.ComponentProps<"p">) {
  if (!children) return null;
  return (
    <p
      data-slot="download-description"
      className={cn("my-4 text-sm", className)}
      {...props}
    >
      {children}
    </p>
  );
}

function DownloadFooter({
  className,
  ...props
}: React.ComponentProps<"footer">) {
  return (
    <footer
      data-slot="download-footer"
      className={cn(
        "flex flex-row sm:flex-col h-10 sm:h-auto sm:min-w-[150px] items-start sm:items-center sm:grow-0",
        className
      )}
      {...props}
    />
  );
}

function DownloadDownloadUrl({
  className,
  children,
  href,
  ...props
}: React.ComponentProps<"a">) {
  if (!href || !children) return null;
  return (
    <a
      data-slot="download-download-url"
      className={cn(
        "flex flex-row h-full sm:w-full gap-2 items-center hover:cursor-pointer hover:text-grey-950 hover:underline w-1/2 justify-center bg-grey-300 text-grey-900 p-4 dark:bg-grey-700 dark:text-grey-100",
        className
      )}
      href={href}
      {...props}
    >
      <DownloadIcon className="shrink-0" />
      <span>{children}</span>
    </a>
  );
}

function DownloadOrderUrl({
  className,
  children,
  href,
  ...props
}: React.ComponentProps<"a">) {
  if (!href || !children) return null;
  return (
    <a
      data-slot="download-order-url"
      className={cn(
        "flex flex-row h-full sm:w-full gap-2 items-center hover:cursor-pointer hover:text-grey-950 hover:underline w-1/2 justify-center bg-grey-200 text-grey-900 p-4 dark:bg-grey-600 dark:text-grey-100",
        className
      )}
      href={href}
      {...props}
    >
      <ShoppingCart className="shrink-0" />
      <span>{children}</span>
    </a>
  );
}

export {
  Download,
  DownloadContent,
  DownloadImage,
  DownloadMain,
  DownloadTitle,
  DownloadDescription,
  DownloadFooter,
  DownloadDownloadUrl,
  DownloadOrderUrl,
};
