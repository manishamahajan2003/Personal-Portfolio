// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <p>Let's connect! Subscribe to my email list to stay updated on my latest projects and developments. </p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your Email' />
            </div>
            <div className="footer-subscribe">
                Subscribe
            </div>
        </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">2024 Manisha Mahajan. All Rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
