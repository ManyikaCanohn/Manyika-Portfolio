import React, { useEffect,useRef } from 'react'
import Manyika from './assets/Manyika.png'
import Canohn from './assets/Canon24.png'
import './Main.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaHome, FaUser, FaTools, FaEnvelope, FaProjectDiagram, FaHtml5, FaCss3Alt, FaJs, 
        FaReact, FaBootstrap, FaGithub, FaExchangeAlt, FaLinkedin, FaWhatsapp, FaCalendarAlt, FaTerminal,
        FaCode, FaLaptopCode, FaGavel} from 'react-icons/fa' //Font Awesome icons
import { SiAdobephotoshop, SiVite } from "react-icons/si";
import emailjs from 'emailjs-com'
import { useNavigate } from 'react-router-dom'


const ProData = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
        },[])
    })

    const navigate = useNavigate();

    const skills = [
            { name: "HTML5", icon: <FaHtml5 className="text-danger" /> },
            { name: "CSS3", icon: <FaCss3Alt className="text-primary" /> },
            { name: "JavaScript", icon: <FaJs className="text-warning" /> },
            { name: "React", icon: <FaReact className="text-info" /> },
            { name: "Bootstrap", icon: <FaBootstrap color='purple' className="text-purple" /> },
            // { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-600" /> },
            // { name: "Firebase", icon: <SiFirebase className="text-warning" /> },
            // { name: "Git", icon: <FaGitAlt className="text-danger" /> },
            { name: "GitHub", icon: <FaGithub className="text-dark" /> },
            { name: "Photoshop", icon: <SiAdobephotoshop color='#0c4b79' className="text-pink" /> },
            { name: "Vite", icon: <SiVite color='#f700ff' className="text-purple" /> },
            { name: "Photoshop", icon: <SiAdobephotoshop color= '#0c4b79' className="text-pink" /> },
        ];

        const projects =[
            {title: 'Codeit Academy', image: '/public/images/Codeit.jpg', description: 'Codeit Academy is an online learning platform designed to train IT skills. If focuses on Information Technology fundamentals.',
                tech: ['React-JS', 'Bootstrap'], github: 'https://github.com/ManyikaCanohn',
                demo: '/notfound'
            },
            {title: 'Reacto College', image: '/public/images/Reacto.jpg', description: 'This is an online learning platform designed to teach users how to code. It offers structured courses in various programming languages and technologies, focusing of full-stack development.',
                tech: ['React-JS', 'Bootstrap'], github: 'https://github.com/ManyikaCanohn',
                demo: '/notfound'
            },
            {title: 'Quiz Application', image: '/public/images/Reacto Dashboard.jpg', description: 'The Quiz application is an interactive web based application designed to help students test and improve their knowledge in various programming languages.',
                tech: ['React-JS', 'Bootstrap'], github: 'https://github.com/ManyikaCanohn',
                demo: '/notfound'
            },
            {title: 'Final Year Project', image: '/public/images/Port.png', description: 'Information Technology Final Year Projects.',
                tech: ['React-JS', 'Bootstrap'], github: 'https://github.com/ManyikaCanohn',
                demo: '/notfound'
            },
        ]

        const form = useRef();

        // const contactMe = () => {
            
            const sendEmail = (e) => {
                e.preventDefault();

                emailjs.sendForm(
                    'service_0ta1hzf', //Service ID
                    'template_55lcclf', //Template ID
                    form.current, 'NnQ5a7jSxbL_TdXTy'
                ).then((result) => {
                    alert('Thank you. Message sent to Manyika!')
                    e.target.reset()
                },
            (error) => {
                alert('Failed to send message. please try again!', error)
            })
            }
        // }

    return (
        <>
        {/* Navigation Bar Container */}
        <nav className='navbar fixed-top navbar-expand-md navbar-light p-0' id='navbar'>
            <div className="container-lg">
                
                    {/* <a className="navbar-brand d-flex align-items-center" id='brand'>
                        <img src={ Logo } alt="Logo" width='100' height='80' className='d-inline-block align-top'/> 
                    </a> */}
                    <p className="lead text-white fs-4 align-center"> Manyika Munyinda </p>

                {/* Toggle Button */}
                <button className="navbar-toggler" type='button' data-bs-toggle='collapse'
                    data-bs-target='#main-nav' aria-controls='main-nav' arial-expanded='false'
                    aria-label='Toggle navigation'>
                        <span className="navbar-toggler-icon"></span>
                </button>

                 {/* Navigation Bar Links */}
                <div className="collapse navbar-collapse justify-content-end align-center" id='main-nav'>
                    <ul className="navbar-nav gap-4">
                        <li className="nav-item">
                            <a id='navbar-links' className='nav-link' href="#home" >
                                <FaHome className='fs-2 scale-hover' />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a id='navbar-links' className='nav-link' href="#skills" >
                                <FaTools className='fs-2 scale-hover' />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a id='navbar-links' className='nav-link' href="#projects" >
                                <FaProjectDiagram className='fs-2 scale-hover' />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a id='navbar-links' className='nav-link' href="#contact" >
                                <FaEnvelope className='fs-2 scale-hover' />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a id='navbar-links' className='nav-link' href="#about" >
                                <FaUser className='fs-2 scale-hover' />
                            </a>
                        </li>

                        <button onClick={() => navigate('/graphx')} className='btn -btn-sm'>
                            <FaCalendarAlt size={20} color='white' />
                        </button>
                    </ul>
                </div>
            </div>
        </nav>

        <section id='home' className='container-fluid'>
            <div data-aos='zoom-in' className="container min-vh-100 d-flex justify-content-center align-items-center col">
                <div className="col justify-content-center d-none d-md-block">
                    <div className="text-center">
                        <p className='lead fs-1'>  <b>Hey, I am Manyika Munyinda. A Front-End Web Developer, Graphic Design and Information Technology Student at Evelyn Hone College. </b> </p>
                        <p className='fs-5 mb-2'>  
                            <b> Goal: </b> To use my tech skills to solve real-world problems, and 
                            contribute to innovative teams, and keep learning along the way.
                        </p>

                        <p className="text-muted"> Always remember that things get solved when God is your guide. </p>
                        <div className="d-flex justify-content-center align-items-center gap-5">
                            <FaTerminal size={25} />
                            <FaCode size={25} />
                            <FaLaptopCode size={25} />
                            <FaGavel />
                        </div>

                    </div>
                </div>

                <div data-aos='slide-right' className="">
                    <img className='img-fluid w-100 h-100' src= { Manyika} alt="Manyika's Profile" />
                    <p className='fs-5 mt-4 text-secondary d-md-none'> 
                            <code> Goal: </code> 
                            To use my tech skills to solve real-world problems, and 
                            contribute to innovative teams, and keep learning along the way.
                    </p>
                </div>
            </div>

            <section id='about' className='container-fluid mt-5 mb-5'>
                <div className="justify-content-center row">
                    <div className="col md-10 col-lg-8">
                        <p data-aos='zoom-in' className="text-center fs-2 lead">
                            <b> About Manyika Munyinda </b>
                        </p>
                        <div className='container d-flex justify-content-center align-items-center gap-3'>
                            <p data-aos='fade-up' className="fs-5 lh-lg">
                                Hello! I'm, Manyika Munyinda , a passionate tech student and aspring frontend web developer based in Zambia.
                                I'm currently studying at Evelyn Hone College, where I'm pursing my Diploma in Information Technology
                                and advancing my Networking and Cybersecurity skills through the Cisco Networking Academy.
                            </p>
                            <div className='border w-100' id='canohn'>
                                <img src={Canohn} alt="Canohn24" className='w-100 ' />
                            </div>
                        </div>
                        <p data-aos='fade-up' className="fs-5 lh-lg">
                            I'm currently specialized in buiding responsive, real-world web based applications using modern technology tools like, React-js for user interfaces,
                            Bootstrap 5  for responsive websites, and some of frontend libraries like  AOS for animations, react-router-dom for navigation,
                            and react-icons for icons among others. Some of my future projects include Codeit Academy and,  Reacto College, where I bring digital learning to life of Zambians.
                        </p>
                        <p data-aos='fade-up' className="fs-5 lh-lg">
                            In addition to my web development skills, I'm building a strong foundation in networking and cybersecurity, which I will apply my skills to websites I build and ensure security and performance of the applications.
                            I'm also a freelance graphic designer. I design posters, logos, and UI mockups using Photoshop.
                            I'm the Founder and President of <a href="https://www.linkedin.com/in/munyinda-manyika-901388342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> Graphx24..</a>.
                        </p>

                    </div>
                </div>
            </section>

            <section className="container mt-5 mb-5" id="skills">
                <div data-aos="fade-up" className='mb-3 text-center'>
                    <h2 className="text-success fw-bold">Manyika's Skills & Tech Stack</h2>
                    <code className="lead"> Transforming the world through technologies. </code>
                </div>
                <div className="row justify-content-center">
                    {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="col-4 col-sm-3 col-md-2 text-center mb-4 scale-hover">
                        <div data-aos="zoom-in" className="fs-1 mb-2">{skill.icon}</div>
                        <code data-aos="fade-up" className="mb-0 lead">{skill.name}</code>
                    </div>
                    ))}
                </div>
            </section>

            <section className="container mt-5 mb-5" id='projects'>
                <div data-aos='fade-up' className="mb-4 mt-5 text-center">
                    <h2 className="text-success  fw-bold"> Manyika's Projects. </h2>
                    <code className='lead'> We learning by doing. Get Coding. </code>
                </div>
                <div className="row g-4">
                    {projects.map((project, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card h-100 shadow border-0">
                                <img src={project.image} alt={project.title} style={{ height: '200px', objectFit: 'cover' }} className="card-img-top" />
                                <div data-aos='fade-up' className="card-body d-flex flex-column">
                                    <h5 className="card-title text-success"> {project.title} </h5>
                                    <p className="card-text text-muted"> {project.description} </p>
                                </div>
                                <div data-aos='zoom-in' className="mb-3">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="badge bg-success me-0 p-2 m-1"> {tech} </span>
                                    ))}
                                </div>
                                <div data-aos='zoom-in' className="mt-auto d-flex align-items-end justify-content-end m-3 gap-2">
                                    <a href={project.github} target='_blank' rel='noopener noreferer' className="btn btn-outline-dark btn-sm">
                                        <FaGithub className='me-1' /> Github
                                    </a>
                                    <a href={project.demo} target='_blank' rel='noopener noreferer' className="btn btn-outline-dark btn-sm">
                                        <FaExchangeAlt className='me-1' /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
{/* 
            <section className='accordion' id="services">
                <div className="container bg-light p-3">
                    <h1 data-aos='zoom-up' className='fw-bold align-center justify-content-center d-flex' id='services'>What I Do!</h1>
                    <div data-aos='fade-up' className="acoordion-item">
                        <h2 className="accordion-header my-3">
                            <button id='h2-btns' className="accordion-button fw-bold fs-4" type='button' data-bs-toggle='collapse' data-bs-target='#html' aria-expanded='true' aria-controls='html'>HTML</button>
                        </h2>
                        <div id="html" className='accordion-collapse collapse'>
                            <div className="accordion-body">
                                <p id='acco-p'>I use HTML to build the structure of my web pages. From semantic tags to forms and accessibility best practices. <br /> I ensure my HTML code is clean, well organised, and easy to maintain.</p>
                            </div>
                        </div>
                    </div>

                    <div data-aos='fade-up' className="acoordion-item">
                        <h2 className="accordion-header  my-3">
                            <button id='h2-btns' className="accordion-button fw-bold fs-4" type='button' data-bs-toggle='collapse' data-bs-target='#css' aria-expanded='true' aria-controls='html'>CSS</button>
                        </h2>
                        <div id="css" className='accordion-collapse collapse'>
                            <div className="accordion-body">
                                <p id='acco-p'>I style my projects using modern CSS techniques like Flexbox, Grid, and custom animations. <br /> I'm familiar with responsive design principles, and I often use utility-first approaches when needed.</p>
                            </div>
                        </div>
                    </div>

                    <div data-aos='fade-up' className="acoordion-item">
                        <h2 className="accordion-header my-3">
                            <button id='h2-btns' className="accordion-button fw-bold fs-4" type='button' data-bs-toggle='collapse' data-bs-target='#javascript' aria-expanded='true' aria-controls='html'>JavaScript</button>
                        </h2>
                        <div id="javascript" className='accordion-collapse collapse'>
                            <div className="accordion-body">
                                <p id='acco-p'>JavaScript is where I bring interativity to my web pages. I'm comfortable working with ES+6 feactures, DOM manipulation and I enjoy solving problems through dynamic, user-driven experiences.</p>
                            </div>
                        </div>
                    </div>

                    <div data-aos='fade-up' className="acoordion-item">
                        <h2 className="accordion-header  my-3">
                            <button id='h2-btns' className="accordion-button fw-bold fs-4" type='button' data-bs-toggle='collapse' data-bs-target='#bootstrap' aria-expanded='true' aria-controls='html'>BootStrap 5</button>
                        </h2>
                        <div id="bootstrap" className='accordion-collapse collapse'>
                            <div className="accordion-body">
                                <p id='acco-p'>I use Bootstrap 5 for rapid layout design and to maintain consistency in UI components. <br /> It's great for protocopying and combining with custom CSS or React components to speed up development.</p>
                            </div>
                        </div>
                    </div>

                    <div data-aos='fade-up' className="acoordion-item">
                        <h2 className="accordion-header  my-3">
                            <button id='h2-btns' className="accordion-button fw-bold fs-4" type='button' data-bs-toggle='collapse' data-bs-target='#react' aria-expanded='true' aria-controls='html'>React JS</button>
                        </h2>
                        <div id="react" className='accordion-collapse collapse'>
                            <div className="accordion-body">
                                <p id='acco-p'>React is my main JavaScript library for building modern user interfaces. I use it to create reusable components, manage state(including hooks and context). <br /> My Portfolio and CodeIt Academy website are built using React.</p>
                            </div>
                        </div>
                    </div>

                    <div data-aos='fade-up' className="acoordion-item">
                        <h2 className="accordion-header  my-3">
                            <button id='h2-btns' className="accordion-button fw-bold fs-4" type='button' data-bs-toggle='collapse' data-bs-target='#design' aria-expanded='true' aria-controls='html'>Graphic Design</button>
                        </h2>
                        <div id="design" className='accordion-collapse collapse'>
                            <div className="accordion-body">
                                <p id='acco-p'>In Graphic Design is where in bring clients needs and my version to life. I design posters, logos, and UI mockups using Photoshop. <br /> I'm the Founder of Graphx24. <br /> <a href="https://www.linkedin.com/in/munyinda-manyika-901388342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section id='contact' className='container mt-5 mb-5'>
                <div className="text-center mb-4 mt-5">
                    <h2 data-aos='zoom-in' className="text-success fw-bold"> Contact Manyika <FaEnvelope className='fs-1' /> </h2>
                    <p data-aos='zoom-out' className='fs-5 lead text-muted'> Let's connect and and build something together. Feel free to reach out for projects, collaborations or questions and many more. </p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">
                        <form ref={ form } onSubmit={ sendEmail } className='text-success lead fs-4 p-3 mb-4 shadow bg-light'>
                            <div data-aos='fade-up' className="mb-3 text-success ">
                                <label htmlFor="name" className=" form-label">Name</label>
                                <input name='name' type="text" className="form-control" id='name' placeholder='Your name' required />
                            </div>
                            <div data-aos='fade-up' className="mb-3 text-success">
                                <label htmlFor="email" className="form-label"> Email </label>
                                <input name='email' type="email" className="form-control" id='email' placeholder='Email address' />
                            </div>
                            <div data-aos='fade-up' className="mb-3">
                                <label htmlFor="message" className="form-label"> Send Message </label>
                                <textarea name='message' rows='5' required id="message" placeholder='Your message' className="form-control"></textarea>
                            </div>
                            <button data-aos='fade-up' className="btn btn-success" type='submit'> Send message </button>
                        </form>

                        {/* <hr /> */}
                        <div className="text-center">
                            <p data-aos='zoom-out' className="mb-2 text-muted lead text-center"> ----- or reach out on ----- </p>
                            <div className="d-flex justify-content-center gap-5 fs-2">
                                <a href="https://github.com/ManyikaCanohn"> <FaGithub className='text-success scale-hover' /> </a>
                                <a href="https://www.linkedin.com/in/munyinda-manyika-901388342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <FaLinkedin className='text-success scale-hover' /> </a>
                                <a href="https://wa.me/qr/VZTS5BOEQWEXD1"> <FaWhatsapp className='text-success scale-hover' /> </a>
                            </div>
                        </div>


                        <hr />
                    </div>
                </div>
            </section>

            <section className='container mt-5 mb-5' id='footer'>
                <div className="text-center">
                    <p className='text-muted text-center'> &copy; {new Date().getFullYear()} All rights reserved. </p>
                    <code className='text-center lead'> Developed by Manyika Munyinda. </code>
                    {/* <p className='text-muted'> Built with <span className='text-danger'>&hearts;</span> using React JS and Bootstrap 5. </p> */}
                </div>
            </section>
        </section>
        </>
    )
}

export default ProData