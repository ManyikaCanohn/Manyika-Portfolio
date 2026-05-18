import React from "react";
import { Globe, Code2, Palette, LayoutTemplate, 
        Rocket, Database, ShieldCheck, Workflow, 
        Network, 
        Sparkles,
        ArrowRight} from "lucide-react";
import { FiPenTool, FiBriefcase, FiLayout } from "react-icons/fi";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { FaNode, FaReact } from "react-icons/fa";

const Skills = () => {


  const projects = [
    {
      title: "CodeBolt – Interactive E-Learning Programming Platform.",
      description:
        "A modern educational systen designed to helps users learning programming through real-time assements and structured learning modules.",
      status: "Private Repository",
      link: null,
    },
    {
      title: "Planora – Productivity & Event System.",
      description:
        "A productivity-focused platfrom designed to help individuals and team organizers schedule, manage events, and coordinate tasks efficiently.",
      status: "Development Phase",
      link: null,
    },
    {
      title: "Reacto Academy – Learning Management System.",
      description:
        "A web-based learning platform designed to support programming education and structured course delivery.",
      status: null,
      link: "https://reacto-academy.onrender.com/",
    },
    {
      title: "Manyika.dev – Personal Portfolio.",
      description:
        "A portfolio application built to showcase software development projects, technical expertise, creative work, and my professional experience.",
      status: null,
      link: "https://manyika-dev.onrender.com",
    },
  ];

  return (
    <section className="relative py-24 mb-24 overflow-hidden">

      {/* BACKGROUND GLOWS */}
      
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full" />

      {/* GRID OVERLAY */}
      <div className="
        absolute inset-0 opacity-[0.05]
        bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
        bg-[size:40px_40px]" />

      <div className="relative z-10 px-4 md:px-10 lg:px-20">

        {/* HEADER */}
        <div className="mb-10 max-w-4xl">

          <div className="flex items-center gap-3 mb-3">

            <div className="
              w-12 h-12
              rounded-2xl
              bg-gradient-to-br
              from-cyan-400 to-blue-500
              flex items-center justify-center
              shadow-lg
              ">
              <Sparkles className="text-white" size={22} />
            </div>

            <div>
              <p className="text-cyan-500 uppercase tracking-[0.3em] text-xs">
                Professional Expertise
              </p>

              <h1 className="
                font-orbitron
                text-3xl md:text-5xl
                tracking-wide
                text-[#06053d]
                font-bold
              ">
                Skills & Abilities
              </h1>
            </div>

          </div>

          <p className="
            text-gray-500
            leading-relaxed
            text-sm md:text-lg
            max-w-3xl text-justify
          ">
            I design, develop, and maintain scalable digital systems,
            immersive interfaces, and modern user-focused applications
            engineered for performance, usability, and clean architecture.
          </p>
        </div>

        {/* SOFTWARE DEVELOPMENT */}
        <div className="grid xl:grid-cols-12 gap-10 items-start mb-20">

          {/* LEFT PANEL */}
          <div className="xl:col-span-3 sticky top-24">

            <div className="
              relative
              overflow-hidden
              rounded-[2rem]
              border border-white/10
              bg-white/40
              backdrop-blur-2xl
              p-8
              shadow-[0_8px_30px_rgba(0,0,0,0.06)]
            ">

              {/* GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5" />

              <div className="relative z-10">

                <div className="
                  w-16 h-16
                  rounded-2xl
                  bg-gradient-to-br
                  from-[#06053d] to-cyan-500
                  flex items-center justify-center
                  mb-6
                  shadow-xl
                ">
                  <Code2 className="text-white" size={30} />
                </div>

                <h2 className="
                  text-2xl
                  font-bold
                  font-orbitron
                  text-[#06053d]
                  mb-4
                ">
                  Software Development
                </h2>

                <p className="text-gray-500 leading-relaxed text-justify">
                  Building secure, scalable and modern applications
                  using contemporary frontend and backend technologies.
                </p>

              </div>

            </div>
          </div>

          {/* PROJECTS */}
          <div className="xl:col-span-9 grid md:grid-cols-2 gap-8">

            {projects.map((item, index) => (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border border-white/10
                  bg-white/60
                  backdrop-blur-2xl
                  p-7
                  transition-all duration-500
                  hover:-translate-y-3
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                "
              >

                {/* GRADIENT BORDER */}
                <div className="
                  absolute inset-0
                  opacity-0 group-hover:opacity-100
                  transition duration-500
                  bg-gradient-to-br from-cyan-500/10 to-purple-500/10
                " />

                {/* TOP GLOW */}
                <div className="
                  absolute -top-20 -right-20
                  w-40 h-40
                  rounded-full
                  bg-cyan-500/10
                  blur-[80px]
                  opacity-0 group-hover:opacity-100
                  transition duration-700
                " />

                <div className="relative z-10">

                  {/* PROJECT NUMBER */}
                  <div className="flex items-center justify-between mb-5">

                    <span className="
                      text-xs
                      uppercase
                      tracking-[0.2em]
                      text-cyan-500
                    ">
                      Project {index + 1}
                    </span>

                    {item.status && (
                      <span className="
                        px-3 py-1
                        rounded-full
                        text-xs
                        border
                        border-orange-200
                        bg-orange-50
                        text-orange-600
                      ">
                        {item.status}
                      </span>
                    )}
                  </div>

                  {/* TITLE */}
                  <h3 className="
                    text-2xl
                    font-semibold
                    text-[#06053d]
                    mb-4 uppercase
                    group-hover:text-cyan-600
                    transition
                  ">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="
                    text-gray-500
                    leading-relaxed text-justify
                    text-sm md:text-base 
                    mb-6
                  ">
                    {item.description}
                  </p>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap items-center gap-3 mb-6">

                    <div className="techIcon">
                      <FaReact />
                    </div>

                    <div className="techIcon">
                      <FaNode />
                    </div>

                    <div className="techIcon">
                      <Workflow size={18} />
                    </div>

                    <div className="techIcon">
                      <Database size={18} />
                    </div>

                    <div className="techIcon">
                      <ShieldCheck size={18} />
                    </div>

                  </div>

                  {/* LINK */}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-medium
                        text-cyan-600
                        hover:gap-4
                        transition-all
                      "
                    >
                      Live Project
                      <ArrowRight size={16} />
                    </a>
                  )}

                </div>
              </div>
            ))}

          </div>
        </div>

        {/* GRAPHIC DESIGN */}
        <div className="
          relative
          overflow-hidden
          rounded-[2rem]
          border border-white/10
          bg-[#06053d]
          p-8 md:p-12
          shadow-[0_20px_60px_rgba(0,0,0,0.2)]
        ">

          {/* PAINTING BACKGROUND */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">

            {/* BRUSH STROKE 1 */}
            <div className="paintBgStroke paintBgStroke1" />

            {/* BRUSH STROKE 2 */}
            <div className="paintBgStroke paintBgStroke2" />

            {/* BRUSH STROKE 3 */}
            <div className="paintBgStroke paintBgStroke3" />

            {/* FLOATING BRUSH */}
            <div className="paintBrush">

              <div className="brushHandle" />
              <div className="brushMetal" />
              <div className="brushHead" />

            </div>

          </div>

          {/* GLOW */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[120px]" />

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div className="relative z-10">

              <p className="
                text-cyan-400
                uppercase
                tracking-[0.3em]
                text-xs
                mb-4
              ">
                Creative Design
              </p>

              <h3 className="
                text-3xl md:text-5xl
                font-bold
                font-orbitron
                text-white
                mb-4
              ">
                Graphic Design Skills
              </h3>

              <p className="text-gray-400 leading-relaxed text-justify">
                Creating visually compelling brand experiences,
                social media assets, posters, UI components and
                digital communication systems with strong visual identity.
              </p>

            </div>

            {/* FEATURES */}
            <div className="space-y-5 relative z-10">

              {[
                {
                  icon: <FiLayout />,
                  color: "text-cyan-400",
                  text: "Designs social media graphics, posters and flyers for impactful communication.",
                },
                {
                  icon: <FiBriefcase />,
                  color: "text-green-400",
                  text: "Creates business cards, stationery, certificates and corporate materials.",
                },
                {
                  icon: <FiPenTool />,
                  color: "text-purple-400",
                  text: "Builds UI assets, motion graphics and digital brand identity systems.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    group
                    flex gap-5
                    rounded-2xl
                    border border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    p-5
                    transition-all duration-300
                    hover:bg-white/10
                    hover:-translate-y-1
                  "
                >

                  <div className={`
                    text-2xl
                    mt-1
                    ${item.color}
                  `}>
                    {item.icon}
                  </div>

                  <p className="
                    text-gray-300
                    leading-relaxed
                    text-justify
                  ">
                    {item.text}
                  </p>

                </div>
              ))}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;