import axios from 'axios';

export const paypalPayment = async (total: number, id: string) => {
	const data = await axios.post(
		'http://localhost:5000/payRegistration?total=' + total + '&paymentId=' + id
	);
	console.log('response:' + data);
	return data;
};
