import React from 'react'
import './experiencecontent.css'
function ExperienceContent({number , title}) {
  return (
    <div className='experience'>
        <h1>{number}</h1>
        <p>{title}</p>
    </div>
  )
}

export default ExperienceContent