import React from "react";
import '../../App.css';
import Canvas from '../Canvas';
import ContactForm from '../ContactForm';
import './Services.css'
  

export default function Services(){
    return <>
        <div style={{background: 'pink'}}>
            <div>
                <div className="about-grid">
                <div className="about-item">
                    <h3>Hey! It's me Kyle, I'm online. This is my website!</h3>
                </div>
                    <div className="about-item">
                        <h3>I am a Los Angeles based  software engineer, effective across individual work and collaboration. 
                        With 6 years of work experience, plus complex hobbyist technical experience building computers
                         for gaming, virtual production, creating VR/AR, and developing websites for friends.</h3>
                    </div>
                    
                    <div className="about-item">
                    <h3>Skills</h3>
                    <h3>Frontend: <ion-icon size="large" color="black" className="icon" name="logo-react"></ion-icon> React 
                    <ion-icon size="large" color="black" className="icon" name="logo-html5"></ion-icon> HTML5
                    <ion-icon size="large" color="black" className="icon" name="logo-css3"></ion-icon> CSS3
                    <ion-icon size="large" color="black" className="icon" name="code-working-outline"></ion-icon> Django </h3>
                    <h3>Backend:  
                    <ion-icon size="large" color="black" className="icon" name="finger-print-outline"></ion-icon>Express 
                    <ion-icon size="large" color="black" className="icon" name="bed-outline"></ion-icon> Rest API 
                    <ion-icon size="large" color="black" className="icon" name="file-tray-stacked-outline"></ion-icon>  MongoDB
                    <ion-icon size="large" color="black" className="icon" name="analytics-outline"></ion-icon>  PostgreSQL
                    <ion-icon size="large" color="black" className="icon" name="file-tray-full-outline"></ion-icon> Mongoose</h3> 
                    <h3>Programming:  
                    <ion-icon size="large" color="black" className="icon" name="logo-javascript"></ion-icon> Javascript 
                    <ion-icon size="large" color="black" className="icon" name="logo-python"></ion-icon> Python 
                    <ion-icon size="large" color="black" className="icon" name="logo-nodejs"></ion-icon> Node.Js
                    <ion-icon size="large" color="black" className="icon" name="logo-github"></ion-icon>  Git</h3>
                    <h3>Language: <ion-icon size="large" color="black" name="mic-outline"></ion-icon> Fluent Spanish</h3> 
                    </div>
                    <div className="about-item">

                    </div>
                    <div className="about-item">
                        <img src="photos/megarden.webp" alt='me at a garden'/>
                    </div>
                    <div className="about-item"><h3> I also write books and tv! But we can talk about that elsewhere.</h3></div>
                </div>
            </div>
            <ContactForm />
        </div>
    </>;



}