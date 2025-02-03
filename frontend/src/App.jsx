import React from 'react'
import Navbar from './components/Navbar'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import Calculator from './components/Calculator'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import ContactUs from './components/ContactUs'
const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      {/* <HeroSection/> */}
      {/* <Services/> */}
      <ContactUs/>
      <Footer/>
      {/* <AboutUs/> */}
      {/* <Calculator/> */}
    </div>
  )
}

export default App
