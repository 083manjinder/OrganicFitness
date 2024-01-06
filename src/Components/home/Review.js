import React from 'react'
import './review.css'
import man from "../../images/motoo.jpeg"
import girl from "../../images/girl1.jpg"
import man1 from '../../images/motabhen.jpeg'
// import "../../stylesheet.css"
const Review = () => {

    return (
        
        <React.Fragment>
                       <div className="container review">
                <div className="mgb-40 padb-30 auto-invert line-b-4 align-center pt-5">

                    <h1 className="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg" > Customer Reviews</h1>
                </div>
                <ul className="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
                    <li>
                        <img src={man} className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                        <p className="fs-110 font-cond-l" >"Aacha kaam karta hai kamazori ka maamla bhi nahi dikhai pada 1 mahina ho gya hai khate khate aur abhi tk 6 kilo kam ho gya hai. Wife bhi bol rahi thi ki farak aagya hai. Good Keto Docx."</p>
                        <h5 className="font-cond mgb-5 fg-text-d fs-130" >Vishal Agarwal</h5>
                        <small className="font-cond case-u lts-sm fs-80 fg-text-l" >(Karnal)</small>
                    </li>
                    <li>
                        <img src={girl} className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                        <p className="fs-110 font-cond-l" >" I have used organic fitness for 4 months and it helped me alot, I lost 23kg weight in total. my gut health was improved. I have suggested it to my sister also, thank you Keto Docx. "</p>
                        <h5 className="font-cond mgb-5 fg-text-d fs-130" >Rishma Sherin</h5>
                        <small className="font-cond case-u lts-sm fs-80 fg-text-l" >(Kerala)</small>
                    </li>
                    <li>
                        <img src={man1} className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                        <p className="fs-110 font-cond-l" >" Mere area mai delivery nahi ho rahi thi to special delivery karai mere liye, result bhi aacha raha. 15kg kam hua. "</p>
                        <h5 className="font-cond mgb-5 fg-text-d fs-130" >Mona Ben</h5>
                        <small className="font-cond case-u lts-sm fs-80 fg-text-l" >(Gujarat)</small>
                    </li>
                </ul>
            </div>




       </React.Fragment>
 
    )
}

export default Review