import axios from 'axios';

export const pay = async (total: number) => {
	console.log('pre');
	const data = await axios.post(
		'http://localhost:3005/payRegistration?total=' + total
	);
	console.log(data);
	return data;
};
