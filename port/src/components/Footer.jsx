import React from "react";
import { FiBriefcase, FiCode, FiMail, FiMonitor, FiServer } from "react-icons/fi";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#06053d] text-gray-300 overflow-hidden flex items-center justify-center">

      {/* GLOWS */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[140px] rounded-full footer-glow-left" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[140px] rounded-full footer-glow-right" />

      {/* GRID */}
      <div className="
        footer-grid
        absolute inset-0 opacity-[0.04]
        bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
        bg-[size:40px_40px]
      " />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-6xl p-6 md:p-10">

        <div className="grid md:grid-cols-3 gap-9">

          {/* MANYIKA.DEV */}
          <div className="footer-animate space-y-2">

            {/* BRAND */}
            <div className="relative">

              <h2 className="text-xl md:text-4xl font-orbitron text-white tracking-wide">

                <span className="relative inline-block">
                  Manyika.
                </span>
                <span className="text-cyan-400 ml-1 animate-pulse">
                  dev
                </span>

              </h2>

              {/* STATUS DOT */}
              <div className="flex items-center gap-2 mt-2">

                <span className="relative flex h-2.5 w-2.5">

                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>

                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>

                </span>

                <p className="text-green-400 text-xs tracking-wide">
                  Available for opportunities.
                </p>

              </div>

            </div>

            {/* DESCRIPTION */}
            <p className="
              text-gray-400
              text-sm md:text-base
              leading-relaxed
              text-justify
              max-w-md
            ">
              Software Developer focused on building scalable systems,
              modern web applications, and creative digital experiences.
              I turn ideas into fast, clean and interactive products.
            </p>

          </div>

          {/* EXPERIENCE */}
          <div className="footer-animate">

            <h3 className="text-cyan-400 font-semibold font-orbitron uppercase mb-3 tracking-wider">
              Work Experience
            </h3>

            <ul className="space-y-4 text-sm">

              <li className="flex items-start gap-3 group">
                <span className="text-cyan-400 mt-1 group-hover:scale-110 transition">
                  <FiCode />
                </span>
                <div>
                  <p className="text-white font-medium">Frontend Developer</p>
                  <p className="text-gray-400 text-xs">
                    Typescript, React, Tailwind, CSS Animation.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 group">
                <span className="text-purple-400 mt-1 group-hover:scale-110 transition">
                  <FiServer />
                </span>
                <div>
                  <p className="text-white font-medium">Backend Development</p>
                  <p className="text-gray-400 text-xs">
                    Node.js, Express, JWT, APIs, MySQL.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 group">
                <span className="text-green-400 mt-1 group-hover:scale-110 transition">
                  <FiMonitor />
                </span>
                <div>
                  <p className="text-white font-medium">IT Support & Systems</p>
                  <p className="text-gray-400 text-xs">
                    Networking, troubleshooting, school systems.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 group">
                <span className="text-pink-400 mt-1 group-hover:scale-110 transition">
                  <FiBriefcase />
                </span>
                <div>
                  <p className="text-white font-medium">Freelance Projects</p>
                  <p className="text-gray-400 text-xs">
                    Web apps, branding, and digital solutions.
                  </p>
                </div>
              </li>

            </ul>

          </div>

          {/* CONNECT */}
          <div className="footer-animate">

            <h3 className="text-cyan-400 font-semibold font-orbitron uppercase mb-3 tracking-wider">
              let's Connect
            </h3>

            {/* SOCIAL GRID */}
            <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-1">

              <a href="#" className="flex items-center gap-3 footer-link hover:text-cyan-400">
                <FaGithub className="text-lg" />
                <span>GitHub</span>
              </a>

              <a href="https://linkedin.com/in/muyinda-manyika" className="flex items-center gap-3 footer-link hover:text-cyan-400">
                <FaLinkedin className="text-lg text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a href="https://instagram.com/manyika_canohn" className="flex items-center gap-3 footer-link hover:text-cyan-400">
                <FaInstagram className="text-lg text-pink-400" />
                <span>Instagram</span>
              </a>

              <a href="https://wa.me/+260774283579" className="flex items-center gap-3 footer-link hover:text-cyan-400">
                <FaWhatsapp className="text-lg text-green-400" />
                <span>WhatsApp</span>
              </a>

            </div>

          </div>

        </div>


      </div>
    </footer>
  );
};

export default Footer;