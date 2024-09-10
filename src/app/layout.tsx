import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import { Toaster } from "sonner";
import { CONFIG } from "src/config-global";
import { detectLanguage } from "src/locales/server";
// import { WixClientContextProvider } from "@/context/wixContext";

import { CheckoutProvider } from "src/sections/checkout/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lama Dev E-Commerce Application",
  description: "A complete e-commerce application with Next.js and Wix",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = CONFIG.isStaticExport ? "en" : await detectLanguage();

  return (
    <html lang={lang ?? "en"} suppressHydrationWarning>
      <body className={inter.className}>
        {/* <WixClientContextProvider> */}
        <Navbar />
        <CheckoutProvider>
          {children}
          <Toaster />
        </CheckoutProvider>
        <Footer />
        {/* </WixClientContextProvider> */}
      </body>
    </html>
  );
}
