import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kashmir Art Factory | Handcrafted Kashmiri Woodwork & Art",
  description:
    "Discover handcrafted Kashmiri woodwork, decorative art, and bespoke home decor. Authentic craftsmanship from the valleys of Kashmir, delivered to discerning homes worldwide.",
  keywords: [
    "Kashmir woodwork",
    "Kashmiri handicrafts",
    "hand-carved wood",
    "custom woodwork",
    "Kashmir art",
    "walnut wood",
    "home decor",
  ],
  openGraph: {
    title: "Kashmir Art Factory",
    description: "Handcrafted Kashmiri art for timeless homes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans bg-kashmir-cream text-kashmir-walnut">
        {children}
      </body>
    </html>
  );
}
