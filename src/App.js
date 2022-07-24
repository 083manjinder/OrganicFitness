import Navbar from "./Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Components/Home";
import React, { useState } from "react";
import About from './Components/About'
import Popup from "./Popup";

import Contact from "./Components/Contact";
import Cart from "./Components/Cart";

function App(props) {
  const[popupbox, setPopupBox] = useState(false)
  console.log(popupbox)
  return (
    <React.Fragment>
       
      <Router>
      <Popup trigger={popupbox} setTrigger={setPopupBox}/>
        <Navbar />
        <Routes>
          
          <Route extact path="/" element={<Home setPopupbox={setPopupBox} />} />
          <Route extact path="/about" element={<About/>} />
          
          <Route extact path="/contact" element={<Contact/>} />
          <Route extact path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
