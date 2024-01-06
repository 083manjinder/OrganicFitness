import React, { useEffect } from "react";
// import './CartStyle.css'
// import '../stylesheet.css'
import image from '../images/bottle3.png'
import image2 from '../images/label1.jpg'
import image3 from '../images/label2.jpg'
import image4 from "../images/label3.jpg"
import pay from "./pay.png"
import freeship from './freeship.png'
import returnd from "./return.png"
import guide from './guide.png'


export default function ProductCart() {
    useEffect(()=>{
        window.scrollTo(0, 0)
    })
    return (
        <React.Fragment>
            <div className="cartproduct">
            <div id="carouselExampleDark" className="carousel carousel-dark sliders"  data-bs-ride="carousel">
               
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={image} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={image2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={image3} className="d-block w-100" alt="..." />
                    </div>
                    {/* <div className="carousel-item">
                        <img src={image4} className="d-block w-100" alt="..." />
                    </div> */}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

                
            </div>
            <div className="product-single__meta__desktop detailsProduct">
                <h1 className="product-single__title"  >Keto Docx </h1>
                <h2> (Advance Slimming Supplement )</h2>

                {/* <div id="product-reviews" className="product-single__reviews-stars">
                    <div id="product-reviews" className="product-single__reviews-stars">
                        <div className="Stars"  aria-label="Rating of this product is 4.5 out of 5.">
                            <span ><a href="#shopify-section-product-reviews">1,017+ Ratings </a>| 
                            <a href="#shopify-section-product-reviews">19 answered questions</a></span>
                        </div>
                    </div>

                </div> */}


                {/* <div className="radio-wrapper js product-form__item">

                </div> */}

                <div className="product-single__features">
                    <ul>
                        <li className="lpaq"><i className="bi bi-check-circle-fill"></i>Supports Weight Management</li>
                        <li className="lpaq"><i className="bi bi-check-circle-fill"></i>Helps Appetite Control</li>
                        <li className="lpaq"><i className="bi bi-check-circle-fill"></i>Supports Good Gut Health</li>
                        <li className="lpaq"><i className="bi bi-check-circle-fill"></i>Supports Immune Function</li>
                        <li className="lpaq"><i className="bi bi-check-circle-fill"></i>Revitalize Energy &amp; Mood</li>
                    </ul>
                </div>
                <div className="d-none d-md-block bg-white m-2 p-3 shadow-sm rounded">
                            <div className="row mx-auto">
                                <div className="col-3 p-0 text-center"><img src={pay} className="d-block  mx-auto" />
                                    <div><b>Secure Payment</b></div>
                                </div>
                                <div className="col-3 p-0 text-center"><img src={freeship} className="d-block  mx-auto" />
                                    <div><b>Free Delivery</b></div>
                                </div>
                                <div className="col-3 p-0 text-center"><img src={returnd} className="d-block   mx-auto" />
                                    <div><b>Easy Returns</b></div>
                                </div>
                                <div className="col-3 p-0 text-center"><img src={guide} className="d-block  mx-auto" />

                                    <div><b>Expert Guidance</b></div>
                                </div>
                            </div>
                            <br />
                            <div className="d-none d-md-block text-center custom-blue">100% Secure and Fast Checkout</div>
                        </div>
            </div>
            </div>

        </React.Fragment>
    )
}