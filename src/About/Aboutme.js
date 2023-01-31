import React from 'react'
import {Link} from "react-scroll"
import TypeWriter from "typewriter-effect"
import"./aboutme.css"
function Aboutme() {
  return (
    <div className='topcontent'>
        <div className='topcontent_container'>
       <h1>Hello Guys!</h1> 
       <h2>
        <TypeWriter
        options={{
          autoStart: true,
          loop:true,
          delay:50,
          strings:[
            'I am Mr.k.Nagabalan',
            'I am a Web Developer',
            "I am a React Developer"
          ]
        }}
        />
       </h2>
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