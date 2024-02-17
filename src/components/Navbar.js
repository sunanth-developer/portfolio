import React, { useState } from 'react'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
export default function Navbar() {
    const [shownav,setshownav]=useState(false)
  return (
      <>
    <div className='navbar'>
        <div className='logo'>
        <h3>S.S</h3>
        </div>
        <div className='navlinks'>
        <h4 className='navlink'>Home</h4>
        <h4 className='navlink'>About</h4>
        <h4 className='navlink'>projects</h4>
        <h4 className='navlink'>Contact Me</h4>
        </div>
    </div>

    <div className='mobilenavbar'>
        <div className='logo'>
        <h3>S.S</h3>
        </div>
        {shownav?(
            <div className='dropdown'>
        <div onClick={()=>setshownav(false)} style={{float:"right"}}><CloseIcon/></div>
        <div className='mobilenavlinks'>
        <h3 className='mobilenavlink'>Home</h3>
        <h3 className='mobilenavlink'>About</h3>
        <h3 className='mobilenavlink'>projects</h3>
        <h3 className='mobilenavlink'>Contact Me</h3>
        </div>
        </div>
        ):(
            <div onClick={()=>setshownav(true)}><MenuIcon/></div>
        )}
        
        
    </div>
    </>
  )
}
