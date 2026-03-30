import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Skin to Love Clinic | CQC-Registered Dermatology & Aesthetics | St Albans",
  description:
    "CQC-registered, medically-led dermatology and aesthetics practice in St Albans. Zero-commission practitioners. 529 five-star reviews. Look like yourself, only rested.",
  keywords:
    "skin clinic St Albans, aesthetics Hertfordshire, CQC registered clinic, dermatology St Albans, Profhilo, dermal fillers, non-surgical treatments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
