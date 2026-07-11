import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer"; // <-- This imports our new component!

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Paxofi - Timeless Furniture",
  description: "Elevate your space",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
