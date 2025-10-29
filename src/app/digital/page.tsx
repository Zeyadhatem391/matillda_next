"use client";
import { useLanguage } from "../context/LanguageContext";
import About from "../ServiceComponents/About";
import MissionVision from "../ServiceComponents/MissionVision";
import TechnoSection from "../ServiceComponents/TechnoSection";
import Process from "../ServiceComponents/Process";
import ContactButton from "../ServiceComponents/ContactButton";

export default function Digital() {
  const { language } = useLanguage();

  return (
    <>
      <About
        language={language}
        titleAr="التحول الرقمي للمؤسسات الصغيرة والمتوسطة"
        titleEn="Digital Transformation for SMEs"
        textAr="نساعد المؤسسات الصغيرة والمتوسطة على التحول الرقمي من خلال تطوير حلول تقنية متكاملة تُبسّط العمليات وتزيد من الكفاءة والإنتاجية. نحن نرافقك في كل خطوة من التحليل إلى التنفيذ."
        textEn="We help small and medium enterprises embrace digital transformation with integrated technology solutions that simplify operations and enhance productivity. We accompany you from strategy to implementation."
        image="/images/digital.jpg"
      />

      <MissionVision
        language={language}
        items={
          language === "ar"
            ? [
                {
                  title: "مهمتنا",
                  text: "تمكين المؤسسات الصغيرة والمتوسطة من الاستفادة من التحول الرقمي بطريقة عملية وسهلة التطبيق.",
                },
                {
                  title: "رؤيتنا",
                  text: "أن نكون الداعم الأساسي للمؤسسات في رحلتها نحو التحول الرقمي الشامل.",
                },
              ]
            : [
                {
                  title: "Our Mission",
                  text: "Empower SMEs to adopt digital transformation in practical and sustainable ways.",
                },
                {
                  title: "Our Vision",
                  text: "To be the primary enabler for organizations in their journey toward full digital transformation.",
                },
              ]
        }
      />

      <TechnoSection
        language={language}
        title={
          language === "ar"
            ? "التقنيات التي نعتمد عليها"
            : "Technologies We Use"
        }
        description={
          language === "ar"
            ? "نستخدم تقنيات حديثة لتطوير حلول رقمية مرنة تدعم التحول الرقمي الفعّال."
            : "We use modern technologies to build flexible digital solutions that enable effective transformation."
        }
        logos={[
          { src: "/images/Technologies/laravel.png", name: "Laravel" },
          { src: "/images/Technologies/react.png", name: "React" },
          { src: "/images/Technologies/next.png", name: "Next.js" },
          { src: "/images/Technologies/aws.png", name: "AWS" },
          { src: "/images/Technologies/docker.png", name: "Docker" },
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
                  title: "تقييم الوضع الحالي",
                  text: "نحلل البنية التقنية الحالية ونحدد فرص التحسين.",
                },
                {
                  number: 2,
                  title: "التخطيط الاستراتيجي",
                  text: "نضع خطة تحول رقمية شاملة تتوافق مع أهدافك.",
                },
                {
                  number: 3,
                  title: "تنفيذ الحلول",
                  text: "نطوّر الأنظمة ونربطها لتحقيق الكفاءة الكاملة.",
                },
                {
                  number: 4,
                  title: "التدريب والمتابعة",
                  text: "نقدّم تدريبًا ومتابعة مستمرة لضمان نجاح التحول.",
                },
              ]
            : [
                {
                  number: 1,
                  title: "Assessment",
                  text: "We analyze your current infrastructure and identify opportunities.",
                },
                {
                  number: 2,
                  title: "Strategy Planning",
                  text: "We create a comprehensive digital transformation plan aligned with your goals.",
                },
                {
                  number: 3,
                  title: "Implementation",
                  text: "We develop and integrate systems to ensure efficiency.",
                },
                {
                  number: 4,
                  title: "Training & Support",
                  text: "We provide training and ongoing support for a smooth transition.",
                },
              ]
        }
      />

      <ContactButton
        language={language}
        title={
          language === "ar"
            ? "ابدأ رحلة التحول الرقمي اليوم"
            : "Start Your Digital Transformation Today"
        }
        text={
          language === "ar"
            ? "ساعد مؤسستك على النمو عبر حلول رقمية متكاملة وسهلة التنفيذ."
            : "Empower your business with seamless, integrated digital solutions."
        }
        buttonText={language === "ar" ? "ابدأ الآن" : "Get Started"}
      />
    </>
  );
}
