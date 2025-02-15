import React, { useEffect, useState } from 'react'
import DeleteBlog from './DeleteBlog';
import axios from 'axios';

const ManageBlogs = () => {
  
    const [blog, setBlog] = useState([]); // Use an array instead of an object

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const { data } = await axios.get("http://localhost:8080/blog/");
                setBlog(data.data);
            } catch (error) {
                console.error("Error fetching blog data:", error);
            }
        };
        fetchBlog();
    }, []);

    return (
        <div className="md:flex md:flex-col ml-4 mr-4 gap-5">
            {blog.map((service) => (
                <DeleteBlog
                    key={service._id}
                    name={service.title}
                    description={service.content}
                    image={service.image}
                    id={service._id}
                />
            ))}
        </div>
    )
}

export default ManageBlogs
