import { Poppins } from "next/font/google";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";

// ** Utils
import cn from "@/utils/cn";

import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          poppins.variable,
        )}
      >
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
