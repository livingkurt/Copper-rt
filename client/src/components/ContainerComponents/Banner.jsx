import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { detailsContent, listContents } from '../../actions/contentActions';

const Banner = () => {
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
		<span className="banner">
			<div className="max-w-1500px m-auto jc-b">
				{content &&
				content.banner && (
					<div className="ml-10px mt-5px fs-12px">
						<label>{content.banner.label}</label>
					</div>
				)}
				<div className="row mt-3px social_media_banner">
					<div className="ml-10px">
						<a
							rel="noreferrer"
							href="https://www.facebook.com/gibsonlakecopperart"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-facebook zoom" />
						</a>
					</div>
					<div className="ml-10px">
						<a
							rel="noreferrer"
							href="https://www.instagram.com/glow_leds/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-instagram zoom" />
						</a>
					</div>
				</div>
			</div>
		</span>
	);
};

export default Banner;
