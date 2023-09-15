import React from 'react'
import './HeroImg.css'
import {Link} from 'react-router-dom'
import IntroImg from '../images/INTRO.jpg'
import pdf from '../pdf/Sumanth_Resume.pdf'
import {BiLogoFacebookSquare,BiLogoInstagram,BiLogoLinkedinSquare} from 'react-icons/bi';

const Heroimg = () => {
    const handleClick = () => {
    window.open(pdf)    
    }
    
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={IntroImg} alt="imageloading"></img>
        </div>
        <div className='content'>
            <p>HI, I'M SUMANTH GS</p>
            <h1>React Front End Developer</h1>
            <div className='buttons'>
                <Link className='btn' onClick={handleClick} target='_blank'>DOWNLOAD CV</Link>
                <Link to='/contact' className='btn btn-light'>CONTACT</Link>
            </div>
            <div className='social'>
                <h3>SOCIAL LINKS</h3>
                <div className='social-logo'>
                <Link to="https://www.facebook.com/KINGDAVID.998"><BiLogoFacebookSquare /></Link>
                <Link to="https://www.instagram.com/_sumanth02_/"><BiLogoInstagram /></Link>
                <Link to="https://www.linkedin.com/in/sumanth-gs-59006b284/"><BiLogoLinkedinSquare /></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Heroimg;