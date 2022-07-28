import { useState } from "react"
import React from 'react'
import{ useNavigate } from 'react-router-dom'
// import emailjs from 'emailjs-com'
function Popup(props) {
    const navigate = useNavigate()
    const [user, setUser]= useState([])

    const inputValue= (e)=>{
        setUser({...user, [e.target.name]: e.target.value})
        // console.log(user)

    }
   function handleSubmit (e) {
        e.preventDefault();
       
        // console.log(user)
        // emailjs.sendForm('service_hhz0q9o', 'template_d9o9msg', user, 'QYd5pPw4KGEjxeVAv')
        // .then((result) => {
        //     console.log(result)
            localStorage.setItem("token", "5277a1c418b80e0b27d770ec3d0ab996")
            props.setTrigger(false)
          navigate("/cart")
           //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
    //     }).catch((error) => {
    //       console.log(error.text);
    //   });
       
   }
    return (
        <React.Fragment>
            {props.trigger ?
                <div className='popup box'>
                    <div className='modalbox'>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title"> </h5>
                                    <button  className="btn-close" onClick={()=> props.setTrigger(false)}></button>
                                </div>
                                <div className="modal-body">
                                    <h1>Order Now</h1>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label  className="form-label">Name</label>
                                            <input type="text" className="form-control" name="name" required onChange={inputValue}/>
                                        </div>
                                        <div className="mb-3">
                                            <label  className="form-label">Email address (optional)</label>
                                            <input type="email" className="form-control" name="email"   onChange={inputValue}/>
                                        </div>
                                        <div className="mb-3">
                                            <label  className="form-label">Phone</label>
                                            <input type="number" className="form-control" name="phone" required onChange={inputValue}/>
                                        </div>
                                        <div className='mb-3'>
                                        <button className="btn btn-success">Submit</button>
                                        </div>
                                    </form>
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
export default Popup