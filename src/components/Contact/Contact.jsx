import "./contact.css"
import contact from "../../images/contact.png";
const Contact = () => {
  return (
    <>

    <div className="contact_div">

      <img src={contact} alt=""  className="contact_ico"/>

    </div>
  

    <div id="contact">
     <h1 className="contact_text"> <u> Contact Me</u></h1>
    <div className="contact_main">
    
        <div>

        </div>
        <div className="contact_details">

            <div>
                <h1>Email</h1>

                
                tarakkarmakar1434@gmail.com</div>
            <div><h1>Mobile</h1>+919382261576</div>
            <div><h1>Address</h1>
            Bankura ,West Bengal </div>
        </div>
      
    </div>
    </div>



    </>
  )
}

export default Contact
