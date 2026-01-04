import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from 'react'
import { FaAddressCard, FaBookReader, FaBullhorn,  FaCode, FaCommentDots, FaFilm, 
            FaFutbol, FaGlobe, FaGlobeEurope, FaIdBadge, FaLaptopCode, FaMusic, FaPalette, FaRegClock, FaRegLightbulb, 
            FaSadCry, 
            FaTools, 
            FaUsers, FaUserTie } from 'react-icons/fa'
import { SiGoogleclassroom } from 'react-icons/si'

const Services = () => {

    useEffect(() => {
            AOS.init({
                duration: 3000 // Animation duration in milliseconds
            });
    })

        const hires = [
            {icon: <FaRegLightbulb size={50} className='tech-blue' />, title: 'Creative & Innovative', description: 'Able to generate new ideas and turn them into practical solutions.'},
            {icon: <FaUsers size={50} className='tech-blue'  />, title: 'Teamwork & Collaboration', description: 'Able to work with others, share ideas, and archive goals as a team.'},
            {icon: <FaRegClock size={50} className='tech-blue'  />, title: ' Time Manager & Reliable', description: 'I am organised, and follows through on tasks (Consistency).'},
            {icon: <FaCommentDots size={50} className='tech-blue' />, title: 'Communication Skills', description: 'Expresses ideas and actively listens to ensure collaboraions.'}
        ]
        const services = [
            {icon: <FaLaptopCode size={50} className='tech-blue' />, title: 'Website Design', description: 'Modern websites that attract and retain clients.'},
            {icon: <FaAddressCard size={50} className='tech-blue'  />, title: 'Portfolio Websites', description: 'Professional online presence that wins opportunities.'},
            {icon: <FaPalette size={50} className='tech-blue' />, title: 'Graphic Design', description: 'Eye-catching designs that strengthen your brand.'},
            {icon: <FaTools size={50} className='tech-blue'  />, title: 'IT Support and more', description: 'Realibe tech solutions that keep your productive.'},
        ]
        const hobbies = [
            {icon: <FaBookReader size={50} className='tech-blue' />, title: 'Reading Books', description: 'Reacto Academy Website Development.'},
            {icon: <FaMusic size={50} className='tech-blue'  />, title: 'Classic Music', description: 'New Apostolic Church. Chelstone Green Congregation'},
            {icon: <FaFutbol size={50} className='tech-blue' />, title: 'Playing Soccer', description: 'Chelstone Secondary School. Grade Twelve (12).'},
            {icon: <FaFilm size={50} className='tech-blue'  />, title: 'Movies & Series', description: 'Chelstone Secondary School. Grade Twelve (12).'},
        ]

    return (
    <>

        {/* MY SERVICES */}
        <section className="container mt-5 rounded" id='myservices'>
                <div data-aos='zoom-in' className="text-center">
                    <h2 className="mb-0 text-uppercase tech-blue text-decoration-underline"> my services </h2>
                    {/* <p className='text-muted mb-0'> Consistency is the key to mastery. Keep Coding. </p> */}
                    <div className="row g-1">
                        {services.map((service, idx) => (
                            <div className="col-12 col-md-6 col-lg-3" key={idx} data-aos='fade-down'>
                                <div className="p-3">
                                    <div className="mb-3">
                                        {service.icon}
                                        <p className='lead mb-0'> <b> {service.title} </b> </p>
                                        <p data-aos='fade-up' className="text-muted text-italic"> {service.description} </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
        </section>

            <hr className='container tech-blue'  />

             {/* WHY HIRE MANYIKA */}
        <section className="container rounded">
                <div data-aos='zoom-in' className="text-center">
                    <h2 className="mb-0 text-uppercase tech-blue text-decoration-underline"> why hire manyika? </h2>
                    {/* <p className='text-muted mb-0'> Consistency is the key to mastery. Keep Coding. </p> */}
                    <div className="row g-1">
                        {hires.map((hire, idx) => (
                            <div className="col-12 col-md-6 col-lg-3" key={idx} data-aos='fade-down'>
                                <div className="p-3">
                                    <div className="mb-3">
                                        {hire.icon}
                                        <p className='lead mb-0'> <b> {hire.title} </b> </p>
                                        <p data-aos='fade-up' className="text-muted"> {hire.description} </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
        </section>

        <hr className='container tech-blue' />

                {/* HOBBIES AND INTERESTS */}
        <section className="container mt-5 rounded">
                <div data-aos='zoom-in' className="text-center">
                    <h2 className="mb-0 text-uppercase tech-blue text-decoration-underline"> hobbies and interests </h2>
                    {/* <p className='text-muted mb-0'> Consistency is the key to mastery. Keep Coding. </p> */}
                    <div className="row g-1">
                        {hobbies.map((hobby, idx) => (
                            <div className="col-12 col-md-6 col-lg-3" key={idx} data-aos='fade-down'>
                                <div className="p-3">
                                    <div className="mb-3">
                                        {hobby.icon}
                                        <p className='lead mb-0'> <b> {hobby.title} </b> </p>
                                        {/* <p data-aos='fade-up' className="text-muted"> {hobby.description} </p> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
        </section>
    </>
    )
}

export default Services