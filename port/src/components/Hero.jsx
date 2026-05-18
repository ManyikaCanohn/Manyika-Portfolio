import React from 'react'
import { TypeAnimation } from "react-type-animation";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect, useState } from 'react'
import {
  Code2,
  FileCode,
  Server,
  Database,
  Palette,
  Brush,
  Layers,
  Download, 
  PenTool,
  Mail,
  Phone,  
  X,
} from "lucide-react";
import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaGitAlt, FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";



const Hero = () => {

    const [open, setOpen] = useState(false);
    const [cvPopup, setCvPopup] = useState(false);

    const socials = [
        {
        name: "Call",
        icon: <Phone size={20} />,
        link: "tel:+260774283579",
        color: "from-cyan-400 to-blue-500",
        },
        {
        name: "Email",
        icon: <Mail size={20} />,
        link: "mailto:manyikamunyinda4@gmail.com",
        color: "from-purple-400 to-pink-500",
        },
        {
        name: "WhatsApp",
        icon: <FaWhatsapp size={22} />,
        link: "https://wa.me/260774283579",
        color: "from-green-400 to-emerald-600",
        },
        {
        name: "LinkedIn",
        icon: <FaLinkedin size={22} />,
        link: "https://linkedin.com/munyinda-manyika",
        color: "from-blue-400 to-cyan-500",
        },
        {
        name: "Instagram",
        icon: <FaInstagram size={22} />,
        link: "https://instagram.com/manyika_canohn",
        color: "from-pink-500 to-orange-400",
        },
        {
        name: "Facebook",
        icon: <FaFacebook size={22} />,
        link: "https://facebook.com/manyika_canohn",
        color: "from-blue-500 to-blue-300",
        },
    ];

    const orbit = (duration = 25) => ({
        animate: { rotate: 360 },
        transition: {
            duration,
            repeat: Infinity,
            ease: "linear",
        },
    });

    const IconNode = ({ icon: Icon, angle, radius }) => {
        return (
            <div
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: `
                rotate(${angle}deg)
                translate(${radius}px)
                rotate(-${angle}deg)
                `,
            }}
            >
            <Icon size={24} />
            </div>
        );
    };

        useEffect(() => {
            AOS.init({
                duration: 3000 // Animation duration in milliseconds
            });
        })

    return (

        <section className="min-h-screen px-6 lg:px-16 py-10 mt-13 flex items-center">

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-5">

                {/* LEFT CONTENT */}
                <div className="flex flex-col lg:w-7/12 justify-center">

                    {/* NAME + TITLE */}
                    <div>
                        <h1
                            data-aos="fade-up"
                            className="
                                text-xl
                                md:text-5xl
                                font-bold
                                font-orbitron
                                tracking-[0.12em]
                                tech-blue
                                flex
                                flex-wrap
                                justify-center md:justify-start
                            ">
                            {"MANYIKA MUNYINDA.".split("").map((char, index) => (
                                <span
                                key={index}
                                className="heroLetter"
                                style={{
                                    animationDelay: `${index * 0.08}s`,
                                }}
                                >
                                {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                            </h1>

                        <code
                            data-aos="slide-right"
                            className="text-sm text-muted md:text-lg flex mt-2"
                            >
                        <TypeAnimation
                            sequence={[
                            "Engineering Scalable Web Systems.", 3000,
                            "Building Real-World Digital Products.", 3000,
                            "Crafting Education and Business Platforms.", 3000,
                            "Transforming Ideas into Software.", 3000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                        </code>
                    </div>

                    {/* INTRO TEXT */}
                    <div className="mt-4 space-y-4 text-gray-700 text-base md:text-lg leading-relaxed text-justify">

                        <p data-aos="zoom-in">
                            My name is Manyika Munyinda, an IT professional and developer with
                            hands-on experience in building web-based and digital platforms.
                            I have worked on projects such as educational systems. business systems 
                            and portfolio application.
                        </p>
                        <p data-aos="zoom-in">
                            These projects have strengthened my ability to solve real-world problems,
                            design structured systems, and think critically about user needs and
                            digital workflows.
                        </p>

                        <p data-aos="zoom-in">
                            Outside of development, I am also skilled in graphic design, where I
                            transform ideas into visual content that communicates clearly and effectively.
                        </p>

                    </div>

                     {/* BUTTONS */}
                    <div className="flex flex-wrap items-center gap-4 mt-8">

                        {/* LET'S TALK */}
                        <button
                            onClick={() => setOpen(true)}
                        className="
                            relative
                            overflow-hidden
                            group
                            px-6 py-3
                            rounded-2xl
                            bg-[#06053d]
                            text-white
                            font-medium
                            flex items-center gap-3
                            border border-cyan-400/20
                            transition-all duration-300
                            hover:scale-105
                            hover:-translate-y-1
                        "
                        >

                        {/* GLOW */}
                        <div className="
                            absolute inset-0
                            opacity-0 group-hover:opacity-100
                            transition duration-500
                            bg-gradient-to-r from-cyan-500/20 to-purple-500/20
                        " />

                        <Phone
                            size={18}
                            className="relative z-10 animate-pulse"
                        />

                        <span className="relative z-10">
                            Let's Talk
                        </span>
                        </button>

                        {/* DOWNLOAD CV */}
                        <button
                        onClick={() => setCvPopup(true)}
                        className="
                            relative
                            overflow-hidden
                            group
                            px-6 py-3
                            rounded-2xl
                            border
                            border-[#06053d]
                            bg-white/5
                            backdrop-blur-xl
                            text-[#06053d]
                            font-medium hover:text-white
                            flex items-center gap-3
                            transition-all duration-300
                            hover:scale-105
                            hover:-translate-y-1
                            hover:border-cyan-500
                        "
                        >

                        {/* GLOW */}
                        <div className="
                            absolute inset-0
                            opacity-0 group-hover:opacity-100
                            transition duration-500
                            bg-gradient-to-r from-cyan-500 to-[#06053d]
                        " />

                        <Download
                            size={18}
                            className="relative z-10 animate-bounce"
                        />

                        <span className="relative z-10">
                            Download CV
                        </span>
                        </button>

                    </div>

                    {/* MODAL */}
                    {open && (
                        <div
                        className="
                            fixed inset-0 z-[99999]
                            flex items-center justify-center
                            bg-black/60
                            backdrop-blur-md
                            px-5
                        "
                        >

                        {/* MODAL CARD */}
                        <div
                            className="
                            relative
                            w-full
                            max-w-md
                            rounded-[2rem]
                            border border-white/10
                            bg-[#0b1023]/90
                            backdrop-blur-2xl
                            p-8
                            overflow-hidden
                            animate-modalPop
                            ">

                            {/* BACKGROUND GLOW */}
                            <div className="absolute top-0 left-0 w-40 h-40 bg-cyan-500/20 blur-[100px]" />

                                <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/20 blur-[100px]" />

                                {/* CLOSE */}
                                <button
                                    onClick={() => setOpen(false)}
                                    className="
                                        absolute top-5 right-5
                                        text-gray-400
                                        hover:text-white
                                        transition
                                    ">
                                    <X size={22} />
                                </button>

                                {/* TITLE */}
                                <div className="relative z-10 mb-8">
                                    <p className="text-cyan-400 mb-3">
                                        On all socials
                                    </p>

                                    <h2 className="text-xl md:text-3xl font-bold text-white font-orbitron tracking-wide">
                                        Let’s Connect...
                                    </h2>
                                </div>

                                {/* OPTIONS */}
                                <div className="grid grid-cols-2 gap-4 relative z-10">
                                    {socials.map((item, index) => (
                                        <a
                                        key={index}
                                        href={item.link}
                                        target="_blank"
                                        className="
                                            group
                                            relative
                                            overflow-hidden
                                            rounded-2xl
                                            border border-white/10
                                            bg-white/5
                                            backdrop-blur-xl
                                            p-5
                                            flex flex-col items-center justify-center
                                            gap-3
                                            text-white
                                            transition-all duration-300
                                            hover:scale-105
                                            hover:-translate-y-1
                                        "
                                        >

                                        {/* HOVER GRADIENT */}
                                        <div className={`
                                            absolute inset-0
                                            opacity-0 group-hover:opacity-100
                                            transition duration-500
                                            bg-gradient-to-br ${item.color}
                                        `} />

                                        <div className="relative z-10 text-2xl">
                                            {item.icon}
                                        </div>

                                        <span className="relative z-10 text-sm font-medium">
                                            {item.name}
                                        </span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* CV POPUP */}
                    {cvPopup && (
                        <div
                            className="
                            fixed inset-0 z-[99999]
                            flex items-center justify-center
                            bg-black/60
                            backdrop-blur-md
                            px-5
                            "
                        >

                            {/* CARD */}
                            <div
                            className="
                                relative
                                w-full
                                max-w-md
                                rounded-[2rem]
                                border border-white/10
                                bg-[#0b1023]/90
                                backdrop-blur-2xl
                                p-8
                                overflow-hidden
                                animate-modalPop
                            "
                            >

                            {/* GLOW */}
                            <div className="absolute top-0 left-0 w-40 h-40 bg-cyan-500/20 blur-[100px]" />

                            <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/20 blur-[100px]" />

                            {/* CLOSE */}
                            <button
                                onClick={() => setCvPopup(false)}
                                className="
                                absolute top-5 right-5
                                text-gray-400
                                hover:text-white
                                transition
                                "
                            >
                                <X size={22} />
                            </button>

                            {/* CONTENT */}
                            <div className="relative z-10">

                                <div className="
                                w-16 h-16
                                rounded-2xl
                                bg-gradient-to-br
                                from-cyan-400 to-purple-500
                                flex items-center justify-center
                                mb-6
                                ">
                                <Download size={28} className="text-white animate-bounce" />
                                </div>

                                <p className="
                                    text-cyan-400
                                    tracking-wide font-orbitron
                                    text-xs
                                    mb-3">
                                    CV Download
                                </p>

                                <h2 className="text-3xl font-bold text-white mb-3">
                                    PDF CV Not Available
                                </h2>

                                <p className="text-gray-300 leading-relaxed text-justify">
                                    A downloadable PDF version of my CV is currently unavailable.
                                    Please use my portfolio website as your reference for skills,
                                    experience, projects, and contact information. Thank you!
                                </p>


                            </div>
                            </div>
                        </div>
                    )}

                </div>

                {/* RIGHT ORBIT */}
                <div className="lg:flex justify-center tech-blue items-center hidden lg:w-5/12">

                    <div className="relative w-[420px] h-[420px]">

                        {/* OUTER ORBIT */}
                        <motion.div
                        className="absolute inset-0 rounded-full border border-gray-700/20"
                        {...orbit(30)}
                        >
                            <IconNode icon={FaReact} angle={0} radius={190} />
                            <IconNode icon={FaNodeJs} angle={60} radius={190} />
                            <IconNode icon={Server} angle={120} radius={190} />
                            <IconNode icon={Database} angle={180} radius={190} />
                            <IconNode icon={Layers} angle={300} radius={190} />
                        </motion.div>

                        {/* MIDDLE ORBIT */}
                        <motion.div
                        className="absolute inset-10 rounded-full border border-gray-700/15"
                        {...orbit(22)}
                        >
                            <IconNode icon={FaJs} angle={0} radius={140} />
                            <IconNode icon={FaHtml5} angle={90} radius={140} />
                            <IconNode icon={FaCss3Alt} angle={180} radius={140} />
                            <IconNode icon={FaGitAlt} angle={270} radius={140} />
                        </motion.div>

                        {/* INNER ORBIT */}
                        <motion.div
                        className="absolute inset-24 rounded-full border border-gray-700/10"
                        {...orbit(18)}
                        >
                            <IconNode icon={Code2} angle={0} radius={85} />
                            <IconNode icon={FileCode} angle={120} radius={85} />
                            <IconNode icon={PenTool} angle={240} radius={85} />
                        </motion.div>

                        {/* CENTER CORE */}
                        <motion.div
                            animate={{ scale: [1, 1.08, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"
                            >
                            <FaReact size={44} />
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero