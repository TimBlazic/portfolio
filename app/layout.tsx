import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tim Blažič - Full Stack Developer",
  description:
    "🚀 High-Performance Web Solutions for startups & agencies. Fast, SEO-Optimized, and Designed for Conversions. I transform complex problems into elegant, efficient solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-background")}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
