import React from 'react'
import './About.css'
import Stars from '../../assets/Stars.png'
import Profile2 from '../../assets/Profile2.jpg'

const About = () => {
return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About Me</h1>
            <img id='stars' src={Stars}></img>
        </div>
        <div className='about-sections'>
            <div className='about-left'>
                <img id='profile2' src={Profile2}></img>
            </div>
            <div className='about-right'>
                <div className='about-para'>
                    <p>Proficient in Python , Django , JavaScript , and React .js, with expertise in front-end development and building dynamic, responsive user interfaces</p>
                    <p>Experienced in automation using UiPath , data scraping and developing intuitive, user-friendly solutions</p>
                    <p>Passionate about problem-solving, continuous learning, and contributing to dynamic teams to drive technological innovation</p>
                </div>
                <div className='about-skills'>
                    <h1>Skills</h1>
                    <div id='list'>
                        <div className='skill'><p>HTML&CSS</p><hr style={{width:"60%"}}/></div>
                        <div className='skill'><p>React Js</p><hr style={{width:"50%"}}/></div>
                        <div className='skill'><p>JavaScript</p><hr style={{width:"50%"}}/></div>
                        <div className='skill'><p>Python</p><hr style={{width:"60%"}}/></div>
                        <div className='skill'><p>Django</p><hr style={{width:"50%"}}/></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default About
