import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

import { Button } from "../button";
import { Input } from "../input";

import { Search as SearchIcon, Menu as MenuIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/dropdown-menu";

const headerVariants = cva(
  "flex flex-col sm:flex-row gap-2 items-center my-4",
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

function HeaderLogo({ className, src, ...props }: React.ComponentProps<"img">) {
  if (!src) return null;
  return (
    <img
      data-slot="header-logo"
      className={cn("h-[100px] w-auto", className)}
      src={src}
      {...props}
    />
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

function HeaderSearch({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <>
      <SearchIcon />

      <Input
        data-slot="header-search"
        className={cn("w-full", className)}
        {...props}
        hidden
      />
    </>
  );
}

function HeaderButton({ children }: React.ComponentProps<"p">) {
  if (!children) return null;
  return (
    <Button variant="secondary" data-slot="header-button">
      {children}
    </Button>
  );
}

function HeaderMenu({ children }: React.ComponentProps<"p">) {
  if (!children) return null;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          data-slot="header-menu"
          className="flex items-center"
        >
          {children}
          <MenuIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4">
        <DropdownMenuItem variant="default">Default</DropdownMenuItem>
        <DropdownMenuItem variant="destructive">Destructive</DropdownMenuItem>
        <DropdownMenuItem variant="default">Default</DropdownMenuItem>
        <DropdownMenuItem variant="destructive">Destructive</DropdownMenuItem>
        <DropdownMenuItem variant="default">Default</DropdownMenuItem>
        <DropdownMenuItem variant="destructive">Destructive</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export {
  HeaderWrapper,
  HeaderLogo,
  HeaderNavigation,
  HeaderButton,
  HeaderSearch,
  HeaderMenu,
};
