import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { ReduxProvider } from "@/lib/store/provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Project Starter",
  description: "Bootstrap stack for the application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} bg-background text-foreground antialiased min-h-screen font-sans`}
      >
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
