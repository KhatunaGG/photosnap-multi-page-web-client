import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "./components/__organism";

const dm = DM_Sans({
  variable: "--font-dm-sans",
  weight: ["700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Photosnap-multi-page-web",
  description: "photosnap-multi-page-web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dm.variable}  antialiased flex flex-col min-h-screen`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
