import React, { useRef, useState, useEffect } from "react"
// import './checkout.css'
import { useNavigate, Navigate } from "react-router-dom"
import emailjs from 'emailjs-com'
import CheckOutProduct from "./CheckOutProduct"
import "../stylesheet.css"
export default function Checkout(props) {
    // const[thank, setThank] = useState(false)
    const token = localStorage.getItem("token")
    let isLogin = true;
    if (token === null) {
        isLogin = false;

    }
    
    const navigate = useNavigate()
    // const [user, setUser]= useState()
    const form = useRef()
    useEffect(()=>{
        window.scrollTo(0, 0)
    })
    
    const inputValue = (e) => {
        // setUser({...user, [e.target.name]: e.target.value})
        // console.log(user)

    }
    function handleSubmit(e) {
        e.preventDefault();

        //    const templateUser = {
        //         to: "manjinderdhillon083@gmail.com",
        //         subject: user.name,
        //         message: user.phone,
        //         from: user.email,
        //    }
        // console.log(form.current)
        emailjs.sendForm('service_1vd6i8c', 'template_a2sijop', form.current, 'su0LphKqvbPATiw67')
        .then((result) => {
        // console.log(result)
        // console.log(templateUser)
        localStorage.removeItem("token")
        // props.setTrigger(false)
        props.setThanksdelivery(true)
        //   navigate("/")
        //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }).catch((error) => {
              console.log(error);
          });
    }
    if (isLogin === false) {
        return <Navigate to="/" />
    }
    return (
        <React.Fragment>

            <div className="checkout">
                <div className=" delivery">
                    <div className="contact-and-shipping-section">
                        <div className="shipping-info pt-1">
                            <h4 className="info-heading pb-3" >Delivery
                                information</h4>
                        </div>
                        <form id="checkoutform" className="has-validation-callback" ref={form} onSubmit={handleSubmit}>
                            <div className="row" id="errorMsgBlock">
                                <p className="errorMessage" id="errorMsg">
                                    <i className="fa fa-exclamation-triangle" aria-hidden="true"> </i>
                                </p>
                            </div>
                            <div className="form-group form-padding mb-3">
                                <input type="text" name="firstName" data-validation="required" className="form-control" id="fname" data-validation-error-msg="Please enter your First Name" placeholder="First Name" required control-id="ControlID-1" />
                            </div>
                            <div className="form-group form-padding mb-3">
                                <input type="text" name="lastName" data-validation="required" className="form-control" data-validation-error-msg="Please enter your Last Name" placeholder="Last Name" required control-id="ControlID-2" />
                            </div>


                            <div className="form-group form-padding mb-3">
                                <input type="number" name="phone" data-validation-length="min10" className="form-control" data-validation="number length" placeholder="Whatsapp No. Recommended (10 digits)" data-validation-error-msg="Please enter your Correct Phone Number" required control-id="ControlID-3" />
                            </div>
                            <div className="form-group form-padding mb-3">
                                <input type="email" name="email" className="form-control" data-validation="email" id="email" data-validation-error-msg="Please enter your Correct Email Address" placeholder="Email Address (Optional)"  control-id="ControlID-4" />
                            </div>
                            <div className="form-group w-100 form-padding mb-3">
                                <input type="text" name="address1" className="form-control" data-validation="required" id="address" data-validation-error-msg="Please enter your Full House Address" placeholder="HouseNo, Street, Area, Locality,District" required control-id="ControlID-5" />
                            </div>
                            <div className="form-group w-100 form-padding mb-3">
                                <input type="text" name="address2" className="form-control" data-validation-error-msg="Please enter your Landmark" placeholder="Landmark (Optional)" control-id="ControlID-6" />
                            </div>

                            <div className="form-group w-100 form-padding mb-3">
                                <input type="number" name="pincode" className="form-control postcode" id="postcode" data-validation-error-msg="Please enter your Correct Pin Code" data-validation="required" placeholder="Pincode (must be 6 digits long)" required control-id="ControlID-7" />
                            </div>

                            <div className="col-md-6 p-0">
                                <div className="form-group w-100 form-padding mb-3">
                                    <select name="state" id="regionIso" data-validation="required" className="form-control" data-validation-error-msg="Please enter your Correct State" title="Please select the state" required>
                                        <option  >Select State</option>
                                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands
                                        </option>
                                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                        <option value="Assam">Assam</option>
                                        <option value="Bihar">Bihar</option>
                                        <option value="Chandigarh">Chandigarh</option>
                                        <option value="Chhattisgarh">Chhattisgarh</option>
                                        <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                                        <option value="Daman and Diu">Daman and Diu</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Goa">Goa</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Haryana">Haryana</option>
                                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                        <option value="Jharkhand">Jharkhand</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Lakshadweep">Lakshadweep</option>
                                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Manipur">Manipur</option>
                                        <option value="Meghalaya">Meghalaya</option>
                                        <option value="Mizoram">Mizoram</option>
                                        <option value="Nagaland">Nagaland</option>
                                        <option value="Orissa">Orissa</option>
                                        <option value="Pondicherry">Pondicherry</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="Tamil Nadu">Tamil Nadu</option>
                                        <option value="Telangana">Telangana</option>
                                        <option value="Tripura">Tripura</option>
                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                        <option value="Uttarakhand">Uttarakhand</option>
                                        <option value="West Bengal">West Bengal</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 p-0">
                                <div className="form-group w-100 form-padding">
                                    <input type="text" name="city" className="form-control" id="townCity" data-validation="required" placeholder="Please Enter City Name" data-validation-error-msg="Please enter your Correct City Name" required control-id="ControlID-10" />
                                </div>
                            </div>
                            <div className="col-md-6 p-0">
                                <div className="form-group w-100 form-padding">
                                    <input type="hidden" name="product" value={props.data.packname} className="form-control" id="townCity" placeholder="Please Enter City Name" data-validation-error-msg="Please enter your Correct City Name" required control-id="ControlID-10" />
                                </div>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"  checked/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                       Cash on delivery
                                    </label>
                            </div>


                            <button type="submit" id="submitButton" className="btn submitorder" control-id="ControlID-11">
                                submit
                            </button>

                        </form>
                    </div>
                </div>

                <CheckOutProduct product={props.data} />
            </div>
        </React.Fragment>
    )
}