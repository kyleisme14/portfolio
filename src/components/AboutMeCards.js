import React from 'react';
import './AboutMeCards.css'

function AboutMeCards() {
  return (
    <div className='about-me'>
      <div className='aboutme-container'>
          <div className='aboutme__items'>
            <h3>about me: coder</h3>
            <div><b>Los Angeles</b> based <b>software engineer</b>, effective across individual work and collaboration. 
                        With 8 years of work experience, plus complex hobbyist technical experience building computers
                         for gaming, <b>virtual production</b>, creating <b>VR/AR</b>, and developing websites for friends.</div>
            </div>
            <div className='aboutme__items2'>
                    <h3>coding skills</h3>
                    <div> <b>Frontend:</b> <ion-icon size="small" color="black" className="icon" name="logo-react"></ion-icon> React 
                    <ion-icon size="small" color="black" className="icon" name="logo-html5"></ion-icon> HTML5
                    <ion-icon size="small" color="black" className="icon" name="logo-css3"></ion-icon> CSS3
                    <ion-icon size="small" color="black" className="icon" name="code-working-outline"></ion-icon> Django </div>
                    <div><b>Backend:  </b>
                    <ion-icon size="small" color="black" className="icon" name="finger-print-outline"></ion-icon>Express 
                    <ion-icon size="small" color="black" className="icon" name="bed-outline"></ion-icon> Rest API 
                    <ion-icon size="small" color="black" className="icon" name="file-tray-stacked-outline"></ion-icon>  MongoDB
                    <ion-icon size="small" color="black" className="icon" name="analytics-outline"></ion-icon>  PostgreSQL
                    <ion-icon size="small" color="black" className="icon" name="file-tray-full-outline"></ion-icon> Mongoose
                    </div> 
                    <div><b>Programming:  </b>
                    <ion-icon size="small" color="black" className="icon" name="logo-javascript"></ion-icon> Javascript 
                    <ion-icon size="small" color="black" className="icon" name="logo-python"></ion-icon> Python 
                    <ion-icon size="small" color="black" className="icon" name="logo-nodejs"></ion-icon> Node.Js
                    <ion-icon size="small" color="black" className="icon" name="logo-github"></ion-icon>  Git</div>
                    <div><b>Language:</b> <ion-icon size="small" color="black" name="mic-outline"></ion-icon> Fluent Spanish</div> 
            </div>

  

          <div className='aboutme__items3'>
            <h3>about me: content producer</h3>
            <div>
              5 years at <b>Sony Television</b> working in production and development. 15 years of producing plays, podcasts, comedy shows, and award winning <b>short films</b>. 
         In 2018 I won the <b>XR Alliance</b> for Best Writing in VR. I am excited about old and new forms of media. Freelance work as brand builder, copywriter, story editor and creative developer. <b>Novelist</b> in my freetime.        
           </div> 
          </div>
 
         </div>

      
    </div>
  )
}

export default AboutMeCards