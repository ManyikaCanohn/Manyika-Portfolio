import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'


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
      </Routes>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
