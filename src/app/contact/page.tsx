"use client";
import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const texts = {
    ar: {
      mapTitle: "موقعنا على الخريطة",
      title: "تواصل معنا",
      subtitle: "يسعدنا تواصلك معنا في أي وقت.",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      subject: "الموضوع",
      message: "اكتب رسالتك هنا...",
      button: "إرسال الرسالة",
      info: {
        phoneTitle: "اتصل بنا",
        phoneValue: "+20 100 123 4567",
        addressTitle: "العنوان",
        addressValue: "شارع التحرير، القاهرة، مصر",
        emailTitle: "البريد الإلكتروني",
        emailValue: "info@example.com",
      },
    },
    en: {
      mapTitle: "Our Location on Map",
      title: "Contact Us",
      subtitle: "We’d love to hear from you anytime.",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      subject: "Subject",
      message: "Write your message here...",
      button: "Send Message",
      info: {
        phoneTitle: "Call Us",
        phoneValue: "+20 100 123 4567",
        addressTitle: "Address",
        addressValue: "Tahrir Street, Cairo, Egypt",
        emailTitle: "Email",
        emailValue: "info@example.com",
      },
    },
  };

  const t = texts[language];

  return (
    <section
      className={`w-full text-gray-100 ${isArabic ? "text-right" : "text-left"}`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* --- Map + Form Side by Side --- */}
      <div className="flex flex-col lg:flex-row w-full min-h-screen bg-gray-800 pt-20 md:pt-0">
        {/* Map */}
        <div className="lg:w-1/2 w-full flex flex-col justify-center items-center p-8 bg-gray-900">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-yellow-400 text-center">
            {t.mapTitle}
          </h2>
          <div className="w-full h-[450px] overflow-hidden rounded-2xl shadow-lg border border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d22831.894860365886!2d31.321384040007146!3d31.013950865454657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sar!2seg!4v1761909558791!5m2!1sar!2seg"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2 w-full bg-gray-900 p-10 flex flex-col justify-center">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 pb-3">
              {t.title}
            </h2>
            <p className="mt-3 text-gray-300">{t.subtitle}</p>
          </div>

          <form className="bg-gray-800 shadow-lg rounded-2xl p-6 sm:p-8 space-y-6 border border-gray-700">
            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder={t.name}
                className="w-full border border-gray-600 bg-gray-900 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="email"
                placeholder={t.email}
                className="w-full border border-gray-600 bg-gray-900 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <input
              type="text"
              placeholder={t.phone}
              className="w-full border border-gray-600 bg-gray-900 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <input
              type="text"
              placeholder={t.subject}
              className="w-full border border-gray-600 bg-gray-900 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <textarea
              rows={5}
              placeholder={t.message}
              className="w-full border border-gray-600 bg-gray-900 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>

            <div className="text-center">
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-8 py-3 rounded-xl shadow-md transition"
              >
                {t.button}
              </button>
            </div>
          </form>
        </div>

      </div>

      {/* --- Info Boxes --- */}
      <div className="bg-gray-900 py-16 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="flex flex-col items-center space-y-3 bg-gray-800 border border-gray-700 p-6 rounded-2xl shadow-md">
            <FaPhoneAlt className="text-3xl text-yellow-400" />
            <h3 className="text-lg font-semibold">{t.info.phoneTitle}</h3>
            <p className="text-gray-300">{t.info.phoneValue}</p>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center space-y-3 bg-gray-800 border border-gray-700 p-6 rounded-2xl shadow-md">
            <FaMapMarkerAlt className="text-3xl text-yellow-400" />
            <h3 className="text-lg font-semibold">{t.info.addressTitle}</h3>
            <p className="text-gray-300">{t.info.addressValue}</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center space-y-3 bg-gray-800 border border-gray-700 p-6 rounded-2xl shadow-md">
            <FaEnvelope className="text-3xl text-yellow-400" />
            <h3 className="text-lg font-semibold">{t.info.emailTitle}</h3>
            <p className="text-gray-300">{t.info.emailValue}</p>
          </div>
        </div>
      </div>

    </section>
  );
}
