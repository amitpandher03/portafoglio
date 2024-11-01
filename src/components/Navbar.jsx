import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  const location = useLocation()

  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="navbar bg-base-100 shadow-lg fixed top-0 z-50"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">AP.</Link>
      </div>
      <div className="navbar-end">
        <div className="hidden lg:flex me-4">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
            <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link></li>
            <li><Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>Projects</Link></li>
            <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar