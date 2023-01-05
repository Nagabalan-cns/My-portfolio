import React from 'react'
import {Element} from "react-scroll"
import computer from "C:/Users/User/Desktop/Portfolio/myportfolio/src/skill/computer.jpg"
import LinearProgress from "@material-ui/core/LinearProgress";
import "./skill.css"

function Skill() {
  return (
   
    <Element name="skils" className="Skill_container" >
   <div className='skill_container_image'>
 
   <img src={computer}  alt=""/>
</div>
<div className='skill_container_text'>
    <h2>skillSet</h2>
    <div className='skill_container_skillset'>
       <h2>React</h2>
   
        
        <div className="skill_container_slider" >
        <LinearProgress variant="determinate" 
           value={90}
           />
        </div>
        <h2>HTML</h2>
        <div className="skill_container_sliderslill_container_slide1" >
            <LinearProgress variant="determinate"
           value={95}
           />
        </div>
        <h2>Css</h2>
        <div className="skill_container_sliderslill_container_slide2" >
            <LinearProgress variant="determinate"
           value={50}
           />
        </div>
        <h2>JavaScript</h2>
        <div className="skill_container_sliderslill_container_slide3" >
            <LinearProgress variant="determinate"
           value={80}
           />
        </div>
        <h2>TypeScript</h2>
        <div className="skill_container_sliderslill_container_slide4" >
            <LinearProgress variant="determinate"
           value={60}
           />
        </div>
    </div> 
    </div>
    </Element>
    
  )
}

export default Skill;