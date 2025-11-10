import * as React from "react";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const TextareaGlobalStyles = createGlobalStyle`
  .kf-textarea {
    font-family: var(--kf-font-sans);
    width: 100%;
    min-height: calc(var(--kf-spacing, 0.25rem) * 16);
    padding: calc(var(--kf-spacing, 0.25rem) * 3) calc(var(--kf-spacing, 0.25rem) * 3);
    border-radius: var(--kf-radius-md, 0.375rem);
    border: var(--kf-border-1, 1px) solid var(--color-border, rgba(15, 23, 42, 0.12));
    background: var(--color-input, rgba(15, 23, 42, 0.08));
    color: var(--color-foreground, #0f172a);
    font-size: var(--kf-text-base, 1rem);
    line-height: var(--kf-text-base--line-height, 1.5);
    outline: none;
    resize: vertical;
    transition: color 120ms var(--kf-ease-in-out, ease), box-shadow 120ms var(--kf-ease-in-out, ease);
  }

  .dark .kf-textarea {
    background: color-mix(in srgb, var(--color-input, rgba(148, 163, 184, 0.16)) 80%, transparent);
  }

  .kf-textarea::placeholder {
    color: var(--color-muted-foreground, rgba(15, 23, 42, 0.6));
  }

  .kf-textarea:focus-visible {
    border-color: var(--color-ring, rgba(59, 130, 246, 0.6));
    box-shadow:
      0 0 0 2px var(--color-ring, rgba(59, 130, 246, 0.2)),
      0 0 0 4px color-mix(in srgb, var(--color-ring, rgba(59, 130, 246, 0.2)) 60%, transparent);
  }

  .kf-textarea[aria-invalid="true"] {
    border-color: var(--color-destructive, #b91c1c);
  }

  .kf-textarea[aria-invalid="true"]:focus-visible {
    box-shadow:
      0 0 0 2px color-mix(in srgb, var(--color-destructive, #b91c1c) 25%, transparent);
  }

  .kf-textarea:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <>
      <TextareaGlobalStyles />
      <textarea
        data-slot="textarea"
        className={cn("kf-textarea", className)}
        {...props}
      />
    </>
  );
}

export { Textarea };
