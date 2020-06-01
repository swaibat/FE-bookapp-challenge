import { combineReducers } from 'redux';
import { LoginReducer, RegisterReducer } from './auth.reducer';
import { BooksReducer, bookCreate, bookDelete, bookEdit, getBook } from './book.reducer';

const allReducers = combineReducers({
	LoginReducer,
	RegisterReducer,
	BooksReducer,
	bookCreate,
	bookDelete,
	bookEdit,
	getBook,
});

export default allReducers;
