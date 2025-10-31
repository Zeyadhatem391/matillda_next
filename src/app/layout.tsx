"use client";
import "./globals.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import SocialMedia from "./components/SocialMedia";
import ScrollToTop from "./components/ScrollToTop";
import { LanguageProvider } from "./context/LanguageContext";
import { usePathname } from "next/navigation"; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); 


  const isContactPage = pathname === "/contact";

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <LanguageProvider>
      
          <Navbar />

          {!isContactPage && (
            <div className="bg-[url('/images/hero_4.jpg')] bg-center bg-no-repeat bg-cover h-screen">
              <Hero />
            </div>
          )}

          {children}

          <Footer />
          <SocialMedia />
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
