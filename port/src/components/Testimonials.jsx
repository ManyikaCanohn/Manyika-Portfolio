import Iness from "../assets/iness.png";
import Shupa from "../assets/shupa.jpg";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar, FaCheckCircle } from "react-icons/fa";


export default function Testimonials() {


    const tests = [
        {
            name: "Shupa Ambulaya",
            title: "School Manager",
            image: Shupa,
            rating: 5,
            verified: true,
            text: "Manyika consistently delivered reliable IT support and helped improve our school's digital operations. His professionalism, technical skill, and dedication made a real impact on our daily workflow.",
        },
        {
            name: "Iness Kamudole",
            title: "Youth Leader",
            image: Iness,
            rating: 5,
            verified: true,
            text: "Working with Manyika is an amazing experience. His creativity and modern design approach helps elevate our communication materials and digital presence beautifully. Continue serving the Lord!",
        },
        {
            name: "Zains Dube",
            title: "Media Director",
            image: "/avatars/zains.jpg",
            rating: 5,
            verified: true,
            text: "Manyika combines technical excellence with strong creative vision. His ability to build polished interfaces and deliver professional-quality work makes him stand out as a modern digital creator.",
        },
    ];

    return (
        <section className="relative py-5 overflow-hidden bg-[#050816]">

            <div className="
                movingGrid
                absolute inset-0 opacity-[1]
                bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
                bg-[size:45px_45px]" />

            {/* GRADIENT BLOBS */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[140px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[140px] rounded-full" />

            {/* TITLE */}
            <div className="text-center mb-7 relative z-10">
                <h2 className="text-3xl md:text-6xl font-bold text-white font-orbitron">
                People I’ve <span className="text-cyan-400">Worked With.</span>
                </h2>
            </div>

            {/* SCROLLER */}
            <div className="relative overflow-hidden">

                {/* FADE EDGES */}
                <div className="absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-[#050816] to-transparent" />
                <div className="absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-[#050816] to-transparent" />
                {/* GRID */}
      

                <div className="marquee">
                    <div className="marquee-content">
                        {[...tests, ...tests].map((item, index) => (
                        <div
                            key={index}
                            className="
                            relative
                            w-[350px]
                            flex-shrink-0
                            p-8
                            rounded-3xl
                            border border-white/10
                            bg-white/5
                            backdrop-blur-xl
                            shadow-[0_8px_32px_rgba(0,0,0,0.37)]
                            overflow-hidden
                            transition-all
                            duration-500
                            hover:-translate-y-3
                            hover:scale-[0.9]
                            group
                            "
                        >

                            {/* HOVER GLOW */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />

                                {/* QUOTE ICON */}
                                <FaQuoteLeft className="text-cyan-400 text-3xl mb-6 relative z-10" />

                                {/* TEXT */}
                                <p className="text-gray-300 leading-relaxed mb-8 relative z-10 text-justify">
                                    {item.text}
                                </p>

                                {/* STARS */}
                                <div className="flex items-center gap-1 mb-6">
                                {[...Array(item.rating)].map((_, i) => (
                                    <FaStar
                                    key={i}
                                    className="text-yellow-400 text-sm"
                                    />
                                ))}
                                </div>

                                {/* PROFILE */}
                                <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="
                                    w-14
                                    h-14
                                    rounded-full
                                    object-cover
                                    border-2 border-cyan-400
                                    "
                                />

                                <div>
                                    <div className="flex items-center gap-2">
                                    <h3 className="text-white font-semibold text-lg font-orbitron tracking-wider" >
                                        {item.name}
                                    </h3>

                                    {item.verified && (
                                        <FaCheckCircle className="text-cyan-400 text-sm" />
                                    )}
                                    </div>

                                    <p className="text-gray-400 text-sm">
                                    {item.title}
                                    </p>
                                </div>
                                </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}