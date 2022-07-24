
import React from "react"
const Contact = ()=>{
    function removeToken(){
        localStorage.removeItem("token")
        
    }
    

    return(
        <React.Fragment>
        <div>
       <button onClick={removeToken}>remove token</button>
        </div>
        </React.Fragment>
    )
}
export default Contact