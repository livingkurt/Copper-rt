import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { humanize } from '../../utils/helper_functions';

const MenuPage = (props) => {
	const pathname = props.match.params.pathname;

	const determine_menu_items = () => {
		if (pathname === 'natural_scenes') {
			return [
				{ category: 'trees', image: 'https://thumbs2.imgbox.com/1f/c9/qXeP6Rtb_t.jpg' },
				{ category: 'flowers', image: 'https://thumbs2.imgbox.com/34/a1/fH5sSzCD_t.jpg' },
				{ category: 'leaves', image: 'https://thumbs2.imgbox.com/77/69/NeANPFC2_t.jpg' }
			];
		} else if (pathname === 'trees') {
			return [
				{ category: 'on_slate', image: '' },
				{ category: 'on_driftwood', image: '' },
				{ category: 'wall_mounted', image: '' }
			];
		} else if (pathname === 'flowers') {
			return [
				{ category: 'on_slate', image: '' },
				{ category: 'on_driftwood', image: '' },
				{ category: 'wall_mounted', image: '' }
			];
		} else if (pathname === 'leaves') {
			return [
				{ category: 'on_slate', image: '' },
				{ category: 'on_driftwood', image: '' },
				{ category: 'wall_mounted', image: '' }
			];
		} else if (pathname === 'support') {
			return [
				{ category: 'about', image: 'https://thumbs2.imgbox.com/c2/39/oRHFB0qz_t.jpeg' },
				{ category: 'faq', image: 'https://thumbs2.imgbox.com/9c/ed/jGyCTlQB_t.png' },
				{ category: 'contact', image: 'https://thumbs2.imgbox.com/6b/a4/JLxNKDWE_t.png' },
				{ category: 'terms', image: 'https://thumbs2.imgbox.com/a0/11/BlKmYy5J_t.png' }
			];
		}
	};

	const decide_url = (item) => {
		if (pathname === 'gloving' || pathname === 'decor') {
			return `/collections/all/products/category/${item.category}`;
		} else if (pathname === 'featured') {
			return `/pages/featured/${item.category}`;
		} else {
			return `/pages/${item.category}`;
		}
	};

	return (
		<div className="main_container">
			<Helmet>
				<title>{humanize(pathname)} | Gibson Lake Copper Art</title>
				<meta property="og:title" content={`${humanize(pathname)}| Gibson Lake Copper Art`} />
				<meta name="twitter:title" content={`${humanize(pathname)}| Gibson Lake Copper Art`} />
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
				<h1> {humanize(pathname)}</h1>
			</div>
			<div className="jc-c">
				<div className="jc-c wrap">
					{determine_menu_items().map((item) => {
						return (
							<div className="home_page_divs m-10px w-300px">
								<Link
									to={decide_url(item)
									// pathname === 'gloving' || pathname === 'decor' ? (
									// 	`/collections/all/products/category/${item.category}`
									// ) : (
									// 	`/pages/${item.category}`
									// )
									}
								>
									<h2 className="">{humanize(item.category)}</h2>
									{/* {console.log({ img: get_category_images(item.category) })} */}
									<img
										className="w-100per h-auto br-20px"
										width="200px"
										src={item.image}
										alt={item.category}
										title="Menu Item Images"
									/>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default MenuPage;
