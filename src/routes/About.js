import React from 'react'
import Navbar from '../components/NAVBAR/Navbar';
import Footer from '../components/Footer/Footer';
import Aboutphoto from '../components/Aboutphoto/Aboutphoto';
import Aboutcontent from '../components/ABOUT/Aboutcontent';
import Skills from '../components/Skills/Skills';


const About = () => {
  return (
    <div>
      <Navbar />
      <Aboutphoto heading="ABOUT." text="Get to know me more."/>
      <Aboutcontent />
      <Skills />
      <Footer />
    </div>
  )
}

export default About;