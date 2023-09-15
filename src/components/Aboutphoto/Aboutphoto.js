import React, { Component } from 'react'
import './Aboutphoto.css'

class Aboutphoto extends Component{
    render(){
        return(
            <div className='hero1-img'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
          )
        }
        
        }
 

export default Aboutphoto;