import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar"

import Home from "./Pages/Home"
// import Index from "./Pages/Index"
// import Show from "./Pages/Show"
// import Edit from "./Pages/Edit"
// import New from "./Pages/New"
import Error from "./Pages/Error"

function App() {
  return (
    <div className="App">
     <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
     </Router>
    </div>
  );
}

export default App;
