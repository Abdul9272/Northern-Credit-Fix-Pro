import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {useHistory } from "react-router-dom"
// import {useRouter } from "react-router-dom";

import "./sign-up.css";
import reg from "../img/register.svg";
import log from "../img/log.svg";
import axios from "axios"

const SignInUp = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const history=useHistory();

  const toggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


async function submit(e){
    e.preventDefault();
  
    try{
        await axios.post("http://localhost:8000/login",{
          email,password
        }).then(res=>{
          if(res.data == "exist"){
            alert("Welcome!!")
              // history.push("/home",{state:{id:email}})
              history.push("/home")
          }
          else if(res.data == "notexist"){
              alert("User have not sign up")
          }
      }).catch(e=>{
          alert("wrong details1")
          console.log(e);
      })

    }
    catch(e){
              console.log(e);

    }
  }
async function submit1(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:8000/signup",{email,password}
      ).then(res=>{
        if(res.data=="exist"){
          alert("User Already Exist")
        }
        else if(res.data=="notexist"){
            history("/home",{state:{id:email}})
          }
      }).catch(e=>{
          alert("wrong details2")
          alert("ui")
          console.log(e);
      })

    }
    catch(e){
              console.log(e);

    }
  }

  



  

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="POST" className="sign-in-form">
            <h2 className="title">Sign In</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="email" name="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" name="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
            </div>

            {/* <input type="submit" value="Login" className="btn solid" /> */}
            <Link onClick={submit} to="/" className="btn solid btn-get-started">
              Login
            </Link>
            {/* <button className="btn solid btn-get-started" onClick={handleLogin}>Login</button> */}

            <br />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="/" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="/" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <form action="POST" className="sign-up-form">
            <h2 className="title">Sign Up</h2>
            {/* <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div> */}
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" name="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" name="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
            </div>
            {/* <input type="submit" className="btn" value="Sign up" /> */}
            <Link to="/" onClick={submit1} className="btn solid btn-get-started">
              Sumbit
            </Link>
            {/* <Link to="/" onClick={toggleMode} className="btn solid btn-get-started">
              Sign Up
            </Link> */}
            {/* <hr /> */}
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="/" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="/" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Ready to get started? Sign up now and unlock a world of
              possibilities.
            </p>
            <button
              className={
                isSignUpMode ? "btn transparent active" : "btn transparent"
              }
              id="sign-up-btn"
              onClick={toggleMode}
            >
              Sign up
            </button>
          </div>
          <img src={log} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Sign in and let the fun begin. We're thrilled to have you here!
            </p>
            <button
              className={
                !isSignUpMode ? "btn transparent active" : "btn transparent"
              }
              id="sign-in-btn"
              onClick={toggleMode}
            >
              Sign in
            </button>
          </div>
          <img src={reg} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignInUp;
