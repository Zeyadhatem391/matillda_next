"use client";
import { useLanguage } from "../context/LanguageContext";
import About from "../ServiceComponents/About";
import MissionVision from "../ServiceComponents/MissionVision";
import TechnoSection from "../ServiceComponents/TechnoSection";
import Process from "../ServiceComponents/Process";
import ContactButton from "../ServiceComponents/ContactButton";

export default function Web() {
  const { language } = useLanguage();
  return (
    <>
      <About
        language={language}
        titleAr="من نحن"
        titleEn="About Us"
        textAr="نساعد الأفراد والشركات..."
        textEn="We help individuals and businesses..."
        image="/images/about-hero.jpg"
      />
      {/* @@@ =========================== @@  */}
      <MissionVision
        language={language}
        items={
          language === "ar"
            ? [
                {
                  title: "مهمتنا",
                  text: "مهمتنا هي تمكين الأفراد والشركات من تحقيق النجاح الرقمي عبر حلول مبتكرة وسهلة الاستخدام. نؤمن بأن التقنية هي وسيلة لتبسيط الحياة وتسريع النمو وتحقيق التأثير الحقيقي.",
                },
                {
                  title: "رؤيتنا",
                  text: "رؤيتنا أن نكون الشريك التقني الأول الذي يثق به الجميع — من الشركات الناشئة إلى المؤسسات الكبرى — لنصنع مستقبلًا رقميًا أكثر كفاءة وإبداعًا.",
                },
              ]
            : [
                {
                  title: "Our Mission",
                  text: "Our mission is to empower people and businesses to succeed digitally through smart, user-friendly solutions. We believe technology should simplify life, accelerate growth, and drive real impact.",
                },
                {
                  title: "Our Vision",
                  text: "Our vision is to become the trusted technology partner for everyone — from startups to enterprises — building a digital future that’s more efficient, creative, and inspiring.",
                },
              ]
        }
      />
      {/* @@@ =========================== @@  */}
      <TechnoSection
        language={language}
        title={
          language === "ar" ? "التقنيات التي نستخدمها" : "Our Technologies"
        }
        description={
          language === "ar"
            ? "نستخدم أحدث التقنيات لضمان أداء عالي وتجربة مستخدم مميزة في جميع مشاريعنا."
            : "We use cutting-edge technologies to ensure high performance and exceptional user experience across all our projects."
        }
        logos={[
          { src: "/images/Technologies/react.png", name: "React" },
          { src: "/images/Technologies/next.png", name: "Next.js" },
          { src: "/images/Technologies/laravel.png", name: "Laravel" },
          { src: "/images/Technologies/node.jpg", name: "Node.js" },
          { src: "/images/Technologies/tailwind.png", name: "Tailwind CSS" },
          { src: "/images/Technologies/mysql.png", name: "MySQL" },
          { src: "/images/Technologies/github.png", name: "GitHub" },
        ]}
      />
      {/* @@@ =========================== @@  */}
      <Process
        language={language}
        steps={
          language === "ar"
            ? [
                {
                  number: 1,
                  title: "الاستشارة والتحليل",
                  text: "نستمع لاحتياجاتك ونحلل الفكرة بدقة لتحديد الأهداف والخطة المناسبة.",
                },
                {
                  number: 2,
                  title: "التصميم (UI/UX)",
                  text: "نصمم تجربة مستخدم جذابة وسهلة الاستخدام تعكس هوية مشروعك.",
                },
                {
                  number: 3,
                  title: "التطوير والاختبار",
                  text: "نبرمج باحترافية ونختبر كل جزء لضمان الجودة والاستقرار.",
                },
                {
                  number: 4,
                  title: "الإطلاق والدعم",
                  text: "نطلق المشروع رسميًا ونقدّم دعمًا مستمرًا لضمان النجاح.",
                },
              ]
            : [
                {
                  number: 1,
                  title: "Consultation & Analysis",
                  text: "We listen carefully, analyze your idea, and define a clear project plan.",
                },
                {
                  number: 2,
                  title: "Design (UI/UX)",
                  text: "We create an engaging and intuitive user experience that reflects your vision.",
                },
                {
                  number: 3,
                  title: "Development & Testing",
                  text: "We build with precision and test thoroughly to ensure stability and quality.",
                },
                {
                  number: 4,
                  title: "Launch & Support",
                  text: "We launch your project and provide continuous support for long-term success.",
                },
              ]
        }
      />
      {/* @@@ =========================== @@  */}
      <ContactButton
        language={language}
        title={
          language === "ar"
            ? "هل تحتاج موقع إلكتروني احترافي؟"
            : "Need a professional website?"
        }
        text={
          language === "ar"
            ? "نصمم ونطور مواقع حديثة تساعدك على التميز الرقمي."
            : "We design and build modern websites that help you stand out digitally."
        }
        buttonText={language === "ar" ? "اطلب الآن" : "Order Now"}
      />
    </>
  );
}

// الخدمة
// MissionVision
// التكنولجي
// العمليات
// المشاريع
// الكونتاكت
