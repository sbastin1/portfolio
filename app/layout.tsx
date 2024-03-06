import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Bastis Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <link rel="icon" href={"/favicon.ico"} sizes="any" />
      <meta name="viewport" content="viewport-fit=cover" />
      <body className={`${inter.className} bg-[#0C0C0C]`}>{children}</body>
    </html>
  );
}
