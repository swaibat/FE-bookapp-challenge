import constant from '../constants';

const initialState = {
	pending: false,
	payload: null,
	error: null,
};

export const BooksReducer = (state = initialState, action) => {
	switch (action.type) {
		case constant.BOOKS_PENDING:
			return { ...state, pending: true };
		case constant.BOOKS_SUCCESS:
			return { ...state, payload: action.payload, pending: false };
		case constant.BOOKS_ERROR:
			return { ...state, error: action.error, pending: false };
		default:
			return state;
	}
};

export const getBook = (state = initialState, action) => {
	switch (action.type) {
		case constant.BOOK_GET_PENDING:
			return { ...state, pending: true };
		case constant.BOOK_GET_SUCCESS:
			return { ...state, payload: action.payload, pending: false };
		case constant.BOOK_GET_ERROR:
			return { ...state, error: action.error, pending: false };
		default:
			return state;
	}
};

export const bookCreate = (state = initialState, action) => {
	switch (action.type) {
		case constant.BOOK_CREATE_PENDING:
			return { ...state, pending: true };
		case constant.BOOK_CREATE_SUCCESS:
			return { ...state, payload: action.payload, pending: false };
		case constant.BOOK_CREATE_ERROR:
			return { ...state, error: action.error, pending: false };
		default:
			return state;
	}
};

export const bookEdit = (state = initialState, action) => {
	switch (action.type) {
		case constant.BOOK_EDIT_PENDING:
			return { ...state, pending: true };
		case constant.BOOK_EDIT_SUCCESS:
			return { ...state, payload: action.payload, pending: false };
		case constant.BOOK_EDIT_ERROR:
			return { ...state, error: action.error, pending: false };
		default:
			return state;
	}
};

export const bookDelete = (state = initialState, action) => {
	switch (action.type) {
		case constant.BOOK_DELETE_PENDING:
			return { ...state, pending: true };
		case constant.BOOK_DELETE_SUCCESS:
			return { ...state, payload: action.payload, pending: false };
		case constant.BOOK_DELETE_ERROR:
			return { ...state, error: action.error, pending: false };
		default:
			return state;
	}
};
