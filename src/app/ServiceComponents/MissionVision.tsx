import React from "react";

type Language = "ar" | "en";

interface MissionVisionItem {
  title: string;
  text: string;
}

interface MissionVisionProps {
  language: Language;
  items: MissionVisionItem[];
}

export default function MissionVision({ language, items }: MissionVisionProps) {
  const isArabic = language === "ar";

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="bg-gradient-to-b from-white to-blue-50 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 text-center md:text-start">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-2xl transition-all duration-500 border-t-4 border-blue-600"
          >
            <h3 className="text-3xl font-bold text-blue-800 mb-4">
              {item.title}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
