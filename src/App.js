// import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import React from 'react';
import {Route} from 'react-router-dom'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Templates from './components/Templates'
import Page404 from './components/Page404';
// import Form from './components/Signin_up';
import Navbar from './components/Navbar';

import Services from './components/Services'
import Home1 from './components/Home1';
import Footer from './components/Footers';
import './App.css'

// import SignIn_Up from './components/Signin_up';

function App()
{
   

  return (
    <>
      <div className="App">
        <Navbar />
      {/* <SignIn_Up/> */}

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/home1">
            {" "}
            <Home1 />{" "}
          </Route>
          <Route path="/services">
            {" "}
            <Services />{" "}
          </Route>
          <Route path="/about">
            {" "}
            <About />{" "}
          </Route>
          <Route path="/contact">
            {" "}
            <Contact />{" "}
          </Route>
          <Route path="/templates">
            {" "}
            <Templates />{" "}
          </Route>
          <Route path="*">
            {" "}
            <Page404 />{" "}
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );

}


export default App;
