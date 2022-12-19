import logo from './logo.svg';
import './App.css';

import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Menu } from '@chakra-ui/react';
import Menubar from './components/Menu/Menu';

function App() {
    
  const [menu,setMenu]=useState(false)

const [isDarkMode,setIsDarkMode]=useState(false)

const toggleDarkmode=()=>{

  setIsDarkMode((prev)=>!prev)
}

  return (
    
    <div className={isDarkMode? "APP_DARK":"App"}>

{menu ? <Menubar setMenu={setMenu} menu={menu}/> : <Navbar toggleDarkmode={toggleDarkmode} isDark={isDarkMode} setMenu={setMenu}/> }

 

  <Intro />
    
      <About />

<Skills />
<Projects />

<Contact />
    </div>
  );
}

export default App;
