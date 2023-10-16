
import web from "../img/register.svg";
import Common from "../Common/common";

function  About() {
  return (
    <Common
    name="Welcome to About Page"
    imgscr={web}
    visit="/contact"
    btname="Contact Now"
    />
  );
}

export default About;
