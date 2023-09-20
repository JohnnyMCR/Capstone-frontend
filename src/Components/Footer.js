import React from 'react';
import LOGO from "./LOGO.png"
import { Link } from 'react-router-dom';


export default function Footer() {
  return (


    <footer className="has-background-primary">

      <div className="columns">
        <div className="column is-half has-text-left ml-3">
          <ul className="footer-list">
            <li className="footer-item"><Link to="/" className="title is-5 has-text-white">Home</Link></li>
            <li className="footer-item"><Link to="/aboutus" className="title is-5 has-text-white">About Us</Link></li>
            <li className="footer-item "><Link to="/forums" className="title is-5 has-text-white">Forums</Link></li>
            <li className="footer-item"><Link to="/donations" className="title is-5 has-text-white">Donations</Link></li>
          </ul>
        </div>

        <div className="column has-text-right mr-3">
          <div className="footer-logo"></div>
          <img src={LOGO} alt="logo" width="150" />
        </div>
      </div>

    </footer>
  );
}