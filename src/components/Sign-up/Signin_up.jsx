import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./sign-up.css";
import reg from "../img/register.svg";
import log from "../img/log.svg";

const SignIn_Up = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const toggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign In</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>

            {/* <input type="submit" value="Login" className="btn solid" /> */}
            <Link to="/" className="btn solid btn-get-started">
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
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            {/* <input type="submit" className="btn" value="Sign up" /> */}
            <Link to="/" onClick={toggleMode} className="btn solid btn-get-started">
              Sign Up
            </Link>
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

export default SignIn_Up;
