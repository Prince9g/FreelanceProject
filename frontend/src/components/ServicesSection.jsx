import React from 'react'

const ServicesSection = ({name, description, image, id}) => {
  return (
    <div className="mt-8 mb-16 ">
      <div className={`md:flex md:justify-between md:items-start md:gap-x-8 ${id % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
        {/* image */}
        <div className="text-justify text-xl md:w-1/2 md:mt-6">
        <h1 className="text-center text-2xl font-bold mb-6">{name}</h1>
            {description}
        </div>
        {/* content  */}
        <div className="m-0 p-0 md:w-[50%] md:h-full">
            <img src={image} className="mt-8 md:mt-0 object-stretch md:w-full md:h-[400px] rounded-xl"/>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection
