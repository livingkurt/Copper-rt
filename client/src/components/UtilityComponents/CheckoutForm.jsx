import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';
// require('dotenv');

const Form = (props) => {
	// console.log({ props });
	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card: elements.getElement(CardElement)
		});
		console.log({ paymentMethod });
		console.log({ error });
		// props.placeOrderHandler(paymentMethod);
	};

	return (
		<form onSubmit={handleSubmit}>
			<CardElement
				options={{
					style: {
						base: {
							fontSize: '20px',
							color: 'white',
							'::placeholder': {
								color: 'white'
							}
						},
						invalid: {
							color: '#9e2146'
						}
					}
				}}
			/>
			<button type="submit" className="btn primary w-100per mb-12px" disabled={!stripe}>
				Pay for Order
			</button>
		</form>
	);
};
// console.log(process.env.REACT_APP_STRIPE_KEY);
const stripePromise = loadStripe(
	'pk_test_51I10qyEbh0KeSjPmJ1kmyHCvqYJ2BlJD3n2RklPQffxRhcX0tU6gK5YQQEJXohaCULLISsTWUkZ311uHRh3Kn81u00er2uJoB7'
);

const CheckoutForm = (props) => (
	<Elements stripe={stripePromise}>
		<Form />
	</Elements>
);

export default CheckoutForm;
