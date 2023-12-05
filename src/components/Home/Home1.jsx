import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./home1.css";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import Card from "./Card";
import Sdata from "../Services/Sdata";

function Home1() {
  
  return (
    <>
      <ImageSlider slides={SliderData} />

      <br />

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.slice(0, 13).map((val, ind) => {
                return (
                  <Card
                    key={ind}
                    imgscr={val.imgscr}
                    title={val.title}
                    des={val.des}
                  />
                );
              })}
            </div>
            <div className="mt-5  col-md-12 mx-auto">
              <Link to="/services" className="w-100 btn-get-started">
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
