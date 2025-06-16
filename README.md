# kf-shadcnui

A modern, accessible, and customizable React component library built with [Radix UI](https://www.radix-ui.com/), [Tailwind CSS](https://tailwindcss.com/), and [Vite](https://vitejs.dev/).  
Perfect for building beautiful, production-ready UIs with speed and consistency.

## Features

- **Accessible**: Built on top of Radix UI primitives for accessibility out of the box.
- **Customizable**: Style with Tailwind CSS and easily override component styles.
- **Comprehensive**: Includes Accordions, Alerts, Badges, Buttons, Cards, Carousels, Dropdowns, Forms, Tables, Tooltips, and more.
- **Type-safe**: Written in TypeScript with full type definitions.
- **Fast**: Powered by Vite for instant HMR and fast builds.

## Installation

```bash
pnpm add kf-shadcnui
# or
npm install kf-shadcnui
# or
yarn add kf-shadcnui
```

## Usage

Import components directly from the library:

```tsx
import {
  Button,
  Card,
  Badge,
  Accordion,
  Alert,
  // ...and more
} from "kf-shadcnui";
```

Example:

```tsx
import { Button, Card, Badge } from "kf-shadcnui";

function Example() {
  return (
    <Card>
      <Badge>New</Badge>
      <h2>Card Title</h2>
      <Button>Click me</Button>
    </Card>
  );
}
```

## Components

- Accordion, Alert, AlertDialog, AspectRatio, Avatar, Badge, Breadcrumb, Button, Calendar, Card, Carousel, Checkbox, Collapsible, Command, ContextMenu, Dialog, Drawer, DropdownMenu, HoverCard, Input, InputOTP, Label, Menubar, NavigationMenu, Pagination, Popover, Progress, RadioGroup, Resizable, ScrollArea, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Switch, Table, Tabs, Textarea, Toaster, Toggle, ToggleGroup, Tooltip, and more.

See the [source code](./src/lib/main.ts) for a full list of exports.

## Theming

All components are styled with Tailwind CSS utility classes.  
You can override styles using the `className` prop or extend Tailwind's config.

## Development

### Scripts

- `pnpm dev` – Start the development server
- `pnpm build` – Build the library for production
- `pnpm lint` – Lint the source code
- `pnpm check-types` – Type-check the codebase
- `pnpm test` – Run tests

### Requirements

- Node.js 18+
- pnpm, npm, or yarn

## Contributing

1. Fork the repo and create your branch.
2. Run `pnpm install` to install dependencies.
3. Run `pnpm dev` to start the playground.
4. Submit a pull request!

## License

MIT © Asbjørn Ness / Kreftforeningen
