import React from "react"
import { Navigate } from "react-router-dom";
import DetailsProduct from "../Cart/DetailsProduct";
import ProductCart from "../Cart/ProductCart";
// import "../stylesheet.css"
import Section4 from "./home/Section4";

export default function Cart (props){
    const token = localStorage.getItem("token")
    let isLogin = true;
    if(token === null){
        isLogin = false;

    }
    if(isLogin === false){
        return <Navigate to="/" />
    }
    return(
        <React.Fragment>
            <ProductCart  />
            <DetailsProduct data={props.data} check={(productid)=>{props.checkdone(productid)}}/>
            {/* < Section4 /> */}
        </React.Fragment>
    )
}