import axios from 'axios';

export const getAgencyUrlSuccessfullRegistration = async () => {
	return await axios.get(
		'http://localhost:5000/agency-url-success-registration'
	);
};
