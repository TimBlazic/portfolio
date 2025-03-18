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
  keywords: [
    "Full Stack Developer",
    "Web Development",
    "Next.js",
    "React",
    "TypeScript",
    "SEO Optimization",
    "Performance Optimization",
    "Website Development",
    "Slovenia",
    "Tim Blažič",
  ],
  authors: [{ name: "Tim Blažič", url: "https://timblazic.dev" }],
  creator: "Tim Blažič",
  publisher: "Tim Blažič",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://timblazic.dev",
    title: "Tim Blažič - Full Stack Developer",
    description:
      "🚀 High-Performance Web Solutions for startups & agencies. Fast, SEO-Optimized, and Designed for Conversions.",
    siteName: "Tim Blažič - Full Stack Developer",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Tim Blažič - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tim Blažič - Full Stack Developer",
    description: "🚀 High-Performance Web Solutions for startups & agencies",
    creator: "@timblazic_dev",
    images: ["/android-chrome-512x512.png"],
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://timblazic.dev",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
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
