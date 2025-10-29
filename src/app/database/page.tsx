"use client";
import { useLanguage } from "../context/LanguageContext";
import About from "../ServiceComponents/About";
import MissionVision from "../ServiceComponents/MissionVision";
import TechnoSection from "../ServiceComponents/TechnoSection";
import Process from "../ServiceComponents/Process";
import ContactButton from "../ServiceComponents/ContactButton";

export default function Database() {
  const { language } = useLanguage();

  return (
    <>
      <About
        language={language}
        titleAr="قواعد البيانات وخدمات التحليل"
        titleEn="Database & Analytics Services"
        textAr="نقدّم حلول قواعد بيانات وتحليلات متقدمة تساعدك على اتخاذ قرارات مبنية على البيانات. من تصميم البنية إلى إعداد التقارير ولوحات التحكم التفاعلية، نوفّر لك نظامًا متكاملًا لتحليل أعمالك."
        textEn="We provide advanced database and analytics solutions that help you make data-driven decisions. From database architecture to interactive dashboards and reporting systems, we deliver full-scale business intelligence."
        image="/images/database.jpg"
      />

      <MissionVision
        language={language}
        items={
          language === "ar"
            ? [
                {
                  title: "مهمتنا",
                  text: "تحويل البيانات إلى قيمة حقيقية من خلال إدارة وتحليل ذكي يقدّم رؤية واضحة للأداء.",
                },
                {
                  title: "رؤيتنا",
                  text: "أن نساعد المؤسسات على بناء قرارات استراتيجية مدعومة بالبيانات الدقيقة والمحدثة.",
                },
              ]
            : [
                {
                  title: "Our Mission",
                  text: "Transform data into real value through intelligent management and analytics that provide a clear vision of performance.",
                },
                {
                  title: "Our Vision",
                  text: "To help organizations make strategic, data-driven decisions with accurate, up-to-date insights.",
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
            ? "نستخدم تقنيات موثوقة لبناء قواعد بيانات قوية وتحليل بيانات ذكي لدعم قراراتك."
            : "We use trusted technologies to build robust databases and smart analytics to support your decisions."
        }
        logos={[
          { src: "/images/Technologies/mysql.png", name: "MySQL" },
          { src: "/images/Technologies/postgresql.png", name: "PostgreSQL" },
          { src: "/images/Technologies/mongodb.png", name: "MongoDB" },
          { src: "/images/Technologies/powerbi.png", name: "Power BI" },
          { src: "/images/Technologies/python.png", name: "Python" },
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
                  title: "تحليل البيانات",
                  text: "نراجع مصادر البيانات ونحدد أهداف التحليل المناسبة.",
                },
                {
                  number: 2,
                  title: "تصميم قاعدة البيانات",
                  text: "نبني هيكل قاعدة بيانات متكامل وقابل للتوسع.",
                },
                {
                  number: 3,
                  title: "تحليل متقدم",
                  text: "نطبّق خوارزميات وتقنيات لتحويل البيانات إلى رؤى واضحة.",
                },
                {
                  number: 4,
                  title: "التقارير ولوحات التحكم",
                  text: "نقدّم تقارير تفاعلية ولوحات بيانات في الوقت الحقيقي.",
                },
              ]
            : [
                {
                  number: 1,
                  title: "Data Analysis",
                  text: "We review your data sources and define analysis goals.",
                },
                {
                  number: 2,
                  title: "Database Design",
                  text: "We build scalable and reliable database architectures.",
                },
                {
                  number: 3,
                  title: "Advanced Analytics",
                  text: "We apply algorithms to turn raw data into actionable insights.",
                },
                {
                  number: 4,
                  title: "Reports & Dashboards",
                  text: "We deliver interactive reports and real-time dashboards.",
                },
              ]
        }
      />

      <ContactButton
        language={language}
        title={
          language === "ar"
            ? "هل ترغب بتحليل بيانات أعمالك؟"
            : "Want to analyze your business data?"
        }
        text={
          language === "ar"
            ? "نحوّل بياناتك إلى قرارات فعّالة تدعم نجاحك."
            : "We transform your data into powerful decisions that drive success."
        }
        buttonText={language === "ar" ? "ابدأ الآن" : "Get Started"}
      />
    </>
  );
}
