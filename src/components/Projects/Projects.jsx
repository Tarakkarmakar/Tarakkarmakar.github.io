import Buffer from "../../images/Buffer.png"
import Revv from "../../images/Revv.png"
import olx from "../../images/olx.png"

import chakra from "../../images/chakra.png";
import HTML from "../../images/HTML.png";
import css from "../../images/css.png";
import javascript from "../../images/javascript.png";
import react from "../../images/react.png";
import "./projects.css"
const Projects = () => {
  return (
    <>

    <div className="project_main" id="project" >

    <h1>Projects</h1>

        <div className="first_project">
          

          <div>   
            <img src={Revv} alt="" />

          </div>
          <div className="right_box">
              <div>Revv is India's fastest growing shared mobility platform, providing both self-drive car rental
             and subscription services to its customers. Revv currently operates a
              fleet of 3500+ cars in 22 cities within India.</div>

              <div className="icon_box">

             
                <img src={HTML} alt="" />
                <img src={css} alt="" />
                <img src={javascript} alt="" />
       
              </div>
              <div>

<button className="button pbutton">Code</button>
<button className="button pbutton">Demo</button>
</div>


              </div>
            



        </div>


        <div className="sec_project">


          <div> <img src={olx} alt="" />
          </div>
          <div className="right_box">

<div> OLX.in is an online marketplace for consumer-to-consumer sales,
             particularly targeting users in emerging markets,
             with a view to providing a safe, reliable and efficient way for consumers to buy and sell goods.</div>


<div className="icon_box">
  
<img src={react} alt="" />
                <img src={chakra} alt="" />
                <img src={css} alt="" />
                <img src={javascript} alt="" />
</div>
<div>

<button className="button pbutton">Code</button>
<button className="button pbutton">Demo</button>
</div>


          </div>


        </div>


        <div className="third_project">


          <div>  
<img src={Buffer} alt="" />
          </div>
          <div className="right_box">
            
            <div > Buffer is a software application for the web and mobile, designed to manage accounts in social networks, by providing the means for a user to schedule posts to Twitter, Facebook,
             Instagram, Instagram Stories, as well as analyze their results and engage with their community</div>
            
            
            
            <div className="icon_box">
              
                <img src={HTML} alt="" />
                <img src={css} alt="" />
                <img src={javascript} alt="" />
            </div>

            <div>

              <button className="button pbutton">Code</button>
              <button className="button pbutton">Demo</button>
            </div>
            
            .</div>
        </div>

        


      
    </div>
    </>
  )
}

export default Projects
