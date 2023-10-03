import React from "react";
// import web from "./img/abc.avif";
// import web from "./img/images.jpeg";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.imgscr} className="card-img-top" alt="img" />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="#" className="btn btn-primary">
              Click
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
