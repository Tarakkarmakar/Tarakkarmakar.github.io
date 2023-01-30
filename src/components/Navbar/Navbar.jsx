import { FormLabel, Switch } from '@chakra-ui/react'
import { MoonIcon,SunIcon ,HamburgerIcon,CloseIcon} from '@chakra-ui/icons'
import "./Navbar.css"
import resume_my from "../../images/Tarak_Karmakar_Resume.pdf"

import mylogo from "../../images/Tarak_logo.png"
import { useState } from 'react'
const Navbar = ({toggleDarkmode,isDark,setMenu}) => {
    
  const openResume=()=>{
  
    window.open("https://drive.google.com/file/d/1_4phGBk7v2fhXtOsTaN9T-k1n4RcF6QU/view?usp=sharing")
    }
  return (




    
       

    <div className="navbar" id="Home" style={{background :!isDark? "linear-gradient(#1e0d39,#1e0d39":"linear-gradient(#000000, #000000)"}} >


      <div className='left_nav'>
       

      <img src={mylogo} alt="" />
        <FormLabel>{isDark ?<MoonIcon />:<SunIcon />}</FormLabel>
      <Switch onChange={toggleDarkmode} colorScheme="green" size="md"/>
       

      </div>

      <div className='right_nav'>

        
      <ul>

       
<li className='IntroH'><a href="#Intro">Home</a> </li>
<li className='aboutH'><a href="#about">About</a> </li>
<li onClick={openResume} className="resumeH"><a href={resume_my} download>Resume</a>
</li>
<li className='skillH'><a href="#skills">  Skills</a>
</li>

<li className='projectH'><a href="#project">Projects</a></li>
<li className='contactH'> <a href="#contact"> Contact</a> </li>
</ul>

      </div>

      <div className='hamb'>
<HamburgerIcon onClick={()=>setMenu(true)} w={8} h={8} />

      </div>



    </div>



  
  )
}




export default Navbar
