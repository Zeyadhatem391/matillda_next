"use client";

// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

type Language = "ar" | "en";

interface HeroProps {
  language: Language;
}

export default function Hero({ language }: HeroProps) {
  const content = {
    ar: {
      title: "Matillda Software",
      text: `نقدّم حلولًا برمجية متكاملة تشمل تصميم واجهات وتجارب مستخدم احترافية (UI/UX)، تطوير مواقع ويب عصرية، تطبيقات موبايل قوية، وبرامج سطح مكتب مخصصة تلائم طبيعة عملك.`,
      btn1: "اطلب العرض",
      btn2: "شاهد أعمالنا",
    },
    en: {
      title: "Matillda Software",
      text: `We deliver complete digital solutions including professional (UI/UX) design, modern web development, powerful mobile applications, and custom desktop software tailored to your business needs.`,
      btn1: "Get a Quote",
      btn2: "View Portfolio",
    },
  };

  const { title, text, btn1, btn2 } = content[language];

  return (
    <div className="hero mb-20 md:m-0  ">
      {/*   */}
      <div
        className="flex flex-wrap  justify-center items-center pt-15 "
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <div className="h-96 pt-10 w-full lg:w-1/2 lg:order-1 order-2  text-black ">
          <p className="lg:text-7xl md:text-6xl text-4xl  font-bold mb-5  ">
            {title}
          </p>
          {/* 
          <p className="text-xl font-semibold whitespace-pre-line">{text}</p>

          <div className="m-8 flex gap-4 ">
            <button className="btn">{btn1}</button>
            <button className="btn">{btn2}</button>
          </div> */}
        </div>

        {/* <div className="h-96  w-full lg:w-96 flex justify-center lg:order-2 order-1 shadow">
          <DotLottieReact
            src="https://lottie.host/98ec5af5-9662-4cea-becf-01b6ae7c09d6/SZkC2PDjMz.lottie"
            loop
            autoplay
          />
          <img src="/images/ai-hero-PWUd6YFL.webp" className="w-full h-full" alt="" />
        </div> */}
      </div>
    </div>
  );
}
