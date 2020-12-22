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
				<link rel="canonical" href="https://www.glow-leds.com/pages/about" />
				<meta property="og:url" content="https://www.glow-leds.com/pages/about" />
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
							src="/images/optimized_images/personal_images/IMG_8989_optimized.jpeg"
						/>
					</div>
					{/* {content && content.banner && <p style={{ lineHeight: '25px' }}>{content.about_page.kurt_p}</p>} */}
					<p style={{ lineHeight: '25px' }}>
						My interest in art began in 7th grade at St. Clair Shores, Mi. I had wonderful art teachers,
						Miss Kafory and Mr. Compo that sparked my interest. I could not draw at all, but loved working
						with clay and making jewelry. They were my art teachers until I moved into Lake Shore High
						school in the 10th grade. This school had 2 large art rooms that were interconnected. One was
						set up for drawing and painting and the other for ceramics, jewelry, and other forms of
						sculpture. At this same time I got a job working at a rod iron metal company part time after
						school. I made only 2.00/hr. cash but what I learned was priceless. The company only had 2
						employees besides me. They handmade porch railings the way it was done in the 1930’s. I started
						off grinding the burrs of the railings and then painting them. Eventually with a lot of practice
						I learned how to stick weld. I wasn’t very good, but they did let me weld the shoes that held
						the railings to the porches. I hope they held. Back in school my new art teachers brought us to
						several art show where artists were demonstrating how they made their art. It was here that I
						watched a guy braze copper and thought it looked fun. So the next day at work after I was done
						painting, I asked Dave, the owner if he had any brazing rods. I took some scrap metal and brazed
						them together. I loved it. For the next several weeks I practiced brazing at work and started to
						get pretty good. Back at school I asked my art teacher, Miss Minda if I could use the torch that
						she used for working on jewelry. It was an acetylene torch without an oxygen tank so it didn’t
						braze as good because it didn’t get as hot. She said yes and helped me set up a corner in the
						room for me to braze. That night my dad took me to the junk yard to buy some cooper and brass
						sheets. These were scraps from the local metal shops. The next day and for the next 3 years I
						lived in that art room. I had other classes, mostly science, but was in the art room every
						chance I had. There were lots of good artists in my school I loved watching them create. At
						home, my dad and I built a 8’ x 8’ welding shop behind our house. Dave my boss, helped me order
						oxygen and acetylene tanks which I purchased, torches and other equipment I would need. That
						shop became my home away from home. When my friends were looking for me, they knew where to go.
						I still have many of the sculptures a made during those years. My senior year Lauri Potus and I
						were selected as the artists of the year at our school. My senior sculpture was a smashed car
						bumper with about 20 signs I made using nails. After high school, I attend Macomb community
						college for 2 years. I was busy and didn’t find much time to braze. My shop became a storage
						shed for the most part. I moved to Marquette, Mi. in 1978 to finish my education. Believe it or
						not, I chose to teach science. What an opposite interest. For the next 29 yr. I taught most of
						the junior high and high school science classes in Watersmeet high school in Watersmeet, Mi.
						After I retired, I had several health issues that made my life slow down. This is when I decided
						to start brazing again. It was one of the best decisions I have ever made. I set up a shop in my
						basement and create several sculptures each week. My wife, who I met in college and married in
						1981, helps me with the 5 art fairs we attend each summer.
					</p>
					{/* <div
						className="about_pictures"
						style={{
							float: 'right',
							margin: '0px 0px 25px 25px'
						}}
					>
						<h2
							className="about_names"
							style={{
								fontFamily: 'heading_font',
								display: 'flex',
								marginTop: 0,
								justifyContent: 'flex-end',
								marginBottom: '25px'
							}}
						>
							Hi, My Name is Destanye!
						</h2>
						<img
							alt="Picture of Destanye"
							title="Partner Picture"
							style={{
								borderRadius: '15px',
								width: '100%',
								height: 'auto',
								maxWidth: '400px'
							}}
							src="/images/optimized_images/personal_images/img_0345_optimized.jpg"
						/>
					</div> */}
					{/* <p style={{ lineHeight: '25px' }}>
						I (Destanye) help with orders, designs, marketing, customer service and anything that doesn’t
						involve coding or engineering. This business is truly a labor of love and we hope that something
						here brings happiness into your life.
					</p> */}
					{/* {content && content.banner && <p style={{ lineHeight: '25px' }}>{content.about_page.destanye_p}</p>} */}
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
