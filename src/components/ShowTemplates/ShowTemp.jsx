import React,{useEffect,useRef} from "react";
import Sdata from "./Sdata";
import Card from "./Card";
import web from "../img/How-to-Add-a-Homepage-Slider-in-WordPress.png";
import and from '../img/atomo.jpg';
import car from '../img/comp.webp';
import me from '../img/car-1300629_1280.png';
import { Link,useLocation } from "react-router-dom";

import "./show.css";

function ShowTemp(props) {
  const HRef = useRef();
  const location = useLocation(); // Use the useLocation hook
  const { title, des,img,link ,dlink} = location.state;

  useEffect(() => {
    HRef.current.scrollIntoView(0);
  }, []);
  return (
    <>
      <div className="my-5 " id="services" ref={HRef}>
        <h1 className="text-center" style={{ fontWeight: "bold" }}>
          {title} Template Detail
        </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <div className="col-md-4 col-10 mx-auto">
        <div className="card" style={{cursor:"pointer", height: "440px", overflow: "hidden" }}>
          <img
            src={img}
            className="card-img-top"
            alt="img"
            style={{ objectFit: "cover", height: "200px", width: "100%" }}
          />
          <div
            className="card-body"
            style={{ height: "200px", overflow: "hidden" }}
          >
            <h5 className="card-title font-weight-bold">{title}</h5>
            <p className="card-text" style={{ textAlign: "justify" }}>
              {des}
            </p>
          </div>
        </div>
            <a href= {dlink} className="btn btn-primary w-100 text-center">
              download Zip File
            </a>
            <a href= {link} target="_blank" rel="noopener norferrer" className="btn btn-primary w-100 text-center">
              PreView of Template
            </a>

        {/* <div className="card">
          <img src={props.imgscr} className="card-img-top" alt="img" />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text" >
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            
          </div>
        </div> */}
      </div>

              <div className="center-img col-lg-6 order-1 order-lg-2 header-img">
                <img src={web} className="img-fluid animated img-size" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <h4 style={{ fontWeight: "bold" }}>A FREE CSS TEMPLATE</h4>
              <div className="rows">
                <span>
                  If you would like to submit your free CSS templates simply
                  send us an email to "info AT free-css.com", with a link to the
                  templates demo page, and a link to where we can download the
                  zip file. Please note - please do not send us the downloadable
                  file directly via email, all templates are evaluated by Free
                  CSS and if it/they fulfill all guidelines it/they will then be
                  placed into the waiting list to be published. Free CSS does
                  not guarantee submission and therefore reserve the right to
                  publish or reject any templates that are submitted. Free CSS
                  showcases straight HTML templates that can be converted/ported
                  into various systems such as Blogging software, E-commerce
                  software, CMS systems etc..
                </span>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={and} className="rotate-img" alt="img" />
                </div>
              </div>

              <h4 style={{ fontWeight: "bold" }}>TEMPLATE DOWNLOAD TERMS</h4>
              <div className="rows">
                <span>
                  If you would like to submit your free CSS templates simply
                  send us an email to "info AT free-css.com", with a link to the
                  templates demo page, and a link to where we can download the
                  zip file. Please note - please do not send us the downloadable
                  file directly via email, all templates are evaluated by Free
                  CSS and if it/they fulfill all guidelines it/they will then be
                  placed into the waiting list to be published. Free CSS does
                  not guarantee submission and therefore reserve the right to
                  publish or reject any templates that are submitted. Free CSS
                  showcases straight HTML templates that can be converted/ported
                  into various systems such as Blogging software, E-commerce
                  software, CMS systems etc..
                </span>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={car} className="img-fluids animated" alt="img" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
     
      {/* //-------------------- */}
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <h4 style={{ fontWeight: "bold" }}> Free CSS does not publish or accept the following:</h4>
              <div className="rows">
                <ul>
                <li>  Table based templates</li>
                <li>  Pre-built Blog templates</li>
                <li>  Pre-built Content management system templates</li>
                <li>  Pre-built E-Commerce templates</li>
                <li>  Template that are clearly from other developers that have had minor changes made to them</li>
                <li>  Templates that are based upon one design and images have only changed, creating a line or templates that have no changes to the CSS or XHTML.</li>
                </ul>

             
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="center container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
        <div  className="col-lg-6  order-1 order-lg-2 header-img">
                <img src={me} className="img-fluid animated" alt="img" />
              </div>
          
        </div>
      </div>
    </div>
     
    </>
  );
}

export default ShowTemp;
