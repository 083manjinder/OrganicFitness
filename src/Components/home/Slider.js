import background from "../../images/background11.jpg"
import bottle from "../../images/bottle.png"
import React  from "react"
// import Slideshow from "./Slideshow"
import { Navigate, useNavigate } from "react-router-dom"
// import Popup from "./Popup"
import style from '../style.module.css'

const Slider = (props) => {
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
    // const[popup, setPopup] = useState(false)
    if(isLogin === false){
        return <Navigate to="/"/>
    }
    
    // props.popup(popup)
    return (
        <React.Fragment>

            <div className={style.slider}>
                <img src={background} className={style.backside} alt="background"/>
                {/* <Slideshow/> */}
                <div className={style.headline}>
                    <h1>The Best Herbal Product and 100% Organic
                    </h1>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur.</p>
                    <button  className={`btn ${style.shopbutton}  rounded-pill`} onClick={ buyProduct}>Buy Now</button>
                </div>
                <div className={style.bottle}>
                    <img src={bottle} alt="bottle-product" />
                </div>
               
                
                </div>


        </React.Fragment>
    )
}
export default Slider