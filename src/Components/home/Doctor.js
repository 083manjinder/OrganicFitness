import { Button } from "bootstrap";
import React, { useState } from "react";
import doctor from '../../images/doctor1.jpg'
import { Navigate, useNavigate } from "react-router-dom";
export default function Doctor (props){
    // const navigate = useNavigate()
    const[book, setBook] = useState(false)
    const token = localStorage.getItem("tokens")
    // let isLogin = true;
    function buyProduct() {
        
            props.setbook(true)
            // isLogin = false

       
            // navigate("/")

        

    }
    // const[popup, setPopup] = useState(false)
    // if (isLogin === false) {
    //     return <Navigate to="/" />
    // }


    return(
        <React.Fragment>
            <div className="doctor">
                <div className="container">
                    {/* <h1>Keto Docx</h1> */}
                    <div className='doctorimg'>
                        <img src={doctor} alt="product" />
                    </div>
                    <div className='doctordetails'>
                        <h3 className="mb-5">Keto Docx is recommended by doctors and is proven to help you lose weight without any diet or exercise, naturally and permanently.

Book free consultation from highly qualified doctors and health advisors to know what's best for your body.</h3>
                        <button className={`btn doctorbutton  rounded-pill`} onClick={buyProduct}>Book Consultation</button>
                        {
                        book?<div>* your consultation has already been booked</div>:""}
                    </div>
                  
                </div>

            </div>
        </React.Fragment>
    )
}