import type { Metadata } from "next";
import { DM_Serif_Display, Public_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

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
        <main className="w-full h-full min-w-screen min-h-screen overflow-x-hidden flex flex-col">
          <div className="w-full h-full overflow-hidden relative">
            <Navbar />
            {children}
            <CTA />
          </div>
          <div className="w-full h-full flex-1 flex flex-col justify-end">
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
