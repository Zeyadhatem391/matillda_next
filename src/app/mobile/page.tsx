"use client";
import { useLanguage } from "../context/LanguageContext";
import About from "../ServiceComponents/About";
import MissionVision from "../ServiceComponents/MissionVision";
import TechnoSection from "../ServiceComponents/TechnoSection";
import Process from "../ServiceComponents/Process";
import ContactButton from "../ServiceComponents/ContactButton";

export default function Mobile() {
  const { language } = useLanguage();

  return (
    <>
      <About
        language={language}
        titleAr="تطبيقات الجوال"
        titleEn="Mobile Apps"
        textAr="نطوّر تطبيقات جوّالة مبتكرة وسهلة الاستخدام تساعدك على الوصول إلى عملائك في أي وقت ومن أي مكان. من خلال تصميم واجهات حديثة وتجربة سلسة، نحول أفكارك إلى تطبيقات ناجحة تعمل على Android وiOS."
        textEn="We develop innovative, user-friendly mobile apps that help you reach your customers anytime, anywhere. With modern UI design and seamless UX, we turn your ideas into successful apps for both Android and iOS."
        image="/images/mobile.jpg"
      />

      <MissionVision
        language={language}
        items={
          language === "ar"
            ? [
                {
                  title: "مهمتنا",
                  text: "تقديم حلول تطبيقات جوّالة متكاملة تجمع بين الأداء العالي والتصميم العصري.",
                },
                {
                  title: "رؤيتنا",
                  text: "أن نكون شركاءك في بناء تجربة رقمية مميزة ترتقي بعلامتك التجارية.",
                },
              ]
            : [
                {
                  title: "Our Mission",
                  text: "Deliver complete mobile app solutions combining high performance and modern design.",
                },
                {
                  title: "Our Vision",
                  text: "To be your trusted partner in building exceptional digital experiences that elevate your brand.",
                },
              ]
        }
      />

      <TechnoSection
        language={language}
        title={
          language === "ar" ? "التقنيات التي نستخدمها" : "Our Technologies"
        }
        description={
          language === "ar"
            ? "نستخدم أحدث التقنيات لتطوير تطبيقات جوّالة عالية الجودة وسريعة الأداء."
            : "We use the latest technologies to build high-quality, fast-performing mobile apps."
        }
        logos={[
          { src: "/images/Technologies/flutter.png", name: "Flutter" },
          { src: "/images/Technologies/react.png", name: "React Native" },
          { src: "/images/Technologies/swift.png", name: "Swift" },
          { src: "/images/Technologies/kotlin.png", name: "Kotlin" },
          { src: "/images/Technologies/firebase.png", name: "Firebase" },
          { src: "/images/Technologies/laravel.png", name: "Laravel API" },
        ]}
      />

      <Process
        language={language}
        steps={
          language === "ar"
            ? [
                {
                  number: 1,
                  title: "تحليل الفكرة",
                  text: "نحلل احتياجاتك ونخطط لتطبيق متكامل يناسب رؤيتك.",
                },
                {
                  number: 2,
                  title: "التصميم",
                  text: "نصمم واجهات جذابة وسهلة الاستخدام.",
                },
                {
                  number: 3,
                  title: "التطوير",
                  text: "نطوّر التطبيق بدقة مع تكامل تام مع الـ API.",
                },
                {
                  number: 4,
                  title: "الإطلاق",
                  text: "نختبر التطبيق ونطلقه على المتاجر الرسمية.",
                },
              ]
            : [
                {
                  number: 1,
                  title: "Idea Analysis",
                  text: "We analyze your needs and plan a complete mobile solution.",
                },
                {
                  number: 2,
                  title: "Design",
                  text: "We design engaging and easy-to-use interfaces.",
                },
                {
                  number: 3,
                  title: "Development",
                  text: "We build the app with precise API integration.",
                },
                {
                  number: 4,
                  title: "Launch",
                  text: "We test and publish the app on official stores.",
                },
              ]
        }
      />

      <ContactButton
        language={language}
        title={
          language === "ar"
            ? "هل تحتاج تطبيق جوّال احترافي؟"
            : "Need a professional mobile app?"
        }
        text={
          language === "ar"
            ? "نصمم تطبيقات ذكية تساعدك على التواصل مع عملائك بسهولة."
            : "We design smart apps that help you connect with your customers effortlessly."
        }
        buttonText={language === "ar" ? "ابدأ الآن" : "Get Started"}
      />
    </>
  );
}
