import "./Skills.css"

import { CircularProgress, CircularProgressLabel,Show,Hide,Box } from '@chakra-ui/react'

import HTML from "../../images/HTML.png";
import css from "../../images/css.png";
import javascript from "../../images/javascript.png";
import react from "../../images/react.png";
import redux from "../../images/Redux.png";
import axios from "../../images/axios.png";
import chakra from "../../images/chakra.png";
import typescript from "../../images/typescript.png";
import jest from "../../images/jest.png"

import  nodejs from "../../images/nodejs.png"
import express from "../../images/express.png";
import mongodb from "../../images/Mongodb.png";



import  github from "../../images/github1.png";
import  npm from "../../images/npm.png";
import vscode  from "../../images/VScode.png";



import calendar from "../../images/calendar.png";


import  skill  from "../../images/skill.png";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Skills = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>

    <div className="skill_div">


    <img className="skill_ico" src={skill} alt="" data-aos="fade-left"/>


    </div>


    <div className="Main" id="skills">

               <h1 data-aos="fade-right" ><u>Skills</u> </h1>
            
               <h2 align="center" data-aos="fade-left"> Front End</h2>
             <br />
        
        <div className="front_end" >
        
           <div data-aos="fade-right"><img width="25%" height="55%"  src={HTML} alt="HTMl" /><span>HTML</span></div>
           <div data-aos="fade-right"><img width="21%" height="55%"  src={css} alt="CSS" /><span id="css">CSS</span></div>
           <div data-aos="fade-right"><img width="56%" height="65%"  src={javascript} alt="Javascript" /><span  id="javascript" >JavaScript</span></div>
           <div data-aos="fade-left"><img width="27%" height="45%" src={react} alt="React" /><span>React</span></div>
           <div data-aos="fade-left"><img width="26%" height="50%" src={redux} alt="Redux" /><span>Redux</span></div>
           <div data-aos="fade-left"><img width="55%" height="55%" src={axios} alt="axios" /><span>axios</span></div>
        
        <div data-aos="fade-right"><img width="56%" height="55%" src={chakra} alt="chakra" /><span>Chakra </span></div>
           <div data-aos="fade-right"><img  width="24%" height="50%" src={typescript} alt="typescript" /><span id="typescript" >TypeScript</span></div>
           <div data-aos="fade-right"><img width="28%" height="50%" src={jest} alt="jest" /><span>Jest</span></div>


        </div>
   
        <br />
        <br />

    <h2 align="center" className="back" >Back End</h2>


        <div className="back_end" data-aos="fade-left">


        <div><img width="23%" height="45%" src={nodejs} alt="Node.js" /><span>Node.js</span></div>
           <div><img width="50%" height="51%" src={express} alt="express" /><span>express</span></div>
           <div><img width="37%" height="55%" src={mongodb} alt="mongoDb" /><span>MongoDB</span></div>


        </div>
        <br />
        <br />
        
        <h2 align="center">Others</h2>
        <div className="other"  data-aos="fade-right">
         
        <div><img width="27%" height="45%" src={github}  alt="github" /><span>GitHub</span></div>
           <div><img width="27%" height="51%" src={npm} alt="npm" /><span>npm</span></div>
           <div><img width="50%" height="55%" src={vscode} alt="VScode" /><span>VScode</span></div>
        </div>








   <div className="progress_circle" data-aos="fade-left">


   <div><CircularProgress value={80} color='red' size="100px"  >
  <CircularProgressLabel >80%</CircularProgressLabel>
 
</CircularProgress> HTML</div>



<div> <CircularProgress value={80} color='blue' size="100px"    >
  <CircularProgressLabel>75%</CircularProgressLabel>
</CircularProgress>CSS</div>



<div><CircularProgress value={80} color='yellow'  size="100px"    >
  <CircularProgressLabel>77%</CircularProgressLabel>
</CircularProgress>JavaScript</div>



<div><CircularProgress value={80} color='green' size="100px"  >
  <CircularProgressLabel>72%</CircularProgressLabel>
</CircularProgress>DSA</div>
   </div>
   


   <div className="github_cal" data-aos="fade-right">

    <h1 >GitHub  Calendar</h1>
   

   <img  src={calendar} alt="" className="cal" />

   </div>



      
    </div>

    </>
  )
}

export default Skills
