type Language = "ar" | "en";

interface VideoProps {
  language: Language;
}

const videoText = {
  ar: {
    title: "Matillda",
    description:
      "نحن نقدم حلول ويب متكاملة تساعدك على تطوير عملك وتحقيق أهدافك من خلال تصميمات حديثة وتجربة مستخدم متميزة.",
  },
  en: {
    title: "Matillda",
    description:
      "We provide complete web solutions that help you grow your business and achieve your goals through modern design and great user experience.",
  },
};

export default function Video({ language }: VideoProps) {
  const content = videoText[language];

  return (
    <section
      className="flex items-center justify-center px-6 md:px-20 py-20 bg-gray-900 text-gray-100"
      data-aos="fade-up"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        {/* النص */}
        <div
          className={`md:w-2/5 w-full flex flex-col justify-center ${
            language === "ar" ? "md:order-2 text-right" : "text-left"
          }`}
        >
          <div className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
            <h2 className="text-4xl font-extrabold mb-6 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 text-center md:text-inherit">
              {content.title}
            </h2>

            <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-300 text-center md:text-inherit">
              {content.description}
            </p>
          </div>
        </div>

        {/* الفيديو */}
        <div
          className={`md:w-3/5 w-full ${
            language === "ar" ? "md:order-1" : ""
          }`}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <iframe
              className="relative w-full h-96 rounded-xl shadow-2xl border border-gray-700"
              src="https://www.youtube.com/embed/hefS8YOdW2k?si=YRRi2lF2GloWT0ml"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
