import React from 'react'
import './contact.css'
import { TfiEmail } from "react-icons/tfi";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from '@emailjs/browser'

const contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
        .sendForm('service_bkl7s1w', 'template_me90i1z', {form:form.current},{
            publicKey: 'y0Y_NHbDtEMFQPIMW'},)

            e.target.reset()
    };

return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className='container contact_container'>
            <div className="contact_options">
                <article className='contact_option'>
                    <TfiEmail className="contact_option-icon" />
                    <h4>Email</h4>
                    <h5>sharon.doris54@gmail.com</h5>
                    <a href="mailto:sharon.doris54@gmail.com" target="_blank">Send a message</a>
                </article>

                <article className='contact_option'>
                    <RiMessengerLine className="contact_option-icon" />
                    <h4>Messenger</h4>
                    <h5>Cynn</h5>
                    <a href="https://m.me/cynn.lawrence/" target="_blank">Send a message</a>
                </article>

                <article className='contact_option'>
                    <FaWhatsapp className="contact_option-icon" />
                    <h4>Whatsapp</h4>
                    <h5>+2348148113667</h5>
                    <a href="https://api.whatsapp.com/send/phone=+2348148113667" target="_blank">Send a message</a>
                </article>
            </div>
            {/* END OF CONTACT OPTION */}

            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='Name' placeholder='Your full Name' required />
                <input type="email" name='email' placeholder='Your Email' required />
                <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </div>
    </section>
)
}

export default contact