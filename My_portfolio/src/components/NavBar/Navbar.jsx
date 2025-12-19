import { Link } from 'react-scroll'
import menu from '../../assets/menu.png'
import close from '../../assets/cross.png'
import React, { useState, useEffect } from 'react'
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from 'framer-motion'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const { scrollY } = useScroll();

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const currentScrollY = latest;
        
        if (currentScrollY < 10) {
            setIsVisible(true);
        } else if (currentScrollY > lastScrollY) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
        
        setLastScrollY(currentScrollY);
    });

    const openMenu = () => {
        setIsMenuOpen(true);
        document.body.style.overflow = 'hidden';
    }

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = 'unset';
    }

    const navbarStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        padding: windowWidth < 640 ? '15px 15px' : '20px 30px',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        width: '100%',
        boxSizing: 'border-box',
    };

    const nameStyle = {
        backgroundImage: 'linear-gradient(90deg, #25a7da 0%, #e17f23 25%, #25a7da 50%, #e17f23 75%, #25a7da 100%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        backgroundSize: '200% 100%',
        margin: 0,
        fontSize: windowWidth < 640 ? '20px' : '24px',
    };

    const navOpenStyle = {
        width: windowWidth < 640 ? '25px' : '30px',
        height: windowWidth < 640 ? '25px' : '30px',
        cursor: 'pointer',
        zIndex: 101,
    };

    const navCloseStyle = {
        width: windowWidth < 640 ? '25px' : '30px',
        height: windowWidth < 640 ? '25px' : '30px',
        cursor: 'pointer',
        position: 'fixed',
        top: windowWidth < 640 ? '20px' : '30px',
        right: windowWidth < 640 ? '20px' : '30px',
        zIndex: 1001,
    };

    const fullScreenMenuStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '40px',
        zIndex: 1000,
        listStyle: 'none',
        padding: 0,
        margin: 0,
    };

    const navConnectStyle = {
        fontSize: windowWidth < 640 ? '24px' : '32px',
        cursor: 'pointer',
        color: 'white',
        position: 'relative',
        paddingBottom: '5px',
    };

    const menuVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: 'easeInOut',
                staggerChildren: 0.1,
                delayChildren: 0.2,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.3,
                ease: 'easeInOut',
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
        },
        visible: { 
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'easeOut'
            }
        }
    };

    return (
        <>
            <motion.div
                style={navbarStyle}
                initial={{ y: 0 }}
                animate={{ y: isVisible ? 0 : -100 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                <motion.h1
                    style={nameStyle}
                    animate={{
                        backgroundPosition: ['0% 50%', '200% 50%']
                    }}
                    transition={{
                        duration: 3,
                        ease: 'linear',
                        repeat: Infinity
                    }}
                >
                    {windowWidth < 640 ? "VKM" : "Matha Venkata Krishna Mohan"}
                </motion.h1>
                <img 
                    style={navOpenStyle} 
                    onClick={openMenu} 
                    src={menu} 
                    alt='Open Menu'
                />
            </motion.div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.ul
                        style={fullScreenMenuStyle}
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <img 
                            src={close} 
                            alt='Close Menu' 
                            onClick={closeMenu} 
                            style={navCloseStyle}
                        />
                        
                        <motion.li 
                            style={navConnectStyle}
                            variants={itemVariants}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderBottom = '2px solid white';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderBottom = 'none';
                            }}
                        >
                            <Link to="home" smooth={true} duration={500} onClick={closeMenu}>Home</Link>
                        </motion.li>
                        
                        <motion.li 
                            style={navConnectStyle}
                            variants={itemVariants}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderBottom = '2px solid white';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderBottom = 'none';
                            }}
                        >
                            <Link to="about" smooth={true} duration={500} onClick={closeMenu}>About Me</Link>
                        </motion.li>
                        
                        <motion.li 
                            style={navConnectStyle}
                            variants={itemVariants}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderBottom = '2px solid white';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderBottom = 'none';
                            }}
                        >
                            <Link to="resume" smooth={true} duration={500} onClick={closeMenu}>Resume</Link>
                        </motion.li>
                        
                        <motion.li 
                            style={navConnectStyle}
                            variants={itemVariants}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderBottom = '2px solid white';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderBottom = 'none';
                            }}
                        >
                            <Link to="projects" smooth={true} duration={500} onClick={closeMenu}>Projects</Link>
                        </motion.li>
                        
                        <motion.li 
                            style={navConnectStyle}
                            variants={itemVariants}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderBottom = '2px solid white';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderBottom = 'none';
                            }}
                        >
                            <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>Connect With Me</Link>
                        </motion.li>
                    </motion.ul>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar
