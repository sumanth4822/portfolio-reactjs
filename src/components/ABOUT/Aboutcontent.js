import './Aboutcontent.css';
import React from 'react'
import React1 from '../images/React1.webp'
import React2 from '../images/React2.png'

const Aboutcontent = () => {
  return (
    <div className='about'>
        <div className='left'>
        <h1>Who am I?</h1>
        <p>I am a collaborative and creative front-end developer, experienced in HTML, CSS, JavaScript,React and various front-end frameworks.I develop dynamic and responsive interfaces that provide an optimal user experience.</p>
        </div>
        <div className='right'> 
            <div className='img-container'>
                <div className='top'>
                    <img src={React1} className='img' alt='aboutIMG1'/>
                </div>
                <div className='bottom'>
                    <img src={React2} className='img' alt='aboutIMG2'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutcontent;