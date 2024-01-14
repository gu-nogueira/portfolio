"use client";

import { Providers } from "./providers";

// ** Utils
import cn from "@/utils/cn";

import { Inter, Poppins } from "next/font/google";
import "@/styles/globals.css";

// const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
});

export const metadata = {
  title: "Gustavo Nogueira  |  Portfolio",
  description: "My personal portfolio",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          // inter.variable,
          poppins.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
