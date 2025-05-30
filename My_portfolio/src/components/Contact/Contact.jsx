import React, { useState } from 'react';
import gmail from '../../assets/gmail.png';
import map from '../../assets/map.png';
import phone from '../../assets/phone.png';
import './Contact.css';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        formData.append("access_key", "363fc0eb-828e-40b9-8e4b-4e8b7075d0c3");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                alert("✅ Your message has been sent!");
                setResult("✅ Your message has been sent!");
                event.target.reset();
            } else {
                setResult("❌ Failed to send message. Please try again.");
            }

        } catch (error) {
            console.error("Error submitting form:", error);
            setResult("❌ An unexpected error occurred.");
        }


        setTimeout(() => {
            setResult("");
        }, 5000);
    };

    return (
        <div id='contact' className='contact'>
            <div className='contact-title'>
                <h1>Get in touch</h1>
            </div>
            <div className='contact-section'>
                <div className='contact-left'>
                    <h1>Let's talk</h1>
                    <p>I am currently available to take on new projects, so feel free to contact me.</p>
                    <div className="contact-details">
                        <div className="contact-info">
                            <img src={gmail} alt='gmail icon' />
                            <p>vkmohan112@gmail.com</p>
                        </div>
                        <div className="contact-info">
                            <img src={phone} alt='phone icon' />
                            <p>+91 7396112425</p>
                        </div>
                        <div className="contact-info">
                            <img src={map} alt='map icon' />
                            <p>India, Andhrapradesh, Visakhapatnam - 530012</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor="name">Your Name</label>
                    <input id="name" type='text' placeholder='Enter your name' name='name' required />
                    <label htmlFor="email">Your Email</label>
                    <input id="email" type='email' placeholder='Enter your email' name='email' required />
                    <label htmlFor="message">Write your message here</label>
                    <textarea id="message" name='message' rows="8" placeholder='Enter your message' required></textarea>
                    <button type='submit' className='contact-submit'>Submit Now</button>
                    {result && <p style={{ color: "white", marginTop: "10px" }}>{result}</p>}
                </form>
            </div>
        </div>
    );
};

export default Contact;
