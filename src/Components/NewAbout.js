import React from "react"

// import product from '../images/bodybuild.jpg';
import product from '../images/bodybuild.jpg';
const NewAbout = () => {

    return (
        <React.Fragment>
           <div className="product12">
                <div className="container">
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

            </div>

        </React.Fragment>
    )
}
export default NewAbout