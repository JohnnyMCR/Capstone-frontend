import React, { useState } from 'react';
import Login from "./LogIn";
import SignUp from './SignUp';
import LOGO from './LOGO.png'
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar({ user, onLogout }) {
  const navigate = useNavigate()
 

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

          <Link to="/" className="navbar-item subtitle is-5 has-text-black mt-5 mx-2">Home</Link>

          <Link to="/aboutus" className="navbar-item subtitle is-5 has-text-black mt-5 mx-2">About Us</Link>

          <Link to="/forums" className="navbar-item subtitle is-5 has-text-black mt-5 mx-2">Forums</Link>

          <Link to="/donations" className="navbar-item subtitle is-5 has-text-black mt-5 mr-5 ml-2">Donations</Link>

          {user ? (
            <div className="navbar-item">
              <button className="button is-primary is-rounded has-text-weight-bold is-italic has-text-warning"
              onClick={() => navigate('/dashboard')}
              >
                 <Link
            to="/dashboard"
            className="title is-5 has-text-warning has-text-centered"
          >
            Hi, {user.displayName}!
          </Link>
                
              </button>
              <button className="button is-primary is-rounded ml-2 has-text-weight-bold" onClick={onLogout}>Logout</button>              
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
