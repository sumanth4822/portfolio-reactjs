import React from 'react'
import './Skills.css'
import {FaConnectdevelop,FaReact} from 'react-icons/fa'
import {AiOutlineAppstoreAdd} from 'react-icons/ai'

const Skills = () => {
  return (
    <div className='skills'>
        <h1>SKILLS</h1>
        <div className='card-container'>
            <div className='card'>
                
                <section><FaConnectdevelop size={30} color='white'/></section>
                <h2>Web Development</h2><br />
                <p>Skilled in a range of technologies including frontend development,web application development. Very much eager to gain experience corporate where I can deliver good quality,dynamic and user-friendly websites according to client requirements.</p>
            </div>
            <div className='card'>
                
                <section><AiOutlineAppstoreAdd size={30} color='white'/></section>
                <h2>App Development</h2><br />
                <p>Skilled in a range of technologies including frontend development,application development and resposnive designs. Very much eager to gain experience in real world projects where I can deliver better quality,dynamic and user-friendly appication according to client requirements.</p>
            </div>
            <div className='card'>
                
                <section><FaReact size={30} color='white'/></section>
                <h2>ReactJS</h2><br />
                <p>A developer responsible for the design and implementation of user interfaces (UIs) and UI components using React, a front-end JavaScript library. And also to develop and maintain UIs for web and mobile apps. Gained high-level expertise using React and a deep understanding of all stages of the software development life cycle.To write, test, debug, and implement code to meet user requirements. They should have significant experience using JavaScript, good math skills, and a good working knowledge of debugging tools. </p>
            </div>
        </div>
    </div>
  )
}

export default Skills;