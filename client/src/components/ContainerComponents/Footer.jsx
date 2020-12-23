import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="ta-c w-100per mt-5rem h-400px" style={{ backgroundColor: '#5a4d41' }}>
			<div className="footer-image">
				<Link to="/">
					<div className="">
						<img
							className=""
							src="/images/optimized_images/logo_images/Gibson_Lake_Copper_Art_Logo.png"
							alt="Gibson Lake Copper Art Logo"
							title="Big Logo"
						/>
					</div>
				</Link>
				<div className="mt-2rem wrap jc-c ">
					<div className="ml-10px fs-30px jc-b w-100per max-w-100px">
						<div className="ml-10px fs-40px">
							<a
								href="https://www.facebook.com/gibsonlakecopperart"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-facebook zoom" />
							</a>
						</div>
						<div className="ml-10px fs-40px">
							<a href="https://www.instagram.com/glow_leds/" target="_blank" rel="noopener noreferrer">
								<i className="fab fa-instagram zoom" />
							</a>
						</div>
					</div>
				</div>

				<div className="jc-b ai-c w-100per p-10px footer_buttons">
					<div className="jc-a w-100per">
						<div>
							<h2 className="ta-l">
								<Link to="/collections/all/products">Products</Link>
							</h2>
							<ul className="lst-none">
								<li className="ta-l mv-2rem">
									<Link to="/collections/all/products/category/natrual_scenes">Natural Scenes</Link>
								</li>
								<li className="ta-l mv-2rem">
									<Link to="/collections/all/products/category/buildings">Buildings</Link>
								</li>
								<li className="ta-l mv-2rem">
									<Link to="/collections/all/products/category/modern">Modern</Link>
								</li>
							</ul>
						</div>
						{/* <div>
							<h2 className="ta-l">
								<Link to="/pages/menu/community">Community</Link>
							</h2>
							<ul className="lst-none">
								<li className="ta-l mv-2rem">
									<Link to="/pages/announcments">Announcments</Link>
								</li>
								<li className="ta-l mv-2rem">
									<Link to="/pages/menu/featured">Featured</Link>
								</li>
								<li className="ta-l mv-2rem">
									<Link to="/pages/music">Music</Link>
								</li>
							</ul>
						</div> */}
						<div>
							<h2 className="ta-l">
								<Link to="/collections/all/products">Services</Link>
							</h2>
							<ul className="lst-none">
								<li className="ta-l mv-2rem">
									<Link to="/secure/account/profile">My Account</Link>
								</li>
								<li className="ta-l mv-2rem">
									<Link to="/account/login">Login</Link>
								</li>
								<li className="ta-l mv-2rem">
									<Link to="/pages/terms">Terms</Link>
								</li>
								<li className="ta-l mv-2rem">
									<Link to="/pages/sitemap">Sitemap</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
