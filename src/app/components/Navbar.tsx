"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

import { useLanguage } from "../context/LanguageContext";


export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  const [openDropdown, setOpenDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleDropdown = () => {
    setOpenDropdown((prev) => !prev);
  };

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const links =
    language === "ar"
      ? [
          { text: "الرئيسية", href: "/" },
          {
            text: "خدماتنا",
            href: "#",
            dropdown: [
              { text: "تصميم المواقع", href: "/web" },
              { text: "تطبيقات الموبايل", href: "/mobile" },
              { text: "برامج سطح المكتب", href: "/desktop" },
              { text: "خدمات قواعد البيانات والتحليلات", href: "/database" },
              { text: "التحول الرقمي للشركات الصغيرة والمتوسطة", href: "/digital" },
            ],
          },
          { text: "المشاريع", href: "#" },
          { text: "من نحن", href: "#" },
          { text: "تواصل معنا", href: "/contact" },
        ]
      : [
          { text: "Home", href: "/" },
          {
            text: "Services",
            href: "#",
            dropdown: [
              { text: "Web Development", href: "/web" },
              { text: "Mobile Apps", href: "/mobile" },
              { text: "Desktop Software", href: "/desktop" },
              { text: "Database & Analytics Services", href: "/database" },
              { text: "Digital Transformation for SMEs", href: "/digital" },
            ],
          },
          { text: "Projects", href: "#" },
          { text: "About", href: "#" },
          { text: "Contact", href: "/contact" },
        ];

  return (
    <>
     
      <nav
        className="flex fixed top-0 w-full h-20 items-center justify-between  px-8 transition-all duration-500 z-50 bg-gray-800"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        {/* logo */}
        <div className="logo flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={200}
            height={80}
            priority
          />
        </div>

        {/* links */}
        <ul
          className={` text-white text-lg font-medium transition-all duration-500 hidden lg:flex ${
            language === "ar" ? "flex-row-reverse mr-96" : "flex-row ml-96"
          }`}
        >
          {links.map((link, index) => (
            <li key={index} className="relative group">
              {link.dropdown ? (
                <>
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center gap-2 hover:border-b-2 border-red-600 px-4 pb-1  rounded-xl transition-all"
                  >
                    {link.text}
                    <FaChevronDown
                      className={`transition-transform duration-300  ${
                        openDropdown ? "rotate-180" : ""
                      }`}
                      size={12}
                    />
                  </button>

                  {openDropdown && (
                    <ul
                      className={`absolute ${
                        language === "ar" ? "right-0" : "left-0"
                      } mt-2 bg-gray-800 rounded-lg shadow-lg py-2 w-48`}
                      onMouseLeave={() => setOpenDropdown(false)}
                    >
                      {link.dropdown.map((item, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={item.href}
                            className="block px-4 py-2 hover:bg-gray-700 text-white"
                          >
                            {item.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a
                  href={link.href}
                  className="hover:border-b-2 border-red-600 px-4 pb-1 rounded-xl transition-all"
                >
                  {link.text}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* language button */}
        <button
          onClick={toggleLanguage}
          className="bg-green-800 px-4 py-2 rounded-lg text-white text-lg hover:bg-green-700 transition-all hidden lg:block"
        >
          {language === "ar" ? "English" : "العربية"}
        </button>

        <button onClick={toggleMenu} className="text-white text-2xl lg:hidden">
          <FaBars />
        </button>
      </nav>

      {/*  aside menu */}
      <aside
        className={`fixed top-0 ${
          language === "ar" ? "right-0" : "left-0"
        } h-screen w-68 bg-gray-900 text-white py-6 px-4 z-50 transition-transform duration-500 overflow-y-auto ${
          showMenu
            ? "translate-x-0"
            : language === "ar"
            ? "translate-x-full"
            : "-translate-x-full"
        } lg:hidden`}
      >
        {/* close menu */}
        <div className="flex flex-col justify-around">
          <button
            onClick={() => setShowMenu(false)}
            className="text-white text-3xl hover:text-red-500 transition-all"
          >
            <FaTimes />
          </button>

          <Image
            src="/images/logo.png"
            alt="logo"
            width={200}
            height={80}
            priority
          />

          {/* links */}
          <ul className=" text-lg font-medium">
            {links.map((link, index) => (
              <li key={index}>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={toggleDropdown}
                      className="flex items-center justify-between w-full hover:bg-gray-700 mb-8 px-4 py-2 rounded-lg transition-all"
                    >
                      <span>{link.text}</span>
                      <FaChevronDown
                        className={`transition-transform duration-300 ${
                          openDropdown ? "rotate-180" : ""
                        }`}
                        size={12}
                      />
                    </button>

                    {openDropdown && (
                      <ul className="mt-2 bg-gray-800 rounded-lg shadow-lg py-2 w-full">
                        {link.dropdown.map((item, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={item.href}
                              className="block px-6 py-2 hover:bg-gray-700 text-white"
                            >
                              {item.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="block hover:bg-gray-700 px-4 py-2 rounded-lg transition-al mb-8"
                  >
                    {link.text}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Language */}
          <button
            onClick={toggleLanguage}
            className="w-full bg-green-800 px-4 py-2 rounded-lg text-white text-lg hover:bg-green-700 transition-all mt-16"
          >
            {language === "ar" ? "English" : "العربية"}
          </button>
        </div>

    
      </aside>
      
    </>
  );
}
