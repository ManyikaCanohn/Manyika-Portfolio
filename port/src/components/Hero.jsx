import React from 'react'
import { TypeAnimation } from "react-type-animation";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from 'react'
import {
  Code2,
  FileCode,
  Server,
  Database,
  Palette,
  Brush,
  Layers,
  Download, 
//   Github,
  PenTool
} from "lucide-react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaGitAlt
} from "react-icons/fa";


const Hero = () => {

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
                        <h1 data-aos="fade-up" className="text-3xl font-orbitron md:text-3xl font-bold tech-blue tracking-wide">
                            HI, I'M MANYIKA MUNYINDA.
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
                            "Transforming Ideas into Functional Software.", 3000,
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
                        I have worked on educational systems such as CodeBolt,
                        where I developed interactive learning experiences for developers,
                        and business systems like Planora, a productivity
                        platform that helps users manage tasks and time efficiently.
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

                    {/* TOOLS */}
                    <div data-aos="fade-up" className="mt-7 flex flex-wrap gap-11 text-sm text-gray-600">

                        <span className="flex items-center gap-2"><Code2 size={18}/> </span>
                        <span className="flex items-center gap-2"><FileCode size={18}/> </span>
                        <span className="flex items-center gap-2"><Server size={18}/> </span>
                        <span className="flex items-center gap-2"><Database size={18}/> </span>
                        <span className="flex items-center gap-2"><Layers size={18}/> </span>
                        <span className="flex items-center gap-2"><PenTool size={18}/></span>

                    </div>

                </div>

                {/* RIGHT ORBIT */}
                <div className="lg:flex justify-center items-center hidden lg:w-5/12">

                    <div className="relative w-[420px] h-[420px]">

                        {/* OUTER ORBIT */}
                        <motion.div
                        className="absolute inset-0 rounded-full border border-gray-300/20"
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
                        className="absolute inset-10 rounded-full border border-gray-300/15"
                        {...orbit(22)}
                        >
                            <IconNode icon={FaJs} angle={0} radius={140} />
                            <IconNode icon={FaHtml5} angle={90} radius={140} />
                            <IconNode icon={FaCss3Alt} angle={180} radius={140} />
                            <IconNode icon={FaGitAlt} angle={270} radius={140} />
                        </motion.div>

                        {/* INNER ORBIT */}
                        <motion.div
                        className="absolute inset-24 rounded-full border border-gray-300/10"
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