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
				<link rel="canonical" href="https://www.glow-leds.com/pages/faq" />
				<meta property="og:url" content="https://www.glow-leds.com/pages/faq" />
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

						<div className="jc-c pos-rel">
							<div className="iframe-container">
								<iframe
									width="996"
									height="560"
									style={{ borderRadius: '20px' }}
									src="https://www.youtube.com/embed/s49fiZPC5G0?mute=1&showinfo=0&rel=0&autoplay=1&loop=1"
									frameborder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen="1"
								/>
							</div>
						</div>
						<ul style={{ padding: '18px', margin: 0 }}>
							<li style={{ lineHeight: '25px' }}>
								To use the Glowskins with your desired microlight, first you need to remove your chip
								from its casing.
							</li>
							<li style={{ lineHeight: '25px' }}>
								Then squeeze the Glowskins near the point causing the opening in the bottom to expand.
							</li>
							<li style={{ lineHeight: '25px' }}>
								Next, grip your microlight from the sides where the battery is and place it into the
								opening at the bottom of the Glowskin.
							</li>
							<li style={{ lineHeight: '25px' }}>
								Push the microlight all the way in and let your squeezing hand release pressure let the
								bottom of the Glowskin close up.
							</li>
							<li style={{ lineHeight: '25px' }}>
								For Nanoskins and Coinskins, To remove your microlight from your Glowskin, squeeze the
								Glowskin in the same location as you did to put it in.
							</li>
							<li style={{ lineHeight: '25px' }}>
								This action so push the microlight out of the Glowskins.
							</li>
							<li style={{ lineHeight: '25px' }}>
								Then pinch the microlight with your other hand to remove it.
							</li>
							<li style={{ lineHeight: '25px' }}>
								For Coffinskins, to remove your microlight from your Glowskin you will need to spread
								the bottom of the Glowskins and pinch the microlight, as the above method of removing
								does not work for that style of chip.
							</li>
							<li style={{ lineHeight: '25px' }}>All Done! Now go throw some sicks shows!</li>
						</ul>
						<Zoom>
							<img
								className="colored_caps_images"
								src="https://images2.imgbox.com/82/8c/QWA07w4X_o.png"
								alt="Colored Caps"
								title="Colored Caps"
							/>
						</Zoom>
						{/* <h2>Nanoskins V1</h2>
						<label>
							Maximum Microlight Dimmensions including the bulb for Nanoskins: L24mm x W13mm x H10mm
						</label>
						<ul style={{ padding: '18px', margin: 0 }}>
							<li style={{ lineHeight: '25px' }}>spectra EVOs </li>
							<li style={{ lineHeight: '25px' }}>chroma EVOs</li>
						</ul>
						<h2>Nanoskins V2</h2>
						<label>
							Maximum Microlight Dimmensions including the bulb for Nanoskins: L24mm x W13mm x H10mm
						</label>
						<ul style={{ padding: '18px', margin: 0 }}>
							<li style={{ lineHeight: '25px' }}>All LEDGloves Nano chips</li>
							<li style={{ lineHeight: '25px' }}>QtLite 6 Mode</li>
							<li style={{ lineHeight: '25px' }}>FL Atoms</li>
							<li style={{ lineHeight: '25px' }}>FL Ions</li>
						</ul>
						<h2>Apolloskins</h2>
						<label>
							Maximum Microlight Dimmensions including the bulb for Nanoskins: L27mm x W15mm x H10mm
						</label>
						<ul style={{ padding: '18px', margin: 0 }}>
							<li style={{ lineHeight: '25px' }}>TL Apollos</li>
						</ul>
						<h2>Coinskins</h2>
						<label>
							Maximum Microlight Dimmensions including the bulb for Coinskins: L28mm x W19mm x H8mm
						</label>
						<ul style={{ padding: '18px', margin: 0 }}>
							<li style={{ lineHeight: '25px' }}>All elite chips except the Spectra and Chroma EVOs</li>
							<li style={{ lineHeight: '25px' }}>All LEDGloves non-nano chips</li>
							<li style={{ lineHeight: '25px' }}>FL Aethers</li>
							<li style={{ lineHeight: '25px' }}>OSM 2s</li>
						</ul>
						<h2>Coffinskins</h2>
						<label>
							Maximum Microlight Dimmensions including the bulb for Coffinskins: L32mm x W16mm x H8mm
						</label>
						<ul style={{ padding: '18px', margin: 0 }}>
							<li style={{ lineHeight: '25px' }}>Micromax</li>
							<li style={{ lineHeight: '25px' }}>Coffin Style Chips</li>
						</ul> */}
					</div>
					<div className="home_page_divs" style={{ margin: '10px 0' }}>
						<h2 style={{ clear: 'both', textAlign: 'center' }} id="using_diffuser_caps_and_adapters">
							Using Diffuser Caps and Adapters
						</h2>
						<div className="jc-c pos-rel">
							<div className="iframe-container">
								<iframe
									width="996"
									height="560"
									style={{ borderRadius: '20px' }}
									src="https://www.youtube.com/embed/FJbKd0ClkFM?mute=1&showinfo=0&rel=0&autoplay=1&loop=1"
									frameborder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen="1"
								/>
							</div>
						</div>

						<ul style={{ padding: '18px' }}>
							<li style={{ lineHeight: '25px' }}>
								With your microlights outside of your gloves, place the Diffuser Adapters onto your
								microlight bulbs{' '}
								<span aria-label="emoji" role="img">
									💡
								</span>️.
							</li>
							<li style={{ lineHeight: '25px' }}>
								Then place them inside of the glove 🧤, pushing it as far you can so the glove is tight
								over the diffuser adapter
							</li>
							<li style={{ lineHeight: '25px' }}>
								Now it should look like you have flat top domes inside your gloves.
							</li>
							<li style={{ lineHeight: '25px' }}>
								Grip{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '9px' }}>
									🤏
								</span>️the diffuser adapter from outside the glove, do not only hold by microlight or
								the diffuser adapter might spin on the bulb and wont screw in properly or you risk
								causing extra stress to the bulb.
							</li>
							<li style={{ lineHeight: '25px' }}>
								Take your cap{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '9px' }}>
									👑
								</span>️, and place it over top of your glove and adapter and screw{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '9px' }}>
									🔩
								</span>️ in the cap like you would a jar{' '}
								<span aria-label="emoji" role="img">
									🍯
								</span>️.
							</li>
							<li style={{ lineHeight: '25px' }}>
								The threads should catch and only needs a single turn{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									🌀
								</span>️to become snug. Do not over tighten or push the cap on. Let the threads do the
								work{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '2px' }}>
									💫
								</span>️ .
							</li>
						</ul>
					</div>
					<div className="home_page_divs" style={{ margin: '10px 0' }}>
						<h2 style={{ clear: 'both', textAlign: 'center' }} id="orienting_your_diffuser_caps">
							Orienting Your Diffuser Caps
						</h2>
						<div className="jc-c pos-rel">
							<div className="iframe-container">
								<iframe
									width="996"
									height="560"
									style={{ borderRadius: '20px' }}
									src="https://www.youtube.com/embed/vG4qgtrotkw?mute=1&showinfo=0&rel=0&autoplay=1&loop=1"
									frameborder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen="1"
								/>
							</div>
						</div>

						<ul style={{ padding: '18px' }}>
							<li style={{ lineHeight: '25px' }}>
								To place your Diffuser Caps right-side-up, put the Diffuser Adapters onto your
								microlight bulbs with the notch facing the back of the microlight. Then place the light
								and Adapter inside the glove.{' '}
								<span aria-label="emoji" role="img">
									💡
								</span>️.
							</li>
							<li style={{ lineHeight: '25px' }}>
								Take your cap{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '9px' }}>
									👑
								</span>️, and place it over top of your glove and adapter with the design upside-down to
								your desired orientation and screw{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '9px' }}>
									🔩
								</span>️ in the cap like you would a jar{' '}
								<span aria-label="emoji" role="img">
									🍯
								</span>️.
							</li>
							<li style={{ lineHeight: '25px' }}>
								The threads should catch and only needs a half turn{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									🌀
								</span>️to become snug.
								<span aria-label="emoji" role="img" style={{ marginRight: '2px' }}>
									💫
								</span>️ .
							</li>
							<li style={{ lineHeight: '25px' }}>
								To put Diffuser Caps in a different orientation, follow the same steps but change the
								placement of the notch.
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
								A single 100% refundable deposit of $9.99{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									💸
								</span>️ is required to hold your place in line and to be seen for a consultation{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									👨‍⚕️
								</span>️. The deposit will be deducted from the total price.
							</li>
							<li style={{ lineHeight: '25px' }}>
								The total price{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									💸
								</span>️ for a single design starts at $40. The price may vary based on the intricacy of
								the design and materials used{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									🧐
								</span>️. If multiple designs are desired, you will have to pay a similar price per
								design{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									✨
								</span>️.
							</li>
							<li style={{ lineHeight: '25px' }}>
								This includes 10 custom diffuser caps{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									🧢
								</span>️ and 10 diffuser adapters.
							</li>
							<li style={{ lineHeight: '25px' }}>
								As soon as you pay your deposit{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									💸
								</span>️, please use the contact button{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									📞
								</span>️ or the facebook chat and send us your ideas and inspirational pictures{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '11px' }}>
									🌈
								</span>️. Also include your preferred method of contact (an e-mail address{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									📧{' '}
								</span>️, phone number{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									📞
								</span>️ or social media username <i class="fab fa-facebook" />{' '}
								<i class="fab fa-instagram" />.
							</li>
							<li style={{ lineHeight: '25px' }}>
								A design will be drafted by us{' '}
								<span aria-label="emoji" role="img">
									📝
								</span>️., price will be determined, prototypes will be made{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									🏗️
								</span>️ and we will show you our results{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									🔥
								</span>️.
							</li>
							<li style={{ lineHeight: '25px' }}>
								If we determine we are unable to produce what you are desiring, or you are unsatisfied
								with the results, we will refund your $10 deposit{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									💸
								</span>️. If you wish to proceed, the final payment will be required and we will ship
								them out to you{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									🚚
								</span>️.
							</li>

							<li style={{ lineHeight: '25px' }}>
								Processing{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									📦
								</span>️ and shipping times{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									🚚
								</span>️ depend on how many orders are ahead of you{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									⏩
								</span>️. If you would like an estimate{' '}
								<span aria-label="emoji" role="img">
									📝
								</span>️ please reach out to us{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									📞
								</span>.
							</li>
							<li style={{ lineHeight: '25px' }}>
								We respect others intellectual property{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									🏘️
								</span>. Any designs that are trademarked or Copyrighted{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									
								</span>
								will not be redistributed without permission{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									🚫
								</span>.
							</li>
							<li style={{ lineHeight: '25px' }}>
								Sometimes your custom requests are already in our make list{' '}
								<span aria-label="emoji" role="img">
									📝
								</span>️. When this happens, you may see your design idea come up for sale on the
								website later on{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									🛍
								</span>️. While we can't guarantee you'll be the only glover to receive this set, we're
								excited to make you the first{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									😄
								</span>️! If you have an idea for a common shape or pattern feel free to send it{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									📦
								</span>️ as a suggestion and we may have it on the website in the near future{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									🔮
								</span>️!
							</li>
						</ul>
						{/* <h2 style={{ textAlign: 'center', margin: '0 auto' }} id="custom_infinity_mirrors">
							Custom Infinity Mirrors
						</h2>
						<ul style={{ padding: '0 18px' }}>
							<li style={{ lineHeight: '25px' }}>
								Before ordering a custom  mirror a consultation must be had{' '}
								<span aria-label="emoji" role="img">
									📝
								</span>️.
							</li>
							<li style={{ lineHeight: '25px' }}>
								Use the contact button{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									📞
								</span>️ or Facebook Chat to send us a message with inspirational pictures{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									⛰️
								</span>️, appoximate dimmensions{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									📐
								</span>️ and any other details to explain your vision{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '11px' }}>
									🌈
								</span>️and we will create a detailed invoice and design{' '}
								<span aria-label="emoji" role="img">
									📝
								</span>️ . Also include your preferred method of contact{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									📞
								</span>️å (an e-mail address, phone number or social media username).
							</li>
							<li style={{ lineHeight: '25px' }}>
								Pricing begins at $549. The price may vary depending on the size and hardware used ⚙️ .
							</li> */}
						{/* </ul> */}
						<Link to="/pages/contact/custom_orders">
							<div className="jc-c">
								<button className="button primary " style={{ margin: 'auto' }}>
									Contact
								</button>
							</div>
						</Link>
					</div>
					<div className="home_page_divs" style={{ margin: '10px 0' }}>
						<h2 className="ta-c" id="featured_content">
							Featured Content
						</h2>
						<p style={{ lineHeight: '25px' }}>
							Please tag us on Facebook <i class="fab fa-facebook" /> and Instagram{' '}
							<i class="fab fa-instagram" /> when you recieve your products! We love{' '}
							<span aria-label="emoji" role="img" style={{ marginRight: '3px' }}>
								❤
							</span>️ to see how you put our products to use. To be featured{' '}
							<span aria-label="emoji" role="img" style={{ marginRight: '0px' }}>
								📸
							</span>️ on our social media or website send{' '}
							<span aria-label="emoji" role="img" style={{ marginRight: '9px' }}>
								✉️
							</span>️us your videos{' '}
							<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
								📹{' '}
							</span>️direcly using the Contact button{' '}
							<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
								📞
							</span>️ here on the website. You will be given a wetransfer link where you can send us your
							content to be featured{' '}
							<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
								🌟
							</span>️.
						</p>
						<Link to="/pages/contact/submit_content_to_be_featured">
							<div className="jc-c">
								<button className="button primary " style={{ margin: 'auto' }}>
									Contact
								</button>
							</div>
						</Link>
					</div>
					<div className="home_page_divs" style={{ margin: '10px 0' }}>
						<h2 className="ta-c" id="diffuser_too_tight_too_loose">
							Diffuser too tight or too loose?
						</h2>
						<ul style={{ padding: '18px', margin: 0 }}>
							<li style={{ lineHeight: '25px' }}>
								Due to the handmade nature of our diffusers, some variations may occur between
								individual diffusers. This often tends to manifest in some diffusers being too toight or
								too loose on the bulb.
							</li>
							<li style={{ lineHeight: '25px' }}>
								we test each diffuser on a 5mm rgb 4 prong led before packaging as 5mm is considered
								Standard bulb size. (Note 2 prong bulbs are more varied in size)
							</li>
							<li style={{ lineHeight: '25px' }}>
								Be aware that bulb sizes may vary by an inperceivable amount within sets of microlights
								due to the manufacturing process. Different brands may also have different size bulbs,
								although the vast majority are 5mm.
							</li>
							<li style={{ lineHeight: '25px' }}>
								If one or more of your frosted diffusers or diffuser adapters fit too tight or too
								loose, please try the diffuser on several different microlights in the set to determine
								if it is a variant with the diffuser, or the bulb itself. If problem persists please
								reach out to us and we will discuss replacement options.
							</li>
						</ul>
						<Link to="/pages/contact/submit_content_to_be_featured">
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
								Copper-rt.com is headquartered in Austin, Texas{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '3px' }}>
									🇨🇱
								</span>️ and orders are processed as they are received{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									📨
								</span>️. Products are not stocked waiting to be shipped at this time. Each order will
								be filled as it is received. Some orders may take longer than others to be shipped.
							</li>
							<li style={{ lineHeight: '25px' }}>
								Small packages will be sent via USPS <i class="fab fa-usps" /> First Class and large
								packages{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									📦
								</span>️will be sent via Priority Mail.
							</li>
							<li style={{ lineHeight: '25px' }}>
								Shipping time is 1-3 business days, but may be delayed due to pandemic.{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									🚚
								</span>️.
							</li>
							<li style={{ lineHeight: '25px' }}>
								All shipments come with tracking numbers{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									🔢
								</span>️.
							</li>
							<li style={{ lineHeight: '25px' }}>
								Not responsible for delays due to post office{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									🏤
								</span>️.
							</li>
							<li style={{ lineHeight: '25px' }}>
								For glove accessories (caps, adapters, diffusers, battery storage) we will get your
								order in the mail{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									✉️{' '}
								</span>️ within approximately 1-3 days{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									🗓{' '}
								</span>️after the order is placed.
							</li>
							<li style={{ lineHeight: '25px' }}>
								For string lights{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									💡
								</span>️we will get your order in the mail{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									✉️{' '}
								</span>️within approximately 1 week after the order is placed.
							</li>
							{/* <li style={{ lineHeight: '25px' }}>
								For infinity mirrors, expect a longer processing time. Assembly of infinity mirrors is
								much more intensive than other products.
							</li> */}
							<li style={{ lineHeight: '25px' }}>
								If a custom order is placed, processing times will be discussed during consultation.
							</li>
							<li style={{ lineHeight: '25px' }}>
								If the address on your order is incorrect, please contact us<span
									aria-label="emoji"
									role="img"
									style={{ marginRight: '5px' }}
								>
									📞
								</span>️ immediately at info.glowleds@gmail.com or Facebook Chat at the Bottom Right of
								Your Screen.
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
							<li style={{ lineHeight: '25px' }}>
								We ship internationally!{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									🌎
								</span>️
							</li>
							<li style={{ lineHeight: '25px' }}>
								IMPORTANT: If you live outside of the United States{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									🇺🇸
								</span>️ please check the international checkbox when filling out shipping{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									🚚
								</span>️ information. A country field will show for you to input your country.
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
							<li style={{ lineHeight: '25px' }}>
								All shipments come with tracking numbers{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									🔢
								</span>️.
							</li>
							<li style={{ lineHeight: '25px' }}>
								Please contact us{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									📞
								</span>️ if you have questions{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									❓
								</span>️
							</li>
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
								100% satisfaction guarantee{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									💯
								</span>️. We accept returns within 14 days of delivery .
							</li>
							<li style={{ lineHeight: '25px' }}>
								To initiate a return please contact{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									📞
								</span>️ info.glowleds@gmail.com or Facebook Chat at the Bottom Right of your Screen and
								You will be supplied with a prepaid shipping span{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									🏷️
								</span>️to send back your product.
							</li>
							<li style={{ lineHeight: '25px' }}>
								Please include your full name and order number{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '9px' }}>
									🔢
								</span>️in the return shipment and you will be refunded the full amount minus original
								shipping costs.
							</li>
							{/* <li style={{ lineHeight: '25px' }}>
							You will be refunded your full amount and you'll only be resonsible for return shipping.
						</li> */}
							<li style={{ lineHeight: '25px' }}>Custom items are non-refundable .</li>
							<li style={{ lineHeight: '25px' }}>
								Refunds are returned to the original form of payment{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									💳
								</span>️
							</li>
							<li style={{ lineHeight: '25px' }}>
								We do not refund damaged{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									🤕
								</span>️items unless they arrived damaged at our own fault.
							</li>
							<li style={{ lineHeight: '25px' }}>
								If item arrives damamged in any way please contact us{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									📞
								</span>️ immediately at info.glowleds@gmail.com or through Facebook Chat at the Bottom
								right of your screeen.
							</li>
							<li style={{ lineHeight: '25px' }}>
								Our online orders process immediately{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '10px' }}>
									💨
								</span>️to ensure our clients receive their products as soon as possible. If you would
								like to cancel{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '10px' }}>
									🚫
								</span>️your order you must contact{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									📞
								</span>️ us via email or Facebook Chat within one hour of payment{' '}
								<span aria-label="emoji" role="img" style={{ marginRight: '5px' }}>
									💳
								</span>️.
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
