import React from "react";
import './CartStyle.css'
import image from '../../images/productcart1.jpeg'
import image2 from '../../images/productcart2.jpeg'

export default function ProductCart() {

    return (
        <React.Fragment>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-interval="false" data-bs-ride="carousel">
               
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={image2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={image2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={image2} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </React.Fragment>
    )
}