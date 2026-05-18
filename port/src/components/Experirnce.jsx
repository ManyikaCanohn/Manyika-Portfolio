import React from "react";
import { Briefcase } from "lucide-react";
import { FiCheckCircle } from "react-icons/fi";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

const Experience = () => {
  const experience = [
    {
      role: "Information Technology Officer Intern.",
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
      role: "Publicity Secretary.",
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
      role: "Creative & Production Lead.",
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
    <section
      id="experience"
      className="
        relative
        py-24
        px-4 md:px-10 lg:px-20
        overflow-hidden
      "
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        {/* GLOW */}
        <div className="
          absolute
          top-0 left-0
          w-[500px] h-[500px]
          bg-cyan-500/10
          blur-[140px]
          rounded-full
        " />

        <div className="
          absolute
          bottom-0 right-0
          w-[500px] h-[500px]
          bg-purple-500/10
          blur-[140px]
          rounded-full
        " />

        {/* GRID */}
        <div className="
          movingGrid
          absolute inset-0 opacity-[0.03]
          bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
          bg-[size:45px_45px]
        " />

      </div>

      <div className="relative z-10">

        {/* HEADER */}
        <div className="
          flex flex-col
          lg:flex-row
          lg:items-end
          justify-between
          gap-8
          mb-20
        ">

          {/* LEFT */}
          <div className="max-w-3xl">

            <div className="flex items-center gap-4 mb-2">

              <div className="
                heroBriefcase
                relative
                w-16 h-16
                rounded-2xl
                bg-gradient-to-br
                from-cyan-400
                to-blue-600
                flex items-center justify-center
                shadow-[0_0_30px_rgba(34,211,238,0.4)]
              ">

                <FiBriefcase
                  className="text-white"
                  size={28}
                />

                {/* PULSE */}
                <div className="
                  absolute inset-0
                  rounded-2xl
                  border border-cyan-300/40
                  animate-ping
                " />

              </div>

              <div>

                <p className="
                  text-cyan-500
                  uppercase
                  tracking-[0.35em]
                  text-xs
                  mb-2
                ">
                  Experience
                </p>

                <h1 className="
                  font-orbitron
                  text-3xl md:text-5xl
                  font-bold
                  text-[#06053d]
                  leading-tight
                ">
                  Professional Journey
                </h1>

              </div>

            </div>

            <p className="
              text-gray-500 text-justify
              leading-relaxed
              text-sm md:text-lg
              max-w-2xl
            ">
              A timeline of technical growth, problem solving,
              digital innovation, and real-world impact across
              software development, IT operations and creative design.
            </p>

          </div>

          {/* RIGHT */}
          <div className="
            flex items-center gap-4
            flex-wrap
          ">

            <div className="
              px-5 py-3
              rounded-2xl
              bg-white/60
              backdrop-blur-xl
              border border-white/10
              shadow-lg
            ">

              <p className="text-xs text-gray-400 uppercase tracking-[0.2em]">
                Experience
              </p>

              <h3 className="text-2xl font-bold text-[#06053d] font-orbitron">
                2+
              </h3>

            </div>

            <div className="
              px-5 py-3
              rounded-2xl
              bg-white/60
              backdrop-blur-xl
              border border-white/10
              shadow-lg
            ">

              <p className="text-xs text-gray-400 uppercase tracking-[0.2em]">
                Projects
              </p>

              <h3 className="text-2xl font-bold font-orbitron text-[#06053d]">
                3+
              </h3>

            </div>

          </div>

        </div>

        {/* EXPERIENCE STACK */}
        <div className="space-y-8">

          {experience.map((item, index) => (

            <div
              key={index}
              className="
                experienceCard
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border border-white/10
                bg-white/60
                backdrop-blur-2xl
                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-[0_25px_80px_rgba(0,0,0,0.14)]
              "
            >

              {/* GLOW */}
              <div className="
                absolute inset-0
                opacity-0 group-hover:opacity-100
                transition duration-500
                bg-gradient-to-br
                from-cyan-500/10
                to-purple-500/10
              " />

              {/* SIDE ACCENT */}
              <div className="
                experienceAccent
                absolute left-0 top-0
                h-full w-2
                bg-gradient-to-b
                from-cyan-400
                via-blue-500
                to-purple-500
              " />

              {/* CONTENT */}
              <div className="
                relative z-10
                grid lg:grid-cols-12
                gap-8
                p-8
              ">

                {/* LEFT */}
                <div className="lg:col-span-4 flex flex-col justify-center">

                  {/* TOP */}
                  <div className="flex items-center gap-4 mb-5">

                    <div className="
                      experienceIcon
                      w-14 h-14
                      rounded-xl
                      flex items-center justify-center
                      text-cyan-500
                    ">
                      <FiBriefcase size={24} className="heroBriefcase" />
                    </div>

                    <div>

                      <h3 className="
                        text-2xl uppercase
                        font-semibold
                        text-[#06053d]
                        group-hover:text-cyan-600
                        transition
                      ">
                        {item.role}
                      </h3>

                      <p className="
                        text-gray-500
                        font-medium
                        mt-1
                      ">
                        {item.company}
                      </p>

                    </div>

                  </div>

                  {/* PERIOD */}
                  <div className="
                    periodBadge
                    inline-flex
                    items-center gap-3
                    px-5 py-3
                    rounded-2xl
                    bg-cyan-50
                    border border-cyan-100
                    text-cyan-700
                    text-sm
                    shadow-sm
                  ">

                    <FiCalendar className="text-cyan-500" />

                    {item.period}

                  </div>

                </div>

                {/* RIGHT */}
                <div className="lg:col-span-8">

                  <div className="
                    grid md:grid-cols-2
                    gap-5
                  ">

                    {item.points.map((point, i) => (

                      <div
                        key={i}
                        className="
                          responsibilityCard
                          group/item
                          relative
                          overflow-hidden
                          rounded-2xl
                          border border-white/10
                          bg-white/40
                          backdrop-blur-xl
                          p-5
                          transition-all duration-300
                          hover:bg-white/70
                          hover:-translate-y-1
                        "
                      >

                        {/* MINI GLOW */}
                        <div className="
                          absolute inset-0
                          opacity-0 group-hover/item:opacity-100
                          transition duration-500
                          bg-gradient-to-br
                          from-cyan-500/5
                          to-purple-500/5
                        " />

                        <div className="
                          relative z-10
                          flex gap-4
                          items-start
                        ">

                          {/* CHECK */}
                          <div className="
                            checkIcon
                            shrink-0
                            w-10 h-10
                            rounded-xl
                            bg-green-500/10
                            text-green-500
                            flex items-center justify-center
                            mt-1
                          ">
                            <FiCheckCircle />
                          </div>

                          <p className="
                            text-gray-600
                            leading-relaxed
                            text-sm md:text-base
                          ">
                            {point}
                          </p>

                        </div>

                      </div>

                    ))}

                  </div>

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