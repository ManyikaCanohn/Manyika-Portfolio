import React from "react";
import {
  FiBriefcase,
  FiMonitor,
  FiCode,
  FiServer,
  FiMail,  FiUsers,
  FiBookOpen,
  FiMic,
} from "react-icons/fi";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { CodeXmlIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#06053d] py-12 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h3 className="font-orbitron text-white text-2xl mb-3">
            Manyika
            <span className="text-blue-400">.dev</span>
          </h3>

          <p className="text-sm leading-relaxed text-gray-400 text-justify ">
            I am a software developer focused on building scalable digital experiences,
            modern web applications, and impactful user-centered solutions.
          </p>

          <div className="mt-5 space-y-1 text-sm font-mono">

            <p>
              Status:
              <span className="text-green-400 ml-1">
                Available for Work.
              </span>
            </p>

            <p>
              Location:
              <span className="ml-1">
                Lusaka, Zambia.
              </span>
            </p>

            <p>

              Engineer:
              <span className="ml-1">
                Manyika Munyinda. 
              </span>
            </p>

          </div>

        </div>

        {/* EXPERIENCE */}
        <div>

          <h3 className="font-orbitron text-blue-400 mb-4">
            Experience
          </h3>

          <div className="space-y-3 font-mono">

            <div className="flex items-center gap-2 hover:text-white transition">
              <FiBriefcase className="text-blue-400" />
              <span>Software Development</span>
            </div>

            <div className="flex items-center gap-2 hover:text-white transition">
              <FiMonitor className="text-blue-400" />
              <span>UI/UX Design Systems</span>
            </div>

            <div className="flex items-center gap-2 hover:text-white transition">
              <FiCode className="text-blue-400" />
              <span>Frontend Engineering</span>
            </div>

            <div className="flex items-center gap-2 hover:text-white transition">
              <FiServer className="text-blue-400" />
              <span>Backend Development</span>
            </div>

            <div className="flex items-center gap-2 hover:text-white transition">
              <CodeXmlIcon className="text-blue-400" />
              <span>Full Stack Software Developer</span>
            </div>

          </div>

        </div>

        {/* REFERENCES */}
        <div>

        <h3 className="font-orbitron text-blue-400 mb-4 flex items-center gap-2">
          References
        </h3>

          <div className="space-y-5 text-sm font-mono">

            <div className="flex items-start gap-3">

              <div className="mt-1 text-blue-400">
                <FiBookOpen />
              </div>

              <div>
                <p className="text-white">
                  SHUPA AMBULAYA
                </p>

                <p className="text-gray-400">
                  School Manager
                </p>
              </div>

            </div>

            <div className="flex items-start gap-3">

              <div className="mt-1 text-blue-400">
                <FiUsers />
              </div>

              <div>
                <p className="text-white">
                  INESS KAMUDOLE
                </p>

                <p className="text-gray-400">
                  Youth Leader
                </p>
              </div>

            </div>

            <div className="flex items-start gap-3">

              <div className="mt-1 text-blue-400">
                <FiMic />
              </div>

              <div>
                <p className="text-white">
                  ZAINS DUBE
                </p>

                <p className="text-gray-400">
                  Media Director
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* CONTACT */}
        <div>

          <h3 className="font-orbitron text-blue-400 mb-4">
            Connect
          </h3>

          <div className="space-y-3 font-mono">

            <a
              href="mailto:manyikamunyinda4@gmail.com"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <FiMail className="text-blue-400" />
              <span>Email</span>
            </a>

            <a
              href="mailto:manyikamunyinda4@gmail.com"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <FaWhatsapp className="text-blue-400" />
              <span>WhatsApp</span>
            </a>

            <a
              href="https://github.com/ManyikaCanohn"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <FaGithub className="text-blue-400" />
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/manyika-munyinda-4a9b1a1b3"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <FaLinkedin className="text-blue-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://twitter.com/manyika_munyinda"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <FaTwitter className="text-blue-400" />
              <span>Twitter</span>
            </a>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 mt-10 pt-3 text-center text-sm text-gray-500 font-mono">
        © {new Date().getFullYear()} Manyika Munyinda. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;