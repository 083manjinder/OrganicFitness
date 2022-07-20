import scale from "../../icons/scale.png"
import healthy from '../../icons/healthy.png'
import thunderbolt from '../../icons/thunderbolt.png'

const Section2= ()=>{

    return(
        <div>
        <section className="benefits" >
            <div className="container">
                <div className="row boxweight">
                    <div className="col-md-12 col-lg-4">
                        <img className=" lazyloaded" alt="" src={scale}/>
                        <h3>Support Healthy Weight</h3>
                        <p>Amp your body’s fat burning potential with blend of natural herbs, and get healthier.
                        </p>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <img className=" lazyloaded" alt="" src={healthy}/>
                        <h3>Detox your Body</h3>
                        <p>Detox your body and get rid of toxins with superfoods.</p>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <img className=" lazyloaded" src={thunderbolt} alt=""/>
                        <h3>Feel Energize</h3>
                        <p>Focus for longer, think more clearly, and power through your workouts.</p>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Section2