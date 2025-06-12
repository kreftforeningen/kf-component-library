import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./lib/main";
import { Textarea } from "./lib/main";

function App() {
  return (
    <>
      <ThemeProvider>
        <main className="container mx-auto my-10">
          <ModeToggle />
          <h1>kf-shadcnui</h1>

          <h2>Button</h2>
          <div className="flex flex-row flex-wrap gap-2">
            <Button variant="default">Click me</Button>
            <Button variant="destructive">Click me</Button>
            <Button variant="outline">Click me</Button>
            <Button variant="secondary">Click me</Button>
            <Button variant="ghost">Click me</Button>
            <Button variant="outline" shape="square">
              Click me
            </Button>
            <Button variant="link">Click me</Button>
          </div>

          <h2>DropdownMenu</h2>
          <div className="flex flex-row flex-wrap gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" shape="square">
                  Open
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem variant="default">Default</DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                  Destructive
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <h2>Input</h2>
          <div className="flex flex-row flex-wrap gap-2">
            <Label>Input</Label>
            <Input />
          </div>

          <h2>Select</h2>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Option 1</SelectItem>
              <SelectItem value="2">Option 2</SelectItem>
              <SelectItem value="3">Option 3</SelectItem>
            </SelectContent>
          </Select>

          <h2>Textarea</h2>
          <Textarea />
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
