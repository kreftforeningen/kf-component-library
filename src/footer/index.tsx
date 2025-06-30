import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Separator } from "../separator";

const footerVariants = cva("my-4 bg-grey-800 dark:bg-grey-100 py-10", {
  variants: {
    variant: {
      default: "",
      destructive: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function FooterWrapper({
  className,
  variant,
  children,
  ...props
}: React.ComponentProps<"footer"> &
  VariantProps<typeof footerVariants> & { children?: React.ReactNode }) {
  return (
    <footer
      data-slot="footer"
      className={cn(footerVariants({ variant }), className)}
      {...props}
    >
      {children}
    </footer>
  );
}

function FooterActions({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-row gap-2 container mx-auto">{children}</div>
  );
}

function FooterSocial({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-row gap-2 items-center container mx-auto">
      {children}
    </div>
  );
}

function FooterNavigation({ children }: { children?: React.ReactNode }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 items-center container mx-auto py-10">
      {children}
    </ul>
  );
}

function FooterNavigationItem({ children }: { children?: React.ReactNode }) {
  return <li className="flex flex-row gap-2 items-center ">{children}</li>;
}

function FooterNavigationLink({
  children,
  href,
}: {
  children?: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className=" dark:text-blue-200 dark:hover:text-blue-100 text-blue-800 hover:text-blue-900 hover:underline"
    >
      {children}
    </a>
  );
}

function FooterContact({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-row gap-10 items-center py-10 container mx-auto">
      {children}
    </div>
  );
}

function FooterContactItem({
  children,
  href,
}: {
  children?: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="dark:text-blue-200 dark:hover:text-blue-100 text-blue-800 hover:text-blue-900 hover:underline flex flex-row gap-2 items-center"
    >
      {children}
    </a>
  );
}

function FooterCopyright({ children }: { children?: React.ReactNode }) {
  return (
    <div className="container mx-auto text-grey-800 dark:text-grey-200 text-sm [&>a]:text-blue-800 [&>a]:dark:text-blue-200 [&>a]:hover:text-blue-900 [&>a]:dark:hover:text-blue-100 [&>a]:hover:underline">
      <Separator className="my-10" />
      {children}
    </div>
  );
}

export {
  FooterWrapper,
  FooterSocial,
  FooterNavigation,
  FooterNavigationItem,
  FooterNavigationLink,
  FooterContact,
  FooterActions,
  FooterContactItem,
  FooterCopyright,
};
