import React from 'react'
import ServiceStructure from './ServiceStructure';
import image1 from '../assets/s1.jpeg'
import image2 from '../assets/s2.jpeg'
import image3 from '../assets/s3.jpeg'
const Services = () => {
    const arr = [image1,image2,image3];
  return (
    <div className="flex flex-wrap justify-between">
      {
        arr.map((image)=>{
            return <div className="md:w-1/3 p-2"><ServiceStructure image={image}/></div>
        })
      }
    </div>
  )
}

export default Services
