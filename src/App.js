//Firebase Starters
// import { initializeApp } from 'firebase/app'; moved to AuthContext
// import { getAuth, onAuthStateChanged } from 'firebase/auth'; moved to AuthContext
// import firebaseConfig from "./Components/firebaseConfig"; moved to AuthContext
import { AuthProvider } from './Components/AuthContext'; 
import "bulma/css/bulma.min.css";
import "./App.css";
import "./custom.scss";
// import React, { useState, useEffect } from 'react'; moved to AuthContext
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDash from './Components/UserDash';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import DonationIndex from './Pages/DonationIndex';
// import Donations from "./Pages/DonationIndex";
import EditDonation from './Pages/EditDonation';
import ForumsIndex from './Pages/ForumsIndex';
import ShowForumDetails from './Pages/ShowForumDetails'
import EditForum from './Pages/EditForums';
import Error from './Pages/Error';
import NewDonation from './Pages/NewDonation';
import ShowDonation from './Pages/ShowOneDonation';
import Footer from "./Components/Footer.js";
import AboutUs from "./Pages/About";
//Initializing Firebase
// const app = initializeApp(firebaseConfig);
// console.log("Firebase initialized:", app);

function App() {
  
  return (
    <Router>
      <AuthProvider>
      <div className="App">
        <NavBar/>  
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path='/dashboard' element={<UserDash/>} />
            {/* <Route path="/donations" element={<Donations />} /> */}
            <Route path="/donations" element={<DonationIndex />} />
            <Route path="/donations/new" element={<NewDonation />} />
            <Route path="/donations/edit" element={<EditDonation />} />
            <Route path="/donations/show" element={<ShowDonation />} />
            <Route path="/forums" element={<ForumsIndex/>} />
            <Route path="/forums/:id" element={<ShowForumDetails />} />
            <Route path="/forums/:id/edit" element={<EditForum />} />
          </Routes> 
        </main>
        <Footer />
      </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
