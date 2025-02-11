import React, { useEffect } from 'react'
import { ServicesData } from '../mockData/ServicesData'
import ServicesSection from './ServicesSection'

const ServicePage = () => {
  useEffect(() => {
    // Scroll to bottom first
    window.scrollTo(0, document.body.scrollHeight);
    
    // Then smoothly scroll back to top
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100); // Small delay to ensure bottom load first
  }, []);
  return (
    <div className="ml-4 mr-4">
      {
        ServicesData.map((service)=>{
            return <ServicesSection key={service.id} name={service.name} description={service.description} image={service.link} id={service.id} className="flex justify-center"/>
        })
      }
    </div>
  )
}

export default ServicePage
