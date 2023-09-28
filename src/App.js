//Firebase Starters
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseConfig from "./Components/firebaseConfig";

import { AuthProvider } from './Components/AuthContext'; 

import "bulma/css/bulma.min.css";
import "./App.css";
import "./custom.scss";

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import SignUp from './Components/SignUp';
// import LogIn from './Components/LogIn';
import Dashboard from './Components/Dashboard';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import DonationIndex from './Pages/DonationIndex';
// import Donations from "./Pages/DonationIndex";
import EditDonation from './Pages/EditDonation';
import ForumsIndex from './Pages/ForumsIndex';
// import Forums from "./Pages/ForumIndex";
import ShowForumDetails from './Pages/ShowForumDetails'
import EditForum from './Pages/EditForums';
import PostNew from './Pages/PostNew';
import Error from './Pages/Error';
import NewDonation from './Pages/NewDonation';
import ShowDonation from './Pages/ShowOneDonation';
import Footer from "./Components/Footer.js";
import AboutUs from "./Pages/About";

//Initializing Firebase
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
  console.log(user)
  
  return (
    <Router>
      <AuthProvider>
      <div className="App">
        <NavBar user={user} onLogout={() => auth.signOut()}/>  
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path='/dashboard' element={<Dashboard />} />
            {/* <Route path="/donations" element={<Donations />} /> */}
            <Route path="/donations" element={<DonationIndex />} />
            <Route path="/donations/new" element={<NewDonation />} />
            <Route path="/donations/edit" element={<EditDonation />} />
            <Route path="/donations/show" element={<ShowDonation />} />
            {/* <Route path="/forums" element={<Forums />} /> */}
            <Route path="/forums" element={<ForumsIndex user={user} />} />
            <Route path="/forums/new" element={<PostNew />} />
            <Route path="/forums/:id" element={<ShowForumDetails />} />
            <Route path="/forums/:id/edit" element={<EditForum />} />
            {/* <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />  */}
             {/* <Route
              path="/dashboard"
              element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} />  */}
          </Routes> 
        </main>
        <Footer />
      </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
