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
    // { name: "React Native", image: "/images/Technologies/react-native.png" },
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
    <div className="flex flex-col items-center justify-center   px-10 md:px-20  bg-gray-100">
      {language === "ar" ? (
        <p className="text-4xl font-bold text-blue-800">التقنيات</p>
      ) : (
        <p className="text-4xl font-bold text-blue-800">Technologies</p>
      )}

      <div className="mt-3">
        <div className="w-28 h-1 bg-blue-600 mx-auto mb-1.5"></div>
        <div className="w-36 h-1 bg-blue-600 mx-auto"></div>
      </div>

      <div className="mt-5 text-center">
        {language === "ar" ? (
          <p className="lg:text-3xl text-2xl font-semibold text-black/80 mx-5 md:mx-0">
            نعمل بأفضل التقنيات و الأكثر مواكبة لسرعة تطور سوق العمل
          </p>
        ) : (
          <p className="lg:text-3xl text-2xl font-semibold text-black/80  mx-5 md:mx-0">
            We work with the best technologies that keep pace with the rapid{" "}
            <br />
            development of the labor market.
          </p>
        )}
      </div>

      <div className="relative w-full overflow-hidden  mt-5 ">
        <div className="flex gap-16 animate-slide">
          {techs.concat(techs).map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[120px] cursor-pointer "
            >
              <div className="relative w-30 h-30 mr-5 ">
                <Image
                  src={tech.image}
                  alt={tech.name}
                  fill
                  className="object-contain  rounded-full"
                  sizes="100px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
