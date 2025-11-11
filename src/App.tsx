import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import { lazy, Suspense } from "react";

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  ModeToggle,
} from "./lib/main";
import { Spinner } from "./lib/main";

const HomeDemo = lazy(() => import("@/demo/home"));
const AccentuatedLinkDemo = lazy(() => import("@/demo/accentuated-link"));
const AccordionDemo = lazy(() => import("@/demo/accordion"));
const AlertDemo = lazy(() => import("@/demo/alert"));
const AlertDialogDemo = lazy(() => import("@/demo/alert-dialog"));
const AspectRatioDemo = lazy(() => import("@/demo/aspect-ratio"));
const AvatarDemo = lazy(() => import("@/demo/avatar"));
const BadgeDemo = lazy(() => import("@/demo/badge"));
const BannerDemo = lazy(() => import("@/demo/banner"));
const BreadcrumbDemo = lazy(() => import("@/demo/breadcrumb"));
const ButtonDemo = lazy(() => import("@/demo/button"));
const ButtonGroupDemo = lazy(() => import("@/demo/button-group"));
const CalendarDemo = lazy(() => import("@/demo/calendar"));
const CardDemo = lazy(() => import("@/demo/card"));
const CarouselDemo = lazy(() => import("@/demo/carousel"));
const ChartDemo = lazy(() => import("@/demo/chart"));
const CheckboxDemo = lazy(() => import("@/demo/checkbox"));
const CollapsibleDemo = lazy(() => import("@/demo/collapsible"));
const CommandDemo = lazy(() => import("@/demo/command"));
const ContextMenuDemo = lazy(() => import("@/demo/context-menu"));
const DialogDemo = lazy(() => import("@/demo/dialog"));
const DownloadDemo = lazy(() => import("@/demo/download"));
const DrawerDemo = lazy(() => import("@/demo/drawer"));
const DropdownMenuDemo = lazy(() => import("@/demo/dropdown-menu"));
const EmptyDemo = lazy(() => import("@/demo/empty"));
const FactBoxDemo = lazy(() => import("@/demo/fact-box"));
const FeedbackDemo = lazy(() => import("@/demo/feedback"));
const FieldDemo = lazy(() => import("@/demo/field"));
const FooterDemo = lazy(() => import("@/demo/footer"));
const HeaderDemo = lazy(() => import("@/demo/header"));
const HoverCardDemo = lazy(() => import("@/demo/hover-card"));
const InfographicDemo = lazy(() => import("@/demo/infographic"));
const InputDemo = lazy(() => import("@/demo/input"));
const InputGroupDemo = lazy(() => import("@/demo/input-group"));
const InputOTPDemo = lazy(() => import("@/demo/input-otp"));
const ItemDemo = lazy(() => import("@/demo/item"));
const KbdDemo = lazy(() => import("@/demo/kbd"));
const LabelDemo = lazy(() => import("@/demo/label"));
const LinkListDemo = lazy(() => import("@/demo/link-list"));
const MenubarDemo = lazy(() => import("@/demo/menubar"));
const ModeToggleDemo = lazy(() => import("@/demo/mode-toggle"));
const NativeSelectDemo = lazy(() => import("@/demo/native-select"));
const NavigationMenuDemo = lazy(() => import("@/demo/navigation-menu"));
const PaginationDemo = lazy(() => import("@/demo/pagination"));
const PersonDemo = lazy(() => import("@/demo/person"));
const PopoverDemo = lazy(() => import("@/demo/popover"));
const ProgressDemo = lazy(() => import("@/demo/progress"));
const RadioGroupDemo = lazy(() => import("@/demo/radio-group"));
const ResizableDemo = lazy(() => import("@/demo/resizable"));
const ScrollAreaDemo = lazy(() => import("@/demo/scroll-area"));
const SelectDemo = lazy(() => import("@/demo/select"));
const SeparatorDemo = lazy(() => import("@/demo/separator"));
const SheetDemo = lazy(() => import("@/demo/sheet"));
const SidebarDemo = lazy(() => import("@/demo/sidebar"));
const SkeletonDemo = lazy(() => import("@/demo/skeleton"));
const SliderDemo = lazy(() => import("@/demo/slider"));
const SonnerDemo = lazy(() => import("@/demo/sonner"));
const SpinnerDemo = lazy(() => import("@/demo/spinner"));
const SwitchDemo = lazy(() => import("@/demo/switch"));
const TableDemo = lazy(() => import("@/demo/table"));
const TabsDemo = lazy(() => import("@/demo/tabs"));
const TextareaDemo = lazy(() => import("@/demo/textarea"));
const TimelineDemo = lazy(() => import("@/demo/timeline"));
const ToggleDemo = lazy(() => import("@/demo/toggle"));
const ToggleGroupDemo = lazy(() => import("@/demo/toggle-group"));
const TooltipDemo = lazy(() => import("@/demo/tooltip"));
const HomeTempDemo = lazy(() => import("@/demo/home-temp"));

import { ThemeProvider } from "./theme-provider";

function RootLayout() {
  return <Outlet />;
}

const router = createBrowserRouter([
  {
    element: (
      <>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "0.5rem",
              }}
            >
              <DropdownMenuItem>
                <Link to="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/accentuated-link">Accentuated Link</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/accordion">Accordion</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/alert">Alert</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/alert-dialog">Alert Dialog</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/aspect-ratio">Aspect Ratio</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/avatar">Avatar</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/badge">Badge</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/banner">Banner</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/breadcrumb">Breadcrumb</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/button">Button</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/button-group">Button Group</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/calendar">Calendar</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/card">Card</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/carousel">Carousel</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/chart">Chart</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/checkbox">Checkbox</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/collapsible">Collapsible</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/command">Command</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/context-menu">Context Menu</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/dialog">Dialog</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/download">Download</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/drawer">Drawer</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/dropdown-menu">Dropdown Menu</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/empty">Empty</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/fact-box">Fact Box</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/feedback">Feedback</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/field">Field</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/footer">Footer</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/header">Header</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/hover-card">Hover Card</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/infographic">Infographic</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/input">Input</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/input-group">Input Group</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/input-otp">Input OTP</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/item">Item</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/kbd">Kbd</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/label">Label</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/link-list">Link List</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/menubar">Menubar</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/mode-toggle">Mode Toggle</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/native-select">Native Select</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/navigation-menu">Navigation Menu</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/pagination">Pagination</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/person">Person</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/popover">Popover</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/progress">Progress</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/radio-group">Radio Group</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/resizable">Resizable</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/scroll-area">Scroll Area</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/select">Select</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/separator">Separator</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/sheet">Sheet</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/sidebar">Sidebar</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/skeleton">Skeleton</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/slider">Slider</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/sonner">Sonner</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/spinner">Spinner</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/switch">Switch</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/table">Table</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/tabs">Tabs</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/textarea">Textarea</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/timeline">Timeline</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/toggle">Toggle</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/toggle-group">Toggle Group</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/tooltip">Tooltip</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <main className="app-main-section">
          <RootLayout />
        </main>
      </>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Spinner />}>
            <HomeTempDemo />
          </Suspense>
        ),
      },
      {
        path: "/home",
        element: (
          <Suspense fallback={<Spinner />}>
            <HomeDemo />
          </Suspense>
        ),
      },
      {
        path: "/accentuated-link",
        element: (
          <Suspense fallback={<Spinner />}>
            <AccentuatedLinkDemo />
          </Suspense>
        ),
      },
      {
        path: "/accordion",
        element: (
          <Suspense fallback={<Spinner />}>
            <AccordionDemo />
          </Suspense>
        ),
      },
      {
        path: "/alert",
        element: (
          <Suspense fallback={<Spinner />}>
            <AlertDemo />
          </Suspense>
        ),
      },
      {
        path: "/alert-dialog",
        element: (
          <Suspense fallback={<Spinner />}>
            <AlertDialogDemo />
          </Suspense>
        ),
      },
      {
        path: "/aspect-ratio",
        element: (
          <Suspense fallback={<Spinner />}>
            <AspectRatioDemo />
          </Suspense>
        ),
      },
      {
        path: "/avatar",
        element: (
          <Suspense fallback={<Spinner />}>
            <AvatarDemo />
          </Suspense>
        ),
      },
      {
        path: "/badge",
        element: (
          <Suspense fallback={<Spinner />}>
            <BadgeDemo />
          </Suspense>
        ),
      },
      {
        path: "/banner",
        element: (
          <Suspense fallback={<Spinner />}>
            <BannerDemo />
          </Suspense>
        ),
      },
      {
        path: "/breadcrumb",
        element: (
          <Suspense fallback={<Spinner />}>
            <BreadcrumbDemo />
          </Suspense>
        ),
      },
      {
        path: "/button",
        element: (
          <Suspense fallback={<Spinner />}>
            <ButtonDemo />
          </Suspense>
        ),
      },
      {
        path: "/button-group",
        element: (
          <Suspense fallback={<Spinner />}>
            <ButtonGroupDemo />
          </Suspense>
        ),
      },
      {
        path: "/calendar",
        element: (
          <Suspense fallback={<Spinner />}>
            <CalendarDemo />
          </Suspense>
        ),
      },
      {
        path: "/card",
        element: (
          <Suspense fallback={<Spinner />}>
            <CardDemo />
          </Suspense>
        ),
      },
      {
        path: "/carousel",
        element: (
          <Suspense fallback={<Spinner />}>
            <CarouselDemo />
          </Suspense>
        ),
      },
      {
        path: "/chart",
        element: (
          <Suspense fallback={<Spinner />}>
            <ChartDemo />
          </Suspense>
        ),
      },
      {
        path: "/checkbox",
        element: (
          <Suspense fallback={<Spinner />}>
            <CheckboxDemo />
          </Suspense>
        ),
      },
      {
        path: "/collapsible",
        element: (
          <Suspense fallback={<Spinner />}>
            <CollapsibleDemo />
          </Suspense>
        ),
      },
      {
        path: "/command",
        element: (
          <Suspense fallback={<Spinner />}>
            <CommandDemo />
          </Suspense>
        ),
      },
      {
        path: "/context-menu",
        element: (
          <Suspense fallback={<Spinner />}>
            <ContextMenuDemo />
          </Suspense>
        ),
      },
      {
        path: "/dialog",
        element: (
          <Suspense fallback={<Spinner />}>
            <DialogDemo />
          </Suspense>
        ),
      },
      {
        path: "/download",
        element: (
          <Suspense fallback={<Spinner />}>
            <DownloadDemo />
          </Suspense>
        ),
      },
      {
        path: "/drawer",
        element: (
          <Suspense fallback={<Spinner />}>
            <DrawerDemo />
          </Suspense>
        ),
      },
      {
        path: "/dropdown-menu",
        element: (
          <Suspense fallback={<Spinner />}>
            <DropdownMenuDemo />
          </Suspense>
        ),
      },
      {
        path: "/empty",
        element: (
          <Suspense fallback={<Spinner />}>
            <EmptyDemo />
          </Suspense>
        ),
      },
      {
        path: "/fact-box",
        element: (
          <Suspense fallback={<Spinner />}>
            <FactBoxDemo />
          </Suspense>
        ),
      },
      {
        path: "/feedback",
        element: (
          <Suspense fallback={<Spinner />}>
            <FeedbackDemo />
          </Suspense>
        ),
      },
      {
        path: "/field",
        element: (
          <Suspense fallback={<Spinner />}>
            <FieldDemo />
          </Suspense>
        ),
      },
      {
        path: "/footer",
        element: (
          <Suspense fallback={<Spinner />}>
            <FooterDemo />
          </Suspense>
        ),
      },
      {
        path: "/header",
        element: (
          <Suspense fallback={<Spinner />}>
            <HeaderDemo />
          </Suspense>
        ),
      },
      {
        path: "/hover-card",
        element: (
          <Suspense fallback={<Spinner />}>
            <HoverCardDemo />
          </Suspense>
        ),
      },
      {
        path: "/infographic",
        element: (
          <Suspense fallback={<Spinner />}>
            <InfographicDemo />
          </Suspense>
        ),
      },
      {
        path: "/input",
        element: (
          <Suspense fallback={<Spinner />}>
            <InputDemo />
          </Suspense>
        ),
      },
      {
        path: "/input-group",
        element: (
          <Suspense fallback={<Spinner />}>
            <InputGroupDemo />
          </Suspense>
        ),
      },
      {
        path: "/input-otp",
        element: (
          <Suspense fallback={<Spinner />}>
            <InputOTPDemo />
          </Suspense>
        ),
      },
      {
        path: "/item",
        element: (
          <Suspense fallback={<Spinner />}>
            <ItemDemo />
          </Suspense>
        ),
      },
      {
        path: "/kbd",
        element: (
          <Suspense fallback={<Spinner />}>
            <KbdDemo />
          </Suspense>
        ),
      },
      {
        path: "/label",
        element: (
          <Suspense fallback={<Spinner />}>
            <LabelDemo />
          </Suspense>
        ),
      },
      {
        path: "/link-list",
        element: (
          <Suspense fallback={<Spinner />}>
            <LinkListDemo />
          </Suspense>
        ),
      },
      {
        path: "/menubar",
        element: (
          <Suspense fallback={<Spinner />}>
            <MenubarDemo />
          </Suspense>
        ),
      },
      {
        path: "/mode-toggle",
        element: (
          <Suspense fallback={<Spinner />}>
            <ModeToggleDemo />
          </Suspense>
        ),
      },
      {
        path: "/native-select",
        element: (
          <Suspense fallback={<Spinner />}>
            <NativeSelectDemo />
          </Suspense>
        ),
      },
      {
        path: "/navigation-menu",
        element: (
          <Suspense fallback={<Spinner />}>
            <NavigationMenuDemo />
          </Suspense>
        ),
      },
      {
        path: "/pagination",
        element: (
          <Suspense fallback={<Spinner />}>
            <PaginationDemo />
          </Suspense>
        ),
      },
      {
        path: "/person",
        element: (
          <Suspense fallback={<Spinner />}>
            <PersonDemo />
          </Suspense>
        ),
      },
      {
        path: "/popover",
        element: (
          <Suspense fallback={<Spinner />}>
            <PopoverDemo />
          </Suspense>
        ),
      },
      {
        path: "/progress",
        element: (
          <Suspense fallback={<Spinner />}>
            <ProgressDemo />
          </Suspense>
        ),
      },
      {
        path: "/radio-group",
        element: (
          <Suspense fallback={<Spinner />}>
            <RadioGroupDemo />
          </Suspense>
        ),
      },
      {
        path: "/resizable",
        element: (
          <Suspense fallback={<Spinner />}>
            <ResizableDemo />
          </Suspense>
        ),
      },
      {
        path: "/scroll-area",
        element: (
          <Suspense fallback={<Spinner />}>
            <ScrollAreaDemo />
          </Suspense>
        ),
      },
      {
        path: "/select",
        element: (
          <Suspense fallback={<Spinner />}>
            <SelectDemo />
          </Suspense>
        ),
      },
      {
        path: "/separator",
        element: (
          <Suspense fallback={<Spinner />}>
            <SeparatorDemo />
          </Suspense>
        ),
      },
      {
        path: "/sheet",
        element: (
          <Suspense fallback={<Spinner />}>
            <SheetDemo />
          </Suspense>
        ),
      },
      {
        path: "/sidebar",
        element: (
          <Suspense fallback={<Spinner />}>
            <SidebarDemo />
          </Suspense>
        ),
      },
      {
        path: "/skeleton",
        element: (
          <Suspense fallback={<Spinner />}>
            <SkeletonDemo />
          </Suspense>
        ),
      },
      {
        path: "/slider",
        element: (
          <Suspense fallback={<Spinner />}>
            <SliderDemo />
          </Suspense>
        ),
      },
      {
        path: "/sonner",
        element: (
          <Suspense fallback={<Spinner />}>
            <SonnerDemo />
          </Suspense>
        ),
      },
      {
        path: "/spinner",
        element: (
          <Suspense fallback={<Spinner />}>
            <SpinnerDemo />
          </Suspense>
        ),
      },
      {
        path: "/switch",
        element: (
          <Suspense fallback={<Spinner />}>
            <SwitchDemo />
          </Suspense>
        ),
      },
      {
        path: "/table",
        element: (
          <Suspense fallback={<Spinner />}>
            <TableDemo />
          </Suspense>
        ),
      },
      {
        path: "/tabs",
        element: (
          <Suspense fallback={<Spinner />}>
            <TabsDemo />
          </Suspense>
        ),
      },
      {
        path: "/textarea",
        element: (
          <Suspense fallback={<Spinner />}>
            <TextareaDemo />
          </Suspense>
        ),
      },
      {
        path: "/timeline",
        element: (
          <Suspense fallback={<Spinner />}>
            <TimelineDemo />
          </Suspense>
        ),
      },
      {
        path: "/toggle",
        element: (
          <Suspense fallback={<Spinner />}>
            <ToggleDemo />
          </Suspense>
        ),
      },
      {
        path: "/toggle-group",
        element: (
          <Suspense fallback={<Spinner />}>
            <ToggleGroupDemo />
          </Suspense>
        ),
      },
      {
        path: "/tooltip",
        element: (
          <Suspense fallback={<Spinner />}>
            <TooltipDemo />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
