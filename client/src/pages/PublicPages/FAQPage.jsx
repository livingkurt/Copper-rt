import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const FAQPage = () => {
	return (
		<div className="main_container">
			<Helmet>
				<title>Frequently Asked Questions | Gibson Lake Copper Art</title>
				<meta property="og:title" content="Frequently Asked Questions" />
				<meta name="twitter:title" content="Frequently Asked Questions" />
				<link rel="canonical" href="https://www.copper-rt.com/pages/faq" />
				<meta property="og:url" content="https://www.copper-rt.com/pages/faq" />
				<meta
					name="description"
					content="Learn how the Gibson Lake Copper Art process works, and how to get your products to you and working as fast as possible."
				/>
				<meta
					property="og:description"
					content="Learn how the Gibson Lake Copper Art process works, and how to get your products to you and working as fast as possible."
				/>
				<meta
					name="twitter:description"
					content="Learn how the Gibson Lake Copper Art process works, and how to get your products to you and working as fast as possible."
				/>
			</Helmet>
			<div class="inner_content">
				<div>
					<h1 style={{ clear: 'both', textAlign: 'center' }}>Frequently Asked Questions</h1>
					<div className="home_page_divs" style={{ margin: '10px 0' }}>
						<h2 className="ta-c" id="glowskins">
							Glowskins
						</h2>
						<h2 className="ta-c">How do Glowskins Work?</h2>

						<ul style={{ padding: '18px', margin: 0 }}>
							<li style={{ lineHeight: '25px' }}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo ad voluptate, cum
								similique accusamus vero tempore ullam nesciunt illum eveniet. Vel natus magnam nostrum
								cum magni iure, quisquam mollitia! Eaque.
							</li>
							<li style={{ lineHeight: '25px' }}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo ad voluptate, cum
								similique accusamus vero tempore ullam nesciunt illum eveniet. Vel natus magnam nostrum
								cum magni iure, quisquam mollitia! Eaque.
							</li>
						</ul>
					</div>
					<div className="home_page_divs" style={{ margin: '10px 0' }}>
						<h2 style={{ textAlign: 'center', marginBottom: '30px' }} id="ordering_custom_products">
							Ordering Custom Products
						</h2>
						<h2 style={{ textAlign: 'center', marginBottom: 0 }} id="custom_diffuser_caps">
							Custom Diffuser Caps
						</h2>
						<ul style={{ padding: '0 18px' }}>
							<li style={{ lineHeight: '25px' }}>
								A single 100% refundable deposit of $9.99 is required to hold your place in line and to
								be seen for a consultation . The deposit will be deducted from the total price.
							</li>
							<li style={{ lineHeight: '25px' }}>
								The total price for a single design starts at $40. The price may vary based on the
								intricacy of the design and materials used . If multiple designs are desired, you will
								have to pay a similar price per design .
							</li>
							<li style={{ lineHeight: '25px' }}>
								This includes 10 custom diffuser caps and 10 diffuser adapters.
							</li>
							<li style={{ lineHeight: '25px' }}>
								As soon as you pay your deposit , please use the contact button or the facebook chat and
								send us your ideas and inspirational pictures . Also include your preferred method of
								contact (an e-mail address , phone number or social media username{' '}
								<i class="fab fa-facebook" /> <i class="fab fa-instagram" />.
							</li>
							<li style={{ lineHeight: '25px' }}>
								A design will be drafted by us ., price will be determined, prototypes will be made and
								we will show you our results .
							</li>
							<li style={{ lineHeight: '25px' }}>
								If we determine we are unable to produce what you are desiring, or you are unsatisfied
								with the results, we will refund your $10 deposit . If you wish to proceed, the final
								payment will be required and we will ship them out to you .
							</li>

							<li style={{ lineHeight: '25px' }}>
								Processing and shipping times depend on how many orders are ahead of you . If you would
								like an estimate please reach out to us .
							</li>
							<li style={{ lineHeight: '25px' }}>
								We respect others intellectual property . Any designs that are trademarked or
								Copyrighted will not be redistributed without permission .
							</li>
							<li style={{ lineHeight: '25px' }}>
								Sometimes your custom requests are already in our make list . When this happens, you may
								see your design idea come up for sale on the website later on . While we can't guarantee
								you'll be the only glover to receive this set, we're excited to make you the first ! If
								you have an idea for a common shape or pattern feel free to send it as a suggestion and
								we may have it on the website in the near future !
							</li>
						</ul>
						<Link to="/pages/contact/custom_orders">
							<div className="jc-c">
								<button className="button primary " style={{ margin: 'auto' }}>
									Contact
								</button>
							</div>
						</Link>
					</div>
					<div className="home_page_divs" style={{ margin: '10px 0' }}>
						<h2 className="ta-c" id="processing_shipping">
							Processing/Shipping
						</h2>

						<ul style={{ padding: '18px', marginBottom: 0 }}>
							<li style={{ lineHeight: '25px' }}>
								Copper-rt.com is headquartered in Austin, Texas and orders are processed as they are
								received . Products are not stocked waiting to be shipped at this time. Each order will
								be filled as it is received. Some orders may take longer than others to be shipped.
							</li>
							<li style={{ lineHeight: '25px' }}>
								Small packages will be sent via USPS <i class="fab fa-usps" /> First Class and large
								packages will be sent via Priority Mail.
							</li>
							<li style={{ lineHeight: '25px' }}>
								Shipping time is 1-3 business days, but may be delayed due to pandemic. .
							</li>
							<li style={{ lineHeight: '25px' }}>All shipments come with tracking numbers .</li>
							<li style={{ lineHeight: '25px' }}>Not responsible for delays due to post office .</li>
							<li style={{ lineHeight: '25px' }}>
								For glove accessories (caps, adapters, diffusers, battery storage) we will get your
								order in the mail within approximately 1-3 days after the order is placed.
							</li>
							<li style={{ lineHeight: '25px' }}>
								For string lights we will get your order in the mail within approximately 1 week after
								the order is placed.
							</li>
							{/* <li style={{ lineHeight: '25px' }}>
								For infinity mirrors, expect a longer processing time. Assembly of infinity mirrors is
								much more intensive than other products.
							</li> */}
							<li style={{ lineHeight: '25px' }}>
								If a custom order is placed, processing times will be discussed during consultation.
							</li>
							<li style={{ lineHeight: '25px' }}>
								If the address on your order is incorrect, please contact us immediately at
								info.glowleds@gmail.com or Facebook Chat at the Bottom Right of Your Screen.
							</li>
						</ul>
						<Link to="/pages/contact/order_issues">
							<div className="jc-c">
								<button className="button primary " style={{ margin: 'auto', marginBottom: '10px' }}>
									Contact
								</button>
							</div>
						</Link>
						<h2 className="ta-c" id="international_shipping">
							International Shipping
						</h2>
						<ul style={{ padding: '18px', margin: 0 }}>
							<li style={{ lineHeight: '25px' }}>We ship internationally! </li>
							<li style={{ lineHeight: '25px' }}>
								IMPORTANT: If you live outside of the United States please check the international
								checkbox when filling out shipping information. A country field will show for you to
								input your country.
							</li>
							{/* <li style={{ lineHeight: '25px' }}>
								Shipping will not be calculated correctly if you do not input your country correctly.
							</li> */}
							<li style={{ lineHeight: '25px' }}>
								Shipping times will vary, and will depend on the country.
							</li>
							{/* <li style={{ lineHeight: '25px' }}>
								Shipping times will vary, and will depend on the country.
							</li> */}
							<li style={{ lineHeight: '25px' }}>All shipments come with tracking numbers .</li>
							<li style={{ lineHeight: '25px' }}>Please contact us if you have questions </li>
						</ul>
						<Link to="/pages/contact/order_issues">
							<div className="jc-c">
								<button className="button primary " style={{ margin: 'auto', marginBottom: '10px' }}>
									Contact
								</button>
							</div>
						</Link>
					</div>
					<div className="home_page_divs" style={{ margin: '10px 0' }}>
						<h2 className="ta-c" id="returns_cancellations">
							Returns/Cancellations
						</h2>
						<ul style={{ padding: '18px' }}>
							<li style={{ lineHeight: '25px' }}>
								100% satisfaction guarantee . We accept returns within 14 days of delivery .
							</li>
							<li style={{ lineHeight: '25px' }}>
								To initiate a return please contact info.glowleds@gmail.com or Facebook Chat at the
								Bottom Right of your Screen and You will be supplied with a prepaid shipping span to
								send back your product.
							</li>
							<li style={{ lineHeight: '25px' }}>
								Please include your full name and order number in the return shipment and you will be
								refunded the full amount minus original shipping costs.
							</li>
							{/* <li style={{ lineHeight: '25px' }}>
							You will be refunded your full amount and you'll only be resonsible for return shipping.
						</li> */}
							<li style={{ lineHeight: '25px' }}>Custom items are non-refundable .</li>
							<li style={{ lineHeight: '25px' }}>
								Refunds are returned to the original form of payment{' '}
							</li>
							<li style={{ lineHeight: '25px' }}>
								We do not refund damaged items unless they arrived damaged at our own fault.
							</li>
							<li style={{ lineHeight: '25px' }}>
								If item arrives damamged in any way please contact us immediately at
								info.glowleds@gmail.com or through Facebook Chat at the Bottom right of your screeen.
							</li>
							<li style={{ lineHeight: '25px' }}>
								Our online orders process immediately to ensure our clients receive their products as
								soon as possible. If you would like to cancel your order you must contact us via email
								or Facebook Chat within one hour of payment .
							</li>
							<li style={{ lineHeight: '25px' }}>
								We are not able to modify orders. If you would like to add an item you will need to do
								so in another order.
							</li>
							<Link to="/pages/contact/returns">
								<div className="jc-c">
									<button className="button primary " style={{ margin: 'auto' }}>
										Contact
									</button>
								</div>
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FAQPage;
