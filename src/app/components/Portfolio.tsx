import Image from "next/image";

type Language = "ar" | "en";

interface PortfolioProps {
  language: Language;
}

export default function Portfolio({ language }: PortfolioProps) {
  const portfolioItems =
    language === "ar"
      ? [
          {
            title: "تطوير المواقع",
            image: "/images/Services/web.jpg",
            description:
              "نقوم بإنشاء مواقع سريعة، متجاوبة وجذابة باستخدام أحدث التقنيات مثل React وNext.js. هدفنا هو تقديم تصميمات سهلة الاستخدام تُبرز عملك على الإنترنت بكفاءة.",
            button: "عرض المشاريع",
          },
          {
            title: "تطبيقات الموبايل",
            image: "/images/Services/mobile.jpg",
            description:
              "نطوّر تطبيقات موبايل بأداء سلس وتجربة مستخدم مميزة باستخدام Flutter وReact Native. سواء iOS أو Android، نساعدك في الوصول إلى جمهورك في أي مكان.",
            button: "استكشاف التطبيقات",
          },
          {
            title: "برامج سطح المكتب",
            image: "/images/Services/desktop.jpg",
            description:
              "نقدم حلول سطح المكتب الموثوقة والقوية للشركات، من أنظمة الإدارة إلى لوحات التحليل — لتحقيق الأداء والكفاءة العالية.",
            button: "عرض التفاصيل",
          },
          {
            title: "خدمات قواعد البيانات والتحليلات",
            image: "/images/Services/database.jpg",
            description:
              "نصمم قواعد بيانات آمنة ومحسّنة مع أدوات تحليل قوية لمساعدتك على اتخاذ قرارات مبنية على البيانات وتحسين الأداء.",
            button: "اكتشف المزيد",
          },
          {
            title: "التحول الرقمي للشركات الصغيرة والمتوسطة",
            image: "/images/Services/digital.jpg",
            description:
              "نساعد الشركات الصغيرة والمتوسطة على تبني التكنولوجيا بفعالية — من الأتمتة إلى بناء منظومات رقمية متكاملة.",
            button: "تعرف أكثر",
          },
        ]
      : [
          {
            title: "Web Development",
            image: "/images/Services/web.jpg",
            description:
              "We create fast, responsive, and visually stunning websites using modern technologies like React and Next.js. Our goal is to deliver user-friendly designs that bring your business online effectively.",
            button: "View Projects",
          },
          {
            title: "Mobile Apps",
            image: "/images/Services/mobile.jpg",
            description:
              "We build mobile apps with smooth performance and great UX using Flutter and React Native. Whether iOS or Android, we help you reach your users anywhere.",
            button: "Explore Apps",
          },
          {
            title: "Desktop Software",
            image: "/images/Services/desktop.jpg",
            description:
              "Our desktop solutions provide reliability and power for businesses. From management systems to analytics dashboards — we deliver performance and efficiency.",
            button: "See Details",
          },
          {
            title: "Database & Analytics Services",
            image: "/images/Services/database.jpg",
            description:
              "We design secure and optimized databases with powerful analytics tools to help you make data-driven decisions and improve performance across your systems.",
            button: "Discover More",
          },
          {
            title: "Digital Transformation for SMEs",
            image: "/images/Services/digital.jpg",
            description:
              "We empower small and medium businesses to embrace technology. From automating operations to building complete digital ecosystems, we help you grow smarter.",
            button: "Learn More",
          },
        ];

  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-4xl font-bold text-blue-800">
          {language === "ar" ? "أعمالنا" : "Portfolio"}
        </h2>
        <div className="mt-3">
          <div className="w-28 h-1 bg-blue-600 mx-auto mb-1.5"></div>
          <div className="w-36 h-1 bg-blue-600 mx-auto"></div>
        </div>
      </div>

      <div className="flex flex-col gap-20 px-6 md:px-16">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200`}
          >
            {/* الصورة */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative w-full h-72 md:h-96">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover border-b-4 md:border-b-0 md:border-r-4 border-blue-700"
                />
              </div>
            </div>

            {/* النص */}
            <div
              className={`w-full md:w-1/2 p-8 ${
                language === "ar"
                  ? "text-right md:pr-10 font-medium"
                  : "text-left md:pl-10"
              } text-center md:text-start`}
            >
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {item.description}
              </p>
              <button className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition cursor-pointer">
                {item.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
