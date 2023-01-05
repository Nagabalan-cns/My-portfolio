import React from 'react'
import {Link} from "react-scroll"
import"./aboutme.css"
function Aboutme() {
  return (
    <div className='topcontent'>
        <div className='topcontent_container'>
       <h1>Mr.K.Nagabalan </h1> 
       <p>A Professional Web Developer</p>
       <a href="https://github.com/Nagabalan-cn" target="blank">
     <button className='Topcontent_download' >Github Link</button>
     </a>
     <Link to='projects' smooth={true} duration={500} > 
     <button className='topcontent_mywork'>My Work</button>
     </Link>
      
    </div>
    </div>
  )
}

export default Aboutme;