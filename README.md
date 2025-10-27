# Project Bootstrap Stack

This repository contains the base Next.js 15 application stack prepared for future booking, payment, and dashboard feature work.

## Stack Highlights

- **Next.js 15** with the App Router and TypeScript
- **Tailwind CSS v4** using the new configuration format and global styles
- **Redux Toolkit + RTK Query** preconfigured with a starter slice and hooks
- **Framer Motion**, **lottie-react**, **class-variance-authority**, **zod**, **qrcode**, and **date-fns** ready for animation, validation, and utility needs
- Global fonts powered by `next/font` with Inter as the primary typeface and Poppins as a secondary accent

## Directory Overview

```
app/
  (routes)/             # Public routes - home lives here
  api/health            # Simple health-check endpoint
  booking/              # Placeholder for booking flow
  payment/              # Placeholder for payment flow
  confirmation/         # Placeholder for confirmation flow
  dashboard/            # Placeholder for dashboard experience
components/             # Shared UI components
features/               # Feature-specific modules
lib/
  motion/               # Framer Motion presets
  slices/               # Redux slices
  store/                # Redux store, hooks, and provider
public/
  images/
  videos/
```

## Getting Started

```bash
pnpm install
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application. The `/api/health` route will respond with `{ "status": "ok" }` for service monitoring checks.
