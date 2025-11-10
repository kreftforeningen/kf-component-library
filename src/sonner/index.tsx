import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const SonnerGlobalStyles = createGlobalStyle`
  .kf-sonner {
    --normal-bg: var(--color-popover, #ffffff);
    --normal-text: var(--color-popover-foreground, #0f172a);
    --normal-border: var(--color-border, rgba(15, 23, 42, 0.12));
    --sonner-toast-width: min(24rem, calc(100vw - calc(var(--kf-spacing, 0.25rem) * 4)));
    --sonner-toast-height: auto;
    --sonner-toast-background: var(--normal-bg);
    --sonner-toast-border-radius: var(--kf-radius-lg, 0.5rem);
    --sonner-toast-font-family: var(--kf-font-sans, system-ui);
    --sonner-toast-color: var(--normal-text);
    --sonner-toast-border: 1px solid var(--normal-border);
    --sonner-icon-color: var(--color-primary, #1d4ed8);
    --sonner-icon-background: color-mix(in srgb, var(--color-primary, #1d4ed8) 10%, transparent);
    --sonner-close-button-color: var(--color-muted-foreground, rgba(15, 23, 42, 0.6));
    --sonner-close-button-hover-color: var(--color-foreground, #0f172a);
    --sonner-success-border: 1px solid color-mix(in srgb, var(--color-green-500, #22c55e) 40%, transparent);
    --sonner-error-border: 1px solid color-mix(in srgb, var(--color-red-500, #ef4444) 40%, transparent);
    --sonner-info-border: 1px solid color-mix(in srgb, var(--color-blue-500, #3b82f6) 40%, transparent);
    --sonner-warning-border: 1px solid color-mix(in srgb, var(--color-amber-500, #f59e0b) 40%, transparent);
    font-family: var(--kf-font-sans, system-ui);
    font-size: var(--kf-text-sm, 0.875rem);
  }

  .kf-sonner [data-sonner-toast] {
    border-radius: var(--sonner-toast-border-radius);
    border: var(--sonner-toast-border);
    background: var(--sonner-toast-background);
    color: var(--sonner-toast-color);
    box-shadow: var(--kf-shadow-lg, 0 10px 15px -3px rgb(15 23 42 / 0.1), 0 4px 6px -4px rgb(15 23 42 / 0.1));
  }

  .kf-sonner [data-sonner-toast][data-sonner-toast-type="success"] {
    border: var(--sonner-success-border);
  }

  .kf-sonner [data-sonner-toast][data-sonner-toast-type="info"] {
    border: var(--sonner-info-border);
  }

  .kf-sonner [data-sonner-toast][data-sonner-toast-type="error"] {
    border: var(--sonner-error-border);
  }

  .kf-sonner [data-sonner-toast][data-sonner-toast-type="warning"] {
    border: var(--sonner-warning-border);
  }

  .kf-sonner [data-sonner-toast] [data-sonner-description] {
    font-size: var(--kf-text-sm, 0.875rem);
    color: var(--color-muted-foreground, rgba(15, 23, 42, 0.6));
  }

  .kf-sonner [data-sonner-toast] [data-sonner-title] {
    font-weight: 600;
    color: inherit;
  }

  .dark .kf-sonner {
    --normal-bg: var(--color-popover, #0b0f19);
    --normal-text: var(--color-popover-foreground, #f8fafc);
    --normal-border: color-mix(in srgb, var(--color-border, rgba(248, 250, 252, 0.16)) 90%, transparent);
    --sonner-toast-background: var(--normal-bg);
    --sonner-toast-color: var(--normal-text);
    --sonner-close-button-color: var(--color-muted-foreground, rgba(148, 163, 184, 0.7));
    --sonner-close-button-hover-color: var(--color-foreground, #f8fafc);
  }
`;

const Toaster = ({ className, ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <>
      <SonnerGlobalStyles />
      <Sonner
        theme={theme as ToasterProps["theme"]}
        className={cn("kf-sonner", className)}
        {...props}
      />
    </>
  );
};

export { Toaster };
