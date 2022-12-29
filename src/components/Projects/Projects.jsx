import Buffer from "../../images/Buffer.png"
import Revv from "../../images/Revv.png"
import olx from "../../images/olx.png"

import chakra from "../../images/chakra.png";

import HTML from "../../images/HTML.png";
import css from "../../images/css.png";
import javascript from "../../images/javascript.png";
import react from "../../images/react.png";
import redux from "../../images/Redux.png";
import project from "../../images/project.png";
import "./projects.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Travel_mojo from "../../images/travel_mojo.png";
const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const openlInk=(param)=>{

    if(param==="TravelDemo"){
      window.open("https://average-pig-3056.vercel.app/")
    }else if(param==="TravelCode"){
      window.open("https://github.com/Preetibildani/average-pig-3056")
    }
    else if(param=="RevvCode"){
      window.open("https://github.com/Tarakkarmakar/righteous-glove-4452/tree/master")
    }
    else if(param ==="RevvDemo"){
      window.open("https://kaleidoscopic-cascaron-704c0c.netlify.app/")
    }
    else if(param==="OlxDemo"){
      window.open("https://637214767a360d15209f91dc--prismatic-entremet-06d5c2.netlify.app/")
    }

    else if(param==="OlxCode"){

      window.open("https://github.com/Tarakkarmakar/-mute-death-5036")
    }
  
  }
  return (
    <>

    <div className="skill_div" >

      <img src={project} alt="" className="skill_ico project_ico" data-aos="fade-left"/>
    </div>

    <div className="project_main" id="project" >

    <h1 data-aos="fade-right"><u> Projects </u></h1>


    <div className="third_project" data-aos="zoom-in-up">


<div>  
<img src={Travel_mojo} alt="" />
</div>
<div className="right_box ">

  <h1>Expedia.co.in | Clone</h1>
  
  <div >
  Expedia  is an online travel agency owned by Expedia Group, an American online travel shopping company based in Seattle. The website and mobile app can be used to book airline tickets,
   hotel reservations, car rentals, cruise ships, and vacation packages.
   
   
   </div>
  
  
  
  <div className="icon_box ic_A">
    
  <img src={react} alt="" width="12%" height="55%" />
      <img src={css} alt=""  width="8%" height="55%"/>
      <img src={javascript} alt="" width="15%" height="55%" />
      <img src={redux} alt="" width="10%" height="45%"/>
      <img src={chakra} alt="" width="19%" height="55%"/>
  </div>

  <div  className="btn_box">

    <button className="button pbutton" onClick={()=>openlInk("TravelCode")}>Code</button>
    <button className="button pbutton" onClick={()=>openlInk("TravelDemo")}>Demo</button>
  </div>
  
  </div>
</div>





        <div className="first_project" data-aos="zoom-in-up">
          

          <div>   
            <img src={Revv} alt="" />

          </div>
          <div className="right_box">
            <h1>Revv.com | Clone</h1>
              <div>Revv is India's fastest growing shared mobility platform, providing both self-drive car rental
             and subscription services to its customers. Revv currently operates a
              fleet of 3500+ cars in 22 cities within India.</div>

              <div className="icon_box ic_B">

             
                <img src={HTML} alt=""  width="10%" height="10px" />
                <img src={css} alt="" width="9%" height="55%"  />
                <img src={javascript} alt="" width="20%" height="55%"  />
       
              </div>
              <div>

<button className="button pbutton" onClick={()=>openlInk("RevvCode")}>Code</button>
<button className="button pbutton" onClick={()=>openlInk("RevvDemo")}>Demo</button>
</div>


              </div>
            



        </div>


        <div className="sec_project" data-aos="zoom-in-up">


          <div> <img src={olx} alt="" />
          </div>

          <div className="right_box">
<h1>Olx.in | clone</h1>
<div> OLX.in is an online marketplace for consumer-to-consumer sales,
             particularly targeting users in emerging markets,
             with a view to providing a safe, reliable and efficient way for consumers to buy and sell goods.</div>


<div className="icon_box ic_C">
  
<img src={react} alt="" width="13%" height="55%"/>
                <img src={chakra} alt="" width="20%" height="55%"/>
                <img src={css} alt="" width="8%" height="55%" />
                <img src={javascript} alt=""  width="18%" height="55%" />
</div>
<div>

<button className="button pbutton" onClick={()=>openlInk("OlxCode")}>Code</button>
<button className="button pbutton" onClick={()=>openlInk("OlxDemo")}>Demo</button>
</div>


          </div>


        </div>



        


      
    </div>
    </>
  )
}

export default Projects
