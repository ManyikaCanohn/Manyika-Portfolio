import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from 'react'
import { FaPlayCircle, FaRegStar, FaStar, FaStarHalfAlt, FaTachometerAlt } from 'react-icons/fa'
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiPython, SiPhp, SiVite, SiAdobephotoshop, SiAdobeillustrator, SiCanvas, SiCanva } from 'react-icons/si'

const Skills = () => {

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, 
        (_, index) => {
          if (index < Math.floor(rating))
            return <FaStar key={index} color='#170d3bff' />
            return <FaRegStar key={index} color=' #170d3bff' />
        })
  }
    useEffect(() => {
        AOS.init({
            duration: 3000 // Animation duration in milliseconds
        });
    })

  const languages = [
          {name: 'HTML', rating: 4, icon: <SiHtml5 size={80} color=' #170d3bff' />, description: 'The foundation of every website, used to structure content on the web.'},
          {name: 'CSS',  rating: 4, icon: <SiCss3 size={80} color=' #170d3bff' />, description: 'Sytle and design your webpages, making them visually appealing'},
          {name: 'JavaScript',  rating: 4, icon: <SiJavascript size={80} color=' #170d3bff' />, description: 'Bring your website to life with interactivity and dynamic features'},
          {name: 'React', rating: 4, icon: <SiReact size={80} color=' #170d3bff' />, description: 'A powerful Javascript library for building modern, interactive user interfaces.' },
          {name: 'Node.js', rating: 3, icon: <SiNodedotjs size={80} color=' #170d3bff' />, description: 'A Javascript runtime for building fast, scalebale serve-side applications.' },
          {name: 'Express.js', rating: 3, icon: <SiExpress size={80} color=' #170d3bff' />, description: 'A Node.js framework for building API, web servers and middleware support.' },
          {name: 'MongoDB',  rating: 2, icon: <SiMongodb size={80} color=' #170d3bff' />, description: 'A NoSQL database that stores data in JSON-like documents and easy to maintain.' },
          {name: 'Python',  rating: 2, icon: <SiPython size={80} color=' #170d3bff' />, description: 'A versatile programming language great for web, data, and automation.'},
          {name: 'Vite', rating: 3, icon: <SiVite size={80} color=' #170d3bff' />, description: 'A modern development server for frontend projects (React).'},
      ]

  return (
      <section className="container mb-5" id="courses">
                {/* Section Title */}
                <div className="d-flex text-center row mb-3">
                    <h1 data-aos="fade-up" className="text-center mt-5 text-decoration-underline mb-0" style={{ color: "#06053d" }}>
                        TECHNICAL SKILLS
                    </h1>
                    {/* <p className="text-muted"> Things get solved when you get involved. </p> */}
                </div>

                {/* Cards Grid */}
                <div className="row g-4">
                    {languages.map((language, idx) => (
                    <div
                        className="col-12 col-md-6 col-lg-4 mb-3"
                        data-aos="zoom-in"
                        key={idx}>
                        <div className="card h-100 text-center p-3 shadow-sm border-0 bg-white">
                        {/* Language Header */}
                        <div className="d-flex align-items-center justify-content-start gap-3">
                            <p className="fs-2 mb-0" style={{ color: "#170d3bff" }}>
                                {language.icon}
                            </p>
                            <p data-aos="fade-in" className="display-6 text-dark">
                                {language.name}
                            </p>
                        </div>

                          {/* Description */}
                          <p className="text-muted text-end" data-aos="zoom-out">
                              {language.description}
                          </p>
                          <div className="mb-2 d-flex justify-content-end">
                              {renderStars(language.rating)}
                          </div>
                        </div>
                    </div>
                    ))}
                </div>

                <div className='mt-2 p-3 rounded border bg-light flex-column d-flex justify-content-center align-items-center'>
                  {/* <div> */}
                    <h2  data-aos="fade-up" className='tech-blue text-decoration-underline'> GRAPHIC DESIGN TOOLS</h2>
                  {/* </div> */}
                  <div className='gap-5 mt-3 d-flex align-items-center flex-column flex-lg-row'>
                    <div className='d-flex flex-column align-items-center'>
                      <span> <SiAdobephotoshop  data-aos="fade-up" size={80} color=' #170d3bff' /> </span>
                      <h5  data-aos="zoom-in">Adobe Photoshop</h5>
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                      <span>  <SiCanva  data-aos="fade-up" size={80} color=' #170d3bff' /> </span>
                      <h5  data-aos="zoom-in"> Canva Android  </h5>
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                      <span> <SiAdobeillustrator data-aos="fade-up" size={80} color=' #170d3bff' /> </span>
                      <h5  data-aos="zoom"> Adobe Illustrator </h5>
                    </div>
                  </div>
                </div>
            </section>
  )
}

export default Skills