
import React from "react";
import Sdata from "../Services/Sdata";
import Card from "../Services/Card";

function Healet() {
  return (
    <>
      <div className="my-5 ">
        <h1 className="text-center" style={{ fontWeight: "bold" }}>
          Our Healet Templates
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

export default Healet;