import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Cedar Edge",
  description: "Cedar Edge - Training, Consulting, and Solutions",
  icons: {
    icon: "/JPG/Artboard 6@2x-100.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-slate-50">
          <Navbar />
          <div className="layout-container flex h-full grow flex-col">
            {children}
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}


