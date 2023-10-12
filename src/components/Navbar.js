import "./style1.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { NavLink } from "react-router-dom";
import React,{useEffect} from "react";
import { Link ,useLocation} from "react-router-dom";
function Navbar() {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="container ml-5">
          <a className="navbar-brand" href="/">
            THEMEZONE
          </a>
        </div>
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
        <div className="container mr-5">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  activeClassName="menu-active"
                  exact
                  className={`nav-link ${
                    location.pathname === "/home" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClassName="menu-active"
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
                  className={`nav-link ${
                    location.pathname === "#" ? "active" : ""
                  } dropdown-toggle`}
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Templates
                </Link>
                <ul
                  className="dropdown-menu dropdown-menu-end custom-bg"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="templates">
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Business Templates
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Other
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  activeClassName="menu-active"
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
                  activeClassName="menu-active"
                  className={`nav-link ${
                    location.pathname === "/contact" ? "active" : ""
                  }`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>

              {/* <li className="nav-item">
                    <Link
                      activeClassName="menu-active"
                      className="nav-link"
                      to="/sign-up"
                    >
                      Sign-Up/Log-In
                    </Link> */}
              {/* </li> */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
