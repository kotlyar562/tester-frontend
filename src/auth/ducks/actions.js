import * as types from './types';

export const authRequest = () => ({
  type: types.AUTH_REQUEST,
});

export const authSuccess = token => ({
  type: types.AUTH_SUCCESS,
  token,
});

export const authError = errors => ({
  type: types.AUTH_ERROR,
  errors,
});

export const loadUserRequest = () => ({
  type: types.LOAD_USERINFO_REQUEST,
});

export const loadUserSuccess = userInfo => ({
  type: types.LOAD_USERINFO_SUCCESS,
  userInfo,
});

export const loadUserError = errors => ({
  type: types.LOAD_USERINFO_ERROR,
  errors,
});

export const registerRequest = () => ({
  type: types.REGISTER_REQUEST,
});

export const registerSuccess = () => ({
  type: types.REGISTER_SUCCESS,
});

export const registerError = errors => ({
  type: types.REGISTER_ERROR,
  errors,
});

export const changeUserRequest = () => ({
  type: types.CHANGE_USER_REQUEST,
});

export const changeUserSuccess = payload => ({
  type: types.CHANGE_USER_SUCCESS,
  payload,
});

export const changeUserError = errors => ({
  type: types.CHANGE_USER_ERROR,
  errors,
});

export const changePasswordRequest = () => ({
  type: types.CHANGE_PASSWORD_REQUEST,
});

export const changePasswordSuccess = () => ({
  type: types.CHANGE_PASSWORD_SUCCESS,
});

export const changePasswordError = errors => ({
  type: types.CHANGE_PASSWORD_ERROR,
  errors,
});

export const activateUserRequest = () => ({
  type: types.ACTIVATE_USER_REQUEST,
});

export const activateUserSuccess = () => ({
  type: types.ACTIVATE_USER_SUCCESS,
});

export const activateUserError = errors => ({
  type: types.ACTIVATE_USER_ERROR,
  errors,
});

export const logoutUserSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});


export const changeUser = payload => ({
  type: types.CHANGE_USER,
  payload,
});

export const registerUser = (email, password) => ({
  type: types.REGISTER_USER,
  payload: { email, password },
});

export const loginUser = (email, password) => ({
  type: types.LOGIN_USER,
  payload: { email, password },
});

export const checkUserAuth = () => ({
  type: types.CHECK_USER_AUTH,
});

export const logoutUser = () => ({
  type: types.LOGOUT,
});
