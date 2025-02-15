import React, { useState } from 'react';

const BlogSt = ({ name, description, image }) => {
  const [showFull, setShowFull] = useState(false);
  const previewText = description.length > 300 ? description.substring(0, 300) + "..." : description;

  return (
    <div className="md:flex justify-between gap-4 border-2 border-gray-200 p-4 rounded-xl mt-4 md:mt-0">
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
    </div>
  );
};

export default BlogSt;
