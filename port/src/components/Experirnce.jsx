import React from "react";
import { Briefcase } from "lucide-react";
import { FiCheckCircle } from "react-icons/fi";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

const Experience = () => {
  const experience = [
    {
      role: "Information Technology Officer",
      period: "05/01/26 – 10/04/26",
      company: "Waleleka School",
      points: [
        "Configured a local area network (LAN) for school management systems.",
        "Provided day-to-day IT support including troubleshooting computers, printers, and network devices.",
        "Maintained and monitored ICT equipment to ensure smooth school operations.",
        "Designed posters, flyers, and digital materials for school communication using Adobe tools.",
      ],
    },

    {
      role: "Publicity Secretary",
      period: "27/04/23 – Present",
      company: "New Apostolic Church – Chelstone Green Congregation",
      points: [
        "Design and produce posters and flyers for church programs and announcements.",
        "Edit and deliver promotional videos for digital and in-church use.",
        "Maintain consistent visual branding across all publicity materials.",
        "Translate event goals into clear and engaging visual communication.",
      ],
    },

    {
      role: "Creative & Production Lead",
      period: "10/01/26 – Present",
      company: "Selterio Music Ensemble",
      points: [
        "Lead creative direction and ensure cohesive artistic identity.",
        "Design high-quality promotional visuals aligned with the ensemble’s brand.",
        "Oversee video production and post-editing for performances and releases.",
        "Maintain consistent visual and production standards across platforms.",
      ],
    },
  ];

  return (
  <section className="mb-24 px-4 md:px-10" id="experience">

    <div className="grid lg:grid-cols-12 gap-10">

      {/* LEFT LABEL */}
      <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start gap-4">

        <div className="p-3 rounded-2xl bg-blue-50 border border-blue-100 shadow-sm">
          <FiBriefcase className="text-[#06053d]" size={24} />
        </div>

        <div>
          <h1 className="font-orbitron text-2xl md:text-3xl tracking-wide text-[#06053d] leading-tight">
            Professional Experience
          </h1>

          <p className="text-gray-500 mt-3 text-sm md:text-base leading-relaxed max-w-sm">
            My career journey highlighting technical expertise, collaborative projects, and measurable impact.
          </p>
        </div>

      </div>

      {/* RIGHT CONTENT */}
      <div className="lg:col-span-9 grid sm:grid-cols-2 gap-6">

        {experience.map((item, index) => (
          <div
            key={index}
            className="group relative p-6 rounded-2xl border border-gray-100
                       bg-white/70 backdrop-blur-md shadow-sm
                       hover:shadow-xl hover:-translate-y-1
                       transition-all duration-300 overflow-hidden"
          >

            {/* HOVER GLOW */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0
                         group-hover:opacity-100 transition duration-500
                         bg-gradient-to-br from-blue-50 to-transparent
                         pointer-events-none"
            />

            <div className="relative z-10">

              {/* TOP */}
              <div className="flex items-start justify-between gap-4 mb-5">

                <div>

                  <div className="flex items-center gap-2">
                    {/* <FiBriefcase className="text-[#06053d]" /> */}

                    <h3 className="text-lg md:text-xl text-[#06053d]">
                      {item.role}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-600 mt-1 font-medium">
                    {item.company}
                  </p>

                </div>

                {/* PERIOD */}
                <div
                  className="flex items-center gap-2 px-3 py-1 rounded-full
                             bg-blue-50 border border-blue-100
                             text-blue-700 text-xs md:text-sm whitespace-nowrap"
                >
                  <FiCalendar className="text-blue-500" />
                  {item.period}
                </div>

              </div>

              {/* RESPONSIBILITIES */}
              <div className="space-y-4">

                {item.points.map((point, i) => (
                  <div
                    key={i}
                    className="flex gap-3 items-start"
                  >

                    <div className="mt-1 text-green-500">
                      <FiCheckCircle className="text-lg" />
                    </div>

                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {point}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>

  </section>
);
};

export default Experience;