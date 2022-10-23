import React from "react";
import '../../App.css';
import Canvas from '../Canvas';
  

export default function Services(){
    return <>
        <div >
            <img src="photos/megarden.webp" alt='me at a garden'/>
        
            <div style={{background: 'pink'}}>
                <div>
                    <h4>Los Angeles based  software engineer, effective across individual work and collaboration. 
                        With 6 years of work experience, plus complex hobbyist technical experience building computers
                         for gaming, virtual production, creating VR/AR, and developing websites for friends.</h4>
                    
                    <h2>Skills</h2>
                    <h3>Frontend: React, HTML5, CSS3, Django </h3>
                    <h3>Backend: Express, Rest API, MongoDB, PostgreSQL, Mongoose</h3> 
                    <h3>Programming: Javascript, Python, Node.Js, Git</h3>
                    <h3>Language: Fluent Spanish</h3> 
                     
                </div>
            </div>
            <Canvas/>
        </div>
    </>;



}