import axios from 'axios';
const api = 'http://localhost:5000';
export const getAgencyUrlSuccessfullRegistration = async (
	paymentId: string
) => {
	return await axios.get(
		`${api}/agency-url-success-registration?paymentId=${paymentId}`
	);
};
export const getAgencyUrlCancelPayment = async (paymentId: string) => {
	console.log(paymentId);
	return await axios.get(
		`${api}/agency-url-cancel-payment?paymentId=${paymentId}`
	);
};
export const getAgencyUrlErrorPayment = async (paymentId: string) => {
	return await axios.get(
		`${api}/agency-url-error-payment?paymentId=${paymentId}`
	);
};
export const getAmount = async (payment_id: string) => {
	return await axios.get(`${api}/get-amount?payment_id=${payment_id}`);
};
