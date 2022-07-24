import background from "../../images/background11.jpg"
import bottle from "../../images/bottle.png"
import React, { useState } from "react"
import Slideshow from "./Slideshow"
import { Navigate, useNavigate } from "react-router-dom"
// import Popup from "./Popup"
// import '../home/Popup'

const Slider = (props) => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    let isLogin = true;
    function buyProduct (){
        if(token === null){
            props.setPopupbox(true)
            isLogin = false
        }else{
            navigate("/cart")

        }
        
    }
    // const[popup, setPopup] = useState(false)
    if(isLogin === false){
        return <Navigate to="/"/>
    }
    
    // props.popup(popup)
    return (
        <React.Fragment>

            <div className="slider">
                <img src={background} className="backside" />
                {/* <Slideshow/> */}
                <div className="headline">
                    <h1>We are here to give you the best herb products
                    </h1>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur.</p>
                    <button  className="btn shopbutton  rounded-pill" onClick={ buyProduct}>Buy Now</button>
                </div>
                <div className="bottle">
                    <img src={bottle} />
                </div>
               
                
                </div>


        </React.Fragment>
    )
}
export default Slider