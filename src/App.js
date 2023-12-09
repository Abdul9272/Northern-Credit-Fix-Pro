// import logo from './logo.svg';

import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
// import Templates from "./components/Categories/Templates";
import Page404 from "./components/404/Page404";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Home1 from "./components/Home/Home1";
import "./App.css";
import Footers from "./components/Footer/Footers";
import Business from "./components/Categories/Business";
import Education from "./components/Categories/Education";
import Industry from "./components/Categories/Industry";
import Law from "./components/Categories/Law";
import AI from "./components/AI/Artifical";
import Submit from "./components/Submit_Template/Submit";
import Media from "./components/Categories/Media";
import Politics from "./components/Categories/Politics";
import RealEstate from "./components/Categories/RealEstate";
import Wedding from "./components/Categories/Wedding";
import Sbs from "./components/Categories/Sbs";
import App_light from "./components/Categories/App_light";
import Gaurder from "./components/Categories/Gaurder";
import ShowTemp from "./components/ShowTemplates/ShowTemp";
import Signinup from "./components/Sign-up/Signinup";

import Computers from "./components/Categories/Computer";
import E_Commerence from "./components/Categories/EComm";

import Healths from "./components/Categories/Healths";
import Transport from "./components/Categories/Transport";

function App() {
  return (
    <>
      <div className="App">
        {/* <Signup/> */}
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/">
            <Signinup />
          </Route>

          <Route exact path="/home">
            <Navbar />
            <Home />

            <Footers />
          </Route>
          <Route exact path="/home1">
            <Navbar />
            <Home1 />

            <Footers />
          </Route>
          <Route exact path="/services">
            <Navbar />
            <Services />

            <Footers />
          </Route>

          <Route exact path="/computers">
            <Navbar />
            <Computers />

            <Footers />
          </Route>
          <Route exact path="/e-commerence">
            <Navbar />
            <E_Commerence />

            <Footers />
          </Route>

          <Route exact path="/health & health care">
            <Navbar />
            <Healths />

            <Footers />
          </Route>

          <Route exact path="/transport">
            <Navbar />
            <Transport />

            <Footers />
          </Route>
          <Route exact path="/about">
            <Navbar />
            <About />

            <Footers />
          </Route>
          <Route exact path="/contact">
            <Navbar />
            <Contact />

            <Footers />
          </Route>
      
          <Route exact path="/business">
            <Navbar />
            <Business />

            <Footers />
          </Route>
          <Route exact path="/education">
            <Navbar />
            <Education />

            <Footers />
          </Route>
          
          <Route exact path="/industry">
            <Navbar />
            <Industry />

            <Footers />
          </Route>
          <Route exact path="/law">
            <Navbar />
            <Law />

            <Footers />
          </Route>
          {/* <Route exact path="/other">
            <Navbar />
            <Templates />

            <Footers />
          </Route> */}
          <Route exact path="/artifical">
            <Navbar />
            <AI />

            <Footers />
          </Route>
          <Route exact path="/submit">
            <Navbar />
            <Submit />

            <Footers />
          </Route>
          <Route exact path="/service">
            <Navbar />
            <Services />

            <Footers />
          </Route>
          <Route exact path="/media">
            <Navbar />
            <Media />

            <Footers />
          </Route>
          <Route exact path="/politics">
            <Navbar />
            <Politics />

            <Footers />
          </Route>
          <Route exact path="/real estate">
            <Navbar />
            <RealEstate />

            <Footers />
          </Route>
          <Route exact path="/sbs">
            <Navbar />
            <Sbs />

            <Footers />
          </Route>
          <Route exact path="/wedding">
            <Navbar />
            <Wedding />

            <Footers />
          </Route>
          <Route exact path="/gaurder">
            <Navbar />
            <Gaurder />

            <Footers />
          </Route>

          {/* <Route exact path="/healet">
            <Navbar />
            <Healet />
            <Footers />
          </Route> */}

          <Route exact path="/showtemp">
            <Navbar />
            <ShowTemp />

            <Footers />
          </Route>
          <Route exact path="*">
            <Navbar />
            <Page404 />

            <Footers />
          </Route>
        </Switch>
      </div>

      {/* <Footers /> */}
    </>
  );
}

export default App;
