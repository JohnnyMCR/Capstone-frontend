import React from 'react';
import LOGO from "./LOGO.png"

export default function Footer() {
  return (
    <footer className="has-background-primary">
      <div className="container">
        <div className="columns">
          <div className="column is-half has-text-left">
            <ul className="footer-list footer-list-left">
              <li className="footer-item"><a className="title is-5 has-text-white" href="/">Home</a></li>
              <li className="footer-item"><a className="title is-5 has-text-white" href="/aboutus">About Us</a></li>
              <li className="footer-item "><a className="title is-5 has-text-white" href="/forums">Forum</a></li>
              <li className="footer-item"><a className="title is-5 has-text-white" href="/donations">Donations</a></li>
            </ul>
          </div>

          <div className="column is-half has-text-right">
            <div className="footer-logo"></div>
            <img src={LOGO} alt="logo" width="150" />
          </div>
        </div>
      </div>
    </footer>
  );
}