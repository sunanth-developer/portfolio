import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import './Header.css'
import image from '../assets/wp6037680-natuto-iphone-6-wallpapers.jpg'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import resume from '../assets/resume.pdf'
export default function Header() {

    const [text]= useTypewriter({
     words: [" Front end Devloper", 'Freelancer', 'Mobile app Developer'],
     Loop:{},
     typeSpeed:100,
     deleteSpeed:60,
    }) ;

    const handleDownload = () => {

        const fileName = "Sunanth resume.pdf";
const aTag = document. createElement ("a");
aTag. href = '/Users/sunanthsamala/Desktop/portfolio/src/assets/resume.pdf';
aTag. setAttribute("download", fileName);
document. body.appendChild (aTag);
aTag. click();
aTag. remove ();
   
  };
  return (
    <div className='header'>
        <div className='headerleft'>
        <h2>Hii!</h2>
        <h2>I am Sunanth Samala  </h2>
        <h2 className='autotype'><span >{text}</span> <span ><Cursor cursorStyle="|"/></span></h2>
        <div className="socials">
             <a href='https://www.instagram.com/samalasunanth?igsh=MXZicWZwN3hreXB2bg%3D%3D&utm_source=qr'> <InstagramIcon/></a>
             <a href='https://www.linkedin.com/in/sunanth-samala-818b2b169'><LinkedInIcon/></a>
              <a href='https://github.com/sunanth-developer'><GitHubIcon/></a>
              <a href="https://wa.me/918883770999?text=Hi"><WhatsAppIcon/></a>
              <a href="tel:+918883770999"><CallIcon/></a>
              <a href="mailto:sunanthsamala007@gmail.com"><MailOutlineIcon/></a>
            </div>
            <a href={resume} download="sunanth resume" className='downloadresume'>Download Resume</a>
        </div>

        <div className='headerright'>
        <img src={image} alt="image"  className='profileimage'/>
        </div>
    </div>
  )
}
