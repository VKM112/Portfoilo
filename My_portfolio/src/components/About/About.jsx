import React, { useRef, useEffect, useState } from 'react'
import Stars from '../../assets/Stars.png'
import Profile2 from '../../assets/Profile2.jpg'
import { motion, useScroll, useTransform } from 'framer-motion'

const About = ({ homeImageRef }) => {
    const containerRef = useRef(null)
    const aboutImageRef = useRef(null)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [imagePositions, setImagePositions] = useState({ start: null, end: null })

    // Update window width on resize
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Calculate image positions
    useEffect(() => {
        const calculatePositions = () => {
            if (homeImageRef?.current && aboutImageRef?.current) {
                const homeRect = homeImageRef.current.getBoundingClientRect()
                const aboutRect = aboutImageRef.current.getBoundingClientRect()
                
                setImagePositions({
                    start: {
                        x: homeRect.left + homeRect.width / 2,
                        y: homeRect.top + homeRect.height / 2 + window.scrollY
                    },
                    end: {
                        x: aboutRect.left + aboutRect.width / 2,
                        y: aboutRect.top + aboutRect.height / 2 + window.scrollY
                    }
                })
            }
        }

        setTimeout(calculatePositions, 100)
        window.addEventListener('resize', calculatePositions)
        window.addEventListener('scroll', calculatePositions)
        
        return () => {
            window.removeEventListener('resize', calculatePositions)
            window.removeEventListener('scroll', calculatePositions)
        }
    }, [homeImageRef, aboutImageRef])

    // Track scroll progress
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    // Animate glow ball position
    const glowX = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        imagePositions.start && imagePositions.end
            ? [imagePositions.start.x, imagePositions.end.x, imagePositions.end.x]
            : [0, 0, 0]
    )

    const glowY = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        imagePositions.start && imagePositions.end
            ? [imagePositions.start.y, imagePositions.end.y, imagePositions.end.y]
            : [0, 0, 0]
    )

    const glowOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 1, 1, 1, 0])
    const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.5, 1.2])

    // HOME IMAGE: Shadow fades out when scrolling down, comes back when scrolling up
    const homeImageShadow = useTransform(
        scrollYProgress,
        [0, 0.3, 0.5],
        [
            "0px 2px 10px rgba(255, 255, 255, 0.5)",
            "0px 1px 5px rgba(255, 255, 255, 0.2)",
            "0px 0px 0px rgba(255, 255, 255, 0)"
        ]
    )

    // ABOUT IMAGE: Simple, lighter shadow that appears gradually
    const aboutImageShadow = useTransform(
        scrollYProgress,
        [0.3, 0.5, 0.7],
        [
            "0px 0px 0px rgba(255, 255, 255, 0)",
            "0px 2px 15px rgba(255, 255, 255, 0.4)",
            "0px 3px 20px rgba(255, 255, 255, 0.5)"
        ]
    )

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }

    const skills = [
        { name: 'HTML & CSS', width: '60%' },
        { name: 'React Js', width: '50%' },
        { name: 'JavaScript', width: '50%' },
        { name: 'Python', width: '60%' },
        { name: 'Django', width: '50%' }
    ]

    const isMobile = windowWidth < 768
    const isTablet = windowWidth >= 768 && windowWidth < 1024

    // Apply home image shadow dynamically
    useEffect(() => {
        if (homeImageRef?.current) {
            const unsubscribe = homeImageShadow.on('change', (latest) => {
                homeImageRef.current.style.boxShadow = latest
            })
            return () => unsubscribe()
        }
    }, [homeImageRef, homeImageShadow])

    return (
        <div 
            ref={containerRef}
            id='about' 
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: isMobile ? '60px' : '80px',
                margin: isMobile ? '80px 20px' : isTablet ? '100px 50px' : '80px 170px',
                marginTop: isMobile ? '150px' : '200px',
                paddingBottom: '100px',
                paddingTop: '80px',
                position: 'relative'
            }}
        >
            {/* White Animated Glow Ball */}
            {imagePositions.start && imagePositions.end && (
                <motion.div
                    style={{
                        position: 'fixed',
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        pointerEvents: 'none',
                        zIndex: 50,
                        filter: 'blur(80px)',
                        background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 30%, rgba(255,255,255,0) 70%)',
                        opacity: glowOpacity,
                        scale: glowScale,
                        left: 0,
                        top: 0,
                        x: glowX,
                        y: glowY,
                        transform: 'translate(-50%, -50%)'
                    }}
                />
            )}

            {/* About Title */}
            <motion.div 
                style={{ 
                    position: 'relative',
                    textAlign: 'center'
                }}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h1 style={{
                    background: 'linear-gradient(264deg, rgb(247, 76, 64) -6.09%, rgb(235, 111, 228) 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    position: 'relative',
                    padding: '0px 30px',
                    fontSize: isMobile ? '48px' : '60px',
                    fontWeight: 600,
                    zIndex: 1
                }}>
                    About Me
                </h1>
                <img 
                    src={Stars}
                    alt="Stars"
                    style={{
                        position: 'absolute',
                        top: isMobile ? '30px' : '45px',
                        left: isMobile ? '50%' : '255px',
                        transform: isMobile ? 'translateX(-50%)' : 'none',
                        zIndex: -1,
                        width: '130px',
                        height: '70px'
                    }}
                />
            </motion.div>

            {/* About Sections */}
            <motion.div 
                style={{
                    display: 'flex',
                    flexDirection: isMobile || isTablet ? 'column' : 'row',
                    gap: '40px',
                    alignItems: isMobile || isTablet ? 'center' : 'flex-start'
                }}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Left - Profile Image */}
                <motion.div variants={itemVariants}>
                    <motion.img 
                        ref={aboutImageRef}
                        src={Profile2}
                        alt="Profile"
                        style={{
                            marginTop: '40px',
                            width: isMobile ? '300px' : '410px',
                            height: isMobile ? 'auto' : '400px',
                            borderRadius: '8px',
                            objectFit: 'cover',
                            boxShadow: aboutImageShadow
                        }}
                    />
                </motion.div>

                {/* Right - Content */}
                <motion.div 
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: isMobile || isTablet ? '60px' : '80px',
                        marginLeft: isMobile || isTablet ? '0' : '50px',
                        alignItems: isMobile || isTablet ? 'center' : 'flex-start'
                    }}
                    variants={itemVariants}
                >
                    {/* About Paragraphs */}
                    <motion.div 
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            fontSize: isMobile ? '20px' : '24px',
                            gap: '20px',
                            fontWeight: 500,
                            textAlign: isMobile || isTablet ? 'center' : 'left'
                        }}
                        variants={containerVariants}
                    >
                        <motion.p variants={itemVariants}>
                            Proficient in Python, Django, JavaScript, and React.js, with expertise in front-end development and building dynamic, responsive user interfaces
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            Experienced in automation using UiPath, data scraping and developing intuitive, user-friendly solutions
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            Passionate about problem-solving, continuous learning, and contributing to dynamic teams to drive technological innovation
                        </motion.p>
                    </motion.div>

                    {/* Skills Section */}
                    <motion.div 
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            width: '100%'
                        }}
                        variants={containerVariants}
                    >
                        <motion.h1 
                            style={{
                                fontSize: isMobile ? '35px' : '40px',
                                fontWeight: 600,
                                textAlign: isMobile || isTablet ? 'center' : 'left'
                            }}
                            variants={itemVariants}
                        >
                            Skills
                        </motion.h1>

                        <motion.div 
                            style={{
                                display: isMobile || isTablet ? 'grid' : 'flex',
                                flexDirection: 'column',
                                gridTemplateColumns: isMobile || isTablet ? 'repeat(auto-fit, minmax(200px, 1fr))' : 'none',
                                gap: '20px'
                            }}
                            variants={containerVariants}
                        >
                            {skills.map((skill, index) => (
                                <motion.div 
                                    key={index}
                                    style={{
                                        display: 'flex',
                                        flexDirection: isMobile || isTablet ? 'column' : 'row',
                                        gap: isMobile || isTablet ? '10px' : '50px',
                                        alignItems: isMobile || isTablet ? 'flex-start' : 'center',
                                        transition: 'all 0.3s ease'
                                    }}
                                    variants={itemVariants}
                                >
                                    <p style={{
                                        minWidth: '150px',
                                        fontSize: isMobile ? '20px' : '24px',
                                        fontWeight: 500
                                    }}>
                                        {skill.name}
                                    </p>
                                    <motion.hr 
                                        style={{
                                            outline: 'none',
                                            border: 'none',
                                            width: '0%',
                                            height: '8px',
                                            borderRadius: '50px',
                                            background: 'linear-gradient(264deg, orange -5%, rgb(252, 98, 218) 100%)'
                                        }}
                                        initial={{ width: '0%' }}
                                        whileInView={{ width: skill.width }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: index * 0.1 }}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default About
