import React from 'react'
import './Footer.css'
import li from '../../assets/linkedin.png'
import git from '../../assets/git.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-topleft">
                    <h1 className='animated-gradient'>Mohan</h1>
                    <p>Motivated and skilled Full Stack Developer with hands -on experience in web application development</p>
                </div>
                <div className="footer-topright">
                    <a href='https://www.linkedin.com/in/krishnamohan2002' target="_blank" rel="noopener noreferrer">
                        <img className='li-icon' src={li}/>
                    </a>
                    <a href='https://github.com/VKM112' target="_blank" rel="noopener noreferrer">
                        <img className='git-ic' src={git}/>
                    </a>
                </div>
            </div>
            <hr />
            <div>
                <p className="footer-bottom">&copy; 2025 Venkata Krishna Mohan. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
