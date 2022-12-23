import axios from 'axios';

export const pay = async (total: number) => {
	return await axios.get(
		'https://localhost:5001/api/home/start-paypal-payment?total=' + total
	);
};
export const capturePayPalPayment = async (payerId: string, token: string) => {
	return axios.get(
		'https://localhost:5001/api/home/capture-paypal-payment?payerId=' +
			payerId +
			'&token=' +
			token
	);
};
