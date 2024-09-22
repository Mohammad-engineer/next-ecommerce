import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import { Toaster } from "sonner";
import { CONFIG } from "src/config-global";
import { detectLanguage } from "src/locales/server";
import { ThemeProvider } from "src/theme/theme-provider";
import {
  SettingsDrawer,
  defaultSettings,
  SettingsProvider,
} from "src/components/settings";
// import { WixClientContextProvider } from "@/context/wixContext";

import { MotionLazy } from "src/components/animate/motion-lazy";
import { detectSettings } from "src/components/settings/server";

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

  const settings = CONFIG.isStaticExport
    ? defaultSettings
    : await detectSettings();

  return (
    <html lang={lang ?? "en"} suppressHydrationWarning>
      <body className={inter.className}>
        {/* <WixClientContextProvider> */}
        <SettingsProvider
          settings={settings}
          caches={CONFIG.isStaticExport ? "localStorage" : "cookie"}
        >
          <ThemeProvider>
            <MotionLazy>
              <Navbar />
              <CheckoutProvider>
                {children}
                <Toaster />
              </CheckoutProvider>
              <Footer />
            </MotionLazy>
          </ThemeProvider>
        </SettingsProvider>
        {/* </WixClientContextProvider> */}
      </body>
    </html>
  );
}
