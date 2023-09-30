import React, { useState } from 'react';
import Login from "./LogIn";
import SignUp from './SignUp';
import LOGO from './LOGO.png'
import { Link } from 'react-router-dom';

export default function NavBar({ user, onLogout }) {
 

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar has-background-white is-spaced">

      <div className="navbar-brand">
        <img src={LOGO} alt="logo" width='100' />

        <h1 className='title is-1 has-text-primary pt-5 ml-3'> Care Village </h1>
        <button
          className="navbar-burger"
          aria-label="menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div className={`navbar-menu ${isMenuOpen ? 'is-active' : ''}`}>
        <div className="navbar-end">

          <Link to="/" className="navbar-item subtitle is-4 has-text-black mt-5 mx-2">Home</Link>

          <Link to="/aboutus" className="navbar-item subtitle is-4 has-text-black mt-5 mx-2">About Us</Link>

          <Link to="/forums" className="navbar-item subtitle is-4 has-text-black mt-5 mx-2">Forums</Link>

          <Link to="/donations" className="navbar-item subtitle is-4 has-text-black mt-5 mr-6 ml-2">Donations</Link>

          {user ? (
            <div className="navbar-item">
              <button className="button is-primary is-rounded mx-1 mb-5 mt-5">
                {user.displayName}
              </button>
              <button className="button is-primary is-rounded mx-1 mb-5 mt-5" onClick={onLogout}>Logout</button>              
            </div>
          ) : (
            <>
              
                <Login />
              
                <SignUp />
            
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
