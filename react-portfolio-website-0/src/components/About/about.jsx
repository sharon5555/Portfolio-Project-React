import React from 'react'
import './about.css'
import Love from '../../assets/love.png'

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
                        
                    </article>
                </div>
            </div>
        </div>
    </section>
)
}

export default About