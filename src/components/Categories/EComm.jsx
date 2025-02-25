
import React, { useEffect,useRef } from "react";
import Sdata from "./ECommerenceData";
import Card from "./Card";

function EComm() {
  const SBRef=useRef();

  useEffect(()=>{
    SBRef.current.scrollIntoView(0)
  },[])

  return (
    <>
      <div className="my-5 " ref={SBRef}>
        <h1 className="text-center" style={{ fontWeight: "bold" }}>
          Our E-Commerence Templates
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
                    link={val.link}
                    dlink={val.dlink}
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

export default EComm;