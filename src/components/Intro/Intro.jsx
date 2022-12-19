import React from 'react'

import My_logo from "../../images/My_logo.png";
import github from "../../images/gitHub_black.png";

import inlogo from "../../images/inlogo.png";
import Gif from "../../images/giphy.gif"
import "./intro.css"



const Intro = () => {

  const openlInk=()=>{

    window.open("https://www.linkedin.com/in/tarak-karmakar-876758234/")
  }
const openResume=()=>{
  
window.open("https://drive.google.com/file/d/1_4phGBk7v2fhXtOsTaN9T-k1n4RcF6QU/view?usp=sharing")
}


  const openGit=()=>{

    window.open("https://github.com/Tarakkarmakar")
  }

  return (
    <div className='intro' id="Intro">

      <div className='intro_left'>
        <span className='hi'>Hi ! 👋</span>
        <br />
        <span className='my_name'>I am Tarak Karmakar</span>


       <span className='dev'>Full Stack Web Developer</span>
       <img src="https://readme-typing-svg.demolab.com/?lines=Interested in working with team;Curious%20to%20learn%20new%20things !&font=Fira%20Code&center=true&width=440&height=45&color=00FF00&background=FFFFFF00&vCenter=true&size=22&pause=1000" />
     
     <div className='logo_box'>

      
  <div onClick={openGit}><img className='git' width="27%" height="45%" src={github}  alt="github" /></div>

     <div onClick={openlInk}><img className='in' width="27%" height="45%" src={inlogo}  alt="github" /></div>


     <a href="../../images/Tk.pdf.pdf" download><button onClick={openResume} className='resume' downlowd> My Resume </button></a>
     </div>
      </div>
      <div className='intro_right'>

        <img className='my_logo' src={My_logo} alt="" />
        {/* <img src={Gif} alt="" /> */}
      </div>
      
 
    </div>
  )
}

export default Intro
