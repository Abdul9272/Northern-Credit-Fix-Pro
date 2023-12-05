// import logo from './logo.svg';

import React from 'react';
import {Route} from 'react-router-dom'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Templates from './components/Categories/Templates'
import Page404 from './components/404/Page404';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services'
import Home1 from './components/Home/Home1';
import './App.css'
import Footers from './components/Footer/Footers';
import Business from './components/Categories/Business';
import Education from './components/Categories/Education';
import Food from './components/Categories/Food';
import Tourist from './components/Categories/Tourest';
import Little_Fashion from './components/Categories/Little_Fashion';
import AI from './components/AI/Artifical';
import Submit from './components/Submit_Template/Submit';
import Jobs from './components/Categories/Jobs';
import Tourest from './components/Categories/Tourest';
import Browny from './components/Categories/Browny';
import Klinik from './components/Categories/Klinik';
import Sbs from './components/Categories/Sbs';
import App_light from './components/Categories/App_light';
import Gaurder from './components/Categories/Gaurder';
import Healet from './components/Categories/Healet';
import ShowTemp from './components/ShowTemplates/ShowTemp';
import Signinup from './components/Sign-up/Signinup';

import Computers from './components/Categories/Computer'
import E_Commerence from './components/Categories/EComm';

import Healths from './components/Categories/Healths';
import Transport from './components/Categories/Transport';




function App()
{
   
  return (
    <>
      <div className="App">
        {/* <Signup/> */}
        <Navbar />
        <Switch>
          
        
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/home1">
            <Home1 />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>

          <Route exact path="/computers">
            <Computers />
          </Route>
          <Route exact path="/e_comm">
            <E_Commerence />
          </Route>

          <Route exact path="/health">
            <Healths/>
          </Route>

          <Route exact path="/transport">
            <Transport />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/templates">
            <Templates />
          </Route>
          <Route exact path="/business">
            <Business />
          </Route>
          <Route exact path="/education">
            <Education />
          </Route>
          <Route exact path="/food">
            <Food />
          </Route>
          <Route exact path="/tourist">
            <Tourest />
          </Route>
          <Route exact path="/little">
            <Little_Fashion />
          </Route>
          <Route exact path="/other">
            <Templates />
          </Route>
          <Route exact path="/artifical">
            <AI />
          </Route>
          <Route exact path="/submit">
            <Submit />
          </Route>
          <Route exact path="/service">
            <Services />
          </Route>
          <Route exact path="/jobs">
            <Jobs />
          </Route>
          <Route exact path="/Browny">
            <Browny />
          </Route>
          <Route exact path="/klinik">
            <Klinik />
          </Route>
          <Route exact path="/sbs">
            <Sbs />
          </Route>
          <Route exact path="/app_light">
            <App_light />
          </Route>
          <Route exact path="/gaurder">
            <Gaurder />
          </Route>
          <Route exact path="/healet">
            <Healet />
          </Route>
          <Route exact path="/showtemp">
            <ShowTemp />
          </Route>
          <Route exact path="*">
            <Page404 />
          </Route>
        </Switch>
      </div>

      <Footers />
    </>
  );

}


export default App;
