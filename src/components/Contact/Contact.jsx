// sendForm("service_hccldgk", "template_bnklhpe", form.current, "REcdWeNHNTi3-jYWs")

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
// import "./contact1.css";
import "./StyleC.css";

import web from "../img/register.svg";
// npm i @emailjs/browser
import and from '../img/atomo.jpg';
import car from '../img/comp.webp';
import me from '../img/WhatsApp Image 2023-10-14 at 11.12.54_32a77485.jpg';
import "./contact.css";
import "./contact1.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hccldgk",
        "template_bnklhpe",
        form.current,
        "REcdWeNHNTi3-jYWs"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (

    <>
    <section id="header" className="d-flex">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-log-0 order-2 order-lg-1">
                <form ref={form} onSubmit={sendEmail}>
                <h2
                        className="my-3"
                        style={{ fontWeight: "bold", textAlign: "center" }}
                      >
                        Contact Us
                      </h2>
                  <label className="contact_label">Name</label>
                  <input type="text" name="User_Name" required />
                  <label className="contact_label">Email</label>
                  <input type="email" name="User_Email" required />
                  <label className="contact_label">Subject</label>
                  <input type="text" name="User_Subject" required />
                  <label className="contact_label">Message</label>
                  <textarea name="User_Msg" />
                  <input type="submit" value="Send" />
                 
                </form>
               
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={web}
                    className="img-fluid animated"
                    alt="About img"
                  />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr/>

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

              <h4 style={{ fontWeight: "bold" }}>TEMPLATE TERMS</h4>
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
              <h4 style={{ fontWeight: "bold" }}> ThemeZone does not  accept the following:</h4>
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
};

export default Contact;
