import background from "../../images/background11.jpg"
import bottle from "../../images/bottle.png"
import React from "react"

const Slider = () => {

    return (
        <div  className="slider">
            <img src={background} className="backside" />
           
            <div className="headline">
                <h1>We are here to give you the best herb products
                </h1>
                <p>Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                     Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. 
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.</p>
                      <button className="btn shopbutton  rounded-pill">Buy Now</button>
            </div>
            <div className="bottle">
                <img src={bottle} />
            </div>
           
            


        </div>
    )
}
export default Slider