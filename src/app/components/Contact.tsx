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
      data-aos="fade-up"
      className={`py-20 px-6 sm:px-10 bg-gray-900 text-gray-100 ${
        isArabic ? "text-right" : "text-left"
      }`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 pb-3">
          {t.title}
        </h2>
        <p className="mt-3 text-gray-400">{t.subtitle}</p>
      </div>

      <form className="max-w-3xl mx-auto bg-gray-800 shadow-xl rounded-2xl p-6 sm:p-10 space-y-6 border border-gray-700">
        <div className="grid sm:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder={t.name}
            className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder={t.email}
            className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <input
          type="text"
          placeholder={t.subject}
          className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          rows={5}
          placeholder={t.message}
          className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <div className="text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold px-8 py-3 rounded-xl shadow-md hover:opacity-90 transition"
          >
            {t.button}
          </button>
        </div>
      </form>
    </section>
  );
}
