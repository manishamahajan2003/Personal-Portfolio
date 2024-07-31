// eslint-disable-next-line no-unused-vars
import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpg'

const About = () => {
  return (
    <div>
    <div id='about' className='about'>
          <div className="about-title">
              <h1>About Me</h1>
              <img src={theme_pattern} alt="" />
          </div>
          <div className="about-sections">
              <div className="about-left">
                  <img src={profile_img} alt="" />
              </div>
              <div className="about-right">
                  <div className="about-para">
                      <p>Aspiring Full-Stack Developer with a comprehensive background in both front-end and back-end technologies. Proficient in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB, with hands-on experience through a 9-month intensive course and multiple projects. Passionate about creating seamless, user-friendly web applications and continuously learning new technologies to enhance my skill set. </p>
                      
                  </div>
                  <div className="about-skills">
                      <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "90%" }} /> </div>
                      <div className="about-skill"><p>JavaScript</p><hr style={{ width: "70%" }} /> </div>
                      <div className="about-skill"><p>React JS</p><hr style={{ width: "60%" }} /> </div>
                      <div className="about-skill"><p>Node JS</p><hr style={{ width: "80%" }} /> </div>
                      <div className="about-skill"><p>Express JS</p><hr style={{ width: "70%" }} /> </div>
                      <div className="about-skill"><p>MongoDB</p><hr style={{ width: "80%" }} /> </div>
                      <div className="about-skill"><p>DSA</p><hr style={{ width: "50%" }} /> </div>
                      
                 </div>
                 </div>
    </div>
    </div>
    <div>
    <h1 className='about-achievement-title'>Achievements</h1>
        <div className="about-achievements">
        <div className="about-achievement">
            <h1>Hackathon 2023</h1>
            <h2>Role: Group Leader </h2>
            <p>Project: Led a team to develop an innovative app using Java,
 machine learning, and XML. <hr />
Responsibilities: Coordinated team efforts, managed project
 timelines, and ensured effective collaboration among team members.
<hr />
Outcome: Successfully created a functional app that <hr />
 [briefly mention any notable features or impact of the app].</p>
        </div>

        <div className="about-achievement">
            <h1>Full-Stack Development Certification:</h1>
            <h2>9-Month Full-Stack Development Course</h2>
            <p>
Institution: Skill Academy <hr />
Skills Acquired: HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, Data Structures, and Algorithms (DSA). <hr />
Projects Completed: Developed 5+ projects, including [mention one or two significant projects or their key features]. <hr />
Highlights: Gained comprehensive knowledge of front-end and back-end development, and enhanced problem-solving skills through hands-on project work.</p>
        </div>
        
        
    </div>
    
    
    </div>
    </div>
  )
}

export default About