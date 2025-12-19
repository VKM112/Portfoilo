import React from 'react'
import { motion } from 'framer-motion'
import ChatApp from '../../assets/chatApp.png'
import TaskApp from '../../assets/taskApp.png'
import './Projects.css'

const projects = [
    {
        title: 'Mini Team Chat Application – Full Stack (MERN + Socket.IO)',
        date: 'Nov 2025',
        link: 'https://team-chat-application-frontend.onrender.com/login',
        image: ChatApp,
        description: [
            'Built a real-time team chat application using the MERN stack with Socket.IO for instant messaging.',
            'Implemented JWT-based authentication and role-based channel access for secure communication.',
            'Designed a scalable real-time architecture ensuring low-latency and reliable message delivery.'
        ]
    },
    {
        title: 'Collaborative Task Manager – Full Stack (MERN + Socket.IO)',
        date: 'Nov 2025',
        link: 'https://collaborative-task-manager-frontend-psu2.onrender.com/',
        image: TaskApp,
        description: [
            'Built a collaborative task management platform where users can create, assign, and manage tasks within teams.',
            'Implemented real-time updates using Socket.IO, ensuring instant synchronization across users.',
            'Designed team-based chat rooms, where tasks are visible only within their respective team chats.',
            'Enabled team creation and role-based task assignment for better collaboration.'
        ]
    }
]

const Projects = () => {
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

    return (
        <section id='projects' className='projects'>
            <motion.div
                className='projects-title'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h1 className='animated-gradient'>Projects</h1>
            </motion.div>

            <motion.div
                className='projects-grid'
                variants={containerVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, margin: '-100px' }}
            >
                {projects.map((project) => (
                    <motion.a
                        key={project.title}
                        href={project.link}
                        target='_blank'
                        rel='noreferrer'
                        className='project-card'
                        variants={itemVariants}
                    >
                        <div className='project-media'>
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className='project-content'>
                            <div className='project-header'>
                                <h3>{project.title}</h3>
                                <span className='project-date'>{project.date}</span>
                            </div>
                            <ul className='project-list'>
                                {project.description.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.a>
                ))}
            </motion.div>
        </section>
    )
}

export default Projects
