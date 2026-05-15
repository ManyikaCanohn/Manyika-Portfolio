import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { FaPlay, FaGithub } from 'react-icons/fa'
import ReactoLand from "../assets/reactolandpage.png"
import Mentwel from "../assets/mentwel.png"
import ReactoRegister from "../assets/reactoregister.png"

const Projects = () => {

    useEffect(() => {
        AOS.init({
            duration: 3000 // Animation duration in milliseconds
        });
    })

  return (
      <section className='container mt-5 mb-5' id='projects'>
<hr />
        <div className='d-flex align-itmes-center justify-content-center'>
          <h2 data-aos="fade-up" className='tech-blue text-uppercase mb-4 text-decoration-underline'> projects and experience </h2>
        </div>

        <div className='d-flex gap-3  justify-content-center align-items-center flex-column flex-lg-row col gap-0 mb-5'>
          <div className='w-100'>
                
                  <h4 data-aos="fade-up" className='text-uppercase tech-blue mb-0'> Reacto Academy </h4>
                  <p  data-aos="fade-up" className='tech-blue justify' style={{ fontSize:"1.1rem" }}> 
                      A modern full-stack MERN (MongoDB, Express, React, Node.js) 
                      web platform designed to help students learn, manage, and track their ICT-related 
                      studies more effectively. It aims at improving the technology education system in Zambia.
                  </p>
                  <div className='gap-2 d-flex  align-items-center'>
                      <a  data-aos="fade-up" href='https://github.com/ManyikaCanohn' className='d-flex align-items-center gap-1'> 
                        Github Repo 
                      </a>
                      <a  data-aos="fade-up" href="https://reacto-academy.onrender.com" className='d-flex align-items-center gap-1' >
                        Project Demo
                      </a>
                  </div>
          </div>

          <div className='d-flex w-100 justify-content-center align-items-center'>
            {/* <div> */}
              {/* <img src={ReactoLogin} alt="reacto-academy-landingpage"  className='w-100 small-img' height="400px" /> */}
              <img  data-aos="zoom-in" src={ReactoLand} alt="reacto-academy-landingpage"  className='w-100 small-img'  />
            {/* </div> */}
          </div>
        </div>

        <div className='d-flex gap-3 justify-content-center align-items-center flex-column flex-lg-row col gap-0 mb-5'>
          <div className='w-100'>
                
                  <h4  data-aos="fade-up" className='text-uppercase tech-blue mb-0'> mentwel </h4>
                  <p  data-aos="fade-up" className='tech-blue justify' style={{ fontSize:"1.1rem" }}> 
                      A modern mental wellness platform designed to inspire 
                      emotional balance and personal growth. Combining thoughtful design 
                      with scalable technology, it empowers individuals through guided support, 
                      mindfulness tools, and professional resources built with React and Bootstrap 
                      5 for a seamless user experience.
                  </p>
                  <div className='gap-2 d-flex  align-items-center'>
                      <a  data-aos="fade-up" href='https://github.com/ManyikaCanohn' className='d-flex align-items-center gap-1'> 
                        Github Repo 
                      </a>
                      <a  data-aos="fade-up" href="https://mentwel.onrender.com" className='d-flex align-items-center gap-1' >
                        Project Demo 
                      </a>
                  </div>
          </div>

          <div className='d-flex w-100 justify-content-between align-items-center'>
            {/* <div> */}
              {/* <img src={ReactoLogin} alt="reacto-academy-landingpage"  className='w-100 small-img' height="400px" /> */}
              <img  data-aos="zoom-in" src={Mentwel} alt="reacto-academy-landingpage"  className='w-100 small-img'  />
            {/* </div> */}
          </div>
        </div>

        <hr />
      </section>
  )
}

export default Projects