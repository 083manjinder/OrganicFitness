import Section1 from "./home/Section1"
import Slider from "./home/Slider"
import React, { useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import Section2 from "./home/section2"
// import Section3 from "./home/Section3"
// import Product from "./home/Product"
import Review from "./home/Review"
import NewReview from "./home/NewReview"
import Footer from "./home/Footer"
import Section4 from "./home/Section4"
// import NewAbout from "./NewAbout";
// import Doctor from "./home/Mapping";
import Mapping from "./home/Mapping";
import Doctor from "./home/Doctor";
import Fssai from "./home/Fssai";
// import { withRouter } from "react-router-dom"
// import { useState } from "react"
// import '../stylesheet.css'
// import './home/p'
const Home = (props) => {
    useEffect(()=>{
        window.scrollTo(0, 0)
    })
 
    //   console.log(window.scrollY)  
 
    // const[popup, setPopup] = useState(false)
    // console.log(props.thank)
    // props.popup(popup)
    return (
        <React.Fragment>
        
            <Slider setPopupbox={props.setPopupbox} />
            <Doctor setbook={props.setbook} />
            <Fssai />
            <Section2 />
            <Section4 />
          
            {/* <NewAbout/> */}
            {/* <Product setPopupbox={props.setPopupbox}/> */}
            <Mapping />

            {/* <Section3/> */}

            <Section1 />
            {/* <Review /> */}
            <NewReview/>
            <Footer  setFeedback={props.setFeedback} />
        </React.Fragment>
    )
}
export default Home