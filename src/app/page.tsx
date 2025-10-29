"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLanguage } from "./context/LanguageContext";
import Video from "./components/Video";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Portfolio from "./components/Portfolio";
import Accordion from "./components/Accordion";
import Contact from "./components/Contact";

export default function Home() {
  const { language } = useLanguage();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Video language={language} />
      <Services language={language} />
      <Technologies language={language} />
      <Portfolio language={language} />
      <Accordion language={language} />
      <Contact language={language} />
    </>
  );
}
