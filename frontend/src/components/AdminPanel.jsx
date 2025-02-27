import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminPanel = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("admin"); // Remove admin from local storage
    toast.success("Logged out successfully");
    setTimeout(() => {
      navigate("/sign-in"); 
    }, 2000);
  };
  return (
    <div>
        <ToastContainer position="top-right" autoClose={2000} theme="colored" />
        <h1 className="text-bold text-center text-4xl mb-4">Admin Dashboard</h1>
        <div className="flex">
            <div className="flex items-center min-w-full bg-white border border-b border-black shadow-md mb-4">
            <Link to = "/admin/view-users" className="flex items-center justify-center w-full p-2 bg-slate-300 cursor-pointer"><div>View all Leads</div></Link>
              <Link to = "/admin/post-blog" className="flex items-center justify-center w-full p-2 bg-slate-400 cursor-pointer"><div >Post Blogs</div></Link>
              <Link to = "/admin/manage" className="flex items-center justify-center w-full p-2 bg-slate-300 cursor-pointer"><div>Manage Blogs</div></Link>
            </div>
        </div>
          <Outlet/>
      <div className="flex items-center justify-end m-4"><button className="w-1/4 border rounded-full p-2 bg-primary hover:bg-[#906ebf]" onClick={handleLogout}>Log out</button></div>
    </div>
  )
}

export default AdminPanel
