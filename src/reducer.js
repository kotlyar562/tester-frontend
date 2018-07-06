import { combineReducers } from 'redux';
import authReducer from './auth/ducks';

const reducer = combineReducers({
  auth: authReducer,
});

export default reducer;
