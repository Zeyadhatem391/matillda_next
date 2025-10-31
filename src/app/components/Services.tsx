"use client";
import Image from "next/image";

type Language = "ar" | "en";

interface ServicesProps {
  language: Language;
}

export default function Services({ language }: ServicesProps) {
  const services =
    language === "ar"
      ? [
          { title: "تصميم المواقع", image: "/images/Services/web.jpg" },
          { title: "تطبيقات الموبايل", image: "/images/Services/mobile.jpg" },
          { title: "برامج سطح المكتب", image: "/images/Services/desktop.jpg" },
          {
            title: "خدمات قواعد البيانات والتحليلات",
            image: "/images/Services/database.jpg",
          },
          {
            title: "التحول الرقمي للشركات الصغيرة والمتوسطة",
            image: "/images/Services/digital.jpg",
          },
          {
            title: "تصميم واجهات وتجربة المستخدم",
            image: "/images/Services/uiux.jpg",
          },
        ]
      : [
          { title: "Web Development", image: "/images/Services/web.jpg" },
          { title: "Mobile Apps", image: "/images/Services/mobile.jpg" },
          { title: "Desktop Software", image: "/images/Services/desktop.jpg" },
          {
            title: "Database & Analytics Services",
            image: "/images/Services/database.jpg",
          },
          {
            title: "Digital Transformation for SMEs",
            image: "/images/Services/digital.jpg",
          },
          { title: "UI / UX Design", image: "/images/Services/uiux.jpg" },
        ];

  return (
    <section className=" bg-gray-900  py-24 px-6 md:px-12 text-white">
      {/* العنوان */}
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 pb-3 tracking-wide">
          {language === "ar" ? "خدماتنا" : "Our Services"}
        </h2>
        <div className="flex flex-col items-center gap-1">
          <div className="w-24 h-1 bg-amber-500 rounded"></div>
          <div className="w-40 h-1 bg-blue-600 rounded"></div>
        </div>
      </div>

      {/* الكروت */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center"
        data-aos="fade-up"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="relative w-72 h-72 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-500 group bg-gray-700"
          >
            {/* الصورة */}
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
            />

            {/* فلتر */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/50 transition-all duration-500"></div>

            {/* النص */}
            <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
              <h3 className="text-white text-xl md:text-2xl font-semibold drop-shadow-lg">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
