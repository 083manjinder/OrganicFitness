import Navbar from "./Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Components/Home";
import React from "react";
import About from './Components/About'

import Contact from "./Components/Contact";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          
          <Route extact path="/" element={<Home/>} />
          <Route extact path="/about" element={<About/>} />
          
          <Route extact path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
