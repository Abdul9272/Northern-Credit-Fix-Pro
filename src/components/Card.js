import React from "react";
// import web from "./img/abc.avif";
import web from "./img/images.jpeg";
import { Link } from "react-router-dom";

function Card() {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div class="card">
          <img src={web} class="card-img-top" alt="img" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="#" class="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
