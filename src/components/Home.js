import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import web from "./img/log.svg";
import Common from "./common";
function Home() {
  return (
    <Common
    name="Grow your business with"
    imgscr={web}
    visit="/home1"
    btname="Get Started"
    />
  );
}

export default Home;
