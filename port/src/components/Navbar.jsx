import {
  House,
  GraduationCap,
  FolderGit2,
  Wrench,
  Mail, Phone 
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
  return (
    <>
      {/* TOP NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#06053d]/90">

        <nav className="hidden md:flex items-center justify-between px-10 py-4 text-white shadow-lg">

          {/* BRAND */}
          <div className="font-orbitron font-bold text-2xl tracking-wider">
            Manyika Munyinda
          </div>

          {/* TECH STACK */}
          <ul className="flex items-center gap-6 text-white text-lg">

            <div className="w-px h-8 bg-white/30 mx-2" />

            <li title="React">
              <FaReact size={25} className="hover:text-cyan-400 transition" />
            </li>

            <div className="w-px h-8 bg-white/30 mx-2" />

            <li title="Node.js">
              <FaNodeJs size={25} className="hover:text-green-400 transition" />
            </li>

            <div className="w-px h-8 bg-white/30 mx-2" />

            <li title="JavaScript">
              <FaJs size={25} className="hover:text-yellow-400 transition" />
            </li>

            <div className="w-px h-8 bg-white/30 mx-2" />

            <li title="HTML5">
              <FaHtml5 size={25} className="hover:text-orange-400 transition" />
            </li>

            <div className="w-px h-8 bg-white/30 mx-2" />

            <li title="CSS3">
              <FaCss3Alt size={25} className="hover:text-blue-400 transition" />
            </li>

            <div className="w-px h-8 bg-white/30 mx-2" />

            <li title="Database">
              <FaDatabase size={25} className="hover:text-purple-400 transition" />
            </li>

          </ul>

        </nav>

      </header>

      {/* MOBILE BOTTOM NAV */}
      <div
  className="md:hidden fixed top-0 left-0 right-0 z-[99999]
             bg-[#06053d]/95 backdrop-blur-lg
             border-t border-white/10
             px-5 py-3 shadow-2xl">
  <div className="flex items-center justify-between">

    <h2 className="font-orbitron text-white text-sm tracking-wide">
      Manyika<span className="text-blue-400">.dev</span>
    </h2>

    <div className="flex items-center gap-6">

      <a
        href="tel:+260774283579"
        className="flex flex-col items-center gap-1 text-white text-[11px]"
      >
        <Phone size={20} />
        <span>Call</span>
      </a>

      <a
        href="mailto:manyikamunyinda4@gmail.com"
        className="flex flex-col items-center gap-1 text-white text-[11px]"
      >
        <Mail size={20} />
        <span>Email</span>
      </a>

    </div>

  </div>
</div>
    </>
  );
};

export default Navbar;