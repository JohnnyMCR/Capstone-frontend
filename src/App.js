import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bulma/css/bulma.min.css'
import './App.css'
import './custom.scss'

import Home from './Pages/Home.js'
import NavBar from './Components/NavBar.js'
import Footer from './Components/Footer.js'
import AboutUs from './Pages/About'
import Forums from './Pages/ForumIndex'
import Donations from "./Pages/DonationIndex"




function App() {
  const isAuthenticated = true;
  return (
    <div className="App">
      <Router>
        <NavBar isAuthenticated={isAuthenticated}/>
        <main>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/forums" element={<Forums/>} />
          <Route path="/donations" element={<Donations/>} />
          </Routes>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;