import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

import './HeroSection.css';
import FactApi from './FactApi';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/Rushing_Water.mov' autoPlay loop muted />
      <h1>Kyle Kallman</h1>
      <p>software engineer | content producer</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Contact Me
        </Button>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;