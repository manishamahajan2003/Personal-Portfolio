// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import About from './Component/About/About'
import Services from './Component/Services/Services'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
