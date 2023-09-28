import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './style1.css';
import "bootstrap/dist/js/bootstrap.bundle";
import web from "./img/log.svg";
import web1 from "./img/maxresdefault.jpg";
import Common from "./common";
import Card from "./Card";
import Sdata from "./Sdata";

function Home1() {
  return (
    <>
      <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
        <div
                id="carouselExampleCaptions"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={web1} class="d-block w-100" alt="img" />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>First slide label</h5>
                      <p>
                        Some representative placeholder content for the first
                        slide.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={web1} class="d-block w-100" alt="img" />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                      <p>
                        Some representative placeholder content for the second
                        slide.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={web1} class="d-block w-100" alt="img" />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>
                        Some representative placeholder content for the third
                        slide.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
          
        </div>
      </div>
    </div>
    <br/>

        
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
            {
              Sdata.map((val,ind)=>
              {
                return <Card key = {ind}
                imgscr = {val.imgscr}
                title = {val.title}
                />
              })
             }
          
            </div>
            <div className="mt-3">
                  {/* <button class="btn btn-outline-primary">Primary</button> */}
                  <Link to="/services" className=" btn btn-get-started" >
                      Read More
                  </Link>
                </div>
          </div>
        </div>
      </div>


      
    </>
  );
}

export default Home1;
