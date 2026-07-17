import type { Metadata } from "next";
import { Archivo_Black, Space_Mono, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import ContactFooter from "@/components/ContactFooter";
import CurveSwipe from "@/components/CurveSwipe";

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Devora — Custom Software Studio",
  description:
    "Devora designs and ships bespoke web, cloud, and enterprise applications for companies scaling across borders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${spaceMono.variable} ${inter.variable} scroll-smooth`}
    >
      <body
        className="relative min-h-screen overflow-x-hidden bg-orange text-black snap-y snap-mandatory overscroll-y-none"
        style={{ background: "#FF4D00" }}
      >
        <CurveSwipe />
        <Nav />
        {children}
        <ContactFooter />
      </body>
    </html>
  );
}
