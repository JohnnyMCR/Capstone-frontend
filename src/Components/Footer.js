import React from "react";
import LOGO2 from "./LOGO2.png";
import { Link } from "react-router-dom";
// import Login from "./LogIn";
// import SignUp from "./SignUp";

export default function Footer() {
  return (
    <footer className="has-background-primary">
      <div className="columns">
        <div className="column is-one-quarter has-text-left ml-2">
          <img src={LOGO2} alt="logo2" width="96" />
        </div>

        <div className="column is-half has-text-centered is-flex is-justify-content-space-evenly pt-5 mt-5">
          <Link
            to="/"
            className="title is-5 has-text-white has-text-centered"
          >
            Home
          </Link>

          <Link
            to="/aboutus"
            className="title is-5 has-text-white  has-text-centered"
          >
            About Us
          </Link>

          <Link
            to="/forums"
            className="title is-5 has-text-white  has-text-centered"
          >
            Forums
          </Link>

          <Link
            to="/donations"
            className="title is-5 has-text-white has-text-centered"
          >
            Donations
          </Link>
        </div>

        {/* <div className="column is-one-quarter has-text-centered"> */}
          {/* <button className="button is-rounded has-text-dark mt-6" type="button" style={{
                    boxShadow: "none",
                    backgroundColor: "none",
                    color: "inherit",
                  }}>
            <Login />
          </button>

          <button className="button is-rounded has-text-dark mt-6 p-0 has-background-" type="button" style={{
                    boxShadow: "none",
                    backgroundColor: "none",
                    color: "inherit",
                  }}>
            <SignUp />
          </button> */}
        {/* </div> */}

        {/* <div className="column is-half has-text-left ml-3">
          <ul className="footer-list">
            <li className="footer-item">
              <Link to="/" className="title is-5 has-text-white ">
                Home
              </Link>
            </li>
            <li className="footer-item mt-3">
              <Link to="/aboutus" className="title is-5 has-text-white">
                About Us
              </Link>
            </li>
            <li className="footer-item mt-3">
              <Link to="/forums" className="title is-5 has-text-white">
                Forums
              </Link>
            </li>
            <li className="footer-item mt-3">
              <Link to="/donations" className="title is-5 has-text-white ">
                Donations
              </Link>
            </li>
          </ul>
        </div> */}
        {/* 
        <div className="column has-text-right mr-3">
          <div className="footer-logo"></div>
          <img src={LOGO} alt="logo" width="150" />
        </div> */}
      </div>
    </footer>
  );
}
