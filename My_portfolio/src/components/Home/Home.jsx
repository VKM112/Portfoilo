import React, { useRef } from 'react'
import Profile_img from '../../assets/Profile.jpg'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'


const Home = ({ homeImageRef }) => {
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
                paddingTop: '80px'
            }}
        >
            <motion.div 
                style={{
                    display: 'flex',
                    flexDirection: window.innerWidth >= 1024 ? 'row' : 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: window.innerWidth >= 1024 ? '80px' : '30px',
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
                        width: window.innerWidth >= 1024 ? '380px' : window.innerWidth >= 640 ? '320px' : '290px',
                        height: window.innerWidth >= 1024 ? '500px' : window.innerWidth >= 640 ? '420px' : '350px',
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
                        alignItems: window.innerWidth >= 1024 ? 'flex-start' : 'center',
                        textAlign: window.innerWidth >= 1024 ? 'left' : 'center'
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
                                fontSize: window.innerWidth >= 1024 ? '40px' : window.innerWidth >= 640 ? '35px' : '28px',
                                fontWeight: 600,
                                marginBottom: '0px'
                            }}
                            variants={textVariants}
                        >
                            Hi I'm{' '}
                            <span style={{
                                background: 'linear-gradient(270deg, #DF8908 10%, #B415FF 100%)',
                                backgroundSize: '200% 200%',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                animation: 'gradient-shift 3s ease infinite'
                            }}>
                                Venkata Krishna Mohan
                            </span>
                            ,
                        </motion.h1>
                        <motion.p 
                            style={{
                                fontSize: window.innerWidth >= 1024 ? '20px' : '18px',
                                lineHeight: '30px',
                                margin: 0
                            }}
                            variants={textVariants}
                        >
                            Motivated and skilled Web Developer
                        </motion.p>
                        <motion.p 
                            style={{
                                fontSize: window.innerWidth >= 1024 ? '20px' : '18px',
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
                            flexDirection: window.innerWidth >= 640 ? 'row' : 'column',
                            gap: window.innerWidth >= 640 ? '50px' : '20px',
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
                            <Link 
                                to="contact" 
                                smooth={true} 
                                duration={500}
                                style={{
                                    display: 'block',
                                    padding: '15px 25px',
                                    borderRadius: '50px',
                                    background: 'linear-gradient(264deg, orange -5.09%, rgb(235, 111, 228) 100%)',
                                    backgroundSize: '200% 200%',
                                    border: '2px solid white',
                                    fontSize: '25px',
                                    fontWeight: 600,
                                    transition: 'all 0.3s ease',
                                    textDecoration: 'none',
                                    animation: 'gradient-shift 3s ease infinite',
                                    boxShadow: '0px 0px 0px rgba(236, 72, 153, 0)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = '0px 5px 20px rgba(236, 72, 153, 0.6)'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = '0px 0px 0px rgba(236, 72, 153, 0)'
                                }}
                            >
                                Connect with me
                            </Link>
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
                            <Link 
                                to="resume" 
                                smooth={true} 
                                duration={500}
                                style={{
                                    display: 'block',
                                    padding: '15px 60px',
                                    borderRadius: '50px',
                                    border: '2px solid white',
                                    fontSize: '25px',
                                    fontWeight: 600,
                                    transition: 'all 0.3s ease',
                                    textDecoration: 'none',
                                    boxShadow: '0px 0px 0px rgba(236, 72, 153, 0)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = '0px 5px 20px rgba(236, 72, 153, 0.6)'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = '0px 0px 0px rgba(236, 72, 153, 0)'
                                }}
                            >
                                My Resume
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>

            <style>
                {`
                    @keyframes gradient-shift {
                        0% {
                            background-position: 0% 50%;
                        }
                        50% {
                            background-position: 100% 50%;
                        }
                        100% {
                            background-position: 0% 50%;
                        }
                    }
                `}
            </style>
        </div>
    )
}


export default Home
