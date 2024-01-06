import background from "../../images/background11.jpg"
import bottle from "../../images/product22.png"
import React from "react"
// import Slideshow from "./Slideshow"
import { Navigate, useNavigate } from "react-router-dom"
// import Popup from "./Popup"

// import "../../stylesheet.css"

const Slider = (props) => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    let isLogin = true;
    function buyProduct() {
        if (token === null) {
            props.setPopupbox(true)
            isLogin = false
        } else {
            navigate("/cart")

        }

    }
    // const[popup, setPopup] = useState(false)
    if (isLogin === false) {
        return <Navigate to="/" />
    }

    // props.popup(popup)
    return (
        <React.Fragment>

            <div className="slider">
                <img src={background} className="backside" alt="background" />
                {/* <Slideshow/> */}
                <div className="bottle">
                <img src={bottle} />
                </div>
                <div className="headline">
                    <h1>The Best Organic Products And Dietary Supplements
                    </h1>
                    <p>


                    Based on researches done in USA, our products are made with the purest herbs with the goodness of ancient Indian vedas. "Our vision is to make human healthy." keto docx does more than just weight loss, not only you'll lose weight but also the results are 100% natural and permanent, you'll discover a healthier body. Keto Docx boosts immunity, purifies blood, boosts metabolism, increase energy level, reduces fat, etc. It's organic ingredients doesn't leave any side effects on any age or gender at all. The rich herbs are extracted from all around the world and are tested for purity for best results. The herbs are then preserved in -6°C and all the nutritive oils are maintained so that you get the exact same goodness from the time of extraction. Buy your supplements online or book a doctor's online consultation, or go through the website for more information.


                       <br/>Team Organic Fitness welcome you to our organic tour.</p>
                    <button className={`btn shopbutton  rounded-pill`} onClick={buyProduct}>See Packages</button>
                </div>

               

            </div>


        </React.Fragment>
    )
}
export default Slider