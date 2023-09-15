import React, { Component } from 'react'
import './ContactComponent.css'

class Contactphoto extends Component{
    render(){
        return(
            <div className='hero2-img'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
          )
        }
        
        }
 

export default Contactphoto;