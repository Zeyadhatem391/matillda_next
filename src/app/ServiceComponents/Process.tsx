import React from "react";

type Language = "ar" | "en";

interface Step {
  number: number;
  title: string;
  text: string;
}

interface ProcessProps {
  language: Language;
  steps: Step[];
}

export default function Process({ language, steps }: ProcessProps) {
  const isArabic = language === "ar";

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="bg-gray-50 py-20 px-6"
      id="process"
    >
      {/* العنوان */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
          {isArabic ? "كيف نعمل" : "Our Process"}
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          {isArabic
            ? "نتبع خطوات مدروسة بدقة لضمان نجاح مشروعك من الفكرة إلى الإطلاق."
            : "We follow a clear, step-by-step process to deliver successful projects."}
        </p>
      </div>

      {/* الخطوات */}
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-2"
          >
            {/* رقم الخطوة */}
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-700 text-white text-4xl font-bold mb-6 shadow-lg">
              {step.number}
            </div>

            {/* المحتوى */}
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{step.text}</p>
          </div>
        ))}
      </div>

      {/* نسخة الموبايل */}
      <div className="mt-16 text-center text-sm text-gray-500">
        {isArabic
          ? "كل خطوة تقرّبك أكثر من تحقيق رؤيتك الرقمية."
          : "Each step brings your vision closer to reality."}
      </div>
    </section>
  );
}
