import type { Metadata } from "next";
import { DM_Serif_Display, Public_Sans } from "next/font/google";
import "./globals.css";

const sans = Public_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serif = DM_Serif_Display({
  weight: ["400"],
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PayAPI",
  description: "Start building with our APIs for absolutely free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${serif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
