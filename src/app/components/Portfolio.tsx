"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";

type Language = "ar" | "en";

interface PortfolioProps {
  language: Language;
}

export default function Portfolio({ language }: PortfolioProps) {
  const [category, setCategory] = useState<"web" | "mobile">("web");

  const webProjects = [
    {
      title: "Software Company Website",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Educational Website",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "E-Commerce Platform",
      image:
        "https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Corporate Landing Page",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Portfolio Website",
      image:
        "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Real Estate Website",
      image:
        "https://images.unsplash.com/photo-1505691723518-36a0f673b41f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Travel Agency Site",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Restaurant Website",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Technology Blog",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const mobileProjects = [
    {
      title: "E-Commerce App",
      image:
        "https://images.unsplash.com/photo-1606813902916-d0464bf2b1f6?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Booking App",
      image:
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Learning App",
      image:
        "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Delivery App",
      image:
        "https://images.unsplash.com/photo-1611095973518-76f9f642d6fc?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Health Tracker",
      image:
        "https://images.unsplash.com/photo-1587502536263-7cf5f1a67f5b?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Chat App",
      image:
        "https://images.unsplash.com/photo-1603791452906-c86f3d989201?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Finance App",
      image:
        "https://images.unsplash.com/photo-1621506076597-b10fdf90d2a6?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "News App",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Social Media App",
      image:
        "https://images.unsplash.com/photo-1603791452906-c86f3d989201?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const items = category === "web" ? webProjects : mobileProjects;

  return (
    <section className="w-full  bg-gray-900 py-20">
      {/* العنوان */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 pb-3">
          {language === "ar" ? "أعمالنا" : "Our Projects"}
        </h2>
        <div className="relative z-10 flex flex-col items-center gap-1 mb-10">
          <div className="w-24 h-1 bg-amber-500 rounded"></div>
          <div className="w-40 h-1 bg-blue-600 rounded"></div>
        </div>
        <p className="text-gray-400 mt-4 text-lg">
          {language === "ar"
            ? "تصفح مشاريعنا الرقمية حسب النوع"
            : "Browse our digital projects by category"}
        </p>
      </div>

      {/* أزرار */}
      <div className="flex justify-center gap-6 mb-10">
        <button
          onClick={() => setCategory("web")}
          className={`px-6 py-2 rounded-full font-semibold transition ${
            category === "web"
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          {language === "ar" ? "مواقع الويب" : "Web Projects"}
        </button>
        <button
          onClick={() => setCategory("mobile")}
          className={`px-6 py-2 rounded-full font-semibold transition ${
            category === "mobile"
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          {language === "ar" ? "تطبيقات الموبايل" : "Mobile Apps"}
        </button>
      </div>

      {/* السلايدر */}
      <div className="w-full max-w-7xl mx-auto">
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          loop // ✅ تشغيل Loop
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 300,
            modifier: 1.5,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation
          modules={[EffectCoverflow, Autoplay, Navigation]}
          className="portfolio-swiper"
        >
          {items.map((item, index) => (
            <SwiperSlide
              key={index}
              className=" rounded-2xl  overflow-hidden max-w-md transition-transform duration-500"
            >
              {category === "mobile" ? (
                <div className="relative w-[420px] h-[460px] flex items-center justify-center">
                  <div className="relative w-[230px] h-[470px] bg-black rounded-[40px] border-4 border-gray-700 overflow-hidden ">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover rounded-[36px] transition-transform duration-500"
                    />
                  </div>
                </div>
              ) : (
                <div className="relative w-[700px] h-[460px] flex items-center justify-center">
                  <div className="relative w-full h-full overflow-hidden rounded-2xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500"
                    />
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
