import constant from '../constants';

const initialState = {
	pending: false,
	payload: null,
	error: null,
};

export const LoginReducer = (state = initialState, action) => {
	switch (action.type) {
		case constant.LOGIN_PENDING:
			return { ...state, pending: true };
		case constant.LOGIN_SUCCESS:
			return { ...state, payload: action.payload, pending: false };
		case constant.LOGIN_ERROR:
			return { ...state, error: action.error, pending: false };
		default:
			return state;
	}
};

export const RegisterReducer = (state = initialState, action) => {
	switch (action.type) {
		case constant.REGISTER_PENDING:
			return { ...state, pending: true };
		case constant.REGISTER_SUCCESS:
			return { ...state, payload: action.payload, pending: false };
		case constant.REGISTER_ERROR:
			return { ...state, error: action.error, pending: false };
		default:
			return state;
	}
};
