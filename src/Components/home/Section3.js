import imageBack from '../../images/ingredients.jpg'
import apple from '../../images/ingredients/applecider.png'
import bowl from '../../images/ingredients/bowl.png'
import coffee from '../../images/ingredients/coffee.png'
import greentea from '../../images/ingredients/greentea.png'

const Section3 = () => {

    return (
        <div>
            <section className="clean-ingredients">
                <img src={imageBack} />

                <div className="ingredients d-lg-flex justify-content-center">
                    <div>
                        <div className="icon">
                            <img className=" ls-is-cached lazyloaded"  alt="" src={bowl} />
                        </div>
                        <div className="text">Spirulina</div>
                    </div>
                    
                    
                    <div>
                        <div className="icon">
                            <img className=" ls-is-cached lazyloaded"  alt="" src={greentea} />
                        </div>
                        <div className="text">Green tea</div>
                    </div>
                    <div>
                        <div className="icon">
                            <img className=" ls-is-cached lazyloaded"  alt="" src={apple} />
                        </div>
                        <div className="text">Apple cider</div>
                    </div>
                  
                    
                  
                    <div>
                        <div className="icon">
                            <img className=" ls-is-cached lazyloaded"  alt="" src={coffee} />
                        </div>
                        <div className="text">Green coffee</div>
                    </div>
                    
                </div><br />
                <button className="btn seemore rounded-pill mb-5">See More</button>
                
            </section>
        </div>
    )
}
export default Section3