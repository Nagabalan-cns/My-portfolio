import React from 'react'
import  {Element} from 'react-scroll';
import Aboutme from './Aboutme';
import './aboutcontainer.css';
function About() {
  return (
    <div>
<Element name='about' className='about-container'>
  <Aboutme/>
</Element>
    </div>
  )
}

export default About
