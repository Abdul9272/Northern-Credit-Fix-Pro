
import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

function Services() {
  return (
    <>
      <div className="my-5 " id="services">
        <h1 className="text-center" style={{ fontWeight: "bold" }}>
          Our Services
        </h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, ind) => {
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
