import React, { useRef, useState } from 'react'
import './Form.css';
import emailjs from '@emailjs/browser';
import SuccessIMG from '../images/success.webp'


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
      e.target.reset(); 
  };
    const handleAlert = (e) => {
        window.dialog.showModal();
        setTimeout(() => {
            window.dialog.close();
            window.location.reload();
        },4000);
        
    }

  return (
    <>
    <div className='form'>
        <form autoComplete='off' onSubmit={sendEmail} ref={form}> 
            <label>Your Name</label>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} name='from_name' required/>
            <label>Your Email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} name='from_email' required/>
            <label>Subject</label>
            <input type="text" onChange={(e) => setSubject(e.target.value)} value={subject} name='subject'/>
            <label>Message</label>
            <textarea rows={6} placeholder='Type Your Message Here....'onChange={(e) => setMessage(e.target.value)} value={message} name='message' required/>
            <button className='btn' type='submit' onClick={handleAlert}>Submit</button>
        </form>
    </div>

    <div className='modal'>
    <dialog id="dialog">
            <h3 className='modal-header'>Thank You For Your Time!</h3>
                <div>
                    <img src={SuccessIMG} alt='success' className='success-img'/>
                </div>
                <p className='modal-footer'>Your Message has been sent.</p>
            <button aria-label="close" class="x">❌</button>
    </dialog>
    </div>
    </>
  )
}

export default Form