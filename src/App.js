import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Resources from "./Components/Resources";
import Members from "./Components/Members";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Members />} />
          <Route path="/documents" element={<Resources />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
