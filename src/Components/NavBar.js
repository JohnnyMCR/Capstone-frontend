import React, { useState } from 'react';
import Login from "./LogIn"
import SignUp from './SignUp';
import LOGO from './LOGO.png'
import { Link } from 'react-router-dom';

export default function NavBar({ isAuthenticated }) {
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
          {isAuthenticated ? (
            <div className="navbar-item">
              <button className="button is-primary is-rounded mx-1 mb-5">
                User SA
              </button>
            </div>
          ) : (
            <>
              {/* <Link to="/login" className="navbar-item title is-5 has-text-primary">Login</Link>
              <Link to="/signup" className="navbar-item title is-5 has-text-primary">Sign Up</Link> */}
              <button className="button is-warning  mx-1 mb-5 is-rounded" id="login" >
                <Login />
              </button>
              <button  className="button is-primary mx-1 mb-5 is-rounded" id="signup" >
                <SignUp />
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}


//import React from 'react';
// import { Link } from ‘react-router-dom’;
// const NavBar = ({ user, onLogout }) => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to=“/”>Home</Link>
//         </li>
//         {user ? (
//           <>
//             <li>
//               <Link to=“/dashboard”>Dashboard</Link>
//             </li>
//             <li>
//               <Link to=“/forums”>Forums</Link>
//             </li>
//             <li>
//               <Link to=“/forums/new”>Add a New Post</Link>
//             </li>
//             <li>
//         <li>
//           <Link to=“/forums/new”>Add a New Post</Link>
//         </li>
//               <Link to=“/donations”>Donations</Link>
//             </li>
//             <li>
//               <button onClick={onLogout}>Logout</button>
//             </li>
//           </>
//         ) : (
//           <>
//             <li>
//               <Link to=“/login”>Login</Link>
//             </li>
//             <li>
//               <Link to=“/signup”>Sign Up</Link>
//             </li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// };
// export default NavBar;