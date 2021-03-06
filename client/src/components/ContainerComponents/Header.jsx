import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userActions';
import { listProducts } from '../../actions/productActions';
import Banner from './Banner';
import { HashLink } from 'react-router-hash-link';

const Header = (props) => {
	const history = useHistory();
	const [ first_name, set_first_name ] = useState('');
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	useEffect(
		() => {
			if (userInfo) {
				set_first_name(userInfo.first_name);
			}
		},
		[ userInfo ]
	);

	const cart = useSelector((state) => state.cart);

	const { cartItems } = cart;

	const openMenu = () => {
		const sidebar = document.querySelector('.sidebar');
		console.log(sidebar.classList.value);
		if (sidebar.classList.value === 'sidebar open') {
			document.querySelector('.sidebar').classList.remove('open');
		} else if (sidebar.classList.value === 'sidebar') {
			document.querySelector('.sidebar').classList.add('open');
		}
	};
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
		history.push('/account/login');
	};

	const userUpdate = useSelector((state) => state.userUpdate);

	useEffect(
		() => {
			if (userUpdate.userInfo) {
				set_first_name(userUpdate.userInfo.first_name);
			}
			return () => {};
		},
		[ userUpdate.userInfo ]
	);

	return (
		<div className="column">
			<Banner />
			<header id="overlay">
				<div className="menu_button left_side w-233px">
					<Link to="/">
						<div className="row">
							<div className="logo h-125px w-125px">
								<img
									className="zoom logo_s"
									src="/images/optimized_images/logo_images/Gibson_Lake_Copper_Art_Logo.png"
									alt="Gibson Lake Copper Art Logo"
									title="Big Logo"
								/>
							</div>
						</div>
					</Link>
					<button
						className="btn mobile nav none fs-30px h-50px w-50px p-10px"
						onClick={openMenu}
						aria-label="sidebar"
					>
						<i className="fas fa-bars" />
					</button>
				</div>
				<div className="column jc-c mh-auto">
					<div className="logo_text jc-c mh-auto ai-c">
						<Link to="/">
							<div className="logo_2 h-80px w-80px none">
								<img
									className="zoom logo_s"
									src="/images/optimized_images/logo_images/Gibson_Lake_Copper_Art_Logo.png"
									alt="Gibson Lake Copper Art Logo"
									title="Small Logo"
								/>
							</div>
						</Link>
						<Link to="/">
							<div className="row">
								<label className="gibson_lake_copper_art_text">Gibson Lake Copper Art</label>
								<label className="tm big" style={{ color: '#9a9898' }}>
									™
								</label>
							</div>
						</Link>
						<Link to="/">
							<div className="row">
								<label className="gibson_lake_copper_art_text small none">GL Copper Art</label>
								<label className="tm small none" style={{ color: '#9a9898' }}>
									™
								</label>
							</div>
						</Link>
					</div>
					<div className="jc-b nav_bar w-450px m-auto">
						{/* <Link to="/collections/all/products">
							<button className="btn nav" onClick={() => dispatch(listProducts(''))}>
								Home
							</button>
						</Link> */}
						<Link to="/collections/all/products">
							<button className="btn nav" onClick={() => dispatch(listProducts(''))}>
								Products
							</button>
						</Link>
						<div className="dropdown-nav">
							{/* <Link to="/pages/menu/natural_scenes"> */}
							<button className="btn nav">Natural Scenes</button>
							{/* </Link> */}
							<div className="dropdown-nav-content hover_fade_in w-200px">
								<div className="dropdown-nav-subcategory">
									<Link to="/collections/all/products/category/trees">
										<button className="btn nav w-100per ta-l">Trees</button>
										<i
											style={{ '-webkitTransform': 'rotate(-180deg)' }}
											className=" pos-abs right-10px top-8px fas fa-sort-up"
										/>
									</Link>
									<div className="dropdown-nav-subcategory-content hover_fade_in left-118px top-39px w-200px">
										<Link to="/collections/all/products/category/trees/subcategory/on_slate">
											<div className="row">
												<i
													style={{ '-webkitTransform': 'rotate(90deg)' }}
													className="mr-30px fas fa-sort-up"
												/>{' '}
												<button className="btn nav w-100per ta-l">On Slate</button>
											</div>
										</Link>
										<Link to="/collections/all/products/category/trees/subcategory/on_driftwood">
											<div className="row">
												<i
													style={{ '-webkitTransform': 'rotate(90deg)' }}
													className="mr-30px fas fa-sort-up"
												/>{' '}
												<button className="btn nav w-100per ta-l">On Driftwood</button>
											</div>
										</Link>
										<Link to="/collections/all/products/category/trees/subcategory/wall_mounted">
											<div className="row">
												<i
													style={{ '-webkitTransform': 'rotate(90deg)' }}
													className="mr-30px fas fa-sort-up"
												/>{' '}
												<button className="btn nav w-100per ta-l">Wall Mounted</button>
											</div>
										</Link>
									</div>
								</div>
								<div className="dropdown-nav-subcategory">
									<Link to="/collections/all/products/category/flowers">
										<button className="btn nav w-100per ta-l">Flowers</button>
										<i
											style={{ '-webkitTransform': 'rotate(-180deg)' }}
											className=" pos-abs right-10px top-8px fas fa-sort-up"
										/>
									</Link>
									<div className="dropdown-nav-subcategory-content hover_fade_in left-118px top-39px w-200px">
										<Link to="/collections/all/products/category/flowers/subcategory/on_slate">
											<div className="row">
												<i
													style={{ '-webkitTransform': 'rotate(90deg)' }}
													className="mr-30px fas fa-sort-up"
												/>{' '}
												<button className="btn nav w-100per ta-l">On Slate</button>
											</div>
										</Link>
										<Link to="/collections/all/products/category/flowers/subcategory/on_driftwood">
											<div className="row">
												<i
													style={{ '-webkitTransform': 'rotate(90deg)' }}
													className="mr-30px fas fa-sort-up"
												/>{' '}
												<button className="btn nav w-100per ta-l">On Driftwood</button>
											</div>
										</Link>
										<Link to="/collections/all/products/category/flowers/subcategory/wall_mounted">
											<div className="row">
												<i
													style={{ '-webkitTransform': 'rotate(90deg)' }}
													className="mr-30px fas fa-sort-up"
												/>{' '}
												<button className="btn nav w-100per ta-l">Wall Mounted</button>
											</div>
										</Link>
									</div>
								</div>
								<div className="dropdown-nav-subcategory">
									<Link to="/collections/all/products/category/leaves">
										<button className="btn nav w-100per ta-l">Leaves</button>
										<i
											style={{ '-webkitTransform': 'rotate(-180deg)' }}
											className=" pos-abs right-10px top-8px fas fa-sort-up"
										/>
									</Link>
									<div className="dropdown-nav-subcategory-content hover_fade_in left-118px top-39px w-200px">
										<Link to="/collections/all/products/category/leaves/subcategory/on_slate">
											<div className="row">
												<i
													style={{ '-webkitTransform': 'rotate(90deg)' }}
													className="mr-30px fas fa-sort-up"
												/>{' '}
												<button className="btn nav w-100per ta-l">On Slate</button>
											</div>
										</Link>
										<Link to="/collections/all/products/category/leaves/subcategory/on_driftwood">
											<div className="row">
												<i
													style={{ '-webkitTransform': 'rotate(90deg)' }}
													className="mr-30px fas fa-sort-up"
												/>{' '}
												<button className="btn nav w-100per ta-l">On Driftwood</button>
											</div>
										</Link>
										<Link to="/collections/all/products/category/leaves/subcategory/wall_mounted">
											<div className="row">
												<i
													style={{ '-webkitTransform': 'rotate(90deg)' }}
													className="mr-30px fas fa-sort-up"
												/>{' '}
												<button className="btn nav w-100per ta-l">Wall Mounted</button>
											</div>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="dropdown-nav">
							<Link to="/collections/all/products/category/buildings">
								<button className="btn nav">Buildings</button>
							</Link>
							{/* <div className="dropdown-nav-content hover_fade_in w-200px">
								<Link to="/collections/all/products/category/buildings/subcategory/on_slate">
									<button className="btn nav w-100per ta-l">On Slate</button>
								</Link>
								<Link to="/collections/all/products/category/buildings/subcategory/on_driftwood">
									<button className="btn nav w-100per ta-l">On Driftwood</button>
								</Link>
								<Link to="/collections/all/products/category/buildings/subcategory/wall_mounted">
									<button className="btn nav w-100per ta-l">Wall Mounted</button>
								</Link>
							</div> */}
						</div>

						{/* <div className="dropdown-nav">
							<Link to="/collections/all/products/category/flowers">
								<button className="btn nav w-100per ta-l">Flowers</button>
							</Link>
							<div className="dropdown-nav-content hover_fade_in w-200px">
								<Link to="/collections/all/products/category/flowers/subcategory/on_slate">
									<button className="btn nav w-100per ta-l">On Slate</button>
								</Link>
								<Link to="/collections/all/products/category/flowers/subcategory/on_driftwood">
									<button className="btn nav w-100per ta-l">On Driftwood</button>
								</Link>
								<Link to="/collections/all/products/category/flowers/subcategory/wall_mounted">
									<button className="btn nav w-100per ta-l">Wall Mounted</button>
								</Link>
							</div>
						</div>
						<div className="dropdown-nav">
							<Link to="/collections/all/products/category/trees">
								<button className="btn nav">Trees</button>
							</Link>
							<div className="dropdown-nav-content hover_fade_in w-200px">
								<Link to="/collections/all/products/category/trees/subcategory/on_slate">
									<button className="btn nav w-100per ta-l">On Slate</button>
								</Link>
								<Link to="/collections/all/products/category/trees/subcategory/on_driftwood">
									<button className="btn nav w-100per ta-l">On Driftwood</button>
								</Link>
								<Link to="/collections/all/products/category/trees/subcategory/wall_mounted">
									<button className="btn nav w-100per ta-l">Wall Mounted</button>
								</Link>
							</div>
						</div>
						<div className="dropdown-nav">
							<Link to="/collections/all/products/category/leaves">
								<button className="btn nav">Leaves</button>
							</Link>
							<div className="dropdown-nav-content hover_fade_in w-200px">
								<Link to="/collections/all/products/category/leaves/subcategory/on_slate">
									<button className="btn nav w-100per ta-l">On Slate</button>
								</Link>
								<Link to="/collections/all/products/category/leaves/subcategory/on_driftwood">
									<button className="btn nav w-100per ta-l">On Driftwood</button>
								</Link>
								<Link to="/collections/all/products/category/leaves/subcategory/wall_mounted">
									<button className="btn nav w-100per ta-l">Wall Mounted</button>
								</Link>
							</div>
						</div> */}
						<div className="dropdown-nav">
							<Link to="/collections/all/products/category/modern">
								<button className="btn nav">Modern</button>
							</Link>
							{/* <div className="dropdown-nav-content hover_fade_in w-200px">
								<Link to="/collections/all/products/category/modern/subcategory/on_slate">
									<button className="btn nav w-100per ta-l">On Slate</button>
								</Link>
								<Link to="/collections/all/products/category/modern/subcategory/on_driftwood">
									<button className="btn nav w-100per ta-l">On Driftwood</button>
								</Link>
								<Link to="/collections/all/products/category/modern/subcategory/wall_mounted">
									<button className="btn nav w-100per ta-l">Wall Mounted</button>
								</Link>
							</div> */}
						</div>
						<div className="dropdown-nav">
							{/* <Link to="/pages/menu/support"> */}
							<button className="btn nav">Support</button>
							{/* </Link> */}
							<div className="dropdown-nav-content hover_fade_in w-230px">
								<Link to="/pages/track_your_order">
									<button className="btn nav w-100per ta-l">Track Your Order</button>
								</Link>
								<Link to="/pages/about">
									<button className="btn nav w-100per ta-l">About</button>
								</Link>

								<div className="dropdown-nav-subcategory">
									<Link to="/pages/faq">
										<button className="btn nav w-100per ta-l w-100per ta-l">FAQ</button>
										{/* <i
											style={{ '-webkitTransform': 'rotate(-180deg)' }}
											className=" pos-abs right-10px top-8px fas fa-sort-up"
										/> */}
									</Link>
									{/* <div className="dropdown-nav-subcategory-content hover_fade_in w-325px left-n325px top-n5px">
										<HashLink to="/pages/faq#glowskins">
											<div className="row">
												<i
													style={{ '-webkitTransform': 'rotate(90deg)' }}
													className="mr-30px fas fa-sort-up"
												/>{' '}
												<button className="btn nav w-100per ta-l">Glowskins</button>
											</div>
										</HashLink>
										<HashLink to="/pages/faq#using_diffuser_caps_and_adapters">
											<div className="row">
												<i
													style={{ '-webkitTransform': 'rotate(90deg)' }}
													className="mr-30px fas fa-sort-up"
												/>{' '}
												<button className="btn nav w-100per ta-l">
													Diffuser Caps Guide
												</button>
											</div>
										</HashLink>
										<HashLink to="/pages/faq#diffuser_too_tight_too_loose">
											<div className="row">
												<i
													style={{ '-webkitTransform': 'rotate(90deg)' }}
													className="mr-30px fas fa-sort-up"
												/>{' '}
												<button className="btn nav w-100per ta-l">
													Diffusers Too Tight/Loose?
												</button>
											</div>
										</HashLink>
										<HashLink to="/pages/faq#ordering_custom_products">
											<div className="row">
												<i
													style={{ '-webkitTransform': 'rotate(90deg)' }}
													className="mr-30px fas fa-sort-up"
												/>{' '}
												<button className="btn nav w-100per ta-l">
													Ordering Custom Products
												</button>
											</div>
										</HashLink>
										<HashLink to="/pages/faq#featured_content">
											<div className="row">
												<i
													style={{ '-webkitTransform': 'rotate(90deg)' }}
													className="mr-30px fas fa-sort-up"
												/>{' '}
												<button className="btn nav w-100per ta-l">Featured Content</button>
											</div>
										</HashLink>

										<HashLink to="/pages/faq#processing_shipping">
											<div className="row">
												<i
													style={{ '-webkitTransform': 'rotate(90deg)' }}
													className="mr-30px fas fa-sort-up"
												/>{' '}
												<button className="btn nav w-100per ta-l">
													Processing/Shipping
												</button>
											</div>
										</HashLink>
										<HashLink to="/pages/faq#returns_cancellations">
											<div className="row">
												<i
													style={{ '-webkitTransform': 'rotate(90deg)' }}
													className="mr-30px fas fa-sort-up"
												/>{' '}
												<button className="btn nav w-100per ta-l">
													Returns/Cancellations
												</button>
											</div>
										</HashLink>
									</div> */}
								</div>
								<Link to="/pages/contact">
									<button className="btn nav w-100per ta-l">Contact</button>
								</Link>
								<Link to="/pages/terms">
									<button className="btn nav w-100per ta-l">Term and Conditions</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<Link to="/checkout/cart">
					<button className=" btn mobile nav cart_icon none">
						<i className="fas fa-shopping-cart" />{' '}
						{cartItems.reduce((a, c) => parseInt(a) + parseInt(c.qty), 0)}{' '}
					</button>
				</Link>
				<div className="nav_bar right_side w-233px jc-fe">
					<Link to="/checkout/cart">
						<button className=" btn nav cart_text w-85px">
							Cart <i className="fas fa-shopping-cart" />{' '}
							{cartItems.reduce((a, c) => parseInt(a) + parseInt(c.qty), 0)}{' '}
						</button>
					</Link>
					<Link to="/checkout/cart">
						<button className=" btn mobile nav cart_icon none">
							<i className="fas fa-shopping-cart" />{' '}
							{cartItems.reduce((a, c) => parseInt(a) + parseInt(c.qty), 0)}{' '}
						</button>
					</Link>
					{props.userInfo ? (
						<div className="dropdown">
							<button className="btn nav">{first_name}</button>
							<ul className="dropdown-content hover_fade_in w-110px">
								<Link to="/secure/account/profile">
									<button className="btn nav">Profile</button>
								</Link>
								<Link to="/secure/account/orders">
									<button className="btn nav">Orders</button>
								</Link>
								{/* <Link to="/secure/account/devices">
									<button className="btn nav">Devices</button>
								</Link> */}
								<button className="btn nav mr-auto" onClick={handleLogout}>
									{' '}
									Logout
								</button>
							</ul>
						</div>
					) : (
						<div>
							<Link to="/account/login">
								<button className="btn nav">Login</button>
							</Link>
						</div>
					)}
					{props.userInfo &&
					props.userInfo.isAdmin && (
						<div className="dropdown ">
							<button className="btn nav">Admin</button>
							<ul className="dropdown-content hover_fade_in">
								<Link to="/secure/glow/controlpanel">
									<button className="btn nav ta-l w-152px">Control Panel</button>
								</Link>
								<Link to="/secure/glow/orders">
									<button className="btn nav">Orders</button>
								</Link>
								<Link to="/secure/glow/products">
									<button className="btn nav"> Products</button>
								</Link>
								<Link to="/secure/glow/users">
									<button className="btn nav"> Users</button>
								</Link>
								<Link to="/secure/glow/expenses">
									<button className="btn nav"> Expenses</button>
								</Link>
								<Link to="/secure/glow/features">
									<button className="btn nav"> Features</button>
								</Link>
								<Link to="/secure/glow/affiliates">
									<button className="btn nav"> Affiliates</button>
								</Link>
								<Link to="/secure/glow/promos">
									<button className="btn nav">Promos</button>
								</Link>
								<Link to="/secure/glow/carts">
									<button className="btn nav">Carts</button>
								</Link>
								<Link to="/secure/glow/contents">
									<button className="btn nav">Contents</button>
								</Link>
								<Link to="/secure/glow/emails">
									<button className="btn nav">Emails</button>
								</Link>
								<Link to="/secure/glow/logs">
									<button className="btn nav">Logs</button>
								</Link>
								<Link to="/secure/glow/edit_all_data">
									<button className="btn nav">Edit All Data</button>
								</Link>
							</ul>
						</div>
					)}
				</div>
			</header>
		</div>
	);
};

export default Header;
