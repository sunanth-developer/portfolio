import React from 'react'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export default function Footer() {
  return (
      <body>
   <footer>
      <section className="top">
       
        <div className="links">
          <div className="links-column">
            <h2>Portfolio</h2>
            <a>About</a>
            <a>Skills</a>
            <a>Attributes</a>
            <a>Projects</a>
            <a>Testimonials</a>
          </div>
          <div className="links-column">
            <h2>Resources</h2>
            <a>GitHub</a>
            <a>npm</a>
            <a>Codepen</a>
            <a>Codesandbox</a>
            <a>Dribbble</a>
          </div>
          <div className="links-column socials-column">
            <h2></h2>
            <div className="socials">
             <a href=''> <InstagramIcon/></a>
             <a href=''><LinkedInIcon/></a>
              <a href=''><GitHubIcon/></a>
              <a href=''><WhatsAppIcon/></a>
            </div>
          </div>
        </div>
      </section>
      <section className="bottom">
        <p className="copyright">© 2024 All rights reserved</p>
      </section>
    </footer>
    </body>
  )
}
