import Image from "next/image";

type Language = "ar" | "en";

interface TechLogo {
  src: string;
  name: string;
}

interface TechnoSectionProps {
  language: Language;
  title: string;
  description: string;
  logos: TechLogo[];
}


export default function TechnoSection({
  language,
  title,
  description,
  logos,
}: TechnoSectionProps) {
  return (
    <section
      dir={language === "ar" ? "rtl" : "ltr"}
      className="py-20 bg-gradient-to-b from-gray-100 to-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* العنوان */}
        <h3 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4">
          {title}
        </h3>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          {description}
        </p>

        {/* الشعارات */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
          {logos.map((tech, i) => (
            <div
              key={i}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 flex flex-col items-center"
            >
              <Image
                src={tech.src}
                alt={tech.name}
                width={80}
                height={80}
                className="object-contain "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
