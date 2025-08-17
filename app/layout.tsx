import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/themeProviders";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/Sidebar";
import PlayerWrapper from './player/PlayerWrapper';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js",
  description: "Clone Youtube Music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR">
      <body className={cn(inter.className, "h-dvh")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Sidebar>
            {children}
          </Sidebar>
          <PlayerWrapper />
        </ThemeProvider>
      </body>
    </html>
  );
}