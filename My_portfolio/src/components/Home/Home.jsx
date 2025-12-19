import React, { useState, useEffect } from 'react'
import Profile_img from '../../assets/Profile.jpg'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import AnimatedButton from '../UI/AnimatedButton'
import './Home.css'


const Home = ({ homeImageRef }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3, delayChildren: 0.2 }
        }
    }


    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 50 },
        visible: {
            opacity: 1, 
            scale: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    }


    const textVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1, 
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }


    const buttonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        },
        hover: {
            scale: 1.05,
            transition: { duration: 0.3 }
        },
        tap: { scale: 0.95 }
    }


    return (
        <div 
            id='home' 
            style={{
                width: '100%',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '80px',
                boxSizing: 'border-box',
                overflowX: 'hidden'
            }}
        >
            <motion.div 
                style={{
                    display: 'flex',
                    flexDirection: windowWidth >= 1024 ? 'row' : 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: windowWidth >= 1024 ? '80px' : '30px',
                    padding: '40px 20px',
                    width: '100%',
                    maxWidth: '1400px'
                }}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Profile Image with ref */}
                <motion.img 
                    ref={homeImageRef}
                    src={Profile_img}
                    alt="Profile"
                    style={{
                        borderRadius: '10%',
                        width: windowWidth >= 1024 ? '380px' : windowWidth >= 640 ? '320px' : '290px',
                        height: windowWidth >= 1024 ? '500px' : windowWidth >= 640 ? '420px' : '350px',
                        boxShadow: '0px 2px 10px rgba(255, 255, 255, 0.5)'
                    }}
                    variants={imageVariants}
                />


                {/* Content Section */}
                <motion.div 
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '30px',
                        alignItems: windowWidth >= 1024 ? 'flex-start' : 'center',
                        textAlign: windowWidth >= 1024 ? 'left' : 'center'
                    }}
                    variants={textVariants}
                >
                    <motion.div 
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px'
                        }}
                        variants={textVariants}
                    >
                        <motion.h1 
                            style={{
                                fontSize: windowWidth >= 1024 ? '40px' : windowWidth >= 640 ? '35px' : '28px',
                                fontWeight: 600,
                                marginBottom: '0px'
                            }}
                            variants={textVariants}
                        >
                            Hi I'm{' '}
                            <span className="animated-gradient">
                                Venkata Krishna Mohan
                            </span>
                            ,
                        </motion.h1>
                        <motion.p 
                            style={{
                                fontSize: windowWidth >= 1024 ? '20px' : '18px',
                                lineHeight: '30px',
                                margin: 0
                            }}
                            variants={textVariants}
                        >
                            Motivated and skilled Web Developer
                        </motion.p>
                        <motion.p 
                            style={{
                                fontSize: windowWidth >= 1024 ? '20px' : '18px',
                                lineHeight: '30px',
                                margin: 0
                            }}
                            variants={textVariants}
                        >
                            with hands-on experience in web application development.
                        </motion.p>
                    </motion.div>


                    <motion.div 
                        style={{
                            display: 'flex',
                            flexDirection: windowWidth >= 640 ? 'row' : 'column',
                            gap: windowWidth >= 640 ? '50px' : '20px',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        variants={textVariants}
                    >
                        <motion.div
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            style={{ 
                                cursor: 'pointer',
                                position: 'relative'
                            }}
                        >
                            <AnimatedButton
                                as={Link}
                                to="contact" 
                                smooth={true} 
                                duration={500}
                                className="home-button home-button--primary"
                            >
                                Connect with me
                            </AnimatedButton>
                        </motion.div>


                        <motion.div
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            style={{ 
                                cursor: 'pointer',
                                position: 'relative'
                            }}
                        >
                            <AnimatedButton
                                as={Link}
                                to="resume" 
                                smooth={true} 
                                duration={500}
                                className="home-button home-button--secondary"
                            >
                                My Resume
                            </AnimatedButton>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}


export default Home
