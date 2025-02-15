import React from 'react'
import UserData from './UserData'
import PostBlog from './PostBlog'
import ManageBlogs from './ManageBlogs'
import { Link } from 'react-router-dom'

const AdminPanel = () => {
  return (
    <div>
        <h1 className="text-bold text-center text-4xl mb-4">Admin Dashboard</h1>
        <div className="flex">
            <div className="flex items-center min-w-full bg-white border border-b border-black shadow-md mb-4">
            <Link to = "/view-users"><div className="flex items-center justify-center w-full p-2 bg-slate-200 cursor-pointer">View all Leads</div></Link>
              <Link to = "/post-blog"><div className="flex items-center justify-center w-full p-2 bg-slate-300 cursor-pointer">Post Blogs</div></Link>
              <Link to = "/manage"><div className="flex items-center justify-center w-full p-2 bg-slate-200 cursor-pointer">Manage Blogs</div></Link>
            </div>
        </div>
            {/* <UserData/> */}
            <ManageBlogs/>
    </div>
  )
}

export default AdminPanel
