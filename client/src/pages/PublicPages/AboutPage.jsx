import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { detailsContent, listContents } from '../../actions/contentActions';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const AboutPage = () => {
	const contentDetails = useSelector((state) => state.contentDetails);
	const { content } = contentDetails;

	const contentList = useSelector((state) => state.contentList);
	const { contents } = contentList;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(listContents());
		return () => {};
	}, []);

	useEffect(
		() => {
			const active_content = contents.find((content) => content.active === true);
			if (active_content) {
				dispatch(detailsContent(active_content._id));
			}
			return () => {};
		},
		[ contents ]
	);
	return (
		<div className="main_container">
			<Helmet>
				<title>About | Gibson Lake Copper Art</title>
				<meta property="og:title" content="About" />
				<meta name="twitter:title" content="About" />
				<link rel="canonical" href="http://www.copper-rt.com/pages/about" />
				<meta property="og:url" content="http://www.copper-rt.com/pages/about" />
				<meta
					name="description"
					content="Learn how Gibson Lake Copper Art got started and more in our About Page"
				/>
				<meta
					property="og:description"
					content="Learn how Gibson Lake Copper Art got started and more in our About Page"
				/>
				<meta
					name="twitter:description"
					content="Learn how Gibson Lake Copper Art got started and more in our About Page"
				/>
			</Helmet>
			<MessengerCustomerChat
				pageId="100365571740684"
				appId="379385106779969"
				htmlRef={window.location.pathname}
			/>
			<div class="inner_content">
				<h1 style={{ fontSize: 40, textAlign: 'center' }}>About Gibson Lake Copper Art</h1>
				<div>
					<div
						style={{
							float: 'left',
							margin: '0 25px 25px 0'
						}}
						className="about_pictures"
					>
						<h2
							className="about_names"
							style={{ fontFamily: 'heading_font', marginTop: 0, marginBottom: '25px' }}
						>
							Hi, My name is Gregg
						</h2>
						<img
							alt="Picture of Kurt"
							title="Founder Picture"
							style={{
								borderRadius: '15px',
								width: '100%',
								height: 'auto',
								maxWidth: '400px'
							}}
							src="/images/optimized_images/personal_images/IMG_0508.JPG"
						/>
					</div>
					{/* {content && content.banner && <p >{content.about_page.kurt_p}</p>} */}
					<p className="paragraph_font">
						My interest in art began back in 7th grade at my Junior high school in St. Clair Shores, Mi. I
						had wonderful art teachers, Miss Kafory and Mr. Compo that sparked my interest. I could not draw
						at all, but loved working with clay and making jewelry. They were my art teachers until I moved
						into Lake Shore High School in the 10th grade. This school had two large interconnected art
						rooms. One was set up for drawing and painting while the other was for ceramics, jewelry, and
						various forms of sculpture. At this same time I got a job working at a rod iron metal company
						part time after school. I made only 2.00/hr. cash, but what I learned was priceless. The company
						only had two employees besides me. They handmade porch railings the way it was done in the
						1930’s. I started off grinding the burrs of the railings and then painting them. Eventually,
						with a lot of practice, I learned how to stick weld. I wasn’t very good but they did let me weld
						the shoes that held the railings to the porches. I hope they held. Back in school my new art
						teachers brought us to several art show where artists were demonstrating how they made their
						art. It was here that I watched a guy braze copper and thought it looked fun. So the next day at
						work after I was done painting, I asked Dave, the owner, if he had any brazing rods. I took some
						scrap metal and brazed them together. I loved it! For the next several weeks I practiced brazing
						at work and started to get pretty good. Back at school I asked my art teacher, Miss Minda, if I
						could use the torch that she used for working on jewelry. It was an acetylene torch without an
						oxygen tank so it didn’t braze as well because it didn’t get as hot. She said yes and helped me
						set up a corner in the room for me to braze.
					</p>
					{/* <img
						alt="Picture of Kurt"
						title="Founder Picture"
						style={{
							borderRadius: '15px',
							width: '100%',
							height: 'auto',
							maxWidth: '400px'
						}}
						src="/images/optimized_images/personal_images/IMG_0509.JPG"
					/> */}
					{/* <p >
						That night my dad took me to the junk yard to buy some cooper and brass sheets. These were
						scraps from the local metal shops. The next day and for the next three years I lived in that art
						room. I had other classes, mostly science, but was in the art room every chance I had. There
						were many good artists in my school who I loved watching create. At home, my dad and I built an
						8’ x 8’ welding shop behind our house. Then he helped me purchased oxygen and acetylene tanks,
						torches and brazing rods. That shop became my home away from home. When my friends were looking
						for me, they knew where to go. I still have many of the sculptures I made during those years. My
						senior year, a female student and I were selected “Artists of the Year” in school. My senior
						sculpture was a smashed car bumper with about 20 signs I made using nails. After high school, I
						attend Macomb community college for two years. I was busy and didn’t find much time to braze. My
						shop became a storage shed. I moved to Marquette, Mi. in 1978 to finish my education. Believe it
						or not, I chose to teach science. What an opposite interest. For the next 29 years I taught most
						of the junior high and high school science classes in Watersmeet High School in Watersmeet,
						Michigan. After I retired, I had several health issues that made my life slow down. This is when
						I decided to start brazing again. It was one of the best decisions I have ever made. I set up a
						shop in my basement and create several sculptures each week. My wife, Tina, who I met in college
						and married in 1981, helps me promote my art online and through numerous art shows that we
						attend each summer in the U.P. and Northern Wisconsin.
					</p> */}

					<div
						className="about_pictures"
						style={{
							float: 'right',
							margin: '0px 0px 25px 25px'
						}}
					>
						<img
							alt="Picture of Destanye"
							title="Partner Picture"
							style={{
								borderRadius: '15px',
								width: '100%',
								height: 'auto',
								maxWidth: '400px'
							}}
							src="/images/optimized_images/personal_images/IMG_0509.JPG"
						/>
					</div>
					<p className="paragraph_font">
						That night my dad took me to the junk yard to buy some cooper and brass sheets. These were
						scraps from the local metal shops. The next day and for the next three years I lived in that art
						room. I had other classes, mostly science, but was in the art room every chance I had. There
						were many good artists in my school who I loved watching create. At home, my dad and I built an
						8’ x 8’ welding shop behind our house. Then he helped me purchased oxygen and acetylene tanks,
						torches and brazing rods. That shop became my home away from home. When my friends were looking
						for me, they knew where to go. I still have many of the sculptures I made during those years. My
						senior year, a female student and I were selected “Artists of the Year” in school. My senior
						sculpture was a smashed car bumper with about 20 signs I made using nails. After high school, I
						attend Macomb community college for two years. I was busy and didn’t find much time to braze. My
						shop became a storage shed. I moved to Marquette, Mi. in 1978 to finish my education. Believe it
						or not, I chose to teach science. What an opposite interest. For the next 29 years I taught most
						of the junior high and high school science classes in Watersmeet High School in Watersmeet,
						Michigan. After I retired, I had several health issues that made my life slow down. This is when
						I decided to start brazing again. It was one of the best decisions I have ever made. I set up a
						shop in my basement and create several sculptures each week. My wife, Tina, who I met in college
						and married in 1981, helps me promote my art online and through numerous art shows that we
						attend each summer in the U.P. and Northern Wisconsin.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
