import { useRef, useState, useEffect } from "react"
import React from 'react'
import{ useNavigate } from 'react-router-dom'
import './stylesheet.css'
// import emailjs from 'emailjs-com'

import ok from "./icons/ok.gif"
function Thanks(props) {

    const navigate = useNavigate()
  
    // const [user, setUser]= useState()
    function Homesend(){
        // props.setThanksdelivery(false)
        props.setthanks(false)
        // window.scrollTo(0, 0)
        navigate("/")
    }
    function Homesendorder(){
        // props.setThanksdelivery(false)
        // props.setthanks(false)
        props.setThanksdelivery(false)
        // window.scrollTo(0, 0)
        // window.location.replace("/")
        navigate("/")
    }
    function Homesendfeedback(){
        // props.setThanksdelivery(false)
        // props.setthanks(false)
        props.setFeedback(false)
        window.location.replace("/")
        // window.location.pathname
        // window.scrollTo(0, 0)
        
        // navigate("/")
        
    }
    function Homesenddoctor(){
        // props.setThanksdelivery(false)
        // props.setthanks(false)
        props.setBookdoctor(false)
        // window.scrollTo(0, 0)
        navigate("/")
    }

   
    return (
        <React.Fragment>
            {props.trigger ?
                 <div className='popup box'>
                 <div className='modalbox'>
                     <div className="modal-dialog thanks ">
                         <div className="modal-content">
                             <div className="modal-header">
                                 <h5 className="modal-title"> </h5>
                                 {/* <button  className="btn-close" onClick={()=> props.setthanks(false)}></button> */}
                             </div>
                             <div className="modal-body">
                                <img src={ok} alt="ok" />
                                <h1>Your query has been submitted successfully.</h1>
                                
                                <button onClick={Homesend}  className="btn thanksbutton  rounded-pill"> Back to Home</button>
                             </div>

                         </div>
                     </div>
                 </div>
             </div>
                : ""
            }
             {props.triggerss ?
                 <div className='popup box'>
                 <div className='modalbox'>
                     <div className="modal-dialog order  ">
                         <div className="modal-content">
                             <div className="modal-header">
                                 <h5 className="modal-title"> </h5>
                                 {/* <button  className="btn-close" onClick={()=> props.setthanks(false)}></button> */}
                             </div>
                             <div className="modal-body">
                             <img src={ok} alt="ok" />
                                <h1>Your order has been placed.</h1>
                                <p>Your order details will be sent on mail and whatsApp also our official will connect with you soon.</p>
                                <button className="btn thanksbutton  rounded-pill" onClick={Homesendorder}>Back to Home</button>
                             </div>

                         </div>
                     </div>
                 </div>
             </div>
                : ""
            }
            {props.triggersfeed ?
                 <div className='popup box'>
                 <div className='modalbox'>
                     <div className="modal-dialog thanks">
                         <div className="modal-content">
                             <div className="modal-header">
                                 <h5 className="modal-title"> </h5>
                                 {/* <button  className="btn-close" onClick={()=> props.setthanks(false)}></button> */}
                             </div>
                             <div className="modal-body">
                             <img src={ok} alt="ok" />
                                <h1>Your feedback has been submitted</h1>
                                {/* <p>Your order details will be sent on mail and whatsApp also our official will connect with you soon.</p> */}
                                <button className="btn thanksbutton  rounded-pill" onClick={Homesendfeedback}>Back to Home</button>
                             </div>

                         </div>
                     </div>
                 </div>
             </div>
                : ""
            }
            {props.triggerdoctor ?
                 <div className='popup box'>
                 <div className='modalbox'>
                     <div className="modal-dialog thanks ">
                         <div className="modal-content">
                             <div className="modal-header">
                                 <h5 className="modal-title"> </h5>
                                 {/* <button  className="btn-close" onClick={()=> props.setthanks(false)}></button> */}
                             </div>
                             <div className="modal-body">
                                <img src={ok} alt="ok" />
                                <h1>Your request for online consultation has been submitted.</h1>
                                
                                <button onClick={Homesenddoctor}  className="btn thanksbutton  rounded-pill"> Back to Home</button>
                             </div>

                         </div>
                     </div>
                 </div>
             </div>
                : ""
            }

        </React.Fragment>

    )
}
export default Thanks