import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ProjectPage from './pages/ProjectPage'
import ContactPage from './pages/ContactPage'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* All Routes */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/projects' element={<ProjectPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
