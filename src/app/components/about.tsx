interface AboutProps {
  language: string;
}

export default function About({ language }: AboutProps) {
  const aboutSections =
    language === "ar"
      ? [
          {
            title: "من نحن",
            description:
              "نحن شركة متخصصة في تطوير البرمجيات وتقديم الحلول الرقمية المبتكرة للمؤسسات والأفراد. نسعى لتقديم تجربة رقمية متكاملة تساعد عملاءنا على تحقيق أهدافهم بكفاءة وجودة عالية.",
            image: "/images/about/about1.jpg",
          },
          {
            title: "رؤيتنا",
            description:
              "أن نكون من رواد التحول الرقمي في المنطقة من خلال تقديم حلول ذكية تواكب تطور التكنولوجيا وتلبي احتياجات السوق المتغيرة.",
            image: "/images/about/vision.jpg",
          },
          {
            title: "مهمتنا",
            description:
              "تقديم خدمات عالية الجودة في مجالات تطوير المواقع، تطبيقات الموبايل، وتحليل البيانات لضمان أفضل النتائج لعملائنا.",
            image: "/images/about/mission.jpg",
          },
          {
            title: "قيمنا",
            description:
              "الابتكار، الشفافية، الالتزام، والتعاون هي القيم التي تقود كل ما نقوم به لتحقيق النجاح المشترك.",
            image: "/images/about/values.jpg",
          },
        ]
      : [
          {
            title: "Who We Are",
            description:
              "We are a software development company providing innovative digital solutions for businesses and individuals. Our goal is to deliver complete digital experiences that help our clients achieve success efficiently.",
            image: "/images/about/about1.jpg",
          },
          {
            title: "Our Vision",
            description:
              "To be one of the leading forces in digital transformation by offering smart solutions that adapt to evolving technologies and market needs.",
            image: "/images/about/vision.jpg",
          },
          {
            title: "Our Mission",
            description:
              "Delivering high-quality services in web development, mobile apps, and data analytics to ensure the best outcomes for our clients.",
            image: "/images/about/mission.jpg",
          },
          {
            title: "Our Values",
            description:
              "Innovation, transparency, commitment, and collaboration guide everything we do to achieve mutual success.",
            image: "/images/about/values.jpg",
          },
        ];

  return (
    <section className="about-section py-20 px-8 md:px-20">
      <h2 className="text-center text-4xl font-bold text-blue-800 mb-16">
        {language === "ar" ? "من نحن" : "About Us"}
      </h2>

      <div className="flex flex-col gap-20">
        {aboutSections.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full md:w-1/2 rounded-2xl shadow-lg"
            />
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
