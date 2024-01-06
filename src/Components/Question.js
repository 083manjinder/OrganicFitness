import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Question(props) {
    const [thanks, setThank] = useState(false)
    const navigate = useNavigate()
    function handlesubmit(e) {
        e.preventDefault()
        setThank(true)
        props.setThanks(true)
        // props.setThanks(thanks)
        // navigate("/")
    }
    // console.log(thanks)

    return (

        <React.Fragment>


            <div className="question">

                <h2>FAQs
                </h2>


                <h3>What is keto?</h3>

                <p>  “Ketogenic” is a term for a low-carb diet (like the Atkins diet). The idea is for you to get more calories from protein and fat and less from carbohydrates. You cut back most on the carbs that are easy to digest, like sugar, soda, pastries, and white bread.
                </p>


                <h3> Will I lose weight?</h3>

                <p>Yes definitely you'll lose weight, that's why we are here for, to help you lose the weight without any dieting or exercising. Some people take the proper diet but they don't know at what time they should eat what, so our team will help you know what's best for you.</p>
                <h3>Are their any side effects?</h3>

                <p>Absolutely not, this product is 100% organic and can be used by any age or of any gender without any side effects. Also it'll make your overall health better.</p>


                <h3>  What is the process? </h3>

                <p> After placing an order for the weight loss supplement we provide you a small detoxification process which you'll have to do for 7 days in order to remove the bad toxins from your body, which will help you lose the weight faster. The detoxification process will not take longer than 5 minutes daily.</p>

                <h3> What if I don't lose the weight?</h3>

                <p>  Even though we give you 100% gurantee that you'll definitely lose 4-8kg in just 1 month. But for your wellness we also provide a 90 days money back policy and gurantee to convert your doubt into trust. And our team will do our very best to help you achieve your goal.</p>

                <h3> How will I know what my perfect weight should be? </h3>

                <p>Our health advisor will ask you simple questions like (your weight, height, water intake, schedule, drinking or smoking habits, medical history etc.) and will calculate your BMI accordingly, so that we can provide the most accurate diagnosis which will tell exactly how much weight you need to lose.
                </p>

                <h3> How will the dietitian and doctors contact me?</h3>

                <p>Our team will arrange 3-5 follow ups weekly according to your needs. Our dietitian and doctors will provide online consultancy through texting or audio and video calling.</p>

                <br/> <br/>



                <h1>  Have other questions?
                    Let us know!  </h1>
                   
                <form onSubmit={handlesubmit}>
                    <div className="textsubmit"> <input type="text" className="form-control add" required placeholder="Drop your questions or queries here.... " ></input> <button className="btn submitbutton  rounded-pill" >Submit</button> </div></form>
            </div>

        </React.Fragment >
    )
}