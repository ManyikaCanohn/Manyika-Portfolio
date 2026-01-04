import React from 'react'
import { FaHouseDamage, FaUserGraduate, FaTools, FaProjectDiagram, FaEnvelopeOpenText, FaDesktop,FaPhoneSquare, FaScrewdriver } from "react-icons/fa";


const Navbar = () => {
    return (
        <section className='mb-5'>
            <nav className='navbar fixed-top navbar-expand-md navbar-light' id='navbar' style={{ backgroundColor: " #06053d" }}>
                <div className="container-lg d-flex align-items-center justify-content-between">

                    {/* Left side: Name + Toggle */}
                    <div className="d-flex align-items-center justify-content-between w-100">

                        {/* Toggle Button */}
                        <button className="navbar-toggler ms-2" 
                            type='button' 
                            data-bs-toggle='collapse'
                            data-bs-target='#main-navs'>
                            <span className="navbar-toggler-icon">
                                <FaDesktop color='white' size={30} />
                            </span>
                        </button>

                        <p className="text-white fs-5 m-0">
                            <strong>Manyika Munyinda</strong>
                        </p>
                    </div>

                    {/* Navigation Bar Links */}
                    <div className="collapse navbar-collapse justify-content-end" id='main-nav'>
                        <ul className="navbar-nav gap-4">
                            <li className="nav-item">
                                <a id='navbar-links' className='nav-link' href="#home">
                                    <strong className='text-white'> HOME </strong>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a id='navbar-links' className='nav-link' href="#education">
                                    <strong className='text-white'> EDUCATION </strong>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a id='navbar-links' className='nav-link' href="#projects">
                                    <strong className='text-white'> PROJECTS </strong>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a id='navbar-links' className='nav-link' href="#myservices">
                                    <strong className='text-white'> SERVICES </strong>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a id='navbar-links' className='nav-link' href="#contact">
                                    <strong className='text-white'> CONTACT </strong>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* MOBILE BOTTOM NAV */}
            <div className="mobile-bottom-nav d-md-none text-uppercase">
                <a href="#home" className="mobile-nav-item">
                    <FaHouseDamage className="mobile-icon" />
                    <span>Home</span>
                </a>

                <a href="#education" className="mobile-nav-item">
                    <FaUserGraduate className="mobile-icon" />
                    <span>Education</span>
                </a>

                <a href="tel: +260774283579" className="call-btn mobile-nav-item">
                    <FaPhoneSquare className="mobile-icon" />
                    <span>Call Me</span>
                </a>

                <a href="#projects" className="mobile-nav-item">
                    <FaProjectDiagram className="mobile-icon" />
                    <span>Projects</span>
                </a>

                <a href="#myservices" className="mobile-nav-item">
                    <FaTools className="mobile-icon" />
                    <span>Services</span>
                </a>
            </div>
        </section>
    )
}

export default Navbar