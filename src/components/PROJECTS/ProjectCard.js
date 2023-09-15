import React from 'react'
import './ProjectCard.css'
import {NavLink} from 'react-router-dom';
import Calculator from '../images/Calculator.png'
import LoginRegister from '../images/Login-Register.png'

const ProjectCard = () => {
  return (
    <div className='project'>
        <h1 className='project-heading'>PROJECTS</h1>
        <div className='project-container'>
            <div className='project-card'>
                <img src='https://images.ctfassets.net/aq13lwl6616q/3MYbjVb8bVTFANpHgIaAS3/1d3fb347958e80881e77146e08cc7c4e/20_Vanilla_JavaScript_projects.png?w=500&fm=webp' alt='ProjectIMGLoading'/>
                <h2 className='project-title'>12 JAVASCRIPT PROJECTS</h2>
                <div className='pro-details'>
                    <p>Here I have created 12 simple JS projects using HTML and CSS.It contains various types of projects,each different from eachother.</p>
                </div>
                <div className='pro-btn'>
                    <NavLink to='https://github.com/sumanth4822/16-days-coding-challenge-html-css-js-'>
                        <button className='btn btn1'>GITHUB</button>
                    </NavLink>
                </div>
            </div>
            <div className='project-card'>
                <img src={Calculator} alt='ProjectIMGLoading'/>
                <h2 className='project-title'>CALCULATOR USING REACTJS</h2>
                <div className='pro-details'>
                    <p>I created a simple calculator in React that handles input changes, user interaction, and complex calculations.It focuses on some of the most important React concepts, such as re-renders, state management, and breaking down your code into components. </p>
                </div>
                <div className='pro-btn'>
                    <NavLink to='https://github.com/sumanth4822/calculator-using-reactjs'>
                        <button className='btn'>GITHUB</button>
                    </NavLink>
                </div>
            </div>
            <div className='project-card'>
                <img src={LoginRegister} alt='ProjectIMGLoading'/>
                <h2 className='project-title'>LOGIN/REGISTER PAGE</h2>
                <div className='pro-details'>
                    <p>I created a simple login/register page where we can toggle between two pages.It has a form containing email,password and login button in the login page. In resgister page it has name,email,password to create an account.</p>
                </div>
                <div className='pro-btn'>
                    <NavLink to='https://github.com/sumanth4822/login-register-page'>
                        <button className='btn btn3'>GITHUB</button>
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard