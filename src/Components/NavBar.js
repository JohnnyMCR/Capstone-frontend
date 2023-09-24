import React, { useState } from 'react';
import Login from "./LogIn"
import SignUp from './SignUp';
import LOGO from './LOGO.png'
import { Link } from 'react-router-dom';
// import Profile from './Profile';
import UserId from './UserId';

export default function NavBar({ user, onLogout, username }) {
  console.log(username);

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

          <Link to="/" className="navbar-item title is-5 has-text-primary">Home</Link>

          <Link to="/aboutus" className="navbar-item title is-5 has-text-primary">About Us</Link>

          <Link to="/forums" className="navbar-item title is-5 has-text-primary">Forums</Link>

          <Link to="/donations" className="navbar-item title is-5 has-text-primary">Donations</Link>

          {user ? (
            <div className="navbar-item">
              <button className="button is-primary is-rounded mx-1 mb-5">
                <UserId userId={user.id} username={username}/>
              </button>
              <button className="button is-primary is-rounded mx-1 mb-5" onClick={onLogout}>Logout</button>              
            </div>
          ) : (
            <>
              <button href='/login' className="button is-warning  mx-1 mb-5 is-rounded" id="login" >
                <Login />
              </button>
              <button href='/signup' className="button is-primary mx-1 mb-5 is-rounded" id="signup" >
                <SignUp />
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}