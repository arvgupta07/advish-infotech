import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Figtree, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageFade } from "@/components/layout/PageFade";
import { SITE } from "@/lib/content";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  metadataBase: new URL("https://advishinfotech.com"),
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${figtree.variable}`}>
      <body className="min-h-screen bg-background font-sans">
        <Navbar />
        <PageFade>
          <main>{children}</main>
        </PageFade>
        <Footer />
      </body>
    </html>
  );
}
