import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card" style={{ height: "450px", overflow: "hidden" }}>
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
            <Link to={props.title} className="btn btn-primary w-100 text-center">
              Get Info
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
