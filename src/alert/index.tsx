import * as React from "react";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

type AlertVariant = "default" | "destructive" | "success";

const AlertGlobalStyles = createGlobalStyle`
  .kf-alert {
    font-family: var(--kf-font-sans);
    position: relative;
    display: grid;
    grid-template-columns: 0 1fr;
    align-items: flex-start;
    gap: calc(var(--kf-spacing, 0.25rem) * 2) calc(var(--kf-spacing, 0.25rem) * 3);
    width: 100%;
    border-radius: var(--kf-radius-lg, 0.5rem);
    border-width: var(--kf-border-2, 2px);
    border-style: dashed;
    border-color: var(--color-border, rgba(15, 23, 42, 0.12));
    padding: calc(var(--kf-spacing, 0.25rem) * 4);
    font-size: var(--kf-text-base, 1rem);
    line-height: var(--kf-text-base--line-height, 1.5);
    color: var(--color-foreground, #0f172a);
    background: var(--color-card, #ffffff);
  }

  .kf-alert > svg {
    width: 1rem;
    height: 1rem;
    transform: translateY(0.125rem);
    color: currentColor;
    grid-column: 1;
  }

  .kf-alert:has(> svg) {
    grid-template-columns: calc(var(--kf-spacing, 0.25rem) * 4) 1fr;
  }

  .kf-alert__title {
    grid-column: 2;
    min-height: 1rem;
    font-weight: 600;
    letter-spacing: -0.005em;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .kf-alert__description {
    grid-column: 2;
    display: grid;
    gap: calc(var(--kf-spacing, 0.25rem) * 1);
    justify-items: flex-start;
    color: color-mix(in srgb, var(--color-foreground, #0f172a) 90%, transparent);
    font-size: var(--kf-text-base, 1rem);
    line-height: var(--kf-text-base--line-height, 1.5);
  }

  .kf-alert__description p {
    margin: 0;
    line-height: inherit;
  }

  .kf-alert--default {
    color: var(--color-card-foreground, #0f172a);
    background: var(--color-card, #ffffff);
  }

  .kf-alert--default .kf-alert__description {
    color: color-mix(in srgb, var(--color-card-foreground, #0f172a) 90%, transparent);
  }

  .kf-alert--destructive {
    color: var(--color-destructive, #991b1b);
    background: var(--color-card, #ffffff);
  }

  .kf-alert--destructive .kf-alert__description {
    color: color-mix(in srgb, var(--color-destructive, #991b1b) 90%, transparent);
  }

  .kf-alert--success {
    color: var(--color-success, #047857);
    background: var(--color-card, #ffffff);
  }

  .kf-alert--success .kf-alert__description {
    color: color-mix(in srgb, var(--color-success, #047857) 90%, transparent);
  }
`;

const variantClasses: Record<AlertVariant, string> = {
  default: "kf-alert--default",
  destructive: "kf-alert--destructive",
  success: "kf-alert--success",
};

function Alert({
  className,
  variant = "default",
  children,
  ...props
}: React.ComponentProps<"div"> & { variant?: AlertVariant }) {
  return (
    <>
      <AlertGlobalStyles />
      <div
        data-slot="alert"
        role="alert"
        className={cn("kf-alert", variantClasses[variant], className)}
        {...props}
      >
        {children}
      </div>
    </>
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn("kf-alert__title", className)}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn("kf-alert__description", className)}
      {...props}
    />
  );
}

export { Alert, AlertDescription, AlertTitle };
