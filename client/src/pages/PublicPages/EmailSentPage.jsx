import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const EmailSentPage = (props) => {
	return (
		<div className="column jc-c">
			<Helmet>
				<title>Email Sent | Gibson Lake Copper Art</title>
				<meta property="og:title" content="Check Email" />
				<meta name="twitter:title" content="Check Email" />
				<link rel="canonical" href="http://www.copper-rt.com/account/checkemail" />
				<meta property="og:url" content="http://www.copper-rt.com/account/checkemail" />
			</Helmet>
			<h1 style={{ textAlign: 'center' }}>Email Sent Successfully!</h1>
			<h2 style={{ textAlign: 'center' }}>Thank You for Contacting Gibson Lake Copper Art</h2>
			<p style={{ textAlign: 'center' }}>We'll answer your questions/requests as soon as possible.</p>
			<p style={{ textAlign: 'center' }}>Thank you for your patience and support!</p>
			<p style={{ textAlign: 'center' }}>
				Check out our Frequently Asked Questions page to learn more about our process
			</p>
			<Link to="/pages/faq">
				<div className="jc-c">
					<button className="btn primary " style={{ margin: 'auto' }}>
						Frequently Asked Questions
					</button>
				</div>
			</Link>
		</div>
	);
};
export default EmailSentPage;
