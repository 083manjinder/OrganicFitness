import fatburn from '../../images/section2/fatburn.png'
import bhb from '../../images/section2/bhb.png'
import bann from '../../images/section2/bann.png'
import blood from '../../images/section2/blood.png'
import booster from '../../images/section2/booster.png'
import boosterss from '../../images/section2/boosterss.png'
import energy from '../../images/section2/energy.png'
import detox from '../../images/section2/detox.png'
import React from "react"

const Section2 = () => {

    return (
        <React.Fragment>
            <section className="benefits" >
                <div className="container">
                    <div className="row boxweight">
                        <div className="col-md-12 col-lg-4 pb-5">
                            <img className=" lazyloaded" alt="" src={fatburn} />
                            <h3>Thermogenic</h3>
                            <p>Thermogenic means tending to produce heat, and the term is commonly applied to drugs which increase heat through metabolic stimulation, or to microorganisms which create heat within organic waste. Approximately all enzymatic reaction in the human body is thermogenic, which gives rise to the basal metabolic rate.</p>
                        </div>
                        <div className="col-md-12 col-lg-4 pb-5">
                            <img className=" lazyloaded" alt="" src={bhb} />
                            <h3>BHB Ketones</h3>
                            <p>Beta-hydroxybutyrate or BHB, is one of the three “physiological” ketones that are produced by the body. Ketone bodies work in several ways: acting as a fuel source for organs, signals for gene transcription, and regulators of metabolism.</p>
                        </div>
                        <div className="col-md-12 col-lg-4 pb-5">
                            <img className=" lazyloaded" src={bann} alt="" />
                            <h3>Appetite Suppressant</h3>
                            <p>Appetite suppressants are a type of weight-loss medication. They affect the brain's urge to eat. Diet pills can control hunger pangs or make you feel full faster on less food. As a result, you take in fewer calories and lose. </p>
                        </div>
                        <div className="col-md-12 col-lg-4 pb-5">
                            <img className=" lazyloaded" alt="" src={blood} />
                            <h3>Blood Purification</h3>
                            <p>Removal of toxins from the bloodstream and increase of oxygenated blood is very helpful in weight loss and maintaining a healthy body. </p>
                        </div>
                        <div className="col-md-12 col-lg-4 pb-5">
                            <img className=" lazyloaded" alt="" src={booster} />
                            <h3>Immunity Booster</h3>
                            <p>A strong immune system means taking advantage of the best leg up we have to protect ourselves from harmful illnesses: vaccines. Your immune system is smart, but vaccines train it to be even smarter — helping it learn how to recognize and fight off certain disease-causing illnesses.</p>
                        </div>
                        <div className="col-md-12 col-lg-4 pb-5">
                            <img className=" lazyloaded" alt="" src={boosterss} />
                            <h3>Metabolism Booster</h3>
                            <p>The higher your metabolic rate is, the more calories you burn and keep it off. Bad metabolism can bring a major drawback in your life, regulating it is very important and no rocket science. 
natural weight loss. </p>
                        </div>
                        <div className="col-md-12 col-lg-4 pb-5">
                            <img className=" lazyloaded" alt="" src={energy} />
                            <h3>Energy Booster</h3>
                            <p>When the digested food is broken down in the intestine then energy is released. The food being broken down in order to make more energy can depend on eating habits and metabolic rate. </p>
                        </div>
                        <div className="col-md-12 col-lg-4 pb-5">
                            <img className=" lazyloaded" alt="" src={detox} />
                            <h3>Detox</h3>
                            <p>Detoxification is the process in which our body throw out harmful toxins that are not required in proper functioning of the body.</p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Section2