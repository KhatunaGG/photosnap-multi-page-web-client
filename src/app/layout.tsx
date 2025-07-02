import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "./components/__organism";
import Footer from "./components/__organism/footer/Footer";

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
      <body className={`${dm.variable} antialiased flex flex-col`}>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
