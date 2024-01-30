import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import "./globals.css";

export const metadata: Metadata = {
  title: "Quick Folio",
  description:
    "Get a quick personal site, with your projects published on GitHub. Made with Next.js, Tailwind CSS, and GitHub API.",
  themeColor: "black",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black min-h-screen flex flex-col justify-between p-4 max-w-[1440px] m-auto text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
