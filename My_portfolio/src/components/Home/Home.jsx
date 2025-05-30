import React from 'react'
import './Home.css'
import Profile_img from '../../assets/Profile.jpg'
import { Link } from 'react-scroll'


const Home = () => {
    return (
        <div id='home' className='home'>
            <div className='content'>
                <img id='profile' src={Profile_img}></img>
                <div className="content-main">
                    <div id='content-2'>
                        <h1 className="name">Hi I'm <span>Venkata Krishna Mohan</span>,</h1>
                        <p>Motivated and skilled Web Developer</p>
                        <p>with hands-on experience in web application development.</p>
                    </div>
                    <div className="profile-action">
                        <div className="profile-connect">
                            <Link to="contact" smooth={true} duration={500}>Connect with me</Link>
                        </div>
                        <div className="profile-resume">
                            <Link to="resume" smooth={true} duration={500}> My Resume</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
