import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';

const font = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Buzz",
  description: "Generated by create next app",
  icons: {
    icon: "/app/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <Analytics />
        <SpeedInsights />
        <Toaster />
        <Sonner />
      </body>
    </html>
  );
}
