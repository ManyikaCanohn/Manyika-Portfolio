import React from 'react'
import Manyika from '../assets/Manyika.png'
import { TypeAnimation } from "react-type-animation";
import { FaDownload } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from 'react'

const Hero = () => {

        useEffect(() => {
            AOS.init({
                duration: 3000 // Animation duration in milliseconds
            });
        })

    return (

        <section className='container vh-100 p-2' id='home'>
            <div className='w-100  mt-5 d-flex justify-content-center rounded flex-column flex-lg-row gap-5 col'>

                <div className='d-flex flex-column justify-content- col-md-8 center  align-items-start'>
                    <div className=''>
                        {/* <p className='bg-dark w-50 text-white'> Manyika </p> */}
                        <h1 data-aos="fade-up" className='tech-blue mb-0'> HAY! I'M MANYIKA. </h1>
                        <code data-aos="slide-right" className="fs-3 mb-2 d-flex">
                            A&nbsp;
                            <TypeAnimation
                                sequence={[
                                "FRONTEND DEVELOPER.", 4000,
                                "MERN STACK Developer.", 4000,
                                "REACT DEVELOPER.", 4000,
                                "NETWORK ENGINEER.", 4000,
                                "GRAPHIC DESIGNER.", 4000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                // style={{ color: "#0d0f20ff" }}
                            />
                    </code>
                    </div>

                    <div>
                        <p data-aos="zoom-in" dat className='mb-3 justify fs-5'>
                            I’m Manyika Munyinda, an Information Technology (IT) practitioner 
                            with hands-on experience in computer systems, web development, networking,
                            graphic design, and various digital technologies. I’m innovative, creative, 
                            and committed to applying my skills to real-world challenges. I have strong 
                            analytical and problem-solving abilities and a continuous learning mindset.
                        </p>
                        <p data-aos="zoom-in" dat className='mb-3 justify fs-5'>
                            I am also a student at the Cisco Networking Academy, where I am expanding my 
                            knowledge in computer networking and cyber security with the aim of securing databases,
                            systems and configuring network topologies with industry-standard technologies.
                        </p>
                    </div>

                    <div data-aos="fade-up" className=''>
                        <a href="/manyika-resume.pdf" className='text-primary align-items-center d-flex gap-2' target="_blank" rel="noopener noreferrer">
                            <FaDownload />   View Manyika's CV
                        </a>
                    </div>
                </div>

                <div data-aos="slide-right" className='d-none d-md-block col-md-4 mt-5 mt-md-0 d-flex justify-content-center' id='canohn'>
   <img 
  src={Manyika}
  alt="Canohn24"
  className="img-fluid"
  style={{
    maxHeight: "500px",
    objectFit: "contain",
    boxShadow: "0 18px 40px -10px rgba(0,0,0,0.45)",
    borderRadius: "14px"
  }}
/>
                </div>
            </div>
        </section>
    )
}

export default Hero