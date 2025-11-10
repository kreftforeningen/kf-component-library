import { Download as DownloadIcon, ShoppingCart } from "lucide-react";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

type DownloadVariant = "default" | "destructive";

const DownloadGlobalStyles = createGlobalStyle`
  .kf-download {
    font-family: var(--kf-font-sans);
    container-type: inline-size;
    container-name: download;
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 4);
    margin-block: calc(var(--kf-spacing, 0.25rem) * 4);
    border-radius: var(--kf-radius-2xl, 1rem);
    overflow: hidden;
    background: color-mix(in srgb, var(--color-gray-100, #f1f5f9) 90%, transparent);
  }

  .dark .kf-download {
    background: color-mix(in srgb, var(--color-gray-800, #1f2937) 95%, transparent);
  }

  .kf-download--destructive {
    background: color-mix(in srgb, var(--color-red-100, #fee2e2) 85%, transparent);
  }

  .dark .kf-download--destructive {
    background: color-mix(in srgb, var(--color-red-900, #7f1d1d) 85%, transparent);
  }

  @container download (min-width: 40rem) {
    .kf-download {
      flex-direction: row;
      align-items: stretch;
    }
  }

  .kf-download__image {
    width: 5rem;
    height: 8rem;
    object-fit: cover;
    object-position: center;
    border-radius: var(--kf-radius-sm, 0.125rem);
  }

  .kf-download__content {
    display: flex;
    flex-direction: row;
    gap: calc(var(--kf-spacing, 0.25rem) * 4);
    padding: calc(var(--kf-spacing, 0.25rem) * 4);
    flex: 1 1 auto;
  }

  @container download (min-width: 40rem) {
    .kf-download__content {
      align-items: center;
    }
  }

  .kf-download__main {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 3);
  }

  .kf-download__title {
    margin: 0;
    padding-top: 0;
    font-size: var(--kf-text-lg, 1.125rem);
    line-height: var(--kf-text-lg--line-height, 1.5555555556);
    font-weight: 600;
    color: var(--color-foreground, #0f172a);
  }

  .dark .kf-download__title {
    color: var(--color-card-foreground, #f8fafc);
  }

  .kf-download__description {
    margin: 0;
    font-size: var(--kf-text-sm, 0.875rem);
    line-height: var(--kf-text-sm--line-height, 1.4285714286);
    color: var(--color-muted-foreground, rgba(15, 23, 42, 0.66));
  }

  .dark .kf-download__description {
    color: color-mix(in srgb, var(--color-muted-foreground, rgba(248, 250, 252, 0.8)) 90%, transparent);
  }

  .kf-download__footer {
    display: flex;
    flex-direction: row;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    align-items: stretch;
    padding: calc(var(--kf-spacing, 0.25rem) * 4);
  }

  @container download (min-width: 40rem) {
    .kf-download__footer {
      flex-direction: column;
      min-width: 9.375rem;
      height: auto;
      align-items: center;
    }
  }

  .kf-download__link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    flex: 1 1 50%;
    width: 100%;
    padding: calc(var(--kf-spacing, 0.25rem) * 4);
    border-radius: var(--kf-radius-md, 0.375rem);
    font-weight: 500;
    text-decoration: none;
    transition:
      transform 120ms var(--kf-ease-in-out, ease),
      background-color 120ms var(--kf-ease-in-out, ease),
      color 120ms var(--kf-ease-in-out, ease);
  }

  @container download (min-width: 40rem) {
    .kf-download__link {
      flex: 1 1 100%;
    }
  }

  .kf-download__link:hover {
    text-decoration: underline;
    transform: translateY(-1px);
  }

  .kf-download__link:focus-visible {
    outline: none;
    --kf-ring-color: var(--color-ring, rgba(59, 130, 246, 0.6));
    --kf-ring-offset-color: var(--color-white, #ffffff);
    --kf-ring-width: 3px;
    --kf-ring-offset-width: 2px;
    box-shadow:
      0 0 0 var(--kf-ring-offset-width) var(--kf-ring-offset-color),
      0 0 0 calc(var(--kf-ring-offset-width) + var(--kf-ring-width)) var(--kf-ring-color);
  }

  .kf-download__download-link {
    background: var(--color-gray-300, #d1d5db);
    color: var(--color-gray-900, #111827);
  }

  .dark .kf-download__download-link {
    background: var(--color-gray-700, #374151);
    color: var(--color-gray-100, #f3f4f6);
  }

  .kf-download__order-link {
    background: var(--color-gray-200, #e5e7eb);
    color: var(--color-gray-900, #111827);
  }

  .dark .kf-download__order-link {
    background: var(--color-gray-600, #4b5563);
    color: var(--color-gray-100, #f3f4f6);
  }
`;

const downloadVariantClasses: Record<DownloadVariant, string> = {
  default: "kf-download--default",
  destructive: "kf-download--destructive",
};

function Download({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & { variant?: DownloadVariant }) {
  return (
    <>
      <DownloadGlobalStyles />
      <article
        data-slot="download"
        className={cn(
          "kf-download",
          downloadVariantClasses[variant],
          className
        )}
        {...props}
      />
    </>
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
      className={cn("kf-download__image", className)}
      src={src}
      {...props}
    />
  );
}

function DownloadContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="download-content"
      className={cn("kf-download__content", className)}
      {...props}
    />
  );
}

function DownloadMain({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="download-main"
      className={cn("kf-download__main", className)}
      {...props}
    />
  );
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
      className={cn("kf-download__title", className)}
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
      className={cn("kf-download__description", className)}
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
      className={cn("kf-download__footer", className)}
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
      className={cn("kf-download__link kf-download__download-link", className)}
      href={href}
      {...props}
    >
      <DownloadIcon aria-hidden="true" focusable="false" />
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
      className={cn("kf-download__link kf-download__order-link", className)}
      href={href}
      {...props}
    >
      <ShoppingCart aria-hidden="true" focusable="false" />
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
