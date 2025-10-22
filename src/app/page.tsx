"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Portfolio from "./components/Portfolio";
import Accordion from "./components/Accordion";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const [language, setLanguage] = useState<"ar" | "en">("ar");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"));
  };

  return (
    <>
      <Navbar language={language} toggleLanguage={toggleLanguage} />
      <Hero language={language} />
      <Services language={language} />
      <Technologies language={language} />
      <Portfolio language={language}/>
      <Accordion language={language}/>
      <Contact language={language}/>
      <Footer language={language}/>
    </>
  );
}
