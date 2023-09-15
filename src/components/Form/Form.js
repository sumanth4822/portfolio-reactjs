import React, { useRef, useState } from 'react'
import './Form.css';
import emailjs from '@emailjs/browser';


const Form = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [subject,setSubject] = useState('');
    const [message,setMessage] = useState('');

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_reow1j4', 'template_dp8o31i', form.current, 'aoyWWBE7-m2XK9A5V')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });


        }
    const handleAlert = () => {
        alert("Message Sent Successfully")
        window.location.reload();
    }

  return (
    <div className='from'>
        <form autoComplete='off' onSubmit={sendEmail} ref={form}> 
            <label>Your Name</label>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} name='from_name'/>
            <label>Your Email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} name='from_email'/>
            <label>Subject</label>
            <input type="text" onChange={(e) => setSubject(e.target.value)} value={subject} name='subject'/>
            <label>Message</label>
            <textarea rows={6} placeholder='Type Your Message Here....'onChange={(e) => setMessage(e.target.value)} value={message} name='message'/>
            <button className='btn' type='submit' onClick={handleAlert}>Submit</button>
        </form>
    </div>
  )
}

export default Form