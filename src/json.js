import React from 'react'
import data from "./skill.json"
import LinearProgress from "@material-ui/core/LinearProgress";
function Json() {
  return (
    <div className='skill_container_text'>
    <h2>skillSet</h2>
        {
            data.map((e,index) => {
                return (
                  <div className='skill_container_skillset' key={index}>
       <h2>{e.skill}</h2>
   
        
        <div className="skill_container_slider" >
        <LinearProgress variant="determinate" 
           value={e.value}
           />
        </div>
        </div>
             ) }

            )
        }
    </div>
  )
}


   
export default Json