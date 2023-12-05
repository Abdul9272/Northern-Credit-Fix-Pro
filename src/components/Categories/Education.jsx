import React,{useEffect,useRef} from "react";
import EData from "./EData";
import Card from "./Card";

function Education() {
  const HRef = useRef();

  useEffect(() => {
    HRef.current.scrollIntoView(0);
  }, []);
  return (
    <>
      <div className="my-5 " id="education" ref={HRef}>
        <h1 className="text-center" style={{ fontWeight: "bold" }}>
          Our Education Templates
        </h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {EData.map((val, ind) => {
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

export default Education;
