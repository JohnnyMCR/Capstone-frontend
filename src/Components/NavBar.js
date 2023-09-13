import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from "./LogIn"
import SignUp from './SignUp';
import LOGO from './LOGO.png'

export default function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar has-background-white is-spaced">
      <div className="navbar-brand">
      <img src={LOGO} alt="logo" width='100' />
      <h1 className='title is-1 has-text-primary pt-5 ml-3'> Care Village </h1>
        
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded={isMenuOpen} 
        onClick={toggleMenu}>
          
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
  
      <div className={`navbar-menu ${isMenuOpen ? 'is-active' : ''}`}>
        <div className="navbar-end">

        <a href="/" className="navbar-item title is-5 has-text-primary">Home</a>

        <a href="/aboutus" className="navbar-item title is-5 has-text-primary">About Us</a>

        <a href="/forums" className="navbar-item title is-5 has-text-primary">Forums</a>

        <a href="/donations" className="navbar-item title is-5 has-text-primary">Donations</a>

          <button href='/login' className="button is-warning  mx-1 mb-5 is-rounded" id="login" >
           <Login />
          </button>
  
          <button href='/signup' className="button is-primary mx-1 mb-5 is-rounded" id="signup" >
          <SignUp />
          </button>
      
          
  
        </div>
      </div>
    </nav>
  );
  }