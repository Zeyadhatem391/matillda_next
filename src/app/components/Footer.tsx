"use client";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
export default function Footer() {
  const { language } = useLanguage();

  const isArabic = language === "ar";

  const t = {
    ar: {
      resources: "الموارد",
      follow: "تابعنا",
      legal: "القانوني",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
      rights: "جميع الحقوق محفوظة.",
    },
    en: {
      resources: "Resources",
      follow: "Follow Us",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      rights: "All Rights Reserved.",
    },
  }[language];

  return (
    <footer
      dir={isArabic ? "rtl" : "ltr"}
      className="bg-gray-900 text-gray-400 py-10 px-6 sm:px-10"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-700 pb-6">
          <div className=" mb-4 sm:mb-0">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl">
            <a
              href="#"
              className="hover:text-blue-500 transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-pink-500 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-green-500 transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="#"
              className="hover:text-gray-200 transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="hover:text-sky-400 transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10 text-center sm:text-start">
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 uppercase">
              {t.resources}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Technologies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold mb-4 uppercase">
              {t.follow}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold mb-4 uppercase">
              {t.legal}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  {t.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  {t.terms}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-white">Matillda</span>. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
