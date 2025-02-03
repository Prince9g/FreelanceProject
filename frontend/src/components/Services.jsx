import React from 'react'
import ServiceStructure from './ServiceStructure';
const Services = () => {
    const arr = [1,2,3,4];
  return (
    <div className="flex flex-wrap justify-between">
      {
        arr.map((item)=>{
            return <div className="md:w-1/3 p-2"><ServiceStructure/></div>
        })
      }
    </div>
  )
}

export default Services
