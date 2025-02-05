import React from 'react'
import { ServicesData } from '../mockData/ServicesData'
import ServicesSection from './ServicesSection'

const ServicePage = () => {
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
