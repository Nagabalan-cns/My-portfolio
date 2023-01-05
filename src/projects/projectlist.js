import React, { useState } from 'react'
import './project.css'
const Projectlist = ({img,title,content,link}) => {
    const [show,setshow] = useState(false);
  return (
    <a href={link}>
    <div  className='project' onMouseEnter={() =>setshow(true)}  onMouseLeave={() => setshow(false)}>
      
        {
            show ?(
            <div className="project_container">
                <h4>{title}</h4>
                <p>{content}</p>
            </div>
            ):
           
            <img  src={img}  alt=""/>
         
        }
    </div>
    </a>
  )
}

export default Projectlist