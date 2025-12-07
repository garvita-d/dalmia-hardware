import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import FeaturedInSection from "@/components/FeaturedInSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dalmia Hardware",
  description:
    "Discover premium hardware solutions with Dalmia Hardware. Explore high-quality construction and renovation supplies, including sliding wheels, gas springs, hinges, PVC SS T-patti 304 grade, and more. Innovation and craftsmanship for modern functionality and style.",
    icons: {
      icon: "/assets/logos/dh-short-logo.svg",
    }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-background font-sans flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <FeaturedInSection />
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
