import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { update } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { validate_profile } from '../../utils/validations';
import { Loading } from '../../components/UtilityComponents';
import { Helmet } from 'react-helmet';

const EditProfilePage = (props) => {
	const user_data = props.userInfo;
	const history = useHistory();
	const [ first_name, set_first_name ] = useState('');
	const [ last_name, set_last_name ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ shipping, set_shipping ] = useState({});
	const [ email_subscription, set_email_subscription ] = useState('');
	const [ loading_checkboxes, set_loading_checkboxes ] = useState(true);
	const [ international, setInternational ] = useState(false);

	const [ first_name_validations, setFirstnameValidations ] = useState('');
	const [ last_name_validations, setLastNameValidations ] = useState('');
	const [ email_validations, setEmailValidations ] = useState(false);
	const dispatch = useDispatch();

	// const userLogin = useSelector((state) => state.userLogin);
	// const { userInfo } = userLogin;

	const submitHandler = (e) => {
		e.preventDefault();
		const data = { first_name, last_name, email };
		const request = validate_profile(data);

		setFirstnameValidations(request.errors.first_name);
		setLastNameValidations(request.errors.last_name);
		setEmailValidations(request.errors.email);

		console.log(request);
		if (request.isValid) {
			dispatch(update({ ...user_data, email, first_name, last_name, email_subscription, shipping }));
			history.push('/secure/account/profile');
		}
	};
	const userUpdate = useSelector((state) => state.userUpdate);
	const { loading, success, error } = userUpdate;

	setTimeout(() => {
		set_loading_checkboxes(false);
	}, 500);

	useEffect(
		() => {
			if (user_data) {
				setEmail(user_data.email);
				set_first_name(user_data.first_name);
				set_last_name(user_data.last_name);
				set_email_subscription(user_data.email_subscription);
				set_shipping(user_data.shipping);
				// setPassword(user_data.password);
			}
			return () => {};
		},
		[ user_data ]
	);

	useEffect(
		() => {
			if (userUpdate.userInfo) {
				setEmail(userUpdate.userInfo.email);
				set_first_name(userUpdate.userInfo.first_name);
				set_last_name(userUpdate.userInfo.last_name);
				set_email_subscription(userUpdate.userInfo.email_subscription);
				set_shipping(userUpdate.userInfo.shipping);
				// setPassword(userUpdate.userInfo.password);
			}

			return () => {};
		},
		[ userUpdate.userInfo ]
	);

	return (
		<div className="profile_container column p-20px">
			<Helmet>
				<title>Edit Profile | Gibson Lake Copper Art</title>
				<meta property="og:title" content="Edit Profile" />
				<meta name="twitter:title" content="Edit Profile" />
				<link rel="canonical" href="http://www.copper-rt.com/secure/account/editprofile" />
				<meta property="og:url" content="http://www.copper-rt.com/secure/account/editprofile" />
			</Helmet>
			<div className="mb-10px">
				<button className="btn primary" onClick={() => history.goBack()}>
					Back to Profile
				</button>
			</div>
			<div className="profile-info">
				<div className="form">
					<form onSubmit={submitHandler} style={{ width: '100%' }}>
						<ul className="form-container">
							<li>
								<h1 style={{ textAlign: 'center' }}>User Profile</h1>
							</li>
							<li>
								<div className="jc-c">
									<Loading loading={loading} error={error}>
										{success && <h3 style={{ textAlign: 'center' }}>Profile Saved Successfully</h3>}
									</Loading>
								</div>
							</li>

							<li>
								<label htmlFor="first_name">First Name</label>
								<input
									defaultValue={first_name}
									type="first_name"
									name="first_name"
									id="first_name"
									onChange={(e) => set_first_name(e.target.value)}
								/>
							</li>
							<label className="validation_text" styles={{ fontSize: 16, justifyContent: 'center' }}>
								{first_name_validations}
							</label>
							<li>
								<label htmlFor="last_name">Last Name</label>
								<input
									defaultValue={last_name}
									type="last_name"
									name="last_name"
									id="last_name"
									onChange={(e) => set_last_name(e.target.value)}
								/>
							</li>
							<label className="validation_text" styles={{ fontSize: 16, justifyContent: 'center' }}>
								{last_name_validations}
							</label>
							<li>
								<label htmlFor="email">Email</label>
								<input
									defaultValue={email}
									type="text"
									name="email"
									id="email"
									onChange={(e) => setEmail(e.target.value)}
								/>
							</li>
							<label className="validation_text" styles={{ fontSize: 16, justifyContent: 'center' }}>
								{email_validations}
							</label>
							{loading_checkboxes ? (
								<div>Loading...</div>
							) : (
								<li>
									<label htmlFor="email_subscription">Promotional Emails</label>
									<input
										type="checkbox"
										name="email_subscription"
										defaultChecked={email_subscription}
										id="email_subscription"
										onChange={(e) => {
											set_email_subscription(e.target.checked);
										}}
									/>
								</li>
							)}
							<li>
								<h2 style={{ textAlign: 'center' }}>Shipping</h2>
							</li>
							<li>
								<label htmlFor="first_name">First Name</label>
								<input
									defaultValue={shipping.first_name}
									type="first_name"
									name="first_name"
									id="first_name"
									onChange={(e) => set_shipping({ ...shipping, first_name: e.target.value })}
								/>
							</li>
							{/* <label className="validation_text" styles={{ fontSize: 16, justifyContent: 'center' }}>
								{first_name_validations}
							</label> */}
							<li>
								<label htmlFor="last_name">Last Name</label>
								<input
									defaultValue={shipping.last_name}
									type="last_name"
									name="last_name"
									id="last_name"
									onChange={(e) => set_shipping({ ...shipping, last_name: e.target.value })}
								/>
							</li>
							{/* <label className="validation_text" styles={{ fontSize: 16, justifyContent: 'center' }}>
								{last_name_validations}
							</label> */}
							<li>
								<label htmlFor="address">Address</label>
								<input
									type="text"
									value={shipping.address}
									name="address"
									id="address"
									onChange={(e) => set_shipping({ ...shipping, address: e.target.value })}
								/>
							</li>
							{/* <label className="validation_text" style={{ justifyContent: 'center' }}>
							{address_validations
						</label> */}
							<li>
								<label htmlFor="city">City</label>
								<input
									type="text"
									value={shipping.city}
									name="city"
									id="city"
									onChange={(e) => set_shipping({ ...shipping, city: e.target.value })}
								/>
							</li>
							{/* <label className="validation_text" style={{ justifyContent: 'center' }}>
							{city_validations}
						</label> */}
							<li>
								<label htmlFor="state">State</label>
								<input
									type="text"
									value={shipping.state}
									name="state"
									id="state"
									onChange={(e) => set_shipping({ ...shipping, state: e.target.value })}
								/>
							</li>
							{/* <label className="validation_text" style={{ justifyContent: 'center' }}>
							{state_validations}
						</label> */}
							<li>
								<label htmlFor="postalCode">Postal Code</label>
								<input
									type="text"
									value={shipping.postalCode}
									name="postalCode"
									id="postalCode"
									onChange={(e) => set_shipping({ ...shipping, postalCode: e.target.value })}
								/>
							</li>
							{/* <label className="validation_text" style={{ justifyContent: 'center' }}>
							{postal_code_validations}
						</label> */}
							{loading ? (
								<div>Loading...</div>
							) : (
								<div>
									<li>
										<label htmlFor="international">International</label>
										<input
											type="checkbox"
											name="international"
											// defaultChecked={international ? 'checked' : 'unchecked'}
											defaultValue={international}
											defaultChecked={international}
											value={shipping.international}
											id="international"
											onChange={(e) => {
												setInternational(e.target.checked);
											}}
										/>
									</li>
									{international && (
										<li>
											<label htmlFor="country">Country</label>
											<input
												type="text"
												value={shipping.country}
												name="country"
												id="country"
												onChange={(e) => set_shipping({ ...shipping, country: e.target.value })}
											/>
										</li>
									)}
								</div>
							)}

							{/* <label className="validation_text" style={{ justifyContent: 'center' }}>
							{country_validations}
						</label> */}
							<li>
								<button type="submit" className="btn primary">
									Update
								</button>
							</li>
							<li>
								<Link to="/secure/account/profile">
									<button type="button" className="btn secondary w-100per">
										Cancel
									</button>
								</Link>
							</li>
						</ul>
					</form>
				</div>
			</div>
		</div>
	);
};

export default EditProfilePage;
