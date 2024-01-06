import React from "react"
// import NewAbout from './NewAbout'
import product1 from '../images/bottle3.png';
import product from '../images/bodybuild.jpg';
import Question from "./Question";

// import Product from "./home/Product";
const About = (props) => {
    

    return (
        <React.Fragment>
            
            <div className="product12">
           
                    {/* <h1>Keto Docx</h1> */}
                    <div className='productimg12'>
                        <img src={product} alt="product" />
                    </div>
                    <div className='productdetails12'>
                        <h2>About Organic Fitness</h2>
                        <p>Health is the biggest asset, 
                            Organic fitness brings you the purest and most effective ayurvedic dietary supplements for a better lifestyle.

                            Organic Fitness provides you exactly what your body needs and asks for, not only your health will get better over time, it'll leave you satisfied and proud.

                            <br /> <br /> Connect with us, discover health.
                        </p>
                    </div>

               

            </div>
            <div className="product11">
                
                    {/* <h1>Keto Docx</h1> */}
                   
                    <div className='productdetails11'>
                        <h2>About Keto Docx</h2>
                        <p>How does keto docx help you lose weight?<br /> <br />

                            keto docx does more than just weight loss, not only you'll lose weight but also you'll discover a healthier body.
                            Keto Docx boosts immunity, purify blood, boosts metabolism, increase energy levels, reduces fat, etc. <br />
                            It's organic ingredients doesn't leave any side effects on any age or gender at all.
                            The rich herbs are extracted from all around the world and are tested for purity for best results.
                            The herbs are then preserved in -6°C and all the nutritive oils are maintained so that you get the exact same goodness from the time of extraction.</p>
                        
                    </div>
                    <div className='productimg11'>
                        <img src={product1} alt="product" />
                    </div>
            

            </div>

            <Question setThanks={props.setThanks} />
        </React.Fragment>
    )
}
export default About