// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import web from "../img/log.svg";
import Common from "../Common/common";
import './home1.css';
import {useLocation} from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';

function Home() {
  const location = useLocation()
  const userId = location.state?.id;
  // const { user, isAuthenticated } = useAuth0();
  return (
    <div>

        {/* {isAuthenticated ? (
        
      ) : (
        <p>Loading...</p>
      )} */}
      <h1 className="a">Hello! Abdul Rehman and welcome to the home Page</h1>
      <Common
        name="Grow your business with"
        imgscr={web}
        visit="/home1"
        btname="Get Started"
      />
    </div>
  );
}

export default Home;
