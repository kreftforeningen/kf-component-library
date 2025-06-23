import { ExternalLink } from "lucide-react";

import { cn } from "@/lib/utils";
import React, { createContext, useContext } from "react";

function extractDomain(url: string): string {
  try {
    const hostname = new URL(url).hostname;
    return hostname.replace(/^www\./, ""); // Remove 'www.' if present
  } catch (error) {
    console.error(`Invalid URL: ${error}`, url);
    return url; // Return the original URL as fallback
  }
}

const AccentuatedLinkContext = createContext<{ href?: string }>({});

function AccentuatedLink({
  className,
  href,
  children,
  ...props
}: React.ComponentProps<"article"> & { href?: string }) {
  return (
    <AccentuatedLinkContext.Provider value={{ href }}>
      <article
        className={cn(
          "border-l-2 border-blue-600 pl-6 py-1 flex flex-col gap-2",
          className
        )}
        {...props}
      >
        {children}
      </article>
    </AccentuatedLinkContext.Provider>
  );
}

function AccentuatedLinkTitle({
  className,
  children,
  href: propHref,
  ...props
}: React.ComponentProps<"a">) {
  const context = useContext(AccentuatedLinkContext);
  const href = propHref ?? context.href;
  return (
    <a
      className={cn(
        "text-blue-800 hover:text-blue-900 hover:underline flex flex-col gap-2 dark:text-blue-200 dark:hover:text-blue-300",
        className
      )}
      href={href}
      {...props}
    >
      <div className="text-lg">{children}</div>
      <div className="text-sm flex flex-row items-center gap-2">
        <ExternalLink />
        <span>{extractDomain(href ?? "")}</span>
      </div>
    </a>
  );
}

function AccentuatedLinkSubtitle({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("text-sm text-grey-600 dark:text-grey-100", className)}
      {...props}
    />
  );
}

export { AccentuatedLink, AccentuatedLinkTitle, AccentuatedLinkSubtitle };
