import React from 'react'
import BlogStructure from './blogStructure';
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";
const Blogs = () => {
    const blog = [
        {
            id:1,
            name: "hello world",
            description:"lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit",
            link: image4
        },
        {
            id:2,
            name: "Carton",
            description:"lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit",
            link: image2
        },
        {
            id:3,
            name: "Lamitube & Seamless Tube",
            description:"lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit",
            link: image1
        },
        {
            id:4,
            name: "Paper Bag",
            description:"lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit",
            link: image3
        },
        
    
    ];
  return (
    <div className="md:flex md:flex-col ml-4 mr-4 gap-5">
        {
            blog.map((service)=>{
                return <BlogStructure key={service.id} name={service.name} description={service.description} image={service.link} className="flex justify-center"/>
            })
        }
    </div>
  )
}

export default Blogs
