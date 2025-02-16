import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const AdminPanel = () => {
  return (
    <div>
        <h1 className="text-bold text-center text-4xl mb-4">Admin Dashboard</h1>
        <div className="flex">
            <div className="flex items-center min-w-full bg-white border border-b border-black shadow-md mb-4">
            <Link to = "/admin/view-users" className="flex items-center justify-center w-full p-2 bg-slate-300 cursor-pointer"><div>View all Leads</div></Link>
              <Link to = "/admin/post-blog" className="flex items-center justify-center w-full p-2 bg-slate-400 cursor-pointer"><div >Post Blogs</div></Link>
              <Link to = "/admin/manage" className="flex items-center justify-center w-full p-2 bg-slate-300 cursor-pointer"><div>Manage Blogs</div></Link>
            </div>
        </div>
          <Outlet/>
    </div>
  )
}

export default AdminPanel
