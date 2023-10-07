import { AuthProvider } from './Components/AuthContext'; 
import "bulma/css/bulma.min.css";
import "./App.css";
import "./custom.scss";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDash from './Components/UserDash';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import DonationIndex from './Pages/DonationIndex';
import ForumsIndex from './Pages/ForumsIndex';
import Error from './Pages/Error';
import Footer from "./Components/Footer.js";
import AboutUs from "./Pages/About";
import {app} from './Components/firebaseConfig'

console.log(app)


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
            <Route path="/donations" element={<DonationIndex />} />
            <Route path="/forums" element={<ForumsIndex/>} />
          </Routes> 
        </main>
        <Footer />
      </div>
      </AuthProvider>
    </Router>
  );
}

export default App;