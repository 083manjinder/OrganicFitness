import React, { useState } from "react"
import { Link } from 'react-router-dom'
// import "../../stylesheet.css"
const Footer = (props) => {
  // const navigate = useNavigate()
  const [user, setUser] = useState("")
  const [thanks, setThanks] = useState(false)
  // const form = useRef()
  
  const inputValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
    console.log(user)

  }
  function handleSubmit(e) {
    e.preventDefault();
      props.setFeedback(true)
      // window.location.reload()
    //    const templateUser = {
    //         to: "manjinderdhillon083@gmail.com",
    //         subject: user.name,
    //         message: user.phone,
    //         from: user.email,
    //    }
    // console.log(form.current)
    //     emailjs.sendForm('service_uzc0zw4', 'template_6tksum9', form.current, 'QYd5pPw4KGEjxeVAv')
    //     .then((result) => {
    //         // console.log(result)
    //         // console.log(templateUser)
    // localStorage.setItem("token", "5277a1c418b80e0b27d770ec3d0ab996")
    // props.setTrigger(false)
    // navigate("/cart")
    //        //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
    //     }).catch((error) => {
    //       console.log(error);
    //   });
  }
//  console.log(user)
  return (
    <React.Fragment>
      <div className="footer">
        <div className="topic">
          <h2 >Contact
            <br />

          </h2>
          <p ><i className="bi bi-geo-alt-fill"></i> Vaishali, Ghaziabad, U.P. <br />&nbsp; &nbsp; &nbsp; Pin Code - 201010</p>
          <a className="mail" href="#"><i className="bi bi-envelope-fill"></i> <span> &nbsp; organicfitness.in@gmail.com</span>
          </a>
          <a className="mail" href="tel:+91 9205773345"><i className="bi bi-telephone-fill"></i> <span> &nbsp; +91 9205773345</span>
          </a>


          <a className="linkicon1" href="https://www.facebook.com/organicfitness.in/" target="_blank"><i className="bi bi-facebook"></i></a>
          <a className="linkicon2" href="https://www.instagram.com/organicfitness.in/?igshid=YmMyMTA2M2Y%3D" target="_blank"><i className="bi bi-instagram"></i></a>
          <a className="linkicon2" target="_blank" href="mailto:organicfitness.in@gmail.com"><i className="bi bi-envelope-fill"></i></a>
          <a className="linkicon2" target="_blank" href="https://wa.me/+919205773345"><i className="bi bi-whatsapp"></i></a>

        </div>
        <div className="form1">
          {/* {thanks ? <div className="alert alert-success" role="alert">
            A simple success alert—check it out!
          </div>: 

               }  */}

<h2 >Review  </h2>

          <div></div>


          <form onSubmit={handleSubmit}>
            <div className="formbox"> <label>Name:</label>
              <input type="text" name="name" id="name" required onChange={inputValue} />
            </div>
            <div className="formbox"> <label>Place:</label>
              <input type="text" name="place" id="name" required onChange={inputValue} />
            </div>

            <div className="formbox"> <label>Feedback:</label>
              <textarea name="content" id="content" cols="10" rows="3" required onChange={inputValue}></textarea>
            </div>
            <div className="formbox"> <label>Upload image:</label>
              <input type="file" name="file" id="file" accept="image/*" onChange={inputValue} />
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