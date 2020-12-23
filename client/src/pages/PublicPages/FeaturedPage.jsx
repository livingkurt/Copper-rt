import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { listFeatures } from '../../actions/featureActions';
import { humanize } from '../../utils/helper_functions';

const FeaturedPage = (props) => {
	const featureList = useSelector((state) => state.featureList);
	const { features } = featureList;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(listFeatures());
		return () => {};
	}, []);

	const date = new Date();

	const today = date.toISOString();
	return (
		<div className="main_container">
			<Helmet>
				<title>Featured | Gibson Lake Copper Art</title>
				<meta property="og:title" content="Featured" />
				<meta name="twitter:title" content="Featured" />
				<link rel="canonical" href="http://www.copper-rt.com/pages/featured" />
				<meta property="og:url" content="http://www.copper-rt.com/pages/featured" />
				<meta
					name="description"
					content="Here at Gibson Lake Copper Art we want all you glovers, ravers, festival goers, and even home decor peeps to be apart of our community."
				/>
				<meta
					property="og:description"
					content="Here at Gibson Lake Copper Art we want all you glovers, ravers, festival goers, and even home decor peeps to be apart of our community."
				/>
				<meta
					name="twitter:description"
					content="Here at Gibson Lake Copper Art we want all you glovers, ravers, festival goers, and even home decor peeps to be apart of our community."
				/>
			</Helmet>
			<div className="jc-c">
				<h1> Featured</h1>
			</div>

			<p className="p_descriptions" style={{ textAlign: 'center' }}>
				Here is an archive of the lightshows and product reviews that you have so graciously given to us. We
				appreciate each and every one of you.
			</p>
			{features &&
				features.filter((feature) => feature.release_date <= today).map((feature) => {
					return (
						<div className="home_page_divs">
							<div className="column jc-c">
								<h2 style={{ textAlign: 'center' }}>{feature.glover_name} Light Show</h2>
								<p className="p_descriptions" style={{ textAlign: 'center', marginBottom: 0 }}>
									Check out {feature.glover_name} with the {humanize(feature.product)}!
								</p>
								<p className="p_descriptions" style={{ textAlign: 'center' }}>
									Follow him @ {feature.facebook_name} on Facebook and @{feature.instagram_handle} on
									Instagram
								</p>
								<Link to={`/collections/all/products/${feature.product}`}>
									<div className="column jc-c">
										<div className="p_descriptions" style={{ textAlign: 'center' }}>
											<button
												className="button primary "
												style={{ margin: 'auto', marginBottom: '10px' }}
											>
												{humanize(feature.product)}
											</button>
										</div>
									</div>
								</Link>
							</div>
							<div className="jc-c pos-rel">
								<div className="iframe-container">
									<iframe
										width="996"
										height="560"
										style={{ borderRadius: '20px' }}
										src={`https://www.youtube.com/embed/${feature.video}?mute=1&showinfo=0&rel=0&autoplay=1&loop=1`}
										frameborder="0"
										allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
										allowfullscreen="1"
									/>
								</div>
							</div>

							<p className="p_descriptions" style={{ textAlign: 'center' }}>
								{feature.song_id}
							</p>
							<p className="p_descriptions" style={{ textAlign: 'center' }}>
								For Information on how to become featured on our pages. Check our Frequently Asked
								Questions page.
							</p>
							<Link to="/pages/faq">
								<div className="jc-c">
									<button
										className="button primary "
										style={{ margin: 'auto', marginBottom: '10px' }}
									>
										Frequently Asked Questions
									</button>
								</div>
							</Link>
						</div>
					);
				})}
		</div>
	);
};
export default FeaturedPage;
