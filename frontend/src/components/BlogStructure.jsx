import React from 'react'

const BlogStructure = ({name, description, image}) => {
  return (
    <div className="md:flex justify-center gap-4 border-2 border-gray-200 p-4 rounded-xl">
      <div>
        <img src={image} alt="blog" className="w-64 h-64 md:w-96 md:h-96 md:object-cover" />
      </div>
      <div className="flex flex-col text-justify gap-5">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default BlogStructure
