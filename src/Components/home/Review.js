import React from 'react'
import './review.css'
import "../../stylesheet.css"
const Review = () => {

    return (
        
        <React.Fragment>
                       <div className="container review">
                <div className="mgb-40 padb-30 auto-invert line-b-4 align-center pt-5">

                    <h1 className="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg" > Customer Reviews</h1>
                </div>
                <ul className="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
                    <li>
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                        <p className="fs-110 font-cond-l" >" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. "</p>
                        <h5 className="font-cond mgb-5 fg-text-d fs-130" >Martha Stewart</h5>
                        <small className="font-cond case-u lts-sm fs-80 fg-text-l" >Business Woman - New York</small>
                    </li>
                    <li>
                        <img src="https://bootdey.com/img/Content/avatar/avatar4.png" className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                        <p className="fs-110 font-cond-l" >" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. "</p>
                        <h5 className="font-cond mgb-5 fg-text-d fs-130" >Ariana Menage</h5>
                        <small className="font-cond case-u lts-sm fs-80 fg-text-l" >Recording Artist - Los Angeles</small>
                    </li>
                    <li>
                        <img src="https://bootdey.com/img/Content/avatar/avatar5.png" className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                        <p className="fs-110 font-cond-l" >" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. "</p>
                        <h5 className="font-cond mgb-5 fg-text-d fs-130" >Sean Carter</h5>
                        <small className="font-cond case-u lts-sm fs-80 fg-text-l" >Fund Manager - Chicago</small>
                    </li>
                </ul>
            </div>




       </React.Fragment>
 
    )
}

export default Review