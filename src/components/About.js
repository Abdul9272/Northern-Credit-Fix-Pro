import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import web from "./img/log.svg";
import Common from "./common";

function  About() {
  return (
    <Common
    name="Welcome to About Page"
    imgscr={web}
    visit="/service"
    btname="Contact Now"
    />
  );
}

export default About;
