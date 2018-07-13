import { Record, Map } from 'immutable';
import * as types from './types';


export const InitialState = Record({
  token: null,
  user: null,
  status: null,
  errors: null,
});

export default function (state = new InitialState(), action) {
  switch (action.type) {
    case types.AUTH_REQUEST:
      return state.set('status', 'auth_request').set('errors', null);
    case types.AUTH_SUCCESS:
      return state.merge({ status: 'auth_success', token: action.token, errors: null });
    case types.AUTH_ERROR:
      return state.set('status', 'auth_error').set('errors', Map(action.errors));

    case types.LOAD_USERINFO_REQUEST:
      return state.set('status', 'load_user_request').set('errors', null);
    case types.LOAD_USERINFO_SUCCESS:
      return state.merge({ status: 'load_user_success', user: action.userInfo, errors: null });
    case types.LOAD_USERINFO_ERROR:
      return state.set('status', 'load_user_error').set('errors', Map(action.errors));

    case types.REGISTER_REQUEST:
      return state.set('status', 'register_request').set('errors', null);
    case types.REGISTER_SUCCESS:
      return state.set('status', 'register_success').set('errors', null);
    case types.REGISTER_ERROR:
      return state.set('status', 'register_error').set('errors', Map(action.errors));

    case types.LOGOUT_SUCCESS:
      return new InitialState();
    default:
      return state;
  }
}
