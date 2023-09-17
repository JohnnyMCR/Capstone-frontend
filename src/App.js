import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseConfig from "./Components/firebaseConfig";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import "bulma/css/bulma.min.css";
import "./App.css";
import "./custom.scss";

import Home from "./Pages/Home.js";
import NavBar from "./Components/NavBar.js";
import Footer from "./Components/Footer.js";
import AboutUs from "./Pages/About";
import Forums from "./Pages/ForumIndex";
import Donations from "./Pages/DonationIndex";
import Dashboard from "./Components/Dashboard";
import LogIn from './Components/LogIn';

const app = initializeApp(firebaseConfig);
console.log("Firebase initialized:", app);


function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);
  return (
    <div className="App">
      <Router>
      <NavBar user={user} onLogout={() => auth.signOut()} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/forums" element={<Forums />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/login" element={<LogIn />} />
            <Route
              path="/dashboard"
              element={
                user ? <Dashboard user={user} /> : <Navigate to="/login" />
              }
            />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
