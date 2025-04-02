import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/navigation"; // Changed to ../
import Footer from "../components/footer";       // Changed to ../

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Bismark Arhinful",
  description: "This is my personal portfolio and website.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-3xl mx-auto px-4 w-full min-h-screen">
          <Navigation />
          <main className="py-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
