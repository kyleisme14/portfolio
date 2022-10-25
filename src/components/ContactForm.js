import React, { useRef } from 'react'
import './Contact.css'
import {useForm} from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';


const ContactForm = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rxx8xlf', 'template_fveztoj', form.current, 'iPL2mNzQK9BHevpgy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };



  return (
    <>
    <div className='contact-form'>
      <h3>Contact Me</h3>
      <form ref={form} onSubmit={sendEmail}>
        <input className='form-item' type='text' name='user_name' placeholder='Name' required/>
        <br/>
        <input className='form-item' type='email' name='user_email' placeholder='Email' required/>
        <br/>
        <textarea className='form-item' name='message' placeholder='Message'/>
        <br/>
        <input className="button" type='submit' value='Send' />
      </form>
    </div>
    </>
  )
}

export default ContactForm