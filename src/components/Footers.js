import React from "react";
import "./footer.css";
function Footers() {
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
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
                <i className="fa fa-facebook"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-instagram"></i>
                <i className="fab fa-linkedin-in"></i>
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
