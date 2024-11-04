import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Testimonial from './Components/Testimonial'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Blog from './Components/Blog'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Blog/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App