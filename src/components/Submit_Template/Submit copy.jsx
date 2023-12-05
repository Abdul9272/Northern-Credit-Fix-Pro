import React from "react";
import Sdata from "../Categories/TData";
import Card from "./Card";
import log from "../img/log.svg";
import web from '../img/register.svg'
import and from '../img/atomo.jpg';
import car from '../img/comp.webp';
import me from '../img/huza.jpg';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import web from "../img/register.svg";


import "./submit.css";

function Submit() {
  return (
    <>
      <div className="my-5 " id="services">
        <h1 className="text-center" style={{ fontWeight: "bold" }}>
          Submit A Templates
        </h1>
      </div>
      
      <section id="header" className="d-flex">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-log-0 order-2 order-lg-1">
                  <form>
                    <div className="mb-3">
                      <h2
                        className="my-5"
                        style={{ fontWeight: "bold", textAlign: "center" }}
                      >
                        Fill This Form
                      </h2>
                      <input
                        type="Text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Template Title"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="Text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Template Category "
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Template Description"
                      ></textarea>
                    </div>
                  </form>

                  
                  <div className="mt-3 d-flex justify-content-center">
                    <Link to="/" className="w-50 btn_ btn-get-started">
                        Submit Template
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={log}
                    className="img-fluid animated"
                    alt="About img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <h4 style={{ fontWeight: "bold" }}>SUBMIT A FREE CSS TEMPLATE</h4>
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
                  <img src={and} className="img-fluid animated" alt="img" />
                </div>
              </div>

              <h4 style={{ fontWeight: "bold" }}>TEMPLATE SUBMISSION TERMS</h4>
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
              <h4 style={{ fontWeight: "bold" }}> ThemeZone does not publish or accept the following:</h4>
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

      {/* <div className="center container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
        <div  className="col-lg-6  order-1 order-lg-2 header-img">
                <img src={me} className="img-fluid animated" alt="img" />
              </div>
          
        </div>
      </div>
    </div>
      */}
       <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
          <h4 style={{ fontWeight: "bold" }}>TEMPLATE SAMPLE</h4>
            <div className="row gy-4 mt-5">
              {Sdata.slice(0,3).map((val, ind) => {
                return (
                  <Card
                    key={ind}
                    imgscr={val.imgscr}
                    title={val.title}
                    des={val.des}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Submit;
