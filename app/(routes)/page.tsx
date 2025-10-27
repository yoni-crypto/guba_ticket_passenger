'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { toggleTheme } from "@/lib/slices/appSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";

const routes = [
  { href: "/booking", label: "Booking" },
  { href: "/payment", label: "Payment" },
  { href: "/confirmation", label: "Confirmation" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function Home() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.app.theme);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-16 text-foreground">
      <motion.section
        className="w-full max-w-3xl space-y-10 rounded-3xl border border-foreground/10 bg-white/90 p-10 shadow-lg backdrop-blur-lg dark:bg-zinc-900/80"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeUp} className="space-y-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/60">
            Next.js 15 · Tailwind CSS 4
          </span>
          <h1 className="text-balance text-4xl font-semibold text-foreground md:text-5xl">
            Modern foundations for the booking experience.
          </h1>
          <p className="text-pretty text-base text-foreground/70 md:text-lg">
            Explore the prepared routes and tooling to build booking flows, payment journeys, confirmations, and data-rich dashboards without additional setup.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:bg-foreground/80"
            >
              {route.label}
            </Link>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center justify-center gap-3 text-sm text-foreground/60 md:flex-row"
        >
          <span>Preview theme state: {theme}</span>
          <button
            type="button"
            onClick={() => dispatch(toggleTheme())}
            className="rounded-full border border-foreground/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide transition hover:border-foreground/40"
          >
            Toggle theme state
          </button>
        </motion.div>
      </motion.section>
    </main>
  );
}
