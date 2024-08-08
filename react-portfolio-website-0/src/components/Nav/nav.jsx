import React from 'react'
import './nav.css'
import { FaHome } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineContacts } from "react-icons/md";

const nav = () => {
return (
    <nav>
        <a href="#" className='active'><FaHome /></a>
        <a href="#about"><FaRegUser /></a>
        <a href="#experience"><FaBook /></a>
        <a href="#services"><RiServiceLine /></a>
        <a href="#contact"><MdOutlineContacts /></a>
    </nav>
)
}

export default nav