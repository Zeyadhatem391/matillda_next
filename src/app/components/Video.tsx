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
    <section className="flex items-center justify-center px-6 md:px-20 py-16 bg-gray-100"   data-aos="fade-up">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
    
        <div
          className={`md:w-2/5 w-full flex flex-col justify-center text-gray-800 ${
            language === "ar" ? "text-right md:order-2" : "text-left"
          }`}
        >
          <div className="bg-white border border-gray-300 shadow-lg rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-4xl font-extrabold mb-6 tracking-wide text-center md:text-inherit text-amber-700">
              {content.title}
            </h2>

            <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-700 text-center md:text-inherit">
              {content.description}
            </p>
          </div>
        </div>

  
        <div className={`md:w-3/5 w-full ${language === "ar" ? "md:order-1" : ""}`}>
          <iframe
            className="w-full h-96 rounded-xl shadow-xl"
            src="https://www.youtube.com/embed/hefS8YOdW2k?si=YRRi2lF2GloWT0ml"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
