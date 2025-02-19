
import React, { useEffect,useRef } from "react";
import Sdata from "./BData";
import Card from "./Card";

function Sbs() {
  const SBRef=useRef();

  useEffect(()=>{
    SBRef.current.scrollIntoView(0)
  },[])

  return (
    <>
      <div className="my-5 " ref={SBRef}>
        <h1 className="text-center" style={{ fontWeight: "bold" }}>
          Our Sbs Templates
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

export default Sbs;