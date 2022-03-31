import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from ".//Components/Home/Home";
import Login from "./Components/Login/Login";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="Services" element={<Services />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
