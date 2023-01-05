import React from 'react'
import {Element} from 'react-scroll'
import {IconButton} from "@material-ui/core"
import { Facebook, Instagram , LinkedIn} from '@material-ui/icons'
import './contact.css'
function Contact() {
  return (
   <Element id="contact" className='contact'>
      <h1>Contact</h1>
 <div className='contact_container'>

  <p>
    Email:<span>balanagabalan55@gmail.com</span>
</p>
<p>
    github Username : <span> Nagabalan-cn</span>
</p>
<div className='contact_icons'>
<a href="https://www.facebook.com/nagabalan.bala.1?mibextid=ZbWKwL" target='blank'>
    <IconButton>
      <Facebook />
    </IconButton>
</a>
<a href="https://www.linkedin.com/in/nagabalan-k-421206247/" target='blank'>
    <IconButton>
      <LinkedIn />
    </IconButton>
</a>

<a href="https://instagram.com/balanagabalan?igshid=YmMyMTA2M2Y=" target='blank'>
    <IconButton>
      <Instagram />
      </IconButton>
      </a>
</div>
 </div>
   </Element>
  )
}

export default Contact