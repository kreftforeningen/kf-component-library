import * as React from "react";

import { ModeToggle } from "./mode-toggle";
import { ThemeProvider } from "./theme-provider";

import {
  AccentuatedLink,
  AccentuatedLinkTitle,
  AccentuatedLinkSubtitle,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertTitle,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogHeader,
  AspectRatio,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Banner,
  BannerButtons,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
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
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Input,
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  Label,
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  RadioGroup,
  RadioGroupItem,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  ScrollArea,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Sheet,
  SheetClose,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetContent,
  Skeleton,
  Slider,
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
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  Download,
  DownloadImage,
  DownloadFooter,
  DownloadOrderUrl,
  DownloadDownloadUrl,
  DownloadContent,
  DownloadMain,
  DownloadDescription,
  DownloadTitle,
  Person,
  PersonItem,
  PersonItemPhone,
  PersonItemContent,
  PersonItemDescription,
  PersonItemEmail,
  PersonItemName,
  PersonItemTitle,
  PersonItemImage,
  FactBox,
  FactBoxAction,
  FactBoxContent,
  FactBoxDescription,
  FactBoxTitle,
  Infographic,
  InfographicItem,
  InfographicItemDescription,
  InfographicItemTitleText,
  InfographicItemTitle,
  InfographicItemTitleNumber,
  InfographicItemIcon,
  LinkList,
  LinkListItem,
  LinkListDescription,
  LinkListTitle,
  ChartContainer,
  ChartTooltipContent,
  ChartTooltip,
  ChartLegendContent,
  ChartLegend,
  Textarea,
  HeaderWrapper,
  HeaderLogo,
  HeaderButton,
  HeaderMenu,
  HeaderMenuTrigger,
  HeaderMenuContent,
  HeaderSearch,
  HeaderMenuList,
  HeaderMenuListItem,
  HeaderMenuFooter,
  FooterNavigationItem,
  FooterNavigationLink,
  FooterSocial,
  FooterWrapper,
  FooterNavigation,
  FooterContact,
  FooterActions,
  FooterContactItem,
  FooterCopyright,
} from "./lib/main";
import { toast } from "sonner";

import type { ChartConfig } from "./lib/main";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Calendar as CalendarIcon,
  ChevronsUpDown,
  CircleCheck,
  Smile,
  Calculator,
  User,
  CreditCard,
  Settings,
  ArrowRight,
  CircleAlert,
  CircleHelp,
  ServerIcon,
  HeartIcon,
  MenuIcon,
  UserIcon,
  GlobeIcon,
  ChevronRightIcon,
  ShoppingBasketIcon,
  Phone,
  Map,
  MessageCircle,
  Mail,
  HandCoins,
} from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";

const personItems = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.long.name.johnson.doe@example.com",
    phone: "+47 98765432",
    title: "Software Engineer",
    image: "https://picsum.photos/300/300",
    description:
      "John Doe is a software engineer with a passion for building scalable and efficient systems. He is a quick learner and always looking for new challenges.",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    email: "j.doe@example.com",
    phone: "+47 98765432",
    title: "Marketing Manager",
    description:
      "Jane Doe is a marketing manager with a passion for building scalable and efficient systems. She is a quick learner and always looking for new challenges.",
  },
  {
    id: 3,
    firstName: "Alfred",
    lastName: "Hitchcock",
    email: "a.hitchcock@example.com",
    phone: "+47 98765432",
    title: "Product Manager",
    image: "https://picsum.photos/300/300",
    description:
      "Alfred Hitchcock is a product manager with a passion for building scalable and efficient systems. He is a quick learner and always looking for new challenges.",
  },
  {
    id: 4,
    firstName: "Jane",
    lastName: "Fonda",
    email: "j.fonda@example.com",
    phone: "+47 98765432",
    title: "Sales Manager",
    image: "https://picsum.photos/300/300",
    description:
      "Jane Fonda is a sales manager with a passion for building scalable and efficient systems. She is a quick learner and always looking for new challenges.",
  },
  {
    id: 5,
    firstName: "Lars Ola",
    lastName: "Wayne",
    email: "lwayne@example.com",
    phone: "+47 98765432",
    title: "CEO",
    description:
      "Lars Wayne is a CEO with a passion for building scalable and efficient systems. He is a quick learner and always looking for new challenges.",
  },
];

const infographicItems = [
  {
    id: 1,
    titleNumber: "3 %",
    titleText: "Project Kickoff",
    description: "Initial meeting with the team and stakeholders.",
    url: "https://www.example.com",
  },
  {
    id: 2,
    titleNumber: "2",
    titleText: "Design Phase",
    description: "UI/UX design and prototyping.",
    url: "https://www.google.com",
  },
];

const linklistItems = [
  {
    id: 1,
    title: "Project Kickoff",
    content: "Initial meeting with the team and stakeholders.",
    url: "https://www.example.com",
  },
  {
    id: 2,
    title: "Design Phase",
    content: "UI/UX design and prototyping.",
    url: "https://www.google.com",
  },
  {
    id: 3,
    title: "Development Start",
    content: "Begin coding the main features.",
    url: "https://www.altavista.com",
  },
  {
    id: 4,
    title: "Testing",
    content: "QA and bug fixing.",
    url: "https://www.reddit.com",
  },
  {
    id: 5,
    title: "Launch",
    content: "Release the product to users.",
    url: "https://www.youtube.com",
  },
];

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
  },
  mobile: {
    label: "Mobile",
  },
} satisfies ChartConfig;

function App() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [isCollapsibleOpen, setIsCollapsibleOpen] = React.useState(false);
  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );

  return (
    <>
      <ThemeProvider>
        <main className="container w-5/6 md:w-2/3 mx-auto my-10">
          <Toaster position="top-center" richColors closeButton />
          <ModeToggle variant="outline" size="default">
            Text/Icon
          </ModeToggle>
          <h1>kf-component-library</h1>

          <h2>Accentuated Link</h2>
          <AccentuatedLink href="https://www.google.com">
            <AccentuatedLinkSubtitle>Read more</AccentuatedLinkSubtitle>
            <AccentuatedLinkTitle>
              World's Most Used Search Engine
            </AccentuatedLinkTitle>
          </AccentuatedLink>

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
            <CircleAlert />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components and dependencies to your app using the CLI.
            </AlertDescription>
          </Alert>

          <h2>Alert Dialog</h2>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Open Alert Dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <h2>Aspect Ratio</h2>
          <p className="mb-4">Image using aspect ratio set to 21/9.</p>
          <AspectRatio ratio={21 / 9}>
            <img
              src="https://picsum.photos/1600/900"
              alt="Card Image"
              className="object-cover w-full h-full rounded-md"
            />
          </AspectRatio>

          <h2>Avatar</h2>
          <div className="flex flex-row flex-wrap items-center gap-12">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="rounded-lg">
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/leerob.png"
                  alt="@leerob"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </div>
          </div>

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
                <CircleCheck />
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

          <h2>Banner</h2>
          <Banner variant="right" color="red">
            <BannerImage src="https://picsum.photos/800/800" alt="Banner" />
            <BannerContent>
              <BannerTitle>Banner</BannerTitle>
              <BannerDescription>
                <p className="mb-4">
                  Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
                  Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
                  Text. Text. Text. Text.
                </p>
                <p className="mb-4">
                  Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
                  Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
                  Text. Text. Text. Text.
                </p>
              </BannerDescription>
              <BannerButtons>
                <Button className="bg-red-800">Button</Button>
                <Button
                  className="border-red-800 bg-transparent text-red-800"
                  variant="outline"
                >
                  Button
                </Button>
              </BannerButtons>
            </BannerContent>
          </Banner>

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
            <Button variant="default" disabled>
              Default Disabled
            </Button>
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
                <CardTitle>– In About Five Minutes I'll Be There</CardTitle>
                <CardAction>
                  <Badge>Badge</Badge>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p>
                  During the first few minutes of the conversation, I'll be
                  there. But where will you be?
                </p>
              </CardContent>
              <CardFooter>
                <ArrowRight />
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription>29.05.2020</CardDescription>
                <CardTitle>– In About Five Minutes I'll Be There</CardTitle>
                <CardAction>
                  <Badge>Badge</Badge>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p>
                  During the first few minutes of the conversation, I'll be
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

          <h2>Chart</h2>
          <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) =>
                  typeof value === "string" ? value.slice(0, 3) : value
                }
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="desktop" fill="var(--color-blue-600)" radius={4} />
              <Bar dataKey="mobile" fill="var(--color-red-600)" radius={4} />
            </BarChart>
          </ChartContainer>

          <h2>Checkbox</h2>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
            <div className="flex items-start gap-3">
              <Checkbox id="terms-2" defaultChecked />
              <div className="grid gap-2">
                <Label htmlFor="terms-2">Accept terms and conditions</Label>
                <p className="text-muted-foreground text-sm">
                  By clicking this checkbox, you agree to the terms and
                  conditions.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Checkbox id="toggle" disabled />
              <Label htmlFor="toggle">Enable notifications</Label>
            </div>
            <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
              <Checkbox
                id="toggle-2"
                defaultChecked
                className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
              />
              <div className="grid gap-1.5 font-normal">
                <p className="text-sm leading-none font-medium">
                  Enable notifications
                </p>
                <p className="text-muted-foreground text-sm">
                  You can enable or disable notifications at any time.
                </p>
              </div>
            </Label>
          </div>

          <h2>Collapsible</h2>
          <Collapsible
            open={isCollapsibleOpen}
            onOpenChange={setIsCollapsibleOpen}
            className="flex w-[350px] flex-col gap-2"
          >
            <div className="flex items-center justify-between gap-4 px-4">
              <h4 className="text-sm font-semibold">
                @peduarte starred 3 repositories
              </h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon" className="size-8">
                  <ChevronsUpDown />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <div className="rounded-md border px-4 py-2 font-mono text-sm">
              @radix-ui/primitives
            </div>
            <CollapsibleContent className="flex flex-col gap-2">
              <div className="rounded-md border px-4 py-2 font-mono text-sm">
                @radix-ui/colors
              </div>
              <div className="rounded-md border px-4 py-2 font-mono text-sm">
                @stitches/react
              </div>
            </CollapsibleContent>
          </Collapsible>

          <h2>Command</h2>
          <Command className="rounded-lg border shadow-md md:min-w-[450px]">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <CalendarIcon />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <Smile />
                  <span>Search Emoji</span>
                </CommandItem>
                <CommandItem disabled>
                  <Calculator />
                  <span>Calculator</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <User />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCard />
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Settings />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>

          <h2>Context Menu</h2>
          <ContextMenu>
            <ContextMenuTrigger asChild>
              <Button variant="outline">Right click to show menu</Button>
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>Profile</ContextMenuItem>
              <ContextMenuItem>Billing</ContextMenuItem>
              <ContextMenuItem>Team</ContextMenuItem>
              <ContextMenuItem>Subscription</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>

          <h2>Dialog</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Click to show dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <h2>Download</h2>
          <Download>
            <DownloadContent>
              <DownloadImage src="https://picsum.photos/200/300" />
              <DownloadMain>
                <DownloadTitle>Download</DownloadTitle>
                <DownloadDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </DownloadDescription>
              </DownloadMain>
            </DownloadContent>
            <DownloadFooter>
              <DownloadDownloadUrl href="https://www.google.com">
                Last ned
              </DownloadDownloadUrl>
              <DownloadOrderUrl href="https://www.google.com">
                Bestill
              </DownloadOrderUrl>
            </DownloadFooter>
          </Download>

          <h2>Drawer</h2>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>Drawer</DrawerTitle>
                  <DrawerDescription>Achieve your goals.</DrawerDescription>
                </DrawerHeader>
                <div className="p-4 pb-0 text-center">
                  Some content in this drawer.
                </div>
                <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>

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

          <h2>Fact Box</h2>
          <FactBox>
            <FactBoxContent>
              <FactBoxTitle>Fact About Cancer</FactBoxTitle>
              <FactBoxDescription>
                <p className="mb-4">
                  Something you should know about cancer. Is that it is a
                  disease that affects many people. It can be treated and cured
                  in many cases. But it can also be fatal.
                </p>
                <p className="mb-4">
                  Do you think you have cancer? You probably don't. But you
                  should still get checked out.
                </p>
                <p>
                  If you do not have cancer, you are lucky. But you should still
                  get checked out.
                </p>
              </FactBoxDescription>
            </FactBoxContent>
            <FactBoxAction>Fact Box</FactBoxAction>
          </FactBox>

          <h2 id="footer">Footer</h2>
        </main>
        <FooterWrapper className="dark">
          <FooterActions>
            <Button variant="destructive" asChild>
              <a href="#">
                Støtt oss <HeartIcon className="hidden sm:block" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#">
                Nettbutikk <ShoppingBasketIcon className="hidden sm:block" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#">
                Vipps 2277 <HandCoins className="hidden sm:block" />
              </a>
            </Button>
          </FooterActions>

          <FooterNavigation>
            <FooterNavigationItem>
              <FooterNavigationLink href="/">Kontonummer</FooterNavigationLink>
            </FooterNavigationItem>
            <FooterNavigationItem>
              <FooterNavigationLink href="/">SMS</FooterNavigationLink>
            </FooterNavigationItem>
            <FooterNavigationItem>
              <FooterNavigationLink href="/">
                Har vi forsøkt å ringe deg?
              </FooterNavigationLink>
            </FooterNavigationItem>
            <FooterNavigationItem>
              <FooterNavigationLink href="/">Nyhetsbrev</FooterNavigationLink>
            </FooterNavigationItem>
            <FooterNavigationItem>
              <FooterNavigationLink href="/">Aktuelt</FooterNavigationLink>
            </FooterNavigationItem>
            <FooterNavigationItem>
              <FooterNavigationLink href="/">Presse</FooterNavigationLink>
            </FooterNavigationItem>
            <FooterNavigationItem>
              <FooterNavigationLink href="/">
                Skattefradrag
              </FooterNavigationLink>
            </FooterNavigationItem>
            <FooterNavigationItem>
              <FooterNavigationLink href="/">Bli medlem</FooterNavigationLink>
            </FooterNavigationItem>
            <FooterNavigationItem>
              <FooterNavigationLink href="/">Gi en gave</FooterNavigationLink>
            </FooterNavigationItem>
            <FooterNavigationItem>
              <FooterNavigationLink href="/">
                Bli frivillig
              </FooterNavigationLink>
            </FooterNavigationItem>
            <FooterNavigationItem>
              <FooterNavigationLink href="/">Min side</FooterNavigationLink>
            </FooterNavigationItem>
            <FooterNavigationItem>
              <FooterNavigationLink href="/">Om oss</FooterNavigationLink>
            </FooterNavigationItem>
            <FooterNavigationItem>
              <FooterNavigationLink href="/">
                Bestill brosjyrer
              </FooterNavigationLink>
            </FooterNavigationItem>
            <FooterNavigationItem>
              <FooterNavigationLink href="/">Personvern</FooterNavigationLink>
            </FooterNavigationItem>
            <FooterNavigationItem>
              <FooterNavigationLink href="/">
                Informasjonskapsler
              </FooterNavigationLink>
            </FooterNavigationItem>
            <FooterNavigationItem>
              <FooterNavigationLink href="/">
                Ledige stillinger
              </FooterNavigationLink>
            </FooterNavigationItem>
          </FooterNavigation>

          <FooterSocial>
            <Button variant="outline" size="icon" aria-label="Facebook">
              <FaFacebook />
            </Button>
            <Button variant="outline" size="icon" aria-label="Instagram">
              <FaInstagram />
            </Button>
            <Button variant="outline" size="icon" aria-label="Youtube">
              <FaYoutube />
            </Button>
            <Button variant="outline" size="icon" aria-label="Linkedin">
              <FaLinkedin />
            </Button>
            <Button variant="outline" size="icon" aria-label="Tiktok">
              <FaTiktok />
            </Button>
          </FooterSocial>

          <FooterContact>
            <FooterContactItem href="#" aria-label="Phone">
              <Phone /> 21 49 49 21
            </FooterContactItem>
            <FooterContactItem href="#" aria-label="Email">
              <Mail />
              post@kreftforeningen.no
            </FooterContactItem>
            <FooterContactItem href="#" aria-label="Chat">
              <MessageCircle /> Chat med oss
            </FooterContactItem>
            <FooterContactItem href="#" aria-label="Map">
              <Map /> Kontorer og adresser
            </FooterContactItem>
          </FooterContact>

          <FooterCopyright>
            Vi er medlem av{" "}
            <a href="https://www.innsamlingskontrollen.no/">
              Innsamlingskontrollen i Norge
            </a>
            , <a href="https://oslocancercluster.no/">Oslo Cancer Cluster</a>,{" "}
            <a href="https://www.norwayhealthtech.com/nb/">
              Norway Health Tech
            </a>
            ,{" "}
            <a href="https://www.smartcarecluster.no/">
              Norwegian Smart Care Cluster
            </a>
            , <a href="https://www.uicc.org/">UICC </a>og{" "}
            <a href="https://ncu.nu/">NCU</a>.
          </FooterCopyright>
        </FooterWrapper>
        <main className="container w-5/6 md:w-2/3 mx-auto my-10">
          <h2 id="header">Header</h2>
        </main>
        <div className="my-20">
          <HeaderWrapper>
            <HeaderLogo
              src="/assets/logo.svg"
              darkSrc="/assets/logo-dark.svg"
              alt="Logo"
            />
            <HeaderButton href="#" variant="destructive">
              Støtt oss <HeartIcon className="hidden sm:block" />
            </HeaderButton>
            <HeaderButton
              href="https://nettbutikk.kreftforeningen.no"
              className="hidden sm:block"
              variant="outline"
            >
              Nettbutikk <ShoppingBasketIcon />
            </HeaderButton>

            <HeaderMenu>
              <HeaderMenuTrigger>
                <Button
                  variant="default"
                  data-slot="header-button"
                  className="flex items-center gap-2"
                >
                  <span className="hidden sm:block">Menu</span> <MenuIcon />
                </Button>
              </HeaderMenuTrigger>
              <HeaderMenuContent>
                <HeaderSearch />
                <HeaderMenuList>
                  <HeaderMenuListItem href="https://nettbutikk.kreftforeningen.no">
                    <ShoppingBasketIcon /> Nettbutikk
                  </HeaderMenuListItem>
                  <HeaderMenuListItem href="#">
                    <UserIcon /> Min side
                  </HeaderMenuListItem>
                  <HeaderMenuListItem href="#">
                    <GlobeIcon /> English
                  </HeaderMenuListItem>
                </HeaderMenuList>
                <HeaderMenuList>
                  <HeaderMenuListItem href="#">
                    <ChevronRightIcon />
                    Om kreft
                  </HeaderMenuListItem>
                  <HeaderMenuListItem href="#">
                    <ChevronRightIcon />
                    Råd og rettigheter
                  </HeaderMenuListItem>
                  <HeaderMenuListItem href="#">
                    <ChevronRightIcon />
                    Tilbud og aktiviteter
                  </HeaderMenuListItem>
                  <HeaderMenuListItem href="#">
                    <ChevronRightIcon />
                    Forebygge kreft
                  </HeaderMenuListItem>
                </HeaderMenuList>
                <HeaderMenuList>
                  <HeaderMenuListItem href="#">
                    <ChevronRightIcon />
                    Støtt kreftsaken
                  </HeaderMenuListItem>
                  <HeaderMenuListItem href="#">
                    <ChevronRightIcon />
                    Engasjer deg
                  </HeaderMenuListItem>
                  <HeaderMenuListItem href="#">
                    <ChevronRightIcon />
                    Kreftforskning
                  </HeaderMenuListItem>
                  <HeaderMenuListItem href="#">
                    <ChevronRightIcon />
                    Om oss
                  </HeaderMenuListItem>
                  <HeaderMenuListItem href="#">
                    <ChevronRightIcon />
                    Kontakt oss
                  </HeaderMenuListItem>
                  <HeaderMenuListItem href="#">
                    <ChevronRightIcon />
                    Aktuelt
                  </HeaderMenuListItem>
                </HeaderMenuList>
                <HeaderMenuFooter className="flex flex-row gap-4 items-center justify-start dark">
                  <ModeToggle
                    align="start"
                    variant="outline"
                    size="default"
                  ></ModeToggle>
                </HeaderMenuFooter>
              </HeaderMenuContent>
            </HeaderMenu>
          </HeaderWrapper>
        </div>
        <main className="container w-5/6 md:w-2/3 mx-auto my-10">
          <h2>Hover Card</h2>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">@nextjs</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/vercel.png" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@nextjs</h4>
                  <p className="text-sm">
                    The React Framework – created and maintained by @vercel.
                  </p>
                  <div className="text-muted-foreground text-xs">
                    Joined December 2021
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>

          <h2>Infographic</h2>
          <Infographic>
            {infographicItems.map((item) => (
              <InfographicItem key={item.id} color="blue">
                <InfographicItemIcon>
                  <ServerIcon className="w-10 h-10" strokeWidth={1} />
                </InfographicItemIcon>
                <InfographicItemTitle>
                  <InfographicItemTitleNumber>
                    {item.titleNumber}
                  </InfographicItemTitleNumber>
                  <InfographicItemTitleText>
                    {item.titleText}
                  </InfographicItemTitleText>
                </InfographicItemTitle>
                <InfographicItemDescription>
                  {item.description}
                </InfographicItemDescription>
              </InfographicItem>
            ))}
          </Infographic>

          <h2>Input + Label</h2>
          <div className="flex flex-row flex-wrap gap-2">
            <Label>Input</Label>
            <Input />
          </div>

          <h2>Input OTP</h2>
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>

          <h2>Link List</h2>
          <LinkList>
            {linklistItems.map((item) => (
              <LinkListItem key={item.id} href={item.url}>
                <LinkListTitle>{item.title}</LinkListTitle>
                <LinkListDescription>{item.content}</LinkListDescription>
              </LinkListItem>
            ))}
          </LinkList>

          <h2>Menubar</h2>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  New Window <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem disabled>New Incognito Window</MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Share</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Email link</MenubarItem>
                    <MenubarItem>Messages</MenubarItem>
                    <MenubarItem>Notes</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>
                  Print... <MenubarShortcut>⌘P</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Find</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Search the web</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Find...</MenubarItem>
                    <MenubarItem>Find Next</MenubarItem>
                    <MenubarItem>Find Previous</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>Cut</MenubarItem>
                <MenubarItem>Copy</MenubarItem>
                <MenubarItem>Paste</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarItem className="flex items-center gap-3 mb-2">
                  <Checkbox id="always-show-bookmarks-bar" />
                  <Label htmlFor="always-show-bookmarks-bar">
                    Always Show Bookmarks Bar
                  </Label>
                </MenubarItem>
                <MenubarItem className="flex items-center gap-3">
                  <Checkbox id="always-show-full-urls" checked />
                  <Label htmlFor="always-show-full-urls">
                    Always Show Full URLs
                  </Label>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>
                  Reload <MenubarShortcut>⌘R</MenubarShortcut>
                </MenubarItem>
                <MenubarItem disabled inset>
                  Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Hide Sidebar</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Profiles</MenubarTrigger>
              <MenubarContent>
                <RadioGroup value="benoit" className="gap-2">
                  <MenubarItem className="flex items-center gap-3 ">
                    <RadioGroupItem value="andy" />
                    <Label htmlFor="andy">Andy</Label>
                  </MenubarItem>
                  <MenubarItem className="flex items-center gap-3">
                    <RadioGroupItem value="benoit" />
                    <Label htmlFor="benoit">Benoit</Label>
                  </MenubarItem>
                  <MenubarItem className="flex items-center gap-3">
                    <RadioGroupItem value="Luis" />
                    <Label htmlFor="Luis">Luis</Label>
                  </MenubarItem>
                </RadioGroup>
                <MenubarSeparator />
                <MenubarItem inset>Edit...</MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Add Profile...</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          <h2>Navigation Menu (Do not use yet)</h2>
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="#">Link</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#" className="flex-row items-center gap-2">
                          <CircleHelp />
                          Backlog
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#" className="flex-row items-center gap-2">
                          <CircleAlert />
                          To Do
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#" className="flex-row items-center gap-2">
                          <CircleCheck />
                          Done
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

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

          <h2>Person</h2>
          <Person>
            {personItems.map((item) => (
              <PersonItem key={item.id}>
                <PersonItemImage
                  src={item.image}
                  alt={`${item.firstName} ${item.lastName}`}
                  fallback={`${item.firstName.charAt(0)}${item.lastName.charAt(
                    0
                  )}`}
                />
                <PersonItemContent>
                  <PersonItemName>
                    {item.firstName} {item.lastName}
                  </PersonItemName>
                  <PersonItemTitle>{item.title}</PersonItemTitle>
                  <PersonItemEmail href={`mailto:${item.email}`}>
                    {item.email}
                  </PersonItemEmail>
                  <PersonItemPhone href={`tel:${item.phone}`}>
                    {item.phone}
                  </PersonItemPhone>
                  <PersonItemDescription>
                    {item.description}
                  </PersonItemDescription>
                </PersonItemContent>
              </PersonItem>
            ))}
          </Person>

          <h2>Popover</h2>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>

          <h2>Progress</h2>
          <Progress value={50} />

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

          <h2>Resizable</h2>
          <ResizablePanelGroup
            direction="vertical"
            className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
          >
            <ResizablePanel defaultSize={25}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Header</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={75}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Content</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>

          <h2>Scroll Area</h2>
          <ScrollArea className="h-72 w-48 rounded-md border">
            <div className="p-4">
              <h4 className="mb-4 text-base leading-none m-0">Tags</h4>
              {tags.map((tag) => (
                <React.Fragment key={tag}>
                  <div className="text-sm">{tag}</div>
                  <Separator className="my-2" />
                </React.Fragment>
              ))}
            </div>
          </ScrollArea>

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

          <h2>Separator</h2>
          <Separator />

          <h2>Sheet</h2>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid flex-1 auto-rows-min gap-6 px-4">
                <div className="grid gap-3">
                  <Label htmlFor="sheet-demo-name">Name</Label>
                  <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="sheet-demo-username">Username</Label>
                  <Input id="sheet-demo-username" defaultValue="@peduarte" />
                </div>
              </div>
              <SheetFooter>
                <Button type="submit">Save changes</Button>
                <SheetClose asChild>
                  <Button variant="outline">Close</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          <h2>Skeleton</h2>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>

          <h2>Slider</h2>
          <Slider defaultValue={[33]} max={100} step={1} />

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

          <h2>Toggle</h2>
          <Toggle variant="outline">Toggle</Toggle>

          <h2>Toggle Group</h2>
          <ToggleGroup type="single" variant="outline">
            <ToggleGroupItem value="a">A</ToggleGroupItem>
            <ToggleGroupItem value="b">B</ToggleGroupItem>
            <ToggleGroupItem value="c">C</ToggleGroupItem>
          </ToggleGroup>

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
