import { useRef, useState } from "react"
import React from 'react'
import{ useNavigate } from 'react-router-dom'
import './stylesheet.css'
import emailjs from 'emailjs-com'
function Book(props) {
    const navigate = useNavigate()
    // const [user, setUser]= useState()
    const form = useRef()

    const inputValue= (e)=>{
        // setUser({...user, [e.target.name]: e.target.value})
        // console.log(user)

    }
   function handleSubmit (e) {
        e.preventDefault();
    //    const templateUser = {
    //         to: "manjinderdhillon083@gmail.com",
    //         subject: user.name,
    //         message: user.phone,
    //         from: user.email,
    //    }
        // console.log(form.current)
          emailjs.sendForm('service_1vd6i8c', 'template_m3ugq9i', form.current, 'su0LphKqvbPATiw67')
            .then((result) => {
                console.log(result)
                // console.log(templateUser)
            // localStorage.setItem("token", "5277a1c418b80e0b27d770ec3d0ab996")
            props.setbook(false)
            props.setBookdoctor(true)

        //   navigate("/")
    //        //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
        }).catch((error) => {
          console.log(error);
      });
       
   }
    return (
        <React.Fragment>
            {props.trigger ?
                <div className='popup box'>
                    <div className='modalbox'>
                        <div className="modal-dialog book">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title"> </h5>
                                    <button  className="btn-close" onClick={()=> props.setbook(false)}></button>
                                </div>
                                <div className="modal-body">
                                    <h1>Book Consultation</h1>
                                    <form onSubmit={handleSubmit} ref={form}>
                                        <div className="mb-3">
                                            <label  className="form-label">Name</label>
                                            <input type="text" className="form-control" name="name"   required/>
                                        </div>
                                        {/* <div className="mb-3">
                                            <label  className="form-label">Email address (optional)</label>
                                            <input type="text" className="form-control" name="email"   onChange={inputValue}/>
                                        </div> */}
                                        <div className="mb-3">
                                            <label  className="form-label">Phone</label>
                                            <input type="number" className="form-control" name="phone"  required/>
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
export default Book