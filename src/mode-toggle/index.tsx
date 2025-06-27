import { Moon, Sun } from "lucide-react";

import { Button } from "../button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../dropdown-menu";

import { useTheme } from "@/theme-provider";

function ModeToggle({
  variant = "outline",
  align = "end",
  children,
  size = "icon",
}: {
  variant?:
    | "outline"
    | "default"
    | "secondary"
    | "ghost"
    | "link"
    | "destructive";
  align?: "start" | "end";
  size?: "icon" | "default";
  children?: React.ReactNode;
}) {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={variant}
          shape="square"
          size={size}
          className="flex flex-row gap-2 items-center justify-center text-base group"
        >
          <div className="relative w-[1.2rem] h-[1.2rem] flex items-center justify-center">
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 text-blue-700 group-hover:text-current dark:text-blue-300 dark:group-hover:text-current dark:group-focus:text-current" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 text-blue-700 group dark:text-blue-300 dark:group-hover:text-current dark:group-focus:text-current" />
            {size === "icon" && <span className="sr-only">Toggle theme</span>}
          </div>
          {children ||
            (!children && size !== "icon" && <span>Toggle theme</span>)}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align}>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { ModeToggle };
