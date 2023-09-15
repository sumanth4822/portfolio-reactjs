import React from 'react'
import Navbar from '../components/NAVBAR/Navbar';
import Footer from '../components/Footer/Footer'
import Heroimg2 from '../components/Heroimg2/Heroimg2';
import ProjectCard from '../components/PROJECTS/ProjectCard';

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS." text="Some of my recent works."/>
      <ProjectCard />
      <Footer />
    </div>
  )
}

export default Project