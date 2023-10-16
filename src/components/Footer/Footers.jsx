import React from "react";

import "./footer.css";
function Footers() {
  return (
    <>
      <div className="Footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1 ml-5">
              <h3>
                <span>ThemeZone</span>
              </h3>
              <p>
                Themezone is a website where you can get templates on various
                category. Our user-friendly customization tools empower you to
                make each template your own.
              </p>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2 ml-auto">
              <ul>
                <li className="nav-item">
                  <a href="/home">Home |</a>
                </li>
                <li className="nav-item">
                  <a href="/services">Services |</a>
                </li>
                <li className="nav-item">
                  <a href="/about">About |</a>
                </li>
                <li className="nav-item">
                  <a href="/contact">Contact </a>
                </li>
              </ul>
              <div className="footer-icons">
                <a href="https://www.facebook.com/muhammad.moonali.3">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="https://twitter.com/HafizAb43874464">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/abdul.rehman9272/?next=%2F&hl=en">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/hafiz-abdul-rehman-072a4a240/">
                  <i className="fab fa-linkedin-in"> </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Last-footer">
        <p>2023 &copy; All rights are reserved by themezone.com</p>
      </div>
    </>
  );
}

export default Footers;
