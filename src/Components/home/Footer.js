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
                  
              </div>
              <div className="form1">
                <h2 >Customer Support</h2>



                <div></div>


                <form method="post" action="#footer">
                 <div className="formbox"> <label>What is Your Name:</label>
                  <input type="text" name="name" id="name" required=""/>
                </div>
                 <div className="formbox"> <label>Your Email Address Please:</label>
                  <input  type="email" name="email" id="email" required=""/>
                </div>
                <div className="formbox"> <label>Your Contact Number:</label>
                  <input  type="number" name="number" id="number" required=""/>
                </div>
                 
               <button className="btn submitbtn" type="submit" id="submit" >
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