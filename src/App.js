import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Resources from "./Components/Resources";
import Members from "./Components/Members";
import Contacts from "./Components/Contact";
// import Resume from "./Components/resume";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        {/* <Resume /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Webproject" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/members" element={<Members />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
