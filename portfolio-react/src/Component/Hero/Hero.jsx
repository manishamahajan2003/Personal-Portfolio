// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Hero.css'
import profile_img_img from '../../assets/profile_img_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/resume.pdf'


const Hero = () => {
  function openResume() {
    window.open(resume, '_blank');
  }
  return (
    <div id='hero' className='hero'>
      <img src={profile_img_img} alt="" />
      <h1><span>I’m Manisha Mahajan, </span>Fullstack Developer</h1>
      <p>Hello, I’m Manisha! I’m passionate about Fullstack development. I’m now looking for a junior Fullstack developer position as I recently learned how to code by myself.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume" onClick={openResume}>My Resume</div>
        </div>
    </div>
  )
}

export default Hero
