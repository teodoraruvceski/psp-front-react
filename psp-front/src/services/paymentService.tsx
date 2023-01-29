import axios from 'axios';

export const choosePayment = async (
	total: number,
	id: string,
	route: string
) => {
	const data = await axios.post(
		`http://localhost:5000/${route}?total=` + total + '&paymentId=' + id
	);
	console.log('response:' + data);
	return data;
};
