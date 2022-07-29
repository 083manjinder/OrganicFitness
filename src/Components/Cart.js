import React from "react"
import { Navigate } from "react-router-dom";
import DetailsProduct from "./Cart/DetailsProduct";
import ProductCart from "./Cart/ProductCart";
import "../stylesheet.css"

export default function Cart (){
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
            <ProductCart />
            <DetailsProduct/>
        </React.Fragment>
    )
}