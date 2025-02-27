import React, { useEffect, useState } from 'react'
import DeleteBlog from './DeleteBlog';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ManageBlogs = () => {
  
    const [blog, setBlog] = useState([]); // Use an array instead of an object
    const manageBlogs = (id) => {
        setBlog(blog.filter((blog) => blog._id!== id));
        toast("Blog deleted successfully")
    }
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
            <ToastContainer position="top-right" autoClose={3000} theme="dark" />
            {blog.map((service) => (
                <DeleteBlog
                    key={service._id}
                    name={service.title}
                    description={service.content}
                    image={service.image}
                    id={service._id}
                    manageBlogs={manageBlogs}
                />
            ))}
        </div>
    )
}

export default ManageBlogs
