import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";

import { Button } from "../button";
import { Input } from "../input";

import { Search as SearchIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../sheet";

const headerVariants = cva(
  "flex flex-row flex-stretch gap-2 items-center my-4",
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

function HeaderWrapper({
  className,
  variant,
  ...props
}: React.ComponentProps<"header"> & VariantProps<typeof headerVariants>) {
  return (
    <header
      data-slot="header"
      className={cn(headerVariants({ variant }), className)}
      {...props}
    />
  );
}

function HeaderLogo({
  className,
  src,
  darkSrc,
  ...props
}: React.ComponentProps<"img"> & { darkSrc?: string }) {
  const { theme } = useTheme();

  if (!src) return null;

  // Use darkSrc if provided and theme is dark, otherwise use the regular src
  const logoSrc = darkSrc && theme === "dark" ? darkSrc : src;

  return (
    <div data-slot="header-logo" className="grow">
      <img
        className={cn("w-auto max-h-[100px] min-w-[150px]", className)}
        src={logoSrc}
        {...props}
      />
    </div>
  );
}

function HeaderNavigation({
  className,
  ...props
}: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="header-navigation"
      className={cn("flex flex-row gap-4 p-4 sm:grow", className)}
      {...props}
    />
  );
}

function HeaderSearch({ ...props }: React.ComponentProps<"input">) {
  return (
    <>
      <div className="py-2">
        <div className="relative w-full max-w-sm">
          <SearchIcon
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <Input placeholder="Søk" className="pl-10" {...props} />
        </div>
      </div>
    </>
  );
}

function HeaderButton({
  href,
  children,
  className,
  variant = "default",
}: React.ComponentProps<"p"> & {
  href: string;
  variant?: "default" | "outline" | "destructive";
}) {
  if (!children) return null;
  return (
    <a href={href} className={className}>
      <Button
        variant={variant}
        data-slot="header-button"
        className="flex items-center gap-2"
      >
        {children}
      </Button>
    </a>
  );
}

function HeaderMenu({ children }: React.ComponentProps<"div">) {
  return <Sheet>{children}</Sheet>;
}

function HeaderMenuTrigger({ children }: React.ComponentProps<"div">) {
  if (!children) return null;
  return <SheetTrigger asChild>{children}</SheetTrigger>;
}

function HeaderMenuContent({ children }: React.ComponentProps<"div">) {
  return (
    <SheetContent className="w-[400px] sm:w-[540px] pt-14 flex flex-col gap-4 px-8 text-xl pb-2 bg-grey-900 text-grey-50 border-none shadow-2xl">
      {children}
    </SheetContent>
  );
}

function HeaderMenuList({ children }: React.ComponentProps<"ul">) {
  return <ul className="flex flex-col gap-2 py-2">{children}</ul>;
}

function HeaderMenuListItem({
  children,
  href,
  ...props
}: React.ComponentProps<"a"> & { href: string }) {
  return (
    <li>
      <a
        href={href}
        className="flex items-center gap-2 hover:underline hover:text-blue-400"
        {...props}
      >
        {children}
      </a>
    </li>
  );
}

export {
  HeaderWrapper,
  HeaderLogo,
  HeaderNavigation,
  HeaderButton,
  HeaderSearch,
  HeaderMenu,
  HeaderMenuTrigger,
  HeaderMenuContent,
  HeaderMenuList,
  HeaderMenuListItem,
};
