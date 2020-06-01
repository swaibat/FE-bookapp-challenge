import BASE_URL from './config';
import axios from 'axios';

const apis = {
	loginUser(data) {
		return axios.post(`${BASE_URL}/users/auth/login`, data);
	},
	register(data) {
		return axios.post(`${BASE_URL}/users/auth/register`, data);
	},
};

export default apis;
