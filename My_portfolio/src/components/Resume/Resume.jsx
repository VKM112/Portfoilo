import React from 'react'
import './Resume.css'

const Resume = () => {
    return (
        <div id='resume'>
            <h1 id='head'>Resume</h1><br /><br />
            <div className='resume'>
                <div className='name'>
                    <h1>Matha Venkata Krishna Mohan</h1><br />
                    <hr />
                    <br />
                </div>
                <div className='body'>
                    <div className='left-section'>
                        <div className='bold'>CONTACT</div>
                        <br />
                        <div className='ud'>Phone no:</div> +91 7396112425<br /><br />
                        <div className='ud'>Email:</div> vkmohan112@gmail.com<br /><br />
                        <div className='ud'>LinkedIn:</div>
                        <a href='https://www.linkedin.com/in/krishnamohan2002' target="_blank" rel="noopener noreferrer">
                            www.linkedin.com/in/krishnamohan2002
                        </a>
                        <br /><br />

                        <div className='bold'>EDUCATION</div><br />
                        <div className='ud'>B-tech in Computer Science</div>
                        Nadimpalli Satyanaryana Raju Institute of Technology(NSRIT), Sontyam, Visakhapatnam<br /><br />
                        June 2021 - June 2024<br /><br />

                        <div className='ud'>Diploma in Mechanical Engineering</div>
                        Visakha Technical Campus, Narava, Visakhapatnam<br /><br />
                        June 2016-2020<br /><br />

                        <div className='ud'>High School</div>
                        Chalapathi Public School, Gajuwaka, Visakhapatnam<br /><br />
                        June 2016<br /><br />

                        <div className='bold'>KEY SKILLS</div><br />
                        <div className='ud'>Programming Languages:</div> Python<br /><br />
                        <div className='ud'>Web Development:</div> HTML, CSS, JavaScript, React.js<br /><br />
                        <div className='ud'>RPA Tools:</div> UiPath<br /><br />

                        <div className='bold'>SOFT SKILLS:</div><br />
                        Communication<br />
                        Team work<br />
                        Problem-solving<br /><br />
                    </div>

                    <div className='right-section'>
                        <div className='bold'>INTRODUCTION</div><br />
                        <p>
                            Motivated and skilled Full Stack Developer with hands-on experience in web application development.
                            Proficient in Python, Django, JavaScript, and React.js, with expertise in front-end development and building dynamic, responsive UIs.
                            Experienced in automation using UiPath, data scraping, and developing user-friendly solutions.
                            Passionate about problem-solving, continuous learning, and contributing to dynamic teams to drive technological innovation.
                        </p><br />

                        <div className='bold'>PROJECTS:</div><br />

                        <div className='ud'>Waste Management Application:</div>
                        Developed a mobile app in Android Studio as an undergraduate capstone project with a team of five.
                        Integrated Google Maps API to locate nearby dustbins and promote eco-friendly practices.<br /><br />

                        <div className='ud'>Portfolio Web Application:</div>
                        Built a personal portfolio using Python and Django with contact functionalities and project showcases.<br /><br />

                        <div className='ud'>Data Scraping Automation (RPA):</div>
                        Automated data scraping using UiPath with Excel integration and CSV file handling.<br /><br />

                        <div className='bold'>TECHNICAL SKILLS:</div><br />
                        Programming Languages: Python (Basics, OOP, Advanced)<br />
                        Data Science: NumPy, Pandas<br />
                        Web Dev: HTML, CSS, JS, Django, React.js<br />
                        RPA: UiPath (Bots, scraping, CSV handling)<br />
                        Learning: Continuously exploring new tools<br /><br />

                        <div className='bold'>INTERNSHIPS AND CERTIFICATIONS:</div><br />
                        <div className='ud'>Front-End Intern – Demy Software Solutions:</div>
                        • Built clone websites with HTML, CSS, JS<br /><br />

                        <div className='ud'>Python Full Stack Intern – Brain-o-Vision:</div>
                        • Learned full-stack fundamentals and Django<br />
                        • Developed mini-projects<br /><br />

                        <div className='ud'>Software Development Trainee – AMCAT:</div>
                        • Completed online assessment in core CS concepts<br /><br />

                        <div className='bold'>HOBBIES & INTERESTS:</div><br />
                        • Solving coding challenges (LeetCode, HackerRank)<br />
                        • Exploring automation & AI<br />
                        • Game development using Unreal Engine 5<br /><br />

                        <div className='bold'>OTHER SKILLS:</div><br />
                        <div className='ud'>Graphic Design:</div> Adobe Photoshop<br /><br />
                        <div className='ud'>Video Editing:</div> Experience with editing tools<br /><br />
                        <div className='ud'>Microsoft Office:</div> MS Word, Excel, PowerPoint<br /><br />
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default Resume
