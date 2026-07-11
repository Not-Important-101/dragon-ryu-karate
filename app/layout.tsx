import type { Metadata } from "next";
import { Bebas_Neue, Barlow } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const barlow = Barlow({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const title = "Dragon Ryu Karate | Kingstown, St. Vincent and the Grenadines";
const description =
  "Dragon Ryu Karate is a premier martial arts club in Kingstown, SVG. Train with national champions. Book a free trial class today.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "Dragon Ryu Karate",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/dojo.jpg", width: 1200, height: 900, alt: "Dragon Ryu Karate students training at the dojo" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/dojo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  );
}
