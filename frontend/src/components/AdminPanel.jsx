import React from 'react'

const AdminPanel = () => {
  return (
    <div>
        <h1 className="text-bold text-center text-4xl border-b border-black">Admin Dashboard</h1>
        <div className="flex">
            <div className="w-1/6 flex flex-col items-center gap-4 border-r border-black h-screen">
              <div className="flex items-center justify-center bg-primary w-full rounded-xl p-2 m-2  hover:bg-[#7a50b5]">View all Leads</div>
              <div className="flex items-center justify-center bg-primary w-full rounded-xl p-2 m-2 hover:bg-[#7a50b5]">Post Blogs</div>
              <div className="flex items-center justify-center bg-primary w-full rounded-xl p-2 m-2 hover:bg-[#7a50b5]">Services</div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default AdminPanel
