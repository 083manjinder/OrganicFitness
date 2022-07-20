import Section1 from "./home/Section1"
import Slider from "./home/Slider"
import React from "react"
import Section2 from "./home/section2"
import Section3 from "./home/Section3"
import Product from "./home/Product"
import Review from "./home/Review"
import Footer from "./home/Footer"
const Home = ()=>{

    return(
        <React.Fragment>
        <Slider/>
        <Section2/>
        <Product/>
        <Section3/>
        <Section1/>
        <Review/>
        <Footer/>
        </React.Fragment>
    )
}
export default Home