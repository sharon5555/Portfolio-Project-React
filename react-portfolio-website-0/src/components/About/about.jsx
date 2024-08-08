import React from 'react'
import './about.css'
import Love from '../../assets/love.png'
import { FiAward } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";

const About = () => {
return (
    <section id='about'>
        <h5>Get to Know</h5>
        <h2>About Me</h2>

        <div className="container about_container">
            <div className="about_me">
                <div className="about_me-image">
                    <img src={Love} alt="About Image" />
                </div>
            </div>

            <div className="about_content">
                <div className="about_cards">
                    <article className="about_card">
                    <FiAward  className="about_icon"/>
                        <h5>Experience</h5>
                        <small>2 Years working</small>
                    </article>

                    <article className="about_card">
                    < FaUsers className="about_icon"/>
                        <h5>Clients</h5>
                        <small>100+ Worldwide</small>
                    </article>

                    <article className="about_card">
                    <FaFolder className="about_icon"/>
                        <h5>Projects</h5>
                        <small>10+ completed</small>
                    </article>
                </div>

                <p>
                A frontend developer builds the user-facing parts of websites, using HTML, CSS, JavaScript, and frameworks like React for design and functionality.
                </p>

                <a href="#contact" className="btn btn-primary">Let's Talk</a>

            </div>
        </div>
    </section>
)
}

export default About