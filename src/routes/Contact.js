import React from 'react'
import Navbar from '../components/NAVBAR/Navbar';
import Footer from '../components/Footer/Footer';
import Contactphoto from '../components/ContactComponent/ContactComponent';
import Form from '../components/Form/Form';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Contactphoto heading="CONTACT ME." text="Use below form to ping me."/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact;