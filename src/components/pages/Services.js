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
                    <h3>Frontend: React, HTML5, CSS3, Django </h3>
                    <h3>Backend: Express, Rest API, MongoDB, PostgreSQL, Mongoose</h3> 
                    <h3>Programming: Javascript, Python, Node.Js, Git</h3>
                    <h3>Language: Fluent Spanish</h3> 
                    </div>
                    <div className="about-item">
                        <img src="photos/megarden.webp" alt='me at a garden'/>
                    </div>
                    <div className="about-item"><h3> I also write books and tv! But we can talk about that elsewhere</h3></div>
                </div>
            </div>
            <ContactForm />
        </div>
    </>;



}