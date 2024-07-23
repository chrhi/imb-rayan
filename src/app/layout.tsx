import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Providers from "@/components/providers";
import { Toaster } from "sonner";

import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

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
      <body className={poppins.className}>
        <Providers>
          <div className="w-full h-fit  relative">{children}</div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
