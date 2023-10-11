import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import web from "./img/register.svg";
import './style1.css'

function Contact() {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-log-0 order-2 order-lg-1">
                  <form> 
                    <div className="mb-3">
                      <h2 className="my-3" style={{fontWeight:"bold",textAlign:"center"}}>
                        Contact Us
                      </h2>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter Your Email."
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Your Name "
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Your Phone No"
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                  </form>

                  <div className="mt-3">
                    {/* <button className="btn btn-outline-primary">Primary</button> */}
                    <Link to="/" className="btn-get-started">
                      Submit
                    </Link>
                  </div>
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
    </>
  );
}

export default Contact;
