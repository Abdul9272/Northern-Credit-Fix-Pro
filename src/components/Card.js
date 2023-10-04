import React from "react";
// import web from "./img/abc.avif";
// import web from "./img/images.jpeg";
import './footer.css'
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card" style={{ height: "420px", overflow: "hidden" }}>
          <img
            src={props.imgscr}
            className="card-img-top"
            alt="img"
            style={{ objectFit: "cover", height: "200px", width: "100%" }}
          />
          <div
            className="card-body"
            style={{ height: "200px", overflow: "hidden" }}
          >
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text" style={{ textAlign: "justify" }}>
              {props.des}
            </p>
            <Link to="#" className="btn btn-block btn-primary">
              Get Info
            </Link>
          </div>
        </div>

        {/* <div className="card">
          <img src={props.imgscr} className="card-img-top" alt="img" />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text" >
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Card;
