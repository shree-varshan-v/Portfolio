import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';

import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [open, setOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    //follow emailjs documentation
    emailjs.sendForm('service_yboxhxe', 'template_6guk9lf', form.current, 'HMNHrqS7NAFKr8S74')
      .then((result) => {
        setOpen(true);
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
    };
  return (
    <section id='contact'>
      <div className='contactWrapper'>
        <div className='contactTitle'>Contact</div>
        <div className='contactDesc'>Feel free to reach out to me for any questions or opportunities!</div>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <div className='contactFormTitle'>Email Me 🚀</div>
          <input className='contactFormInput' placeholder='Your Name' name='from_name'/>
          <input className='contactFormInput' placeholder='Your Email' name='from_email'/>
          <input className='contactFormInput' placeholder='Subject' name='subject'/>
          <textarea className='contactFormInput' placeholder='Message' rows={4} name='message'/>
          <button className='contactFormSubmit'type='submit' value='Send'>Send</button>
        </form>
        <Snackbar 
          open={open}
          autoHideDuration={6000}
          onClose={()=>setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </div>
    </section>
  )
}

export default Contact