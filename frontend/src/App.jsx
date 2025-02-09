import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from './components/AboutUs'
import Calculator from './components/Calculator'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'
import AdminPanel from './components/AdminPanel'
import ServicePage from './components/ServicePage'
import Home from './components/Home';
import Blogs from './components/Blogs';
const App = () => {
  return (
    <Router>
    <Routes>
      {/* Routes with Navbar & Footer */}
      <Route
        path="/*"
        element={
          <>
            <Navbar />
            <div className="overflow-x-hidden">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs/>} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/servicepage" element={<ServicePage />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="*" element={<h1 className="text-center text-2xl">404 - Page Not Found</h1>} />
              </Routes>
            </div>
            <Footer />
          </>
        }
      />
      
      {/* Route Without Navbar & Footer */}
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  </Router>
  )
}

export default App
