import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid ml-5">
          <Link className="navbar-brand" to="#">
            ThemeZone
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse mr-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  activeclassname="menu-active"
                  className={`nav-link ${
                    location.pathname === "/home" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className={`dropdown-toggle nav-link ${
                    location.pathname === "/ai" ? "active" : ""
                  }`}
                  to="/artifical"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  AI
                </Link>
                <ul className="dropdown-menu dropdown-menu-end custom-bg">
                  <li>
                    <Link className="dropdown-item" to="/submit">
                      Submit a Template
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                  <Link className="dropdown-item" to="/artifical">
                      Customization using Artificial Intelligence
                    </Link>
                    {/* <Link className="dropdown-item" to="/ai">
                      Customization using Artificial Intelligence
                    </Link> */}
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  activeclassname="menu-active"
                  className={`nav-link ${
                    location.pathname === "/services" ? "active" : ""
                  }`}
                  to="/services"
                >
                  Services
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className={`nav-link dropdown-toggle ${
                    location.pathname.startsWith("/templates") ? "active" : ""
                  }`}
                  to="/templates"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Templates
                </Link>
                <ul className="dropdown-menu dropdown-menu-end custom-bg">
                  <li>
                    <Link className="dropdown-item" to="/business">
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/education">
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/food">
                      Food
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/tourist">
                      Tourist
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/little">
                      Little Fashion
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/service">
                      Others
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  activeclassname="menu-active"
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  activeclassname="menu-active"
                  className={`nav-link ${
                    location.pathname === "/contact" ? "active" : ""
                  }`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
