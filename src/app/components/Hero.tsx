"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

type Language = "ar" | "en";

interface HeroProps {
  language: Language;
}

export default function Hero({ language }: HeroProps) {
  const content = {
    ar: {
      title: "Matillda Software",
      text: `نقدّم حلولًا برمجية متكاملة تشمل تصميم واجهات وتجارب مستخدم احترافية (UI/UX)، تطوير مواقع ويب عصرية، تطبيقات موبايل قوية، وبرامج سطح مكتب مخصصة تلائم طبيعة عملك.
نهتم بالتفاصيل من أول الفكرة وحتى الإطلاق، ونقدّم استشارات تقنية تساعدك على تحويل رؤيتك إلى منتج حقيقي يحقق نتائج ملموسة.
سواء كنت شركة ناشئة تبحث عن هوية رقمية أو مؤسسة تريد تطوير أنظمتها، نحن شريكك في رحلة التحول الرقمي، بالأفكار، والتصميم، والتنفيذ الذكي.`,
      btn1: "اطلب العرض",
      btn2: "شاهد أعمالنا",
    },
    en: {
      title: "Matillda Software",
      text: `We deliver complete digital solutions including professional (UI/UX) design, modern web development, powerful mobile applications, and custom desktop software tailored to your business needs.
From concept to launch, we focus on details and provide expert consulting to turn your vision into a real, high-performing product.
Whether you’re a startup building your digital identity or a growing company transforming its systems, we’re your trusted partner for smart, creative, and scalable digital solutions.`,
      btn1: "Get a Quote",
      btn2: "View Portfolio",
    },
  };

  const { title, text, btn1, btn2 } = content[language];

  return (
    <div className="hero mb-20 md:m-0   bg-gray-100">
      {/* bg-[url('/images/se.jpg')] bg-center bg-no-repeat bg-cover  */}
      <div
        className="flex flex-wrap  justify-around items-center pt-15 pb-28"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <div className="h-96 pt-10 w-full lg:w-1/2 lg:order-1 order-2   lg:mx-0 mx-10 ">
          <p className="lg:text-7xl md:text-6xl text-4xl  font-bold mb-5  ">
            {title}
          </p>

          <p className="text-xl font-semibold whitespace-pre-line">{text}</p>

          <div className="m-8 flex gap-4 ">
            <button className="btn">{btn1}</button>
            <button className="btn">{btn2}</button>
          </div>
        </div>

        <div className="h-96  w-full lg:w-96 flex justify-center lg:order-2 order-1 shadow">
          <DotLottieReact
            src="https://lottie.host/98ec5af5-9662-4cea-becf-01b6ae7c09d6/SZkC2PDjMz.lottie"
            loop
            autoplay
          />
          {/* <img src="/images/ai-hero-PWUd6YFL.webp" className="w-full h-full" alt="" /> */}
        </div>
      </div>
    </div>
  );
}
