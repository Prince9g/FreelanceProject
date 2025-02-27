import axios from "axios";
import React, {useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//needs to fix toast error not handling events
const PostBlog = () => {

  const imageRef = useRef();
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageURL, setImageURL] = useState("");

  
  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
      // Read the file as a Data URL for preview purposes
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageURL(reader.result); // The file is read as a Data URL
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = async () =>{
    const formData = new FormData();
    formData.append("title", title);
    if(file) formData.append("image", file);
    formData.append("content", content);
    try {
        const res = await axios.post("http://localhost:8080/blog/blogs-upload", formData, {
            headers:{
                'Content-Type':'multipart/form-data'
            },
            withCredentials: true
          });
          if(res.data.success){
            toast.success(res.data.message);
            setTitle("");
            setContent("");
            setImageURL("");
            imageRef.current.value = null;
          }
    } catch (error) {
        toast.error(error.message);
    }
  }
  
  return (
    <div className="mt-10 flex flex-col justify-center items-center h-screen">
        <ToastContainer position="top-right" autoClose={3000} theme="colored" />
        <div className="shadow-lg flex flex-col justify-center w-[70%] items-center border border-gray-300 rounded-md p-4">
      {/* image upload section  */}
      <div
        className={`shadow-md w-full p-2 border border-gray-300 rounded-md ${
            imageURL ? "flex flex-col items-center gap-5" : "flex justify-between items-center gap-5"
          }`}
      >
        <div
          className={`${
            imageURL && "hidden"
          } || text-xl md:text-2xl font-semibold`}
        >
          Upload Image
        </div>
        {imageURL && (
          //need to change there may be
          <div className="w-full h-64 flex items-center justify-center">
            <img
              src={imageURL}
              alt="preview_img"
              className="object-contain h-full w-full rounded-md"
            />
          </div>
        )}
        <input
          ref={imageRef}
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
        <div>
        <button
          onClick={() => imageRef.current.click()}
          className="flex text-bold text-xl p-4 w-fit mx-auto bg-primary hover:bg-[#8d68d2] rounded-xl"
        >
          {imageURL && (<div>Select Another</div>) || <div>Choose Image to Upload</div>} 
        </button>
        </div>
      </div>
      {/* title */}
      <div className="shadow-md m-2 gap-2 w-full">
        <span className="text-xl bold">Title: </span>
        <input
          type="text"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          placeholder="Enter Title"
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
        />
      </div>
      {/* description */}
      <div className="shadow-md m-2 gap-2 w-full">
        <span className="text-xl bold">Description: </span>
        <textarea
          value={content}
          onChange={(e)=>setContent(e.target.value)}
          placeholder="Enter Description"
          className="w-full h-40 p-4 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
        />
      </div>
      </div>
      <div className="m-4">
        <button type="submit" className="flex text-bold text-xl p-2 pl-8 pr-8 w-fit mx-auto bg-primary hover:bg-[#8d68d2] rounded-full" onClick={handleSubmit}>Post</button>
      </div>
      
    </div>
  );
};

export default PostBlog;
