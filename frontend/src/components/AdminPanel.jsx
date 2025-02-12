import React from 'react'
import UserData from './UserData'
import PostBlog from './PostBlog'

const AdminPanel = () => {
  return (
    <div>
        <h1 className="text-bold text-center text-4xl mb-4">Admin Dashboard</h1>
        <div className="flex">
            <div className="flex items-center min-w-full bg-white border border-b border-black shadow-md mb-4">
              <div className="flex items-center justify-center w-full p-2 bg-slate-200 cursor-pointer">View all Leads</div>
              <div className="flex items-center justify-center w-full p-2 bg-slate-300 cursor-pointer">Post Blogs</div>
              <div className="flex items-center justify-center w-full p-2 bg-slate-200 cursor-pointer">Services</div>
            </div>
        </div>
            {/* <UserData/> */}
            <PostBlog/>
    </div>
  )
}

export default AdminPanel
