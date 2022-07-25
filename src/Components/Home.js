import Section1 from "./home/Section1"
import Slider from "./home/Slider"
import React from "react"
import Section2 from "./home/section2"
// import Section3 from "./home/Section3"
import Product from "./home/Product"
import Review from "./home/Review"
import Footer from "./home/Footer"
import Section4 from "./home/Section4"
// import { useState } from "react"
import "./style.css"
// import './home/p'
const Home = (props)=>{

    // const[popup, setPopup] = useState(false)
    
    // props.popup(popup)
    return(
        <React.Fragment>
        <Slider setPopupbox={props.setPopupbox}/>
        <Section2/>
        <Product setPopupbox={props.setPopupbox}/>
        {/* <Section3/> */}
        <Section4/>
        <Section1/>
        <Review/>
        <Footer/>
        </React.Fragment>
    )
}
export default Home