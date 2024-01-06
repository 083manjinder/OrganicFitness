import React from "react";
import image2 from '../images/productcart2.jpeg'

export default function CheckOutProduct(props) {
    // console.log(props.product)
    return (
        <React.Fragment>
            <div className="detailproduct">
            <div className=" product-section pb-3 position-relative" >

                <div className="colap-div-container">
                    <div className="container-fluid colapsable-div">
                        <div id="cart-items">
                            <div className="cart-item-container">
                                <div className="item-info-card">
                                    <div className="container mx-0 my-0 p-0">
                                        <div className="d-fl">
                                            <div className="product-img position-relative">

                                                <img src={props.product.image} className=" ls-is-cached lazyloaded"  alt="" />

                                            </div>
                                            <div className="item-desc">
                                                <h3 >{props.product.packname}</h3>
                                                {/* <div className="star-review row pl-4">
                                                    <i className="fas fa-star checked-star review-stars" aria-hidden="true"></i>
                                                    <i className="fas fa-star checked-star review-stars" aria-hidden="true"></i>
                                                    <i className="fas fa-star checked-star review-stars" aria-hidden="true"></i>
                                                    <i className="fas fa-star checked-star review-stars" aria-hidden="true"></i>
                                                    <i className="fas fa-star  checked-star review-stars" aria-hidden="true"></i>
                                                    &nbsp;&nbsp;
                                                   
                                                </div> */}

                                            </div>
                                            <div className="buttons ml-auto">
                                                <div className="price-tag mb-0">
                                                    <p className="strikePrice mb-0 mx-0">₹{props.product.price}</p>
                                                    <p className="it-price mb-0">₹{props.product.discount}</p>
                                                   
                                                
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="my-0" />

                        <div className="special-desc-container py-1">
                            <div className="specialDisc-checkBox-container">

                                <div className="eva-free-cart-item">
                                    <div className="row-card eva-card my-0">
                                        <div className="py-0 item-info-card" >
                                            <div className="product-img position-relative cart-free-eva-img">
                                                <img src="imgs/image_2021_09_24T07_54_11_694Z.png" alt=""  />
                                            </div>
                                            {/* <div className="item-desc w-100 eva-desc pt-2">
                                                <h6 className="eva-item-heading">
                                                    PERSONAL HEALTH COACHING
                                                </h6>

                                                <div className="row pt-3 w-100 d-flex justify-content-between align-items-center" style={`padding-top: 7px !important;`}>
                                                    <h6 className="plan-duration eva-duration">
                                                        1 month membership
                                                    </h6>
                                                    <div className="row eva-card-item-flex mt-2">
                                                        <p className="price-tag pr-2 mt-1 eva-free-badge">FREE</p>
                                                        <p className="eva-price-tag" style="text-decoration: lint;">
                                                            ₹3000
                                                        </p>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="payment-discount">
        <hr className="mt-0 mb-0 grey-hr-seperator bold-seperator">
        <div className="row no-gutters justify-content-center form-padding d-flex">
            <div className="col" style="flex: 12;">
                <div className="form-group mt-auto mb-auto">
                    <input type="text" className="form-control mt-2 mb-2" id="discountCode" name="discount-code" placeholder="Discount code">
                </div>
            </div>
            <div className="col" style="flex: 2;">

                <button style="animation-iteration-count: infinite !important; border: hidden !important; box-shadow: none !important; font-weight: bold;background: #aecb3d;" className="btn pl-3 pr-3 mt-2 mb-2 apply-btn tada-right qpj">
                    Apply
                </button>
            </div>
        </div> */}

                    {/* <div className="view-all-offers-cont pt-0">
            <p className="rpj"><img src="https://img.icons8.com/fluent-systems-regular/24/000000/discount.png">
                &nbsp;&nbsp; Select a promo code</p>
            <p style="color: #ad684e;" className="rpj">View offers</p>

        </div> */}
                    <div id="pricediv">
                        <div className="row justify-content-between align-items-center form-padding">
                            <p className="sub-total">Subtotal</p>
                            <p className="sub-price">₹<span id="bogo-subtotal">{props.product.discount}</span></p>

                        </div>
                        <div className="row justify-content-between align-items-center form-padding">
                            <p className="sub-total">Shipping</p>
                            <p className="sub-total font-weight-light">
                                <del>₹79</del>
                                <span className="font-weight-light green">₹0</span>
                            </p>
                        </div>

                        {/* <div className="row justify-content-between align-items-center form-padding saving-section">
                            <p className="sub-total">
                                Discount
                                <span id="couponName"></span>
                            </p> */}
                            {/* <p className="sub-price savingsPrice">
                                ₹<span id="savingsPrice">499</span>
                                <a href="" className="badge badge-6 ml-2" >
                                    <span id="lpt">20%</span> </a>
                            </p> */}
                        </div>
                        {/* <div className="row justify-content-between align-items-center form-padding saving-section lpq" >
                            {/* <p className="sub-total" >Offer Applied:
                                <span id="couponNamer"></span>
                            </p> */}
                            <p className="sub-price savingsPrice">
                                <span id="savingsPricer" ></span>
                            </p>
                        </div> 
                        <hr className="grey-hr-seperator mt-0 mb-2" />
                        <div className="row justify-content-between form-padding mb-0">
                            <p className="total">Total <span >(Incl. of all taxes)</span>
                            </p>
                            <p className="total-price">
                                ₹<span id="total">{props.product.discount}</span>
                            </p>
                        </div>
                    </div>

                    {/* <hr className="mt-3 mb-0 grey-hr-seperator bold-seperator"/>
                        <div className="d-none d-md-block bg-white m-2 p-3 shadow-sm rounded">
                            <div className="row mx-auto">
                                <div className="col-3 p-0 text-center"><img src="imgs/secure.jpg" className="d-block w-75 mx-auto" />
                                    <div><small><b>Secure Payment</b></small></div>
                                </div>
                                <div className="col-3 p-0 text-center"><img src="imgs/clean.jpg" className="d-block w-75 mx-auto" />
                                    <div><small><b>Clean Nutrition</b></small></div>
                                </div>
                                <div className="col-3 p-0 text-center"><img src="imgs/return.jpg" className="d-block w-75  mx-auto" />
                                    <div><small><b>Easy Returns</b></small></div>
                                </div>
                                <div className="col-3 p-0 text-center"><img src="imgs/guide.jpg" className="d-block w-75 mx-auto" />

                                    <div><small><b>Expert Guidance</b></small></div>
                                </div>
                            </div>
                            <br />
                            <div className="d-none d-md-block text-center custom-blue">100% Secure and Fast Checkout</div>
                        </div> */}
                        {/* <!-- <img src="imgs/checkout.jpg"> */}
                        <br />
                        {/* <img src="imgs/trust_badge-min.png">--> */}
                {/* </div> */}
            </div>
            {/* </div> */}
    </React.Fragment >
 )
}