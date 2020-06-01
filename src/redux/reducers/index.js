import { combineReducers } from 'redux';
import { LoginReducer, RegisterReducer } from './auth.reducer';

const allReducers = combineReducers({
	LoginReducer,
	RegisterReducer,
});

export default allReducers;
