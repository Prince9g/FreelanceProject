import React, { useState } from 'react'
import { NavbarMenu } from '../mockData/data'
import { CiSearch } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import ResponsiveMenu from './ResponsiveMenu';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
        <nav>
        <div className="container flex justify-around md:justify-between items-center py-8">
            {/* logo section */}
            <div className="flex items-center gap-2 py-8 w-20 h-20">
                <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" className="w-20 h-20"/>
            </div>
            {/* Menu section */}
            <div className="hidden md:block">
                <ul className="flex items-center gap-6 text-gray-600">
                    {
                        NavbarMenu.map((item)=>{
                            return (
                                <li key={item.id}>
                                    <Link to={item.link} className="inline-block py-1 px-3 hover:text-primary font-semibold">{item.title}</Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
            <div className="font-semibold italic text-xl md:hidden">Company Name</div>
            {/* Icons section */}
            <div className="flex gap-5 justify-center items-center md:block">
            <div>
                <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
                    <CiSearch/>
                </button>
            </div>
            {/* Hamburger Section */}
            <div className="md:hidden" onClick={()=>{
                setOpen(!open)
            }}>
                <IoMdMenu className="text-4xl"/>
            </div>
            </div>
        </div>
        </nav>
    {/*mobile sidebar section */}
    <ResponsiveMenu open={open} setOpen={setOpen}/>
    </>
  )
}

export default Navbar

{/* <IoMdMenu /> */}

