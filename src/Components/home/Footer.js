import React from "react"
// import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <React.Fragment>
            <div className="footer">
              <div className="topic">
                <h2 >Address
                  <br/>
                 
                </h2>
                <p ><i className="bi bi-geo-alt-fill"></i> Vaishali, Ghaziabad Uttar Pradesh <br/>&nbsp; &nbsp; &nbsp; Pin Code - 201010</p>
                <a className="mail" href="!#"><i className="bi bi-envelope-fill"></i> <span> &nbsp; noreplay@Organicfitness.in</span>
                  </a>
                  
                  
                  <a className="linkicon1" href="!#"><i className="bi bi-facebook"></i></a>
                  <a className="linkicon2" href="!#"><i className="bi bi-instagram"></i></a>
                  <a className="linkicon2" href="!#"><i className="bi bi-envelope-fill"></i></a>
                  <a className="linkicon2" href="!#"><i className="bi bi-youtube"></i></a>
                  
              </div>
              <div className="form1">
                <h2 >Review  </h2>



                <div></div>


                <form >
                 <div className="formbox"> <label>Name:</label>
                  <input type="text" name="name" id="name" required/>
                </div>
                 
                <div className="formbox"> <label>Feedback:</label>
                <textarea  name="content" id="content" cols="10" rows="3" required></textarea>
                </div>
                 
               <button className="btn submitbtn" id="submit" >
              Submit Now
            </button>
            </form>
           </div>
           
          </div>
          <div className="copyright">
            <p>@copyright 2022 Organic Fitness</p>
           </div>
        </React.Fragment>

    )
}

export default Footer