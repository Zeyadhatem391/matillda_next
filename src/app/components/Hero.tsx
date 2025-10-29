// "use client";

// import { useLanguage } from "../context/LanguageContext";

// export default function Hero() {
//   const { language } = useLanguage();

//   const content = {
//     ar: {
//       title: (
//         <>
//           نحن نصنع <strong className="text-indigo-600"> حلولًا برمجية </strong>{" "}
//           حديثة تساعدك على النجاح
//         </>
//       ),
//       description:
//         "نقوم بتطوير مواقع إلكترونية وتطبيقات مبتكرة تساعد الأفراد والشركات على النمو وتحقيق حضور رقمي قوي بسهولة وسرعة.",
//       btn1: "ابدأ الآن",
//       btn2: "اعرف المزيد",
//     },
//     en: {
//       title: (
//         <>
//           We build{" "}
//           <strong className="text-indigo-600"> modern software </strong>
//           solutions for your success
//         </>
//       ),
//       description:
//         "We develop innovative websites and applications that help individuals and businesses grow and build a strong digital presence with ease and speed.",
//       btn1: "Get Started",
//       btn2: "Learn More",
//     },
//   };

//   const current = language === "ar" ? content.ar : content.en;

//   return (
//     <section className="bg-white lg:grid lg:h-screen lg:place-content-center dark:bg-gray-900">
//       <div className="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
//         <div className="max-w-prose">
//           <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
//             {current.title}
//           </h1>

//           <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
//           {current.description}
//           </p>

//           <div className="mt-4 flex gap-4 sm:mt-6">
//             <a
//               href="#"
//               className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
//             >
//               {current.btn1}
//             </a>

//             <a
//               href="#"
//               className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
//             >
//               {current.btn2}
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { language } = useLanguage();

  const content = {
    ar: {
      title: "افهم تدفق المستخدم و",
      highlight: "زد من نجاح مشروعك البرمجي",
      description:
        "تعلم كيفية تصميم واجهات تفاعلية وتجربة مستخدم سلسة من خلال أحدث تقنيات البرمجة والتطوير.",
      start: "ابدأ الآن",
      learn: "اعرف المزيد",
    },
    en: {
      title: "Understand user flow and",
      highlight: "increase your coding success",
      description:
        "Learn how to design interactive interfaces and smooth user experiences with modern web development techniques.",
      start: "Get Started",
      learn: "Learn More",
    },
  };

  const t = language === "ar" ? content.ar : content.en;

  return (
    <section
      dir={language === "ar" ? "rtl" : "ltr"}
      className=" lg:grid lg:h-screen lg:place-content-center"
    >
      <div className="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-prose text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            {t.title} <strong className="text-indigo-600">{t.highlight}</strong>
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
            {t.description}
          </p>

          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <a
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
              href="#"
            >
              {t.start}
            </a>

            <a
              className="inline-block rounded border border-gray-200 bg-white px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
              href="#"
            >
              {t.learn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
