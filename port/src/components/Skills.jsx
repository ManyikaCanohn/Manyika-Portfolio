import React from "react";
import { Globe, Code2, Palette, LayoutTemplate, Rocket } from "lucide-react";
import { FiPenTool, FiBriefcase, FiLayout } from "react-icons/fi";

const Skills = () => {


  const projects = [
  {
    title: "CodeBolt – Educational Quiz Platform",
    description:
      "An educational system designed to help users learn programming through structured quizzes and interactive learning modules.",
    status: "In Development",
    link: null,
  },
  {
    title: "Reacto Academy – E-Learning Platform",
    description:
      "A web-based learning platform designed to support programming education and structured course delivery.",
    status: null,
    link: "https://reactoacademy.onrener.com",
  },
  {
    title: "Planora – Productivity & Event System",
    description:
      "A structured system that helps users organize, manage, and track events and tasks efficiently.",
    status: "In Development",
    link: null,
  },
  {
    title: "Manyika App – Portfolio System",
    description:
      "A personal web application showcasing my skills, projects, and experience in a structured professional format.",
    status: null,
    link: "https://manyika-portfolio.onrender.com",
  },
  ];

  return (
<section className="mb-20 px-4 md:px-10 lg:px-20">

  {/* HEADER */}
  <div className=" mb-14">
    <h1 className="font-orbitron text-2xl md:text-3xl tracking-wide text-[#06053d]">
      SKILLS & ABILITIES
    </h1>

    <p className="text-gray-500 mt-1 max-w-2xl text-sm md:text-base text-justify">
      I design, develop, and maintain scalable software systems and design frameworks 
      focused on performance, usability, and clean architecture.
    </p>
  </div>

  {/* SOFTWARE DEVELOPMENT */}
  <div className="grid lg:grid-cols-12 gap-10 mb-14">

    {/* LEFT LABEL */}
    <div className="lg:col-span-3 flex lg:flex-col items-center justify-center lg:items-start gap-3">
      <div className="p-3 rounded-xl bg-blue-50 border border-blue-100">
        <Code2 className="text-[#06053d]" />
      </div>

      <h2 className="text-lg md:text-xl font-semibold font-orbitron text-[#06053d]">
        Software Development Projects.
      </h2>
    </div>

    {/* RIGHT CONTENT */}
    <div className="lg:col-span-9 grid sm:grid-cols-2 gap-6">

      {projects.map((item, index) => (
        <div
          key={index}
          className="group relative p-6 rounded-2xl border border-gray-100 
                     bg-white/70 backdrop-blur-md shadow-sm 
                     hover:shadow-xl hover:-translate-y-1 
                     transition-all duration-300"
        >

          {/* glow effect */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-50 to-transparent pointer-events-none" />

          <div className="relative z-10">

            <h3 className="text-[#06053d] text-lg">
              {item.title}
            </h3>

            <p className="text-gray-500 mt-2 text-sm text-justify leading-relaxed">
              {item.description}
            </p>

            {/* STATUS */}
            {item.status && (
              <div className="mt-4 inline-flex items-center gap-2 text-xs">
                <span className="px-2 py-1 rounded-full bg-orange-50 text-orange-600 border border-orange-100">
                  {item.status}
                </span>
              </div>
            )}

            {/* LINK */}
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
              >
                Live Project →
              </a>
            )}

          </div>
        </div>
      ))}

    </div>
  </div>

  {/* GRAPHIC DESIGN */}
  <div className="flex flex-col p-6 rounded-2xl border border-gray-100 ">

  {/* FEATURES */}
  <div className="flex gap-4 space-y-5 text-gray-600 text-sm md:text-base ">

{/* HEADER */}
    <div className="flex justify-center flex-col gap-3 mb-6">

      <h3 className="text-lg md:text-xl font-semibold font-orbitron text-[#06053d]">
        Graphic Design Skills
      </h3>

    </div>
    
    <div className="space-y-3">
      <div className="flex gap-3 text-justify items-start">
      <FiLayout className="mt-1 text-blue-500 shrink-0" />
      <p>
        Designs social media graphics, church posters and flyers for effective communication and information sharing.
      </p>
      </div>

      <div className="flex gap-3 text-justify  items-start">
        <FiBriefcase className="mt-1 text-green-500 shrink-0" />
        <p>
          Creates business cards, corporate stationery, certificates, and presentation materials with strong layout consistency.
        </p>
      </div>

      <div className="flex gap-3 text-justify  items-start">
        <FiPenTool className="mt-1 text-purple-500 shrink-0" />
        <p>
          Builds UI assets, brand identity systems, and motion graphics for digital experiences.
        </p>
      </div>
    </div>

    

  </div>

</div>

</section>
  );
};

export default Skills;