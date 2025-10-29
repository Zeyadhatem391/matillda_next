import Image from "next/image";

type Language = "ar" | "en";

interface AboutProps {
  language: Language;
  titleAr: string;
  titleEn: string;
  textAr: string;
  textEn: string;
  image: string;
}

export default function About({
  language,
  titleAr,
  titleEn,
  textAr,
  textEn,
  image,
}: AboutProps) {
  const isArabic = language === "ar";
  const title = isArabic ? titleAr : titleEn;
  const text = isArabic ? textAr : textEn;

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="w-full bg-gray-50 text-gray-800"
    >
      {/* 🟦 Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* النص */}
          <div
            className={`flex-1 text-center md:text-start ${
              isArabic ? "md:order-2" : ""
            }`}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
              {title}
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-blue-100">
              {text}
            </p>
          </div>

          {/* الصورة */}
          <div
            className={`flex-1 flex justify-center ${
              isArabic ? "md:order-1" : ""
            }`}
          >
            <Image
              src={image}
              alt={title}
              width={500}
              height={400}
              className="rounded-2xl shadow-2xl object-cover w-full max-w-sm sm:max-w-md hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}




