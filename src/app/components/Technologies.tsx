"use client";
import Image from "next/image";

type Language = "ar" | "en";

interface TechnologiesProps {
  language: Language;
}

export default function Technologies({ language }: TechnologiesProps) {
  const techs = [
    // 🌐 Web Development
    { name: "React", image: "/images/Technologies/react.png" },
    { name: "Next.js", image: "/images/Technologies/next.png" },
    { name: "Laravel", image: "/images/Technologies/laravel.png" },
    { name: "Node.js", image: "/images/Technologies/node.jpg" },
    { name: "Tailwind CSS", image: "/images/Technologies/tailwind.png" },

    // 📱 Mobile Apps
    { name: "Flutter", image: "/images/Technologies/flutter.png" },
    { name: "Kotlin", image: "/images/Technologies/kotlin.png" },

    // 💻 Desktop Software
    { name: "Electron.js", image: "/images/Technologies/electron.png" },
    { name: "C#", image: "/images/Technologies/csharp.png" },

    // 🗄️ Database & Analytics
    { name: "MySQL", image: "/images/Technologies/mysql.png" },
    { name: "MongoDB", image: "/images/Technologies/mongodb.png" },
    { name: "Firebase", image: "/images/Technologies/firebase.png" },

    // 🚀 Digital Transformation & Tools
    { name: "Docker", image: "/images/Technologies/docker.png" },
    { name: "GitHub", image: "/images/Technologies/github.png" },
  ];

  return (
    <section
      className="flex flex-col items-center justify-center px-8 md:px-20 py-24 bg-gray-900 text-white relative overflow-hidden"
      data-aos="fade-up"
    >
      {/* الخلفية الشفافة المتحركة كديكور */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.15),transparent_70%)]"></div>

      {/* العنوان */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 pb-3 relative z-10  tracking-wide">
        {language === "ar" ? "التقنيات" : "Technologies"}
      </h2>
      <div className="relative z-10 flex flex-col items-center gap-1 mb-10">
        <div className="w-24 h-1 bg-amber-500 rounded"></div>
        <div className="w-40 h-1 bg-blue-600 rounded"></div>
      </div>

      {/* النص الوصفي */}
      <div className="relative z-10 text-center mb-12">
        {language === "ar" ? (
          <p className="lg:text-2xl text-xl font-medium text-gray-300 max-w-3xl leading-relaxed">
            نعمل بأفضل التقنيات وأكثرها مواكبة لتطور سوق العمل السريع، لنضمن لك أداءً قويًا وتجربة مميزة.
          </p>
        ) : (
          <p className="lg:text-2xl text-xl font-medium text-gray-300 max-w-3xl leading-relaxed">
            We work with the best and most up-to-date technologies to ensure powerful performance and an exceptional experience.
          </p>
        )}
      </div>

      {/* عرض التقنيات المتحرك */}
      <div className="relative w-full overflow-hidden mt-5 z-10">
        <div className="flex gap-16 animate-slide">
          {techs.concat(techs).map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[120px] cursor-pointer group"
            >
              <div className="relative w-24 h-24 mb-2 rounded-full bg-gray-700/60 p-4 flex items-center justify-center group-hover:bg-gray-600 transition-all duration-500">
                <Image
                  src={tech.image}
                  alt={tech.name}
                  fill
                  className="object-contain rounded-full group-hover:scale-110 transition-transform duration-500"
                  sizes="100px"
                />
              </div>
              <p className="text-sm font-medium text-gray-300 group-hover:text-amber-400 transition-colors duration-300">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
