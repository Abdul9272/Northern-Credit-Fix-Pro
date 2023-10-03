import "./style1.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                THEMEZONE
              </a>
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
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      activeClassName="menu-active"
                      exact
                      className="nav-link active"
                      aria-current="page"
                      to="/home"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      activeClassName="menu-active"
                      className="nav-link"
                      to="/services"
                    >
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      activeClassName="menu-active"
                      className="nav-link"
                      to="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      activeClassName="menu-active"
                      className="nav-link"
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Templates
                    </Link>
                    <ul
                      className="dropdown-menu"
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
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
