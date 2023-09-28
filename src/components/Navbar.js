import './style1.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                THEMEZONE
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link
                      activeClassName="menu-active"
                      exact
                      class="nav-link active"
                      aria-current="page"
                      to="/home"
                    >
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      activeClassName="menu-active"
                      class="nav-link"
                      to="/services"
                    >
                      Services
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      activeClassName="menu-active"
                      class="nav-link"
                      to="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      activeClassName="menu-active"
                      class="nav-link"
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>

                  <li class="nav-item dropdown">
                    <Link
                      class="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Templates
                    </Link>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <Link class="dropdown-item" to="templates">
                          Blogs
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="#">
                          Business Templates
                        </Link>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <Link class="dropdown-item" to="#">
                          Other
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <Link
                      activeClassName="menu-active"
                      class="nav-link"
                      to="/sign-up"
                    >
                      Sign-Up/Log-In
                    </Link>
                  </li>
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
