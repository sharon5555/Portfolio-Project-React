import React from 'react'
import './nav.css'
import { FaHome } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineContacts } from "react-icons/md";
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
return (
    <nav>
        <a href="#" onClick={() => setActiveNav('#about')} className={activeNav === '#' ? 'active' : ''}><FaHome /></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaRegUser /></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBook /></a>
        <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineContacts /></a>
    </nav>
)
}

export default Nav;