import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BlogSt from './BlogSt';

const Blogs = () => {
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
                <BlogSt
                    key={service._id}
                    name={service.title}
                    description={service.content}
                    image={service.image}
                    
                />
            ))}
        </div>
    );
};

export default Blogs;
