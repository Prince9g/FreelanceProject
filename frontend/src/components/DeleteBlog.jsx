import axios from 'axios';
import React, { useState } from 'react'

const DeleteBlog = ({ name, description, image , id}) => {
  const [showFull, setShowFull] = useState(false);
  const previewText = description.length > 300 ? description.substring(0, 300) + "..." : description;
  const onDeleteClick = () =>{
    try {
        const res = axios.delete(`http://localhost:8080/blog/${id}`);
    } catch (error) {
        
    }
  }
    return (
      <div className="md:flex justify-between gap-4 border-2 border-gray-200 p-4 rounded-xl">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img src={image} alt="blog" className="md:object-cover max-h-64 w-full rounded-lg" />
        </div>
  
        {/* Content Section */}
        <div className="flex flex-col text-justify gap-5 md:w-1/2">
          <h1 className="text-2xl font-semibold">{name}</h1>
          
          {/* Show Preview Text Initially, Full Text on Click */}
          <p>{showFull ? description : previewText}</p>
  
          {/* Show More / Show Less Button */}
          {description.length > 300 && (
            <button 
              className="text-blue-500 font-semibold hover:underline w-fit"
              onClick={() => setShowFull(!showFull)}
            >
              {showFull ? "Show Less" : "Show More"}
            </button>
          )}
        </div>
        
        {/* Delete Button */}
        <div className="flex justify-center items-center">
        <button className="bg-red-500 text-white font-semibold p-2 rounded-md hover:bg-red-600" onClick={onDeleteClick}>
          Delete </button></div>
      </div>
  )
}

export default DeleteBlog
