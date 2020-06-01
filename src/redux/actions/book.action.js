import constant from '../constants';
import Api from '../../Api/index';

export const getBooks = async () => {
	try {
		const { data } = await Api.getBooks();
		return { type: constant.BOOKS_SUCCESS, payload: data };
	} catch (error) {
		return { type: constant.BOOKS_ERROR, error: error.response.data };
	}
};

export const createBook = async (payload, token) => {
	try {
		const { data } = await Api.createBook(payload, token);
		return { type: constant.BOOK_CREATE_SUCCESS, payload: data };
	} catch (error) {
		return { type: constant.BOOK_CREATE_ERROR, error: error.response.data };
	}
};

export const editBook = async (payload, token, id) => {
	try {
		const { data } = await Api.editBook(payload, token, id);
		return { type: constant.BOOK_EDIT_SUCCESS, payload: data };
	} catch (error) {
		return { type: constant.BOOK_EDIT_ERROR, error: error.response.data };
	}
};

export const deleteBook = async (payload, token, id) => {
	try {
		const { data } = await Api.deleteBook(payload, token, id);
		return { type: constant.BOOK_DELETE_SUCCESS, payload: data };
	} catch (error) {
		return { type: constant.BOOK_DELETE_ERROR, error: error.response.data };
	}
};
