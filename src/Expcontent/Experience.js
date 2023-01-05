import React from 'react'
import {Element} from 'react-scroll'
import Experiencecontent from "./ExperienceContent"
import './experience.css'
function Experience() {
  return (
   
        <Element id="experiene" className="experience_content">
        <h1>Experience</h1>
        <div className='expcontainer'>
          <Experiencecontent  number="15+"  title="Projects"/>
          <Experiencecontent  number="6 months"  title="Experience"/>
          <Experiencecontent  number="10+"  title="clients"/>    
        </div>
        </Element>
    
  )

}

export default Experience;