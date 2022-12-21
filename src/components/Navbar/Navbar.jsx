import { FormLabel, Switch } from '@chakra-ui/react'
import { MoonIcon,SunIcon ,HamburgerIcon,CloseIcon} from '@chakra-ui/icons'
import "./Navbar.css"


import mylogo from "../../images/Tarak_logo.png"
import { useState } from 'react'
const Navbar = ({toggleDarkmode,isDark,setMenu}) => {
    

  return (




    
       

    <div className="navbar" id="Home" style={{background :!isDark? "linear-gradient(#1E3B70,#1E3B70":"linear-gradient(#000000, #000000)"}} >


      <div className='left_nav'>
       

      <img src={mylogo} alt="" />
        <FormLabel>{isDark ?<MoonIcon />:<SunIcon />}</FormLabel>
      <Switch onChange={toggleDarkmode} colorScheme="green" size="md"/>
       

      </div>

      <div className='right_nav'>

        
      <ul>

       
<li><a href="#Intro">Home</a> </li>
<li><a href="#about">About</a> </li>
<li><a href="#skills">  Skills</a>
</li>
<li><a href="#project">Projects</a></li>
<li> <a href="#contact"> Contact</a> </li>
</ul>

      </div>

      <div className='hamb'>
<HamburgerIcon onClick={()=>setMenu(true)} w={8} h={8} />

      </div>



    </div>



  
  )
}




export default Navbar
