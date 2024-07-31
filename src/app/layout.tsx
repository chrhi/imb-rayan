import type { Metadata } from "next";
import Providers from "@/components/providers";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";
import "react-quill/dist/quill.snow.css";

const inter = Inter({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "IMB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="w-full h-fit  relative">{children}</div>
          <Toaster closeButton />
        </Providers>
      </body>
    </html>
  );
}
