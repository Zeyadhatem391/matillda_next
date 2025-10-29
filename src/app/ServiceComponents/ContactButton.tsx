type Language = "ar" | "en";

interface ContactProps {
  language: Language;
  title: string;
  text: string;
  buttonText: string;
}

export default function ContactButton({
  language,
  title,
  text,
  buttonText,
}: ContactProps) {
  const isArabic = language === "ar";

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 text-center px-6"
    >
      <div className="max-w-3xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">{title}</h3>
        <p className="text-blue-100 text-lg mb-8 leading-relaxed">{text}</p>
        <button className="bg-white text-blue-800 font-semibold text-lg px-10 py-3 rounded-full shadow-md hover:bg-blue-50 hover:scale-105 transition-transform duration-300">
          {buttonText}
        </button>
      </div>
    </section>
  );
}
