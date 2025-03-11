// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact' // Import the Contact page
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />{' '}
        {/* Add the Contact route */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
