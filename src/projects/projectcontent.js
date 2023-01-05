import React from 'react'
import { Element } from 'react-scroll'

import Projectlist from './projectlist'
import clock from "../projects/ReactProjects/clock.png"
import application from "../projects/ReactProjects/application.png"
import quiz from "../projects/ReactProjects/Quiz.png"
import slider from "../projects/ReactProjects/slider.png"
import website from "../projects/ReactProjects/website.png"
import calculator from "../projects/ReactProjects/calculator.png"
import "./projectcontent.css"


const  Projectcontent = () => {

    const Myproject = [
        {
            img:`${clock}`,
            title:"Digital Clock",
            content:"It A Simple Digital Clock Project Used Javascript Basic get date time function ",
            link:"https://nagabalan-cns.github.io/digital-clock/"
        },
        {
            img:`${application}`,
            title:"Application Form",
            content:"Its a Simple Application Form Using Formik React Library ",
            link:"https://nagabalan-cns.github.io/Applicationform-using-formik/"

        },
        {
            img:`${quiz}`,
            title:"Quiz",
            content:"Its a Quiz Project Using Some React libraries  And Some Hooks",
            link:"https://nagabalan-cns.github.io/quiz-using-react/"

        },
        {
            img:`${slider}`,
            title:"AutoPlay Image Slider",
            content:"its used the Settimeout Function for Auto Play the image",
            link:"https://nagabalan-cns.github.io/autoplay-image-slider/"

        },
        {
            img:`${website}`,
            title:"A Real Time Website",
            content:"Used some react libraries and some hooks and animations its done by using react-router",
            link:"https://nagabalan-cns.github.io/my-first-website/"

        },
        {
            img:`${calculator}`,
            title:"Simple calculator",
            content:"Its Done by using JavaScript eval() Function for calculation",
            link:"https://nagabalan-cns.github.io/Calculator/"

        },
    ];
  return (
    <Element name="projects" className='project_container'>
    <h1>MyProjects</h1>
    <p> These are My React Projects</p>
    <div className='project_container_content'>
{   
    Myproject.map((e,index) => {
  return (
    <Projectlist key={index}  img={e.img} title={e.title} content={e.content} link={e.link}/>
  )
    })
}   

    </div>
    </Element>
  )
}

export default Projectcontent