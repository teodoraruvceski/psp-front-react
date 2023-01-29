import axios from 'axios';
const api = 'http://localhost:5000';
export const getAgencyUrlSuccessfullRegistration = async () => {
	return await axios.get(`${api}/agency-url-success-registration`);
};
export const getAmount = async (payment_id: string) => {
	return await axios.get(`${api}/get-amount?payment_id=${payment_id}`);
};
