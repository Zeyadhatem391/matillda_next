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
    <>
      <div className=" bg-gray-100">
        <div className="flex flex-col items-center justify-center pt-10 ">
          {language === "ar" ? (
            <p className="text-4xl font-bold text-blue-800">خدماتنا</p>
          ) : (
            <p className="text-4xl font-bold text-blue-800">Services</p>
          )}

          <div className="mt-3">
            <div className="w-28 h-1 bg-blue-600 mx-auto mb-1.5"></div>
            <div className="w-36 h-1 bg-blue-600 mx-auto"></div>
          </div>
        </div>

        <div className="py-20 w-full flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative w-64 h-64 rounded-xl overflow-hidden group cursor-pointer shadow-lg"
              >
                {/* image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* filter */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500"></div>

                {/*  Text */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold text-center px-3">
                  {service.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
