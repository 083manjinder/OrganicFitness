import Navbar from "./Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from "./Components/Home";
import React, { useState, useEffect } from "react";
import About from './Components/About'
import Popup from "./Popup";
import "./stylesheet.css"
import pack1 from './images/bottle3.png'
import pack2 from './images/pack2.png'
import pack3 from './images/pack4.png'
import pack6 from './images/pack6.png'
import pack8 from './images/pack8.png'
import './mediaQuery.css'
import Book from "./Book"

import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Footer from "./Components/home/Footer";
import { Notfound } from "./Components/Notfound";
import Thanks from "./Thanks";
const product = [
  { id:1,
    packname: "Single Pack",
    price: 2999,
    bottle:1,
    discount: 1799,
    offertype: "",
    offer: "40% off",
    image: pack1
    // save: "720" 
  },
  {id:2,
    packname: "Twin Pack",
    price: 5999,
    bottle:2,
    discount: 2399,
    offertype: "",
    offer: "60% off",
    image: pack2
  },
  { id:3,
    packname: "Buy 3 Get 1 Free",
    price: 11999,
    bottle:4,
    discount: 3599,
    offertype: "Best Selling",
    offer: "70% off",
    image: pack3
  },
  {  id:4,
    packname: "Buy 4 Get 2 Free",
    price: 17999,
    bottle:6,
    discount: 4499,
    offertype: "Hot",
    offer: "75% off",
    image: pack6
    
  },
  { id:5,
    packname: "Buy 5 Get 3 Free",
    price: 23999,
    bottle:8,
    discount: 5499,
    offertype: "Ultra Saving",
    offer: "77% off",
    image: pack8
  }
]


function App(props) {
  const[popupbox, setPopupBox] = useState(false)
  const[book, setBook] = useState(false)
  const[thanks, setThanks] = useState(false)
  const[thankdelivery, setThanksdelivery]= useState(false)
  const[feedback, setFeedback] = useState(false)
  const[bookdoctor, setBookdoctor] = useState(false)
  // const[productdetail, setProductdetail] = useState()
  const[ids, setId]= useState(1)
  const products = product[ids -1] 
  // console.log(products)
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // },[])
  return (
    <React.Fragment>
   
      
      <Popup trigger={popupbox} setTrigger={setPopupBox}/>
      <Book trigger={book} setbook={setBook} setBookdoctor={setBookdoctor}/>
      <Thanks trigger={thanks} setthanks={setThanks} triggerss={thankdelivery} setThanksdelivery={setThanksdelivery} triggersfeed={feedback} setFeedback={setFeedback} triggerdoctor={bookdoctor} setBookdoctor={setBookdoctor}/>
        <Navbar />
        <Routes>
          
          <Route  exact path="/" element={<Home setPopupbox={setPopupBox}  setbook={setBook} setFeedback={setFeedback} /> } ></Route>
            <Route exact path="/about" element={<About setThanks={setThanks}  />} ></Route>
            <Route exact path="/contact" element={<Footer setFeedback={setFeedback}/>} ></Route>
            <Route exact path="/cart" element={<Cart data={product} checkdone={(productid)=> {setId(productid)}} setPopupbox={setPopupBox}/>} > </Route>
            <Route exact path="/checkout" element={<Checkout  data={products}  setThanksdelivery={setThanksdelivery}/>} > </Route>
            <Route exact path="/*" element={<Notfound/>}> </Route>
   
        </Routes>

    </React.Fragment>
  );
}

export default App;
