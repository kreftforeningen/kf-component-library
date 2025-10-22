# kf-component-library

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
pnpm add kf-component-library
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
} from "kf-component-library";
```

Example:

```tsx
import { Button, Card, Badge } from "kf-component-library";

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
- pnpm

## Daily Development

This project follows a **feature branch workflow** with automated releases using [Changesets](https://github.com/changesets/changesets).

### Development Workflow

```bash
# 1. Start from develop branch
git checkout develop
git pull origin develop

# 2. Create feature branch
git checkout -b feature/new-component
# or: git checkout -b fix/button-styling
# or: git checkout -b docs/update-readme

# 3. Make your changes
# ... edit files ...
git add .
git commit -m "Add new component"

# 4. Push feature branch
git push origin feature/new-component

# 5. Create PR: feature/new-component → develop
# 6. Review and merge to develop

# 7. Update local develop branch
git checkout develop
git pull origin develop  # Pull the merged changes
# Now ready for next feature branch
```

### Release Process

```bash
# 1. Create changeset (on develop branch)
git checkout develop
pnpm changeset
# Select packages that changed
# Choose version bump (patch/minor/major)
# Write description of changes

# 2. Commit changeset
git add .changeset/
git commit -m "Add changeset for new component"
git push origin develop

# 3. Create release PR: develop → main
# 4. Review and approve PR
# 5. Merge PR → automatic release! 🚀
```

### Branch Strategy

- **`main`** - Production releases, triggers automatic npm publishing
- **`develop`** - Integration branch for features
- **`feature/*`** - Feature development branches
- **`fix/*`** - Bug fix branches
- **`docs/*`** - Documentation update branches

## Contributing

1. Fork the repo and create your branch.
2. Run `pnpm install` to install dependencies.
3. Run `pnpm dev` to start the playground.
4. Submit a pull request!

## License

MIT

## Author

Asbjørn Ness, Kreftforeningen
