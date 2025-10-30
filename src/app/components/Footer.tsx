"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const t = {
    ar: {
      about: "من نحن",
      privacy: "سياسة الخصوصية",
      license: "الترخيص",
      contact: "تواصل معنا",
      rights: "جميع الحقوق محفوظة.",
    },
    en: {
      about: "About",
      privacy: "Privacy Policy",
      license: "Licensing",
      contact: "Contact",
      rights: "All Rights Reserved.",
    },
  }[language];

  return (
    <footer
      dir={isArabic ? "rtl" : "ltr"}
      className="bg-gray-800  shadow-sm text-center"
      data-aos="fade-up"
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* الشعار */}
          <a
            href="#"
            className={`flex items-center mb-4 sm:mb-0 space-x-3 ${
              isArabic ? "space-x-reverse" : ""
            }`}
          >
            <Image
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Matillda
            </span>
          </a>

          {/* الروابط */}
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                {t.about}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                {t.privacy}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                {t.license}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                {t.contact}
              </a>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/* الحقوق */}
        <span className="block text-sm text-white sm:text-center ">
          © {new Date().getFullYear()}{" "}
          <a href="#" className="hover:underline text-white">
            Matillda
          </a>{" "}
          {t.rights}
        </span>
      </div>
    </footer>
  );
}
