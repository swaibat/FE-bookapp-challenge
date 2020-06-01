import constant from '../constants';
import Api from '../../Api/index';

export const login = async payload => {
	try {
		const { data } = await Api.loginUser(payload);
		localStorage.setItem('bookapp_token', data.data.token);
		return { type: constant.LOGIN_SUCCESS, payload: data };
	} catch (error) {
		return { type: constant.LOGIN_ERROR, error: error.response.data };
	}
};

export const register = async payload => {
	try {
		const { data } = await Api.register(payload);
		return { type: constant.REGISTER_SUCCESS, payload: data };
	} catch (error) {
		return { type: constant.REGISTER_ERROR, error: error.response.data };
	}
};
