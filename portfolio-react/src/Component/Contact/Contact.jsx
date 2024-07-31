// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "219e590e-570c-46ae-afda-5da0953b6c37");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  
  return (
    <div onSubmit={onSubmit} id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm excited to connect and explore how my skills and experiences can contribute to your projects.</p>
        <div className="contact-details">
          <img src={mail_icon} alt="" /><p>manumahajan2003@gmail.com</p>
        </div>
        <div className="contact-details">
           <img src={call_icon} alt="" /><p>+91 9325457393</p>
        </div>
        <div className="contact-details">
           <img src={location_icon} alt="" /><p>Jalgaon Maharashra-425001</p>
        </div>
        </div>
          
        <form className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter Your Name' name='name' />  
          <label htmlFor="">Your Email</label>
          <input type="text" placeholder='Enter Your Email' name='Email'/>
          <label htmlFor="">Write Your Message Here</label>
          <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
          <button type='submit' className="contact-submit">Submit Now</button>
          </form>
    </div>
    </div>           
  )
}  

export default Contact
