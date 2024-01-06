// import "../../stylesheet.css"
import React from 'react';
import product from '../../images/bottle3.png';
import { Navigate, useNavigate } from 'react-router-dom';

const Product = (props) => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    let isLogin = true;
    function buyProduct (){
        if(token === null){
            props.setPopupbox(true)
            isLogin = false
        }else{
            navigate("/cart")
        }
    }
    if(isLogin === false){
        return <Navigate to="/"/>
    }

    return (
        <React.Fragment>       
             <div className="product">
            <div className="container">
                {/* <h1>Keto Docx</h1> */}
                <div className='productimg'>
                    <img src={product} alt="product"/>
                </div>
                <div className='productdetails'>
                    <h2>About Keto Docx</h2>
                    <p>How does keto docx help you lose weight?<br/> <br/>

                    keto docx does more than just weight loss, not only you'll lose weight but also the results are 100% natural and permanent, you'll discover a healthier body. Keto Docx boosts immunity, purify blood, boosts metabolism, increase energy levels, reduces fat, etc.<br/>
It's organic ingredients doesn't leave any side effects on any age or gender at all. The rich herbs are extracted from all around the world and are tested for purity for best results. The herbs are then preserved in -6°C and all the nutritive oils are maintained so that you get the exact same goodness from the time of extraction.</p>
                        <button className="btn seeallpackage  rounded-pill" onClick={ buyProduct }>See Packages</button>
                </div>

            </div>

        </div>
        </React.Fragment>

    )
}
export default Product