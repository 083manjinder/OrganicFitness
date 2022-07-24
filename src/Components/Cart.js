import React from "react"
import { Navigate } from "react-router-dom";

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
            <h1>cart</h1>
        </React.Fragment>
    )
}