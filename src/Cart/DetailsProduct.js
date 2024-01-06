import React,{useState} from "react";
// import "../stylesheet.css"
// import './CartStyle.css'
import { useNavigate } from "react-router-dom";


export default function DetailsProduct(props) {
    const navigate = useNavigate()
    const [productid, setProductd] = useState(0)

    const checkValue=(e)=>{
        setProductd(e.target.value)
        // console.log(e.target.value)
    }

    // console.log(props.data)
    function handleSubmit(e){
        // e.presenDefault()
        if(productid !== 0 ){
        props.check(productid)
    
        navigate("/checkout")
    }
        
        
        
       
        
    }
    // console.log(productd )
    return (
        <React.Fragment>

          
            <div className="sc-jdeSqf cQJtEe">
                    <div className="package">
                        <h3 className="sc-iCwjlJ iBeoOa">See All Packages</h3>
                        <form>
                        <ul className="sc-fkyLDJ dQcJMP">

                            {
                                props.data.map((product, index) =>
                                
                                <li   className={`sc-jUpvKA kJyIrx ${productid == product.id? "activeVariant":""}`} key={product.id} >
                                    <input type="radio" id={product.id} name="product" value={product.id}  className="sc-jdfcpN feKygu" onChange={checkValue} />
                                    {product.offertype? <div className="sellingtype">{product.offertype}</div>:""}
                                    
                                    <div  className="offer arrow-pointer">{product.offer}</div>
                                    <label htmlFor={product.id}>
                                    <div className="productimages" >
                                        <img  src={product.image} alt=""/>
                                    </div>
                                   </label>
                                    <label htmlFor={product.id}>
                                    
                                        <div className="sc-eNNmBn OmYhm">
                                            <div className="sc-eEieub ZCySm">{product.packname}</div>
                                            <div className="sc-RbTVP eJLpZn">pack of {product.bottle}</div>
                                            <div className="sc-RbTVP eDwyNE"></div>
                                            <div className="sc-hMrMfs ehXiso">
                                                <div className="sc-drlKqa kKkzwu">
                                                    <div className="sc-jxGEyO fgzbKP">
                                                        <span>  ₹{product.price}</span>
                                                    </div>
                                                    <div className="sc-bIqbHp llzznR " >
                                                        <span>₹{product.discount}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    </label> 
                                    
                                    </li>
                                    
                            )

                            }
                        </ul>
                         <button className="btn buy" onClick={handleSubmit}>BUY NOW</button>
                         </form>
                    </div>
                </div>

        </React.Fragment>
    )
}