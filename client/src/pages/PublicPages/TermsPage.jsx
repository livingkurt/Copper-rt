import React from 'react';
import { Helmet } from 'react-helmet';

const TermsPage = () => {
	return (
		<div className="main_container">
			<Helmet>
				<title>Terms and Conditions | Gibson Lake Copper Art</title>
				<meta property="og:title" content="Terms and Conditions" />
				<meta name="twitter:title" content="Terms and Conditions" />
				<link rel="canonical" href="http://www.copper-rt.com/account/terms" />
				<meta property="og:url" content="http://www.copper-rt.com/account/terms" />
				<meta
					name="description"
					content="Gibson Lake Copper Art wants everyone to use our platform for what it was meant to be used for."
				/>
				<meta
					property="og:description"
					content="Gibson Lake Copper Art wants everyone to use our platform for what it was meant to be used for."
				/>
				<meta
					name="twitter:description"
					content="Gibson Lake Copper Art wants everyone to use our platform for what it was meant to be used for."
				/>
			</Helmet>

			<h1 style={{ textAlign: 'center' }}>Terms & Conditions</h1>

			<p style={{ lineHeight: '30px' }}>
				Prior to using this website- I fully agree to the terms set forth here: Under no circumstances will the
				seller (Copper-rt.com hereby referred to as “Copper-rt.com” & all affiliates) be liable for any damages
				or expenses by reason of use or sale of Copper-rt.com products. I understand that products sold on
				Copper-rt.com contain small parts and are a choking hazard for small children. Copper-rt.com is not
				responsible for any injuries or damages that can result from any of the products sold on Copper-rt.com,
				any of its affiliates, or produced by Copper-rt.com. I hereby release from any legal liability
				Copper-rt.com including its owners, agents, and employees from any and all liability for damage, injury
				or death to myself, or any other person or property resulting the selection, assembly, maintenance or
				use of such equipment and any claim based upon negligence, breach of warranty, contract or legal theory
				accepting myself the full responsibility for any and all such damage, injury or death which may result.
				This also applies to any individuals whom I supply with these products. I further agree that any and all
				liability of Copper-rt.com including its owners, agents and employees resulting from the selection,
				assembly, maintenance or use of this equipment shall be limited to the purchase price of any such
				equipment. Copper-rt.com products are not intended for use in breaking the law. The buyer acknowledges
				and agrees that the disclaimer of any liability for personal injury is a material term for this
				agreement and the buyer agrees to indemnify the Seller and to hold the Seller harmless from any claim
				related to the item of the equipment purchased. Any suit or other legal proceedings concerning the
				injury or death from the selection, assembly, maintenance or use of this equipment may be brought only
				in the courts of Travis County, Texas. I consent to jurisdiction and venue of any such court in any such
				proceeding. I acknowledge that my email address will be added to the Copper-rt.com email list. In which,
				occasional promotions and customer information details may be sent. I may unsubscribe at any time by
				using the unsubscribe link in any email sent, or by contacting Copper-rt.com. Under no circumstances
				will my email address be shared with any third party.
			</p>
			{/* <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Custom Products</h2> */}
			<ul style={{ padding: '0 18px' }}>
				<li style={{ lineHeight: '30px' }}>
					I understand that any Custom ordered products are the intellectual property of Copper-rt.com and may
					be used, promoted or distributed at any time.
				</li>
			</ul>
			{/* <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Featured Content</h2> */}
			<ul style={{ padding: '0 18px' }}>
				<li style={{ lineHeight: '30px' }}>
					Any media, incuding videos or pictures, submitted to Copper-rt.com may be used on Copper-rt.com or
					Gibson Lake Copper Art social media to either entertain or promote.
				</li>
				<li style={{ lineHeight: '30px' }}>
					Copper-rt.com will not distribute such media to third parties for any reason without prior consent
					from submitter.
				</li>
			</ul>
			{/* <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Agreement</h2> */}
			<p style={{ lineHeight: '30px' }}>
				I have carefully read this Agreement and Release of Liability and fully understand its content. I
				understand that it provides a comprehensive release of liability as to me, and all others to whom I may
				supply the equipment. This Agreement and Release of Liability may not be added or altered except by the
				written agreement assigned by Copper-rt.com. It is not intended to assert any claim or defense which
				applicable law prohibits. Rights of parties may vary from state to state. By accessing the Copper-rt.com
				website you agree to the terms and conditions outlined above. If you do not agree to these terms and
				conditions, please exit this site immediately. We reserve the right to change, modify, add or remove
				portions of these terms at any time. If you continue to use the site after we have posted changes to the
				terms, you have then inherently accepted those terms. If you need to contact us, please use our contact
				form.
			</p>
		</div>
	);
};

export default TermsPage;
