import icon1 from "../../icons/fastdelivery.png"
import icon2 from '../../icons/payment.png'
import icon3 from '../../icons/customer.png'
import icon4 from '../../icons/organic 2.png'
import icon5 from '../../icons/moneyback.png'
import icon6 from '../../icons/otherservice.png'
import icon7 from '../../icons/doctor.png'
 import React from "react"
 import "../../stylesheet.css"

const Section1 = () => {

    return (
        <React.Fragment>
            <section className="section1">
                <h1>Finest Services</h1>
                <div className="first">
                    <div className="card box1 " >
                        <div className="card-body">
                            <img src={icon4} alt="images"/>
                            <h5 className="card-title">100% Organic</h5>
                            <p className="card-text">FSSAI certified and FDA approved. It makes the product trusted and of best quality.</p>

                        </div>
                    </div>
                    <div className="card box2 " >
                        <div className="card-body">
                            <img src={icon1} alt="images"/>
                            <h5 className="card-title">Free and fast shipping</h5>
                            <p className="card-text">No cost shipping anywhere in India. Cash on delivery (COD available)</p>

                        </div>
                    </div>
                    <div className="card box3" >
                        <div className="card-body">
                            <img src={icon2} alt="images" />
                            <h5 className="card-title">Secure payment</h5>
                            <p className="card-text">All the transactions and payments are safe and secure. </p>

                        </div>
                    </div>
                    <div className="card box4 " >
                        <div className="card-body">
                            <img src={icon3} alt="images" />
                            <h5 className="card-title">Friendly customer support</h5>
                            <p className="card-text">We have a 24/7 customer support and we are always happy to serve you.</p>

                        </div>
                    </div>
                    <div className="card box4 " >
                        <div className="card-body">
                            <img src={icon5} alt="images" />
                            <h5 className="card-title">90 days money back policy</h5>
                            <p className="card-text">We provide a 90 days money back policy in case you are unsatisfied. </p>

                        </div>
                    </div>
                    
                    <div className="card  " >
                        <div className="card-body">
                            <img src={icon7}  alt="images"/>
                            <h5 className="card-title">Free dietitian support and doctor consultancy</h5>
                            <p className="card-text">Dietitian support will help you throughout your journey with us. Highly trained and certified doctors will provide guidance and motivation for best results. </p>

                        </div>
                    </div>
                    <div className="card box2 " >
                        <div className="card-body">
                            <img src={icon6} alt="images" />
                            <h5 className="card-title">Other services</h5>
                            <p className="card-text">Free pre-ketosis full body detoxification, keto diet support, customized diet plans, classes with fitness instructors and more.</p>

                        </div>
                    </div>
                    

                </div>



            </section>
        </React.Fragment>
    )
}
export default Section1