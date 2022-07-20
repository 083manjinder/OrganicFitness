
import product from '../../images/product.jpg';

const Product = () => {

    return (
        <div className="product">
            <div className="container">
                <h1>Keto Docx</h1>
                <div className='productimg'>
                    <img src={product} />
                </div>
                <div className='productdetails'>
                    <h2>About Keto Docx</h2>
                    <p>How does keto docx help you lose weight?<br/> <br/>

                        -keto docx does more than just weight loss, not only you'll lose weight but also you'll discover a healthier body.
                        Keto Docx boosts immunity, purify blood, boosts metabolism, increase energy levels, reduces fat, etc.
                        It's organic ingredients doesn't leave any side effects on any age or gender at all.
                        The rich herbs are extracted from all around the world and are tested for purity for best results.
                        The herbs are then preserved in -6°C and all the nutritive oils are maintained so that you get the exact same goodness from the time of extraction.</p>
                        <button className="btn seeallpackage  rounded-pill">See Packages</button>
                </div>

            </div>

        </div>
    )
}
export default Product