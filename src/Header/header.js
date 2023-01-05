import React from 'react'
import {Link} from 'react-scroll';  
import "./header.css"
export default function Header() {
   

  return (
    <div className='header'>
        <div className='header_left'>
            <h1 className='header_left_h1'>Develop<span>er </span></h1>
            </div>
            <div className='header_right'>
            
                <Link to ="about"  smooth={true} duration={500}>
                    <h4 className={({IsActive}) => 
                IsActive ? "active" : ""}>AboutMe</h4>
                </Link>
                <Link to ="skils" smooth={true} duration={500}>
                    <h4>Skills</h4>
                </Link>
                <Link to ="projects" smooth={true} duration={500}>
                    <h4>Projects</h4>
                </Link>
                <Link to ="experiene" smooth={true} duration={500}>
                    <h4>Experience</h4>
                </Link>
                <Link to ="contact" smooth={true} duration={500}>
                    <h4  >Contact</h4>
                </Link>
            </div>
    </div>
  )
}
