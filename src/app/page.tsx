"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Video from "./components/Video";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Portfolio from "./components/Portfolio";
import Accordion from "./components/Accordion";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const [language, setLanguage] = useState<"ar" | "en">("ar");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"));
  };

  return (
    <>
      <div className="bg-[url('/images/hero_4.jpg')] bg-center bg-no-repeat bg-cover h-screen mb-20">
        <Navbar language={language} toggleLanguage={toggleLanguage} />
        <Hero language={language} />
      </div>
      <Video language={language}/>
      <Services language={language} />
      <Technologies language={language} />
      <Portfolio language={language} />
      <Accordion language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </>
  );
}
