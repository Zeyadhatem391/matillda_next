"use client";
import { useLanguage } from "../context/LanguageContext";
import About from "../ServiceComponents/About";
import MissionVision from "../ServiceComponents/MissionVision";
import TechnoSection from "../ServiceComponents/TechnoSection";
import Process from "../ServiceComponents/Process";
import ContactButton from "../ServiceComponents/ContactButton";

export default function Desktop() {
  const { language } = useLanguage();

  return (
    <>
      <About
        language={language}
        titleAr="برامج سطح المكتب"
        titleEn="Desktop Software"
        textAr="نطوّر برمجيات سطح مكتب مخصصة تناسب احتياجاتك التشغيلية وتزيد من إنتاجية عملك. من برامج إدارة الموارد إلى أنظمة المبيعات، نقدم حلولًا متكاملة وسريعة الأداء."
        textEn="We build custom desktop software tailored to your operational needs, boosting your productivity. From resource management tools to POS systems, we deliver complete and high-performance solutions."
        image="/images/desktop.jpg"
      />

      <MissionVision
        language={language}
        items={
          language === "ar"
            ? [
                {
                  title: "مهمتنا",
                  text: "تقديم برمجيات قوية وسهلة الإدارة تدعم نمو أعمالك.",
                },
                {
                  title: "رؤيتنا",
                  text: "أن نصبح المطوّر المفضل لتطبيقات سطح المكتب في السوق المحلي والإقليمي.",
                },
              ]
            : [
                {
                  title: "Our Mission",
                  text: "Provide reliable, easy-to-manage software that supports your business growth.",
                },
                {
                  title: "Our Vision",
                  text: "To become the preferred desktop app developer in the local and regional markets.",
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
            ? "نستخدم تقنيات قوية لبناء تطبيقات مستقرة وسريعة الأداء."
            : "We use robust technologies to build stable, high-performance desktop applications."
        }
        logos={[
          { src: "/images/Technologies/csharp.png", name: "C#" },
          { src: "/images/Technologies/dotnet.png", name: ".NET" },
          { src: "/images/Technologies/electron.png", name: "Electron.js" },
          { src: "/images/Technologies/java.png", name: "Java" },
          { src: "/images/Technologies/mysql.png", name: "MySQL" },
        ]}
      />

      <Process
        language={language}
        steps={
          language === "ar"
            ? [
                {
                  number: 1,
                  title: "تحليل الاحتياجات",
                  text: "ندرس طبيعة عملك لتصميم النظام المثالي لك.",
                },
                {
                  number: 2,
                  title: "تصميم الواجهة",
                  text: "نصمم واجهات سهلة الاستخدام وعصرية.",
                },
                {
                  number: 3,
                  title: "التطوير والاختبار",
                  text: "نبرمج باحترافية ونختبر لضمان الأداء والجودة.",
                },
                {
                  number: 4,
                  title: "التسليم والتدريب",
                  text: "نقدّم لك النظام مع تدريب كامل على الاستخدام.",
                },
              ]
            : [
                {
                  number: 1,
                  title: "Needs Analysis",
                  text: "We analyze your operations to design the perfect system.",
                },
                {
                  number: 2,
                  title: "UI Design",
                  text: "We create modern and intuitive user interfaces.",
                },
                {
                  number: 3,
                  title: "Development & Testing",
                  text: "We code professionally and test for performance and quality.",
                },
                {
                  number: 4,
                  title: "Delivery & Training",
                  text: "We deliver the software with full usage training.",
                },
              ]
        }
      />

      <ContactButton
        language={language}
        title={
          language === "ar"
            ? "هل تحتاج نظام سطح مكتب مخصص؟"
            : "Need a custom desktop system?"
        }
        text={
          language === "ar"
            ? "نقدّم حلول برمجية ذكية تسهّل إدارة عملك."
            : "We deliver smart software solutions to simplify your business operations."
        }
        buttonText={language === "ar" ? "اطلب الآن" : "Order Now"}
      />
    </>
  );
}
