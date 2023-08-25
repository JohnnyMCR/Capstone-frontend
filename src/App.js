import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './Components/NavBar';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import Dashboard from './Components/Dashboard';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseConfig from './Components/firebaseConfig'; // Your Firebase config

function App() {
  const [user, setUser] = useState(null);

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  return (
    <Router>
      <div className="App">
        <NavBar user={user} onLogout={() => auth.signOut()} />
        <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route
          path="/dashboard"
          render={() => (user ? <Dashboard user={user} /> : <Navigate to="/login" />)}
        />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
