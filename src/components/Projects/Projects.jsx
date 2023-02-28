
import Revv from "../../images/Revv.png";
import Eco from "../../images/Eco.png";
import nodejs from "../../images/nodejs.png";
import express from "../../images/express.png";
import mongodb from "../../images/Mongodb.png";
import chakra from "../../images/chakra.png";

import HTML from "../../images/HTML.png";
import css from "../../images/css.png";
import javascript from "../../images/javascript.png";
import react from "../../images/react.png";
import redux from "../../images/Redux.png";
import project from "../../images/project.png";
import shop_it from "../../images/Shop_it.png";
import "./projects.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Travel_mojo from "../../images/travel_mojo.png";
const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const openlInk = (param) => {
    if (param === "TravelDemo") {
      window.open("https://storied-florentine-b26252.netlify.app/");
    } else if (param === "TravelCode") {
      window.open("https://github.com/Tarakkarmakar/Travel_Mojo");
    } else if (param == "RevvCode") {
      window.open(
        "https://github.com/Tarakkarmakar/righteous-glove-4452/tree/master"
      );
    } else if (param === "RevvDemo") {
      window.open("https://kaleidoscopic-cascaron-704c0c.netlify.app/");
    } else if (param === "Eco-demo") {
      window.open(
        "https://tarakkarmakar.github.io/Eco-Store/"
      );
    } else if (param === "Eco-code") {
      window.open("https://github.com/Tarakkarmakar/Eco-Store");
    } else if (param === "shopCode") {
      window.open("https://github.com/Tarakkarmakar/shop_it_easy");
    } else if (param === "shopDemo") {
      window.open("https://magenta-kitsune-52fa98.netlify.app/");
    }
  };
  return (
    <>
      <div className="skill_div">
        <img
          src={project}
          alt=""
          className="skill_ico project_ico"
          data-aos="fade-left"
        />
      </div>

      <div className="project_main" id="project">
        <h1 data-aos="fade-right">
          <u> Projects </u>
        </h1>

        <div className="sec_project" data-aos="zoom-in-up">
          <div>
            {" "}
            <img src={Eco} alt="" />
          </div>

          <div className="right_box">
            <h1>Eco-Store</h1>
            <div>
              {" "}
              Eco-Store is a Ecommerce platform for buying Natural chemical free products.
               If we avoid plastic so it will good for our nature so one who want to buy
               buy pollution free product can visit Eco-store.

            </div>

            <div className="icon_box ic_C">
            <img src={react} alt="" width="12%" height="55%" />

<img src={redux} alt="" width="10%" height="45%" />
<img src={chakra} alt="" width="19%" height="55%" />
<img src={mongodb} alt="" width="19%" height="55%" />
<img src={nodejs} alt="" width="9%" height="35%" />
<img src={express} alt="" width="19%" height="55%" />
            </div>
            <div>
              <button
                className="button pbutton"
                onClick={() => openlInk("Eco-code")}
              >
                Code
              </button>
              <button
                className="button pbutton"
                onClick={() => openlInk("Eco-demo")}
              >
                Demo
              </button>
            </div>
          </div>
        </div>
        <div className="third_project" data-aos="zoom-in-up">
          <div>
            <img src={shop_it} alt="" />
          </div>
          <div className="right_box ">
            <h1>Myntra.com | Clone</h1>

            <div>
              Myntra is the india's largest e-commerce store for fashion and
              lifestyle products, Myntra aims at providing a hassle-free and
              enjoyable shopping experience to shoppers across the country with
              the widest range of brands and products on its portal.
            </div>

            <div className="icon_box ic_B">
              <img src={react} alt="" width="12%" height="55%" />

              <img src={redux} alt="" width="10%" height="45%" />
              <img src={chakra} alt="" width="19%" height="55%" />
              <img src={mongodb} alt="" width="19%" height="55%" />
              <img src={nodejs} alt="" width="9%" height="35%" />
              <img src={express} alt="" width="19%" height="55%" />
            </div>

            <div className="btn_box">
              <button
                className="button pbutton"
                onClick={() => openlInk("shopCode")}
              >
                Code
              </button>
              <button
                className="button pbutton"
                onClick={() => openlInk("shopDemo")}
              >
                Demo
              </button>
            </div>
          </div>
        </div>

        <div className="third_project" data-aos="zoom-in-up">
          <div>
            <img src={Travel_mojo} alt="" />
          </div>
          <div className="right_box ">
            <h1>Expedia.co.in | Clone</h1>

            <div>
              Expedia is an online travel agency owned by Expedia Group, an
              American online travel shopping company based in Seattle. The
              website and mobile app can be used to book airline tickets, hotel
              reservations, car rentals, cruise ships, and vacation packages.
            </div>

            <div className="icon_box ic_A">
              <img src={react} alt="" width="12%" height="55%" />
              <img src={css} alt="" width="8%" height="55%" />
              <img src={javascript} alt="" width="15%" height="55%" />
              <img src={redux} alt="" width="10%" height="45%" />
              <img src={chakra} alt="" width="19%" height="55%" />
            </div>

            <div className="btn_box">
              <button
                className="button pbutton"
                onClick={() => openlInk("TravelCode")}
              >
                Code
              </button>
              <button
                className="button pbutton"
                onClick={() => openlInk("TravelDemo")}
              >
                Demo
              </button>
            </div>
          </div>
        </div>

        <div className="first_project" data-aos="zoom-in-up">
          <div>
            <img src={Revv} alt="" />
          </div>
          <div className="right_box">
            <h1>Revv.com | Clone</h1>
            <div>
              Revv is India's fastest growing shared mobility platform,
              providing both self-drive car rental and subscription services to
              its customers. Revv currently operates a fleet of 3500+ cars in 22
              cities within India.
            </div>

            <div className="icon_box ic_B">
              <img src={HTML} alt="" width="10%" height="10px" />
              <img src={css} alt="" width="9%" height="55%" />
              <img src={javascript} alt="" width="20%" height="55%" />
            </div>
            <div>
              <button
                className="button pbutton"
                onClick={() => openlInk("RevvCode")}
              >
                Code
              </button>
              <button
                className="button pbutton"
                onClick={() => openlInk("RevvDemo")}
              >
                Demo
              </button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Projects;
