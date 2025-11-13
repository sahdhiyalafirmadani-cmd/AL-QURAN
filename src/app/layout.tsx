import type { Metadata } from "next";
import "./globals.css";
//import Header from "@/components/ organisms/Header";
//import Footer from "@/components/ organisms/Footer";


export const metadata: Metadata = {
  title: "AlQuran Academy | Learn the Quran Online",
  description:
    "AlQuran Academy offers online Quran learning courses with expert teachers for all ages — Tajweed, Hifz, Tafseer, and Arabic lessons.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 font-sans antialiased">
        {/* Shared Header */}
        {/*<Header />

        {/* Page-specific content */}
        <main>{children}</main>

        {/* Shared Footer */}
        {/*<Footer />*/}
      </body>
    </html>
  );
}
