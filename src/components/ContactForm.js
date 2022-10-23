import React from 'react'
import './Contact.css'
import {useForm} from 'react-hook-form';

function ContactForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <>
      <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
        <input type='text' name='user_name' placeholder='Name' />
        <br/>
        <input type='email' name='user_email' placeholder='Email' />
        <br/>
        <textarea name='message' placeholder='Message'/>
        <br/>
        <input type='submit' value='Send' />
      </form>

    </>
  )
}

export default ContactForm