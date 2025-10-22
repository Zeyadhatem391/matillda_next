"use client";
import { useState } from "react";

type Language = "ar" | "en";

interface AccordionProps {
  language: Language;
}

export default function Accordion({ language }: AccordionProps) {
  const isAr = language === "ar";

  const faqs = [
    {
      category: isAr ? "تطوير الويب" : "Web Development",
      question: isAr
        ? "ما هي التقنيات التي نستخدمها في تطوير الويب؟"
        : "What technologies do we use for web development?",
      answer: isAr
        ? "نستخدم أحدث التقنيات مثل React، Next.js، وTailwind لبناء مواقع سريعة وسهلة الاستخدام."
        : "We use modern technologies like React, Next.js, and Tailwind to build fast and user-friendly websites.",
    },
    {
      category: isAr ? "تطبيقات الموبايل" : "Mobile Apps",
      question: isAr
        ? "هل نصمم تطبيقات تعمل على Android و iOS معًا؟"
        : "Do you build apps for both Android and iOS?",
      answer: isAr
        ? "نعم، نستخدم Flutter وReact Native لتطوير تطبيقات تعمل على كلا النظامين بكفاءة عالية."
        : "Yes, we use Flutter and React Native to build apps that work efficiently on both Android and iOS.",
    },
    {
      category: isAr ? "برامج سطح المكتب" : "Desktop Software",
      question: isAr
        ? "هل يمكنكم تطوير برامج سطح المكتب للشركات؟"
        : "Can you develop desktop software for businesses?",
      answer: isAr
        ? "نعم، نطور برامج سطح المكتب باستخدام تقنيات مثل Electron و.NET لتلبية احتياجات المؤسسات."
        : "Yes, we develop desktop applications using technologies like Electron and .NET to suit enterprise needs.",
    },
    {
      category: isAr ? "قواعد البيانات والتحليلات" : "Database & Analytics Services",
      question: isAr
        ? "هل تقدمون حلولًا لتحليل البيانات؟"
        : "Do you offer data analytics solutions?",
      answer: isAr
        ? "نعم، نقدم حلولًا متقدمة لتحليل البيانات باستخدام MySQL، Power BI، وPython."
        : "Yes, we provide advanced data analytics solutions using MySQL, Power BI, and Python.",
    },
    {
      category: isAr ? "التحول الرقمي للمؤسسات الصغيرة" : "Digital Transformation for SMEs",
      question: isAr
        ? "كيف تساعدون المؤسسات الصغيرة في التحول الرقمي؟"
        : "How do you help SMEs in digital transformation?",
      answer: isAr
        ? "نساعد المؤسسات الصغيرة على التحول الرقمي من خلال بناء أنظمة ذكية لتحسين الأداء وزيادة الإنتاجية."
        : "We help small and medium enterprises go digital by building smart systems that improve performance and productivity.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className={`w-full px-6 md:px-20 py-16  bg-gray-50 ${
        isAr ? "text-right" : "text-left"
      }`}
    >
  
      <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-10">
        {isAr ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
      </h2>

   
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md divide-y divide-slate-200">
        {faqs.map((item, index) => (
          <div key={index} className="p-5">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-slate-800 text-lg font-medium focus:outline-none"
            >
              <span>
                <span className="text-blue-600 font-semibold">
                  {item.category}:
                </span>{" "}
                {item.question}
              </span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === index ? "max-h-40 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
