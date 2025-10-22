import React from "react";

type Language = "ar" | "en";

interface ContactProps {
  language: Language;
}

export default function Contact({ language }: ContactProps) {
  const isArabic = language === "ar";

  const texts = {
    ar: {
      title: "هل لديك فكرة مشروع؟",
      subtitle: "تواصل معنا الآن لنبدأ في تحويلها إلى واقع.",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      subject: "الموضوع",
      message: "رسالتك",
      button: "إرسال الرسالة",
    },
    en: {
      title: "Do you have a project idea?",
      subtitle: "Contact us now and let's turn it into reality.",
      name: "Full Name",
      email: "Email Address",
      subject: "Subject",
      message: "Your Message",
      button: "Send Message",
    },
  };

  const t = texts[language];

  return (
    <section
      className={`py-20 px-6 sm:px-10 bg-gray-50 text-gray-800 ${
        isArabic ? "text-right" : "text-left"
      }`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 pb-3">
          {t.title}
        </h2>
        <p className="mt-3 text-gray-600">{t.subtitle}</p>
      </div>

      <form className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6 sm:p-10 space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder={t.name}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder={t.email}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <input
          type="text"
          placeholder={t.subject}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          rows={5}
          placeholder={t.message}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <div className="text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-xl shadow-md hover:opacity-90 transition"
          >
            {t.button}
          </button>
        </div>
      </form>
    </section>
  );
}
