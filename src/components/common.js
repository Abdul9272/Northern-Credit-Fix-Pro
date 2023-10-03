
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import web from "./img/log.svg";

function    Common(props) {
  return (
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-log-0 order-2 order-lg-1">
                <h2 className="my-3">
                  {props.name}
                  <br />
                  <strong className="brand-name">Themezone</strong>
                </h2 >
                <h3 className="my-3">
                  We are our the team of
                  talenetd developers to
                   built Templates
                </h3>
                <div className="mt-3">
                  {/* <button className="btn btn-outline-primary">Primary</button> */}
                  <Link to={props.visit} className="btn-get-started" >
                      {props.btname}
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={props.imgscr} className="img-fluid animated" alt="About img" />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Common;
