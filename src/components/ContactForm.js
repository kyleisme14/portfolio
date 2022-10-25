import React, { useRef } from 'react'
import './Contact.css'
import {useForm} from 'react-hook-form';

const ContactForm = () => {
  const form = useRef()

  const sendEmail = () => {};

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