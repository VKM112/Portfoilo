import './Navbar.css'
import { Link } from 'react-scroll'
import menu from '../../assets/menu.png'
import close from '../../assets/cross.png'
import React, { useRef } from 'react';


const Navbar = () => {

    const menuRef=useRef();

    const openMenu = ()=>{
        menuRef.current.style.right='0';
    }

    const closeMenu = ()=>{
        menuRef.current.style.right='-350px';
    }

    return (
        <div className="navbar">
            <h1 className="Name">Matha Venkata Krishna Mohan</h1>
            <img className='nav-open' onClick={openMenu} src={menu} alt=''/>
            <ul ref={menuRef} className="nav-menu">
                <img src={close} alt='' onClick={closeMenu} className='nav-close'/>
                <li className="nav-connect">
                    <Link to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li className="nav-connect">
                    <Link to="about" smooth={true} duration={500}>About Me</Link>
                </li>
                <li className="nav-connect">
                    <Link to="resume" smooth={true} duration={500}>Resume</Link>
                </li>
                <li className="nav-connect">Projects</li>
                <li className="nav-connect">
                    <Link to="contact" smooth={true} duration={500}>Connect With Me</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar