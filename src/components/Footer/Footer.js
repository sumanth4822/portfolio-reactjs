import React from 'react'
import {FaHome, FaMailBulk, FaPhone, FaRegCopyright, FaRegSmile} from 'react-icons/fa';
import {BiLogoFacebookSquare,BiLogoInstagram,BiLogoLinkedinSquare} from 'react-icons/bi';
import {Link} from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            <div>
              <p>Bengaluru,Karnataka</p>
              <p>India</p>
            </div>
          </div>
          
          <div className='phone'>
            <h4> <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>+91 9663694822</h4>
          </div>
          <div className='email'>
            <h4> <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>sumanth009sada@gmail.com</h4>
          </div>
        </div>
        <div className='right'>
        <h4>ABOUT</h4>
        <p>Hi,I am SUMANTH G S,Welcome to my portfolio.Feel free to explore and if necessary please contact by navigating to CONTACT section. <FaRegSmile /></p>
        <div className='social-logo'>
                <Link to="https://www.facebook.com/KINGDAVID.998"><BiLogoFacebookSquare /></Link>
                <Link to="https://www.instagram.com/_sumanth02_/"><BiLogoInstagram /></Link>
                <Link to="https://www.linkedin.com/in/sumanth-gs-59006b284/"><BiLogoLinkedinSquare /></Link>
                </div>
                <p>COPYRIGHT <FaRegCopyright/> SUMANTH GS.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer