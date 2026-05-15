import React from 'react'
import Logo from "../assets/honelogo.svg";  
import Hone from "../assets/hone2.jpg"
import Chelstone from "../assets/chelstone.jpg"
import Kamanga from "../assets/kamanga.jpg"
import { FaBug, FaCode, FaDatabase, FaLaptopCode, FaServer, FaTerminal } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from 'react'


const Education = () => {

    useEffect(() => {
        AOS.init({
            duration: 3000 // Animation duration in milliseconds
        });
    })


    return (

        <section className='container mt-5 mb-5' id='education'>

            <div className='mb-4'>
                <h1 data-aos="fade-up" className=' mb-1 tech-blue text-decoration-underline text-center'>EDUCATION BACKGROUND. </h1>
                <p data-aos="fade-up" style={{ fontSize:"1.1rem", lineHeight:"1.50" }} className='justify text-muted'> 
                    I began my education at Kamanga Primary School,
                    where I studied from Grade one (1) to nine (9) and developed
                    early leadership qualities as a school prefect and class chairperson at Grade nine (9). I continued to Chelstone 
                    Secondary School from Grade Ten (10) to Twelve (12) where I strengthened my leadership abilities. I servered as Debate 
                    President and Class Chairperson in 2022. In 2023, I enrolled and pursued a Diploma in Information Technology 
                    at Evelyn Hone College of Applied Arts and Commerce until 2025. During my studies I gained hands-on experience 
                    in computer systems, network technologies, programming, web development and other essential IT 
                    skills. I am currently a student at Cisco Networking Academy where I am expanding my knowledge in network 
                    fundamentals, cybersecurity, and practical networking concepts/tools to use in the tech world. With my passion for
                    learning, I want to add more tech skills and contribute to the world.
                </p>
            </div>

                    {/* EVELYN HONE COLLEGE */}
            <div className='d-flex border bg-light justify-content-center align-items-center flex-column flex-lg-row col p-3 gap-0 mb-5'>

                <div className=" d-flex align-items-center w-100 gap-2 flex-column">
                    <div className='w'>
                        {/* <img src={Logo} alt="College Logo" width="120" height="120" className="img-fluid mb-0" /> */}
                        <div>
                            <h3 data-aos="fade-up" className="mb-0 tech-blue text-uppercase"> 1. Evelyn Hone College of Applied Arts and Commerce.</h3>
                            <p data-aos="fade-up" className='badge bg-primary mt-4 mb-1'> Enrolled Year: 2023 - 2025 </p>
                            <p data-aos="fade-up" className='mb-1 lead tech-blue'> <strong> Diploma in Information Technology </strong> </p>
                            <ul data-aos="fade-up">
                                <li> Lead Programmer (Reacto College Website) </li>
                            </ul>
                            <p data-aos="fade-up" className='mb-1 tech-blue badge bg-primary'> Expected Graduation: 2026 </p>
                        </div>
                    </div>

                    <div className="mt-4 d-none d-lg-block">
                        <div data-aos="fade-up" className='d-flex text-primary justify-content-center align-items-center flex-column flex-lg-row gap-5'>
                            <FaCode  size={20} title='Coding' />
                            <FaLaptopCode  size={20} title='Coding Machine' />
                            <FaTerminal size={20} title='Coding Terminal' />
                            <FaBug size={20} title='Fix the bug' />
                            <FaDatabase size={20} title='Coding Database' />
                            <FaServer size={20} title='Debugging Server' />
                        </div>
                    </div>
                </div>

                <div data-aos="zoom-in" className='w-100'>
                    <img src={Hone} className='clip-shape w-100' alt="" height="400px" />
                </div>
            </div>

                    {/* CHELSTONE SECONDARY SCHOOL */}
            <div className='d-flex  bg-white justify-content-center align-items-center flex-column flex-lg-row col p-3 gap-0 mb-5'>

                <div className=" d-flex align-items-center w-100 gap-2 flex-column">
                    <div className=''>
                        <div className='d-flex justify-content-end'>
                            {/* <img src={Logo} alt="College Logo" width="120" height="120" className="img-fluid mb-0" /> */}
                        </div>
                        <div>
                            <h3 data-aos="fade-up" className="mb-0 tech-blue text-uppercase">2. CHELSTONE SECODARY SCHOOL</h3>
                            <p data-aos="fade-up" className='badge bg-primary mt-3 mb-1'>Enrolled Intake: 2020 - 2022</p>
                            <p data-aos="fade-up" className='lead tech-blue mb-2'> <strong> Grade Twelve Certificate </strong> </p>
                            <ul data-aos="fade-up">
                                <li> Serverd as Dabate President. </li>
                                <li> Serverd as Class Chairperson. </li>
                            </ul>
                                <p data-aos="fade-up" className='badge bg-primary '>Graduated: 2022</p>
                        </div>
                    </div>

                    <div className="mt-4 d-none d-lg-block">
                        <div data-aos="fade-up" className='d-flex justify-content-center align-items-center text-primary flex-column flex-lg-row gap-5'>
                            <FaCode size={20} title='Coding' />
                            <FaLaptopCode size={20} title='Coding Machine' />
                            <FaTerminal size={20} title='Coding Terminal' />
                            <FaBug  size={20} title='Fix the bug' />
                            <FaDatabase size={20} title='Coding Database' />
                            <FaServer size={20} title='Debugging Server' />
                        </div>
                    </div>
                </div>  
                
                <div data-aos="zoom-in" className='w-100'>
                    <img src={Chelstone} className='clip-shape w-100' alt="" height="400px" />
                </div>
            </div>


                        {/* KAMANGA PRIMARY SCHOOL */}
            <div className='d-flex border bg-light justify-content-center align-items-center flex-column flex-lg-row col p-3 gap-0'>

                <div className=" d-flex align-items-center w-100 gap-2 flex-column">
                    <div className=''>
                        <div className='d-flex justify-content-start'>
                            {/* <img src={Logo} alt="College Logo" width="120" height="120" className="img-fluid mb-0" /> */}
                        </div>
                        <div>
                            <h3 data-aos="fade-up" className="mb-0 tech-blue text-uppercase"> 3. Kamanga Primary SCHOOL</h3>
                            <p data-aos="fade-up" className='mb-1 tech-blue badge bg-primary mt-3 text-white'> Enrolled Intake: 2018- 2019 </p>
                            <p data-aos="fade-up" className='mb-1 lead tech-blue '> <strong> Grade Nine (9) Certificate. </strong> </p>
                            <p data-aos="fade-up" className='mb-1 tech-blue badge bg-primary mt-3 text-white'> Enrolled Intake: 2020 - 2022 </p>
                            <p data-aos="fade-up" className='mb-1 lead tech-blue '> <strong> Grade Seven (7) Certificate. </strong> </p>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="mt-4 d-none d-lg-block">
                        <div className='d-flex text-primary justify-content-center align-items-center flex-column flex-lg-row gap-5'>
                            <FaCode  size={20} title='Coding' />
                            <FaLaptopCode size={20} title='Coding Machine' />
                            <FaTerminal size={20} title='Coding Terminal' />
                            <FaBug size={20} title='Fix the bug' />
                            <FaDatabase size={20} title='Coding Database' />
                            <FaServer size={20} title='Debugging Server' />
                        </div>
                    </div>
                </div>

                
                <div data-aos="zoom-in" className='w-100'>
                    <img src={Kamanga} className='clip-shape w-100' alt="" height="400px" />
                </div>
                
            </div>

        </section>
    )
}

export default Education