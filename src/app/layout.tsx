/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { LanguageProvider } from "./LanguageContext";
import FloatingButton from "./components/FloatingButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nature A to Z",
  icons: "icon.png",
};

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
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          <FloatingButton />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
