/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { LanguageProvider } from "./LanguageContext";
import FloatingButton from "./components/FloatingButton";
import Cookies from "./components/Cookies";
const font = Inter({weight: "400", subsets: ["latin"], display: "swap"})

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
         <link rel="icon" href="/images/icon.png" type="image/x-icon" />
      </head>
      <body className={font.className}>
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
