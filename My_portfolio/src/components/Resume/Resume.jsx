import React from 'react'
import { motion } from 'framer-motion'
import AnimatedButton from '../UI/AnimatedButton'
import './Resume.css'

const Resume = () => {
    return (
        <div id='resume'>
            <motion.div
                className='resume-title'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h1 className='animated-gradient'>Resume</h1>
            </motion.div>
            
            <div className="pdf-container">
                <iframe 
                    src="/MohanResume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH&zoom=page-width" 
                    title="Mohan Resume"
                    loading="lazy"
                    className="pdf-viewer"
                >
                    <p>Your browser does not support PDFs. <a href="/MohanResume.pdf">Download the PDF</a></p>
                </iframe>
            </div>
            <div className="download-section">
                <AnimatedButton as="a" href="/MohanResume.pdf" download="MohanResume.pdf" className="download-btn">
                    Download Resume
                </AnimatedButton>
            </div>
        </div>
    )
}

export default Resume
