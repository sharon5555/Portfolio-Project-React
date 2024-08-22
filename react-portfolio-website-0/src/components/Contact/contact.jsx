import React from 'react'
import './contact.css'
import { TfiEmail } from "react-icons/tfi";

const contact = () => {
return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className='container contact_container'>
            <div className="contact_options">
                <article className='contact_option'>
                    <TfiEmail />
                    <h4>Email</h4>
                    <h5>sharon.doris54@gmail.com</h5>
                    <a href="mailto:sharon.doris54@gmail.com">Send a message</a>
                </article>

                <article className='contact_option'>
                    <TfiEmail />
                    <h4>Messenger</h4>
                    <h5>Cynn</h5>
                    <a href="my facebook url">Send a message</a>
                </article>

                <article className='contact_option'>
                    <TfiEmail />
                    <h4>Email</h4>
                    <h5>sharon.doris54@gmail.com</h5>
                    <a href="mailto:sharon.doris54@gmail.com">Send a message</a>
                </article>
            </div>
            {/* END OF CONTACT OPTION */}


        </div>
    </section>
)
}

export default contact