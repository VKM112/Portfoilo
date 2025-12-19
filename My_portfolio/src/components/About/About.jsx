import React, { useRef, useEffect, useState } from 'react'
import Profile2 from '../../assets/Profile2.jpg'
import { motion, useScroll, useTransform } from 'framer-motion'
import './About.css'

const About = ({ homeImageRef }) => {
    const containerRef = useRef(null)
    const aboutImageRef = useRef(null)
    const fallbackHomeImageRef = useRef(null)
    const heroImageRef = homeImageRef ?? fallbackHomeImageRef
    const [imagePositions, setImagePositions] = useState({ start: null, end: null })

    useEffect(() => {
        if (typeof window === 'undefined') {
            return
        }

        const updatePositions = () => {
            if (heroImageRef?.current && aboutImageRef?.current) {
                const homeRect = heroImageRef.current.getBoundingClientRect()
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

        const timeoutId = window.setTimeout(updatePositions, 100)
        window.addEventListener('resize', updatePositions)
        window.addEventListener('scroll', updatePositions)

        return () => {
            window.clearTimeout(timeoutId)
            window.removeEventListener('resize', updatePositions)
            window.removeEventListener('scroll', updatePositions)
        }
    }, [heroImageRef])

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    })

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

    const homeImageShadow = useTransform(
        scrollYProgress,
        [0, 0.3, 0.5],
        [
            '0px 2px 10px rgba(255, 255, 255, 0.5)',
            '0px 1px 5px rgba(255, 255, 255, 0.2)',
            '0px 0px 0px rgba(255, 255, 255, 0)'
        ]
    )

    const aboutImageShadow = useTransform(
        scrollYProgress,
        [0.3, 0.5, 0.7],
        [
            '0px 0px 0px rgba(255, 255, 255, 0)',
            '0px 2px 15px rgba(255, 255, 255, 0.4)',
            '0px 3px 20px rgba(255, 255, 255, 0.5)'
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
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    }

    useEffect(() => {
        if (!heroImageRef?.current) {
            return
        }

        const unsubscribe = homeImageShadow.on('change', (latest) => {
            heroImageRef.current.style.boxShadow = latest
        })
        return () => unsubscribe()
    }, [heroImageRef, homeImageShadow])

    return (
        <section ref={containerRef} id='about' className='about'>
            {imagePositions.start && imagePositions.end && (
                <motion.div
                    className='about-glow'
                    style={{
                        opacity: glowOpacity,
                        scale: glowScale,
                        x: glowX,
                        y: glowY
                    }}
                />
            )}

            <motion.div
                className='about-title'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h1 className='animated-gradient'>About Me</h1>
            </motion.div>

            <motion.div
                className='about-sections'
                variants={containerVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, margin: '-100px' }}
            >
                <motion.div className='about-left' variants={itemVariants}>
                    <motion.img
                        ref={aboutImageRef}
                        src={Profile2}
                        alt='Profile portrait'
                        className='about-profile'
                        style={{ boxShadow: aboutImageShadow }}
                    />
                </motion.div>

                <motion.div className='about-right' variants={itemVariants}>
                    <motion.div className='about-para' variants={containerVariants}>
                        <motion.p variants={itemVariants}>
                            Proficient in Python, Django, JavaScript, and React.js, with expertise in front-end development and building dynamic, responsive user interfaces.
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            Experienced in automation using UiPath, data scraping, and developing intuitive, user-friendly solutions.
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            Passionate about problem-solving, continuous learning, and contributing to dynamic teams to drive technological innovation.
                        </motion.p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default About
