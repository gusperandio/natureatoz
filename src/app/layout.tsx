/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { LanguageProvider } from "./LanguageContext";
import FloatingButton from "./components/FloatingButton";
import Cookies from "./components/Cookies";
import { initGA, logPageView } from "../../config/analytics";
import { useEffect } from "react";
 
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nature A to Z",
  icons: "icon.png",
};
declare global {
  interface Window {
    GA_INITIALIZED: boolean;
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />

      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          <Cookies />
          <FloatingButton />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
