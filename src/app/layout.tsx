"use client";
import "./globals.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import SocialMedia from "./components/SocialMedia";
import ScrollToTop from "./components/ScrollToTop";
import { LanguageProvider } from "./context/LanguageContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <LanguageProvider>
          <div className="bg-[url('/images/hero_4.jpg')] bg-center bg-no-repeat bg-cover h-screen">
          <Navbar />
          <Hero />
          </div>
          {children}
          <Footer />
          <SocialMedia />
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
