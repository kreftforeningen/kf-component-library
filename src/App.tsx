import * as React from "react";

import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertTitle,
  AspectRatio,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Calendar,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Checkbox,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Input,
  Label,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Toaster,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./lib/main";
import { toast } from "sonner";

import { Textarea } from "./lib/main";
import { AlertCircleIcon, ArrowRightIcon, CheckCircleIcon } from "lucide-react";

function App() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <>
      <ThemeProvider>
        <main className="container w-5/6 md:w-2/3 mx-auto my-10">
          <Toaster position="top-center" richColors closeButton />
          <ModeToggle />
          <h1>kf-shadcnui</h1>

          <h2>Accordion</h2>
          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <h2>Alert</h2>
          <Alert>
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components and dependencies to your app using the CLI.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive" className="my-4">
            <AlertCircleIcon />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components and dependencies to your app using the CLI.
            </AlertDescription>
          </Alert>

          <h2>Badge</h2>
          <div className="flex flex-col items-center gap-2">
            <div className="flex w-full flex-wrap gap-2">
              <Badge>Badge</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
            <div className="flex w-full flex-wrap gap-2">
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                <CheckCircleIcon />
                Verified
              </Badge>
              <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
                8
              </Badge>
              <Badge
                className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
                variant="destructive"
              >
                99
              </Badge>
              <Badge
                className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
                variant="outline"
              >
                20+
              </Badge>
            </div>
          </div>

          <h2>Breadcrumb</h2>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h2>Button</h2>
          <div className="flex flex-row flex-wrap gap-2">
            <Button variant="default">Default</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="outline" shape="square">
              Square
            </Button>
            <Button variant="link">Link</Button>
          </div>

          <h2>Calendar</h2>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-lg bg-grey-100"
          />

          <h2>Card</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="pt-0">
              <AspectRatio
                ratio={16 / 9}
                className="rounded-t-md overflow-hidden"
              >
                <img
                  src="https://picsum.photos/1600/900"
                  alt="Card Image"
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <CardHeader>
                <CardDescription>29.05.2020</CardDescription>
                <CardTitle>– In About Five Minutes I’ll Be There</CardTitle>
                <CardAction>
                  <Badge>Badge</Badge>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p>
                  During the first few minutes of the conversation, I’ll be
                  there. But where will you be?
                </p>
              </CardContent>
              <CardFooter>
                <ArrowRightIcon />
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription>29.05.2020</CardDescription>
                <CardTitle>– In About Five Minutes I’ll Be There</CardTitle>
                <CardAction>
                  <Badge>Badge</Badge>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p>
                  During the first few minutes of the conversation, I’ll be
                  there. But where will you be?
                </p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>

          <h2>Carousel</h2>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <AspectRatio ratio={16 / 9}>
                  <img
                    src="https://picsum.photos/1600/900"
                    alt="Card Image"
                    className="object-cover w-full h-full rounded-md"
                  />
                </AspectRatio>
              </CarouselItem>
              <CarouselItem>
                <AspectRatio ratio={16 / 9}>
                  <img
                    src="https://picsum.photos/1600/900"
                    alt="Card Image"
                    className="object-cover w-full h-full rounded-md"
                  />
                </AspectRatio>
              </CarouselItem>
              <CarouselItem>
                <AspectRatio ratio={16 / 9}>
                  <img
                    src="https://picsum.photos/1600/900"
                    alt="Card Image"
                    className="object-cover w-full h-full rounded-md"
                  />
                </AspectRatio>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <h2>Checkbox</h2>
          <Checkbox />

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

          <h2>Input + Label</h2>
          <div className="flex flex-row flex-wrap gap-2">
            <Label>Input</Label>
            <Input />
          </div>

          <h2>Pagination</h2>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>

          <h2>Radio Group</h2>
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Option Two</Label>
            </div>
          </RadioGroup>

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

          <h2>Sonner</h2>
          <Button
            variant="outline"
            onClick={() =>
              toast.warning("Event has been created", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
              })
            }
          >
            Show Toast
          </Button>

          <h2>Switch</h2>
          <Switch />

          <h2>Table</h2>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <h2>Tabs</h2>
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="delete">Delete</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="password">
              Change your password here.
            </TabsContent>
            <TabsContent value="delete">Delete your account here.</TabsContent>
          </Tabs>

          <h2>Textarea</h2>
          <Textarea />

          <h2>Tooltip</h2>
          <Tooltip>
            <TooltipTrigger>Hover</TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>

          <h2></h2>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
