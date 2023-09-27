import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import './App.css';


import {Link, Route} from 'react-router-dom'
import {BrowserRouter as Router,} from 'react-router-dom'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Templates from './components/Templates'
import Page404 from './components/Page404';
import Form from './components/Signin_up';
import Navbar from './components/Navbar';
// import { Redirect } from 'react-router-dom';
import Services from './components/Services'
import Home1 from './components/Home1';
import SignIn_Up from './components/Signin_up';

function App()
{
  return (
    <div className="App0">
      <Navbar />
      {/* <Form/> */}
      {/* <Router>  */}
      {/* <Link to="/home">Home Page</Link>
        <br/>
        <Link to="/about">About Page</Link>
        <br/>
        <Link to="/contact">Contact Page</Link>
        <br/>
        <Link to="/templates">Templates Page</Link>  */}

      <Switch>
        <Route path="/home">
          {" "}
          <Home />{" "}
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
        <Route path="/sign-up">
          {" "}
          <SignIn_Up />{" "}
        </Route>
        <Route path="*">
          {" "}
          <Page404 />{" "}
        </Route>
      </Switch>

      {/* </Router> */}
    </div>
  );

}


export default App;
