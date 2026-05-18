import {
  House,
  GraduationCap,
  FolderGit2,
  Wrench,
  Mail, Phone, 
  Sparkle,
  Sparkles
} from "lucide-react";

import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCss3Alt,
  FaHtml5,
  FaJs
} from "react-icons/fa";

const Navbar = () => {

  const techs = [
    {
      icon: <FaReact />,
      title: "React",
      className: "reactIcon",
    },
    {
      icon: <FaNodeJs />,
      title: "Node.js",
      className: "nodeIcon",
    },
    {
      icon: <FaJs />,
      title: "JavaScript",
      className: "jsIcon",
    },
    {
      icon: <FaHtml5 />,
      title: "HTML5",
      className: "htmlIcon",
    },
    {
      icon: <FaCss3Alt />,
      title: "CSS3",
      className: "cssIcon",
    },
    {
      icon: <FaDatabase />,
      title: "Database",
      className: "dbIcon",
    },
  ];

  return (
    <>
      {/* TOP NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#06053d]/90">

        <nav className="hidden md:flex items-center justify-between px-10 py-4 text-white shadow-lg">

          {/* BRAND */}
          <div>
            <h2 className="font-orbitron text-white text-3xl tracking-wide">
              Manyika<span className="text-cyan-400">.dev</span>
            </h2>
          </div>

          {/* TECH STACK */}
          <ul
      className="
        flex items-center
        gap-2 md:gap-4
        px-4 py-3
        rounded-full
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-[0_8px_30px_rgba(0,0,0,0.3)]
      "
    >
      {techs.map((tech, index) => (
        <div
          key={index}
          className="flex items-center"
        >

          <li
            title={tech.title}
            className={`
              ${tech.className}
              group
              relative
              list-none
              text-cyan-400
              text-xl md:text-2xl
              cursor-pointer
              transition-all
              duration-300
              hover:text-white
              hover:scale-125
            `}
          >

            {/* GLOW */}
            <div
              className="
                absolute
                inset-0
                blur-2xl
                opacity-0
                group-hover:opacity-100
                transition
                duration-500
                bg-cyan-400/30
              "
            />

            <div className="relative z-10">
              {tech.icon}
            </div>

          </li>

          {index !== techs.length - 1 && (
            <div className="w-px h-8 bg-white/10 mx-3 hidden sm:block" />
          )}
        </div>
      ))}
    </ul>

        </nav>

      </header>

      {/* MOBILE BOTTOM NAV */}
      <div  className="md:hidden fixed top-0 left-0 right-0 z-[99999]
             bg-[#06053d]/95 backdrop-blur-lg
             border-t border-white/10
             px-5 shadow-2xl">
        <div className="flex items-center justify-between">

          <h2 className="font-orbitron text-white text-sm tracking-wide">
            Manyika<span className="text-cyan-400">.dev</span>
          </h2>

          <div
            className="
              flex items-center gap-3
              px-3 py-2
              rounded-full
            "
          >

            {/* CALL */}
            <a
              href="tel:+260774283579"
              className="
                mobileActionBtn
                group
                relative
                overflow-hidden
                w-11 h-11
                rounded-full
                flex items-center justify-center
                border border-cyan-400/20
                bg-cyan-400/10
                text-cyan-300
                transition-all duration-300
                hover:scale-110
                hover:bg-cyan-400
                hover:text-blue-900
                active:scale-95
              "
            >

              {/* GLOW */}
              <div className="
                absolute inset-0
                opacity-0 group-hover:opacity-100
                transition duration-500
                bg-cyan-400/20 blur-xl
              " />

              <Phone
                size={18}
                className="relative z-10"
              />

            </a>

              {/* DIVIDER */}
              <div className="w-px h-6 bg-white/10" />

            {/* EMAIL */}
            <a
              href="mailto:manyikamunyinda4@gmail.com"
              className="
                mobileActionBtn2
                group
                relative
                overflow-hidden
                w-11 h-11
                rounded-full
                flex items-center justify-center
                border border-purple-400/20
                bg-purple-400/10
                text-purple-300
                transition-all duration-300
                hover:scale-110
                hover:bg-purple-400
                hover:text-blue-900
                active:scale-95
              "
            >

              {/* GLOW */}
              <div className="
                absolute inset-0
                opacity-0 group-hover:opacity-100
                transition duration-500
                bg-purple-400/20 blur-xl
              " />

              <Mail
                size={18}
                className="relative z-10"
              />

            </a>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;