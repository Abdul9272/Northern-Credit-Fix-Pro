
import React,{useEffect,useRef} from "react";
import Sdata from "./LData";
import Card from "./Card";

function Gaurder() {
  const HRef = useRef();

  useEffect(() => {
    HRef.current.scrollIntoView(0);
  }, []);
  return (
    <>
      <div className="my-5 " ref={HRef}>
        <h1 className="text-center" style={{ fontWeight: "bold" }}>
          Our Gaurder Templates
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

export default Gaurder;