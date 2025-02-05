import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ open, setOpen}) => {
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y:-100 }}
          animate={{ opacity: 1, y:0 }}
          exit={{ opacity: 0 , y:-100}}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-10">
                <Link to="/" onClick={handleClick}><li>Home</li></Link>
                <Link to="/servicepage" onClick={handleClick}><li>Services</li></Link>
                <Link to="/calculator" onClick={handleClick}><li>Calculator</li></Link>
                <Link to="/about" onClick={handleClick}><li>About</li></Link>
                <Link to="/contact" onClick={handleClick}><li>Contact Us</li></Link>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
