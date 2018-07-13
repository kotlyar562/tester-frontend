import authReducer from './reducers';


export {
  loginUser,
  logoutUser,
  checkUserAuth,
  registerUser,
} from './actions';

export { authSelector } from './selectors';

export default authReducer;
