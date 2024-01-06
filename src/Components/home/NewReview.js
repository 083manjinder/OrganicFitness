import React from 'react'
import './review.css'
import mancartoon from "../../images/worker.png";
import girlcartonn from "../../images/beauty.png"
import man from "../../images/motoo.jpeg"
import girl from "../../images/girl1.jpg"
import man1 from '../../images/motabhen.jpeg'
import das from "../../images/das.jpeg";
import khan from "../../images/khan.jpeg";
import naina from "../../images/naina.jpeg";
import ritesh from "../../images/ritesh.jpeg";
import sharma from "../../images/sharma.jpeg";
import singla from "../../images/singla.jpeg";
import kumar from "../../images/kumar.jpeg";
import raj from "../../images/raj.jpeg";
import zub from "../../images/zub.jpeg";
import jatinder from "../../images/jatinder.jpeg";
import mansi from "../../images/mansi.jpeg";
import priya from "../../images/priya.jpeg";
import shubum from "../../images/shubum.jpeg";
// import pri from "../../images/pri.jpeg";
import twickle from "../../images/twickle.jpeg";
import kaur from "../../images/kaur.jpeg"
// import "../../stylesheet.css"
const NewReview = () => {

    return (

        <React.Fragment>
            <div className="review">
                <div className="mgb-40 padb-30 auto-invert line-b-4 align-center pt-5">

                    <h1 className="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg" > Customer Reviews</h1>
                </div>

                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <ul className="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
                                <li>
                                    <img src={man} className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                                    <p className="fs-110 font-cond-l" >"Aacha kaam karta hai kamazori ka maamla bhi nahi dikhai pada 1 mahina ho gya hai khate khate aur abhi tk 6 kilo kam ho gya hai. Wife bhi bol rahi thi ki farak aagya hai. Good Keto Docx."</p>
                                    <h5 className="font-cond mgb-5 fg-text-d fs-130" >Vishal Agarwal</h5>
                                    <small className="font-cond case-u lts-sm fs-80 fg-text-l" >(Karnal)</small>
                                </li>
                                <li>
                                    <img src={jatinder} className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                                    <p className="fs-110 font-cond-l" >"Bhot sare product use kiye the mene, herbal life, Ayurveda, Ketogen aur bhi bhot sare. 50000 rupee kharch kar chuka tha, magar result bus isi se mila. Mera vishvas hi uth gya tha magar weight ki to dikkat thi, shadi bhi nahi ho rahi thi. To mene bola bhej do. Kafi aacha result raha mera. 28 kg lose kar chuka hu abhi tk. 22 February, 2022 mai liya tha. 31 hai aaj July mahine ki."</p>
                                    <h5 className="font-cond mgb-5 fg-text-d fs-130" >Jatinder Singh</h5>
                                    <small className="font-cond case-u lts-sm fs-80 fg-text-l" >(Rajasthan)</small>
                                </li>

                                <li>
                                    <img src={man1} className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                                    <p className="fs-110 font-cond-l" >" Mere area mai delivery nahi ho rahi thi to special delivery karai mere liye, result bhi aacha raha. 15kg kam hua. "</p>
                                    <h5 className="font-cond mgb-5 fg-text-d fs-130" >Mona Ben</h5>
                                    <small className="font-cond case-u lts-sm fs-80 fg-text-l" >(Gujarat)</small>
                                </li>
                            </ul>

                        </div>
                        <div className="carousel-item">
                            <ul className="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
                                <li>
                                    <img src={das} className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                                    <p className="fs-110 font-cond-l" >"1 month ka liya tha hum check karne ko....badiya rejalt raha hamaara 117 vajan tha 112 rehe gya....Humne to 6 mahina ke liye manha liya hu.... Dr abhinav karke hai ek sir unhone bhi aacha gide kiya.... "</p>
                                    <h5 className="font-cond mgb-5 fg-text-d fs-130" >Krishna Das</h5>
                                    <small className="font-cond case-u lts-sm fs-80 fg-text-l" >(Mathura)</small>
                                </li>
                                <li>
                                    <img src={singla} className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                                    <p className="fs-110 font-cond-l" >"It was very hard for me to lose this weight because PCOD and Thyroid both make your body weight to increase. But I lost 16 kg in total and the best thing about it is that i didn't gain the weight back. It was a permanent weight loss.
                                        Thank you so much Organic Fitness, if anyone is reading my feedback I highly recommend this product. "</p>
                                    <h5 className="font-cond mgb-5 fg-text-d fs-130" >Kirti Singha</h5>
                                    <small className="font-cond case-u lts-sm fs-80 fg-text-l" >(Haryana)</small>
                                </li>
                                <li>
                                    <img src={girl} className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                                    <p className="fs-110 font-cond-l" >" I have used organic fitness for 4 months and it helped me alot, I lost 23kg weight in total. my gut health was improved. I have suggested it to my sister also, thank you Keto Docx. "</p>
                                    <h5 className="font-cond mgb-5 fg-text-d fs-130" >Rishma Sherin</h5>
                                    <small className="font-cond case-u lts-sm fs-80 fg-text-l" >(Kerala)</small>
                                </li>

                            </ul>
                        </div>
                        <div className="carousel-item">
                            <ul className="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
                                <li>
                                    <img src={khan} className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                                    <p className="fs-110 font-cond-l" >"Amazing supplement, I got very good results from the 1st month, the service is also very good, dietitian was well connected with me and guided me, I'm very happy, thank you keto docx."</p>
                                    <h5 className="font-cond mgb-5 fg-text-d fs-130" >Naziya khan</h5>
                                    <small className="font-cond case-u lts-sm fs-80 fg-text-l" >(Hyderabad)</small>
                                </li>
                                <li>
                                    <img src={sharma} className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                                    <p className="fs-110 font-cond-l" >"5⭐ to produce.
                                        5⭐ to the service.
                                        5⭐ to results.
                                        5⭐ to team.
                                        I lost 20 kg and I used 4 months in 2021 August still weight didn't increase again. I have given this product to my 5 other friends.
                                        Overall 5⭐ thank you so much. "</p>
                                    <h5 className="font-cond mgb-5 fg-text-d fs-130" >Aarti Sharma</h5>
                                    <small className="font-cond case-u lts-sm fs-80 fg-text-l" >(Goa)</small>
                                </li>
                                <li>
                                    <img src={mansi} className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                                    <p className="fs-110 font-cond-l" >"Mom ke liye mangana tha, lekin dar rahi thi mai ki koi problem na ho. Mene apne family doctor ko ingredients dikhaye, unke kehne pe liya tha. Result bhot aacha raha, mom bol rahi thi ki pet sahi se saaf hone laga hai aur energy si aajati hai medicine leke. Result aacha raha mom ka 9 kilo kam ho gya 2 months mai. Kisi ko zarurat hogi to ye hi recommend karungi. "</p>
                                    <h5 className="font-cond mgb-5 fg-text-d fs-130" >Mansi Tomar</h5>
                                    <small className="font-cond case-u lts-sm fs-80 fg-text-l" >(Agra)</small>
                                </li>
                            </ul>
                        </div>
                        <div className="carousel-item">
                            <ul className="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
                                <li>
                                    <img src={kumar} className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                                    <p className="fs-110 font-cond-l" >" Good product I lost 12kg, thank you Twinkle ma'am and thank you Organic Fitness. "</p>
                                    <h5 className="font-cond mgb-5 fg-text-d fs-130" >Vinay Kumar </h5>
                                    <small className="font-cond case-u lts-sm fs-80 fg-text-l" >(Mumbai)</small>
                                </li>
                                <li>
                                    <img src={naina} className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                                    <p className="fs-110 font-cond-l" >"Mene use kiya tha, bhot hi badiya result tha, mai tho shock ho gai thi, 1 hafte mai hi 2 kg kam ho gya tha.  "</p>
                                    <h5 className="font-cond mgb-5 fg-text-d fs-130" >Naina Singh</h5>
                                    <small className="font-cond case-u lts-sm fs-80 fg-text-l" >(Punjab)</small>
                                </li>
                                <li>
                                    <img src={ritesh} className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                                    <p className="fs-110 font-cond-l" >"Very Good"</p>
                                    <h5 className="font-cond mgb-5 fg-text-d fs-130" >Abhimanyu</h5>
                                    <small className="font-cond case-u lts-sm fs-80 fg-text-l" >(Jharkhand)</small>
                                </li>
                            </ul>
                        </div>
                        <div className="carousel-item">
                            <ul className="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
                                <li>
                                    <img src={priya} className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                                    <p className="fs-110 font-cond-l" >" Aacha kaam kara "</p>
                                    <h5 className="font-cond mgb-5 fg-text-d fs-130" >Priyanka</h5>
                                    <small className="font-cond case-u lts-sm fs-80 fg-text-l" >(UP)</small>
                                </li>
                                <li>
                                    <img src={raj} className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                                    <p className="fs-110 font-cond-l" >"First I use, I got good result. Then I order more for me and wife. We also get good result. Organicfitness Osm. "</p>
                                    <h5 className="font-cond mgb-5 fg-text-d fs-130" >Aman Raj</h5>
                                    <small className="font-cond case-u lts-sm fs-80 fg-text-l" >(Bihar)</small>
                                </li>
                                <li>
                                    <img src={twickle} className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                                    <p className="fs-110 font-cond-l" >"I am very satisfied with this supplement, I lost alot of weight without any diet or workout only through this medicine. I highly recommend this supplement, this company- Organic Fitness deserves to be known globally. "</p>
                                    <h5 className="font-cond mgb-5 fg-text-d fs-130" >Twinkle Agrawal</h5>
                                    <small className="font-cond case-u lts-sm fs-80 fg-text-l" >(Raipur, Chhattisgarh)</small>
                                </li>
                            </ul>
                        </div>
                        <div className="carousel-item">
                            <ul className="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
                                <li>
                                    <img src={shubum} className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                                    <p className="fs-110 font-cond-l" >"Aacha kaam karta hai, time laga magar bhot aacha result aaya"</p>
                                    <h5 className="font-cond mgb-5 fg-text-d fs-130" >Shubham</h5>
                                    <small className="font-cond case-u lts-sm fs-80 fg-text-l" >(Faridabad)</small>
                                </li>
                                <li>
                                    <img src={kaur} className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                                    <p className="fs-110 font-cond-l" >"Aacha result hai, mera bhi kam ho gya. "</p>
                                    <h5 className="font-cond mgb-5 fg-text-d fs-130" >Jaspreet Kaur</h5>
                                    <small className="font-cond case-u lts-sm fs-80 fg-text-l" >(Punjab)</small>
                                </li>
                                <li>
                                    <img src={zub} className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                                    <p className="fs-110 font-cond-l" >"Hota hai weight loss. Mai bhot khush hu. "</p>
                                    <h5 className="font-cond mgb-5 fg-text-d fs-130" >Mohammad Zubair</h5>
                                    <small className="font-cond case-u lts-sm fs-80 fg-text-l" >(Delhi)</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>

                </div>
            </div>




        </React.Fragment>

    )
}

export default NewReview