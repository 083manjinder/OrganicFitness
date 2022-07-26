import React from "react"
import image1 from '../../images/ingredients/Punarnava.jpg'
import image2 from '../../images/ingredients/Apple cider vinegar.jpg'
import image3 from '../../images/ingredients/greencoffe.jpg'
import image4 from '../../images/ingredients/greentea.jpg'
import image5 from '../../images/ingredients/Triphala.jpg'
import image6 from '../../images/ingredients/Spirulina.jpg'
import image7 from '../../images/ingredients/guggul.jpg'
import image8 from '../../images/ingredients/GarciniaCambogia.jpeg'
import image9 from '../../images/ingredients/Ashwagandha.jpeg'


const Images = () => {

	return (
		<React.Fragment>
			<div className="images">
				<div className="view view-sixth">
					<div className="gridstyle">
						<div className="img-responsive">
							<img src={image8} alt="ingredients images" className="img" />
						</div>
						<div className="mask">
							<div className="textover">
								<h4>Garcinia Cambogia</h4>
								<p>The active ingredient in the fruits rind- hydroxy acid (HCA), block and enzyme called citrate lyase, which your body uses to make fat. It also raises levels of the brain chemical serotonin, which make you feel less hungry. Garcinia Cambogia basically blocks your body's ability to make fat and put breaks on your appetite. It also help reduce bad cholesterol.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="view view-sixth">
					<div className="gridstyle">
						<div className="img-responsive">
							<img src={image6} alt="ingredients images" className="img" />
						</div>
						<div className="mask">
							<div className="textover">
								<h4>Spirulina</h4>
								<p>Spirulina is rich in a range of vitamins and minerals essential for maintaining a healthy immune system, like vitamin E, C and B6. Research finds that Spirulina also boost the production of white blood cells and antibodies that fight viruses and bacterias in your body.It has Powerful Antioxidant and Anti-inflammatory properties. </p>
							</div>
						</div>
					</div>
				</div>
				<div className="view view-sixth">
					<div className="gridstyle">
						<div className="img-responsive">
							<img src={image7} alt="ingredients images" className="img" />
						</div>
						<div className="mask">
							<div className="textover">
								<h4>Guggul</h4>
								<p>Guggul comes from the resin of the commiphora mukul, small thorny tree that is known as the tree of myrrh. People in India have been using this for thousands of years in herbal medicine. Study in India show that Guggul increase the production of thyroid hormone. Since this hormone is involved in the cell's breakdown of proteins, fats, and carbohydrates, this herb promote weight loss.</p>
							</div>
						</div>
					</div>
				</div>


				<div className="view view-sixth">
					<div className="gridstyle">
						<div className="img-responsive">
							<img src={image3} alt="ingredients images" className="img" />
						</div>
						<div className="mask">
							<div className="textover">
								<h4>Green Coffee</h4>
								<p>The chlorogenic acid in green coffee is responsible for many health benefits. Green coffee affect blood vessels so that blood pressure is reduced, it also effect how the body handles blood sugar and metabolism. It has anti-ageing effects and may prevent cancer. It is also a great detoxifier.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="view view-sixth">
					<div className="gridstyle">
						<div className="img-responsive">
							<img src={image4} alt="ingredients images" className="img" />
						</div>
						<div className="mask">
							<div className="textover">
								<h4>Green Tea</h4>
								<p>Green tea increases blood Oxygen levels and boosts our metabolism which indirectly helps you lose weight. Green tea also reduce the risk of bad cholesterol, type 2 diabetes, strok, etc.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="view view-sixth">
					<div className="gridstyle">
						<div className="img-responsive">
							<img src={image9} alt="ingredients images" className="img" />
						</div>
						<div className="mask">
							<div className="textover">
								<h4>Ashwagandha</h4>
								<p>Ashvgandha contains chemical that might help calm the brain, reduce swelling, lower blood pressure, and alter the immune system. Since Ashwagandha is traditionally used as an adaptogen, it is also used for many conditions related to stress. Adaptogens I believed to help the body resist physical and mental stress. Ashwagandha helps in building muscle mass which is an important factor in weight loss. </p>
							</div>
						</div>
					</div>
				</div>
				<div className="view view-sixth">
					<div className="gridstyle">
						<div className="img-responsive">
							<img src={image1} alt="ingredients images" className="img" />
						</div>
						<div className="mask">
							<div className="textover">
								<h4>Punarnava</h4>
								<p>It helps to correct digestive fire and reduce Ama, it is also used in many medicines for treating heart problems, improving eyesight, preventing diseases like diabetes, urinary track infection, arthritis, anemia, etc. </p>
							</div>
						</div>
					</div>
				</div>

				<div className="view view-sixth">
					<div className="gridstyle">
						<div className="img-responsive">
							<img src={image5} alt="ingredients images" className="img" />
						</div>
						<div className="mask">
							<div className="textover">
								<h4>Triphala</h4>
								<p>The three fruits in triphala contain many antioxidant such as flavonoids, polyphenols, saponins, vitamin C and more. Antioxidants can help fight free radicals in the body, reducing inflammation along with your risk of chronic diseases like diabetes,  heart diseases, and others. It supports our body in weight loss.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="view view-sixth">
					<div className="gridstyle">
						<div className="img-responsive">
							<img src={image2} alt="ingredients images" className="img" />
						</div>
						<div className="mask">
							<div className="textover">
								<h4>Apple Cider Vinegar</h4>
								<p>Apple cider vinegar has various helpful properties inclantioxidan-microbial and antioxidant effects. Evidentally it is used for aiding weight loss, reducing cholesterol and boosting metabolism.</p>
							</div>
						</div>
					</div>
				</div>

			</div>
		</React.Fragment>
	)
}
export default Images