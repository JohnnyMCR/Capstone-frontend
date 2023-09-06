//Firebase Starters
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseConfig from "./Components/firebaseConfig"; 

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './Components/NavBar';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import Home from './Pages/Home';
import About from './Pages/About';
import DonationIndex from './Pages/DonationIndex';
import EditDonation from './Pages/EditDonation';
import Error from './Pages/Error';
// import ForumEdit from './Pages/ForumEdit';
// import ForumIndex from './Pages/ForumIndex';
import NewDonation from './Pages/NewDonation';
// import NewForum from './Pages/NewForum';
import ShowDonation from './Pages/ShowDonation';
// import ShowForum from './Pages/ShowForum';
import Dashboard from './Components/Dashboard';
import Forums from './Components/Forums';

//Initializing Firebase
const app = initializeApp(firebaseConfig);
console.log('Firebase initialized:', app);

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
    <Router>
      <div className="App">
        <NavBar user={user} onLogout={() => auth.signOut()} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/About" element={<About />} />
          <Route path="/donations" element={<DonationIndex />} />
          <Route path="/donations/new" element={<NewDonation />} />
          <Route path="/donations/edit" element={<EditDonation />} />
          <Route path="/donations/show" element={<ShowDonation />} />
          <Route path="/forums" element={<Forums />} />
          {/* <Route path="/forums/new" element={<NewForum />} />
          <Route path="/forums/edit" element={<ForumEdit />} /> */}
          {/* <Route path="/forum/show" element={<ShowForum />} /> */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route
            path="/dashboard"
            element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
