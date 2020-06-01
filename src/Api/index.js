import BASE_URL from './config';
import axios from 'axios';

const apis = {
	loginUser(data) {
		return axios.post(`${BASE_URL}/users/auth/login`, data);
	},
	register(data) {
		return axios.post(`${BASE_URL}/users/auth/register`, data);
	},
	getBooks() {
		return axios.get(`${BASE_URL}/books`);
	},
	getBook(token, id) {
		return axios.get(`${BASE_URL}/books/${id}`, {
			headers: { Authorization: token },
		});
	},
	createBook(data, token) {
		return axios.post(`${BASE_URL}/books`, data, {
			headers: { Authorization: token },
		});
	},
	editBook(data, token, id) {
		return axios.patch(`${BASE_URL}/books/${id}`, data, {
			headers: { Authorization: token },
		});
	},
	deleteBook(data, token, id) {
		return axios.delete(`${BASE_URL}/books/${id}`, {
			headers: { Authorization: token },
		});
	},
};

export default apis;
