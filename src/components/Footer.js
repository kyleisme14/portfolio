import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        {/* <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join the kyle k newsletter!
            </p>
            <p className='footer-subscription-text'>
                You can unsubscribe at any time.
            </p>
            <div className='input-areas'>
                <form>
                    <input type="email" name="email" placeholder='Your Email'
                    className="footer-input"/>
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section> */}
        <div className="footer-links">
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2> Coding </h2>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/contact'>Hire Me</Link>
                    <Link to='/about-me'>Skills</Link>
                </div>
                {/* <div className='footer-link-items'>
                    <h2> Creative</h2>
                    <Link to='/products'>Consulting</Link>
                    <Link to='/'>Book</Link>
                    <Link to='/'>Movies</Link>
                </div> */}
                <div className='footer-link-items'>
                    <h2> Contact Me</h2>
                    <a href='https://www.linkedin.com/in/kylekallman/'>Linkedin</a>
                    <a href="https://www.instagram.com/kyleismeme/">Instagram</a>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                <Link to="/" className="social-logo">
                     <ion-icon name="happy-outline" className='happy-outline'></ion-icon>
                </Link>
                </div>
                <small className='website-rights'> kyle © 2022</small>
                <div className="social-icons">
                <a href="https://www.instagram.com/kyleismeme/" className="social-logo">
                <ion-icon name="logo-instagram"></ion-icon>
                </a>
                
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer