import {
  select,
  put,
  call,
  takeEvery,
  all,
} from 'redux-saga/effects';
import * as types from './types';
import * as actions from './actions';
import { tokenSelector } from './selectors';
import { setCookie, getCookie, deleteCookie } from './utils';
import {
  verifyToken,
  updateToken,
  fetchLoginUser,
  fetchUserData,
  fetchRegisterUser,
} from './api';


// Проверка, есть ли токен в куках, если есть - проверка и обновление
export function* checkUserSaga() {
  const token = yield select(tokenSelector);
  if (!token) {
    const cookieToken = yield call(getCookie, 'token');
    if (cookieToken) {
      try {
        const resp = yield call(verifyToken, cookieToken);
        if (resp.success) {
          const newToken = yield call(updateToken, cookieToken);
          yield call(setCookie, 'token', newToken);
          yield put(actions.authSuccess(newToken));
        } else {
          yield call(deleteCookie, 'token');
          yield put(actions.logoutUser());
        }
      } catch (e) {
        yield put(actions.logoutUser());
      }
    }
  }
}

export function* loginUserSaga(action) {
  yield put(actions.authRequest());
  try {
    const resp = yield call(fetchLoginUser, action.payload);
    if (resp.success) {
      yield call(setCookie, 'token', resp.data.token);
      yield put(actions.authSuccess(resp.data.token));
    } else {
      yield put(actions.authError(resp.errors));
    }
  } catch (e) {
    yield put(actions.authError(e));
  }
}

export function* loadUserDataSaga() {
  yield put(actions.loadUserRequest());
  const token = yield select(tokenSelector);
  try {
    const resp = yield call(fetchUserData, token);
    if (resp.success) {
      yield put(actions.loadUserSuccess(resp.data));
    } else {
      yield put(actions.loadUserError(resp.errors));
    }
  } catch (e) {
    yield put(actions.loadUserError(e));
  }
}

export function* logoutUserSaga() {
  yield call(deleteCookie, 'token');
  yield put(actions.logoutUserSuccess());
}

export function* registerUserSaga(action) {
  yield put(actions.registerRequest());
  try {
    const resp = yield call(fetchRegisterUser, action.payload);
    if (resp.success) {
      yield put(actions.registerSuccess());
    } else {
      yield put(actions.registerError(resp.errors));
    }
  } catch (e) {
    yield put(actions.registerError(e));
  }
}

export function* watchUserSaga() {
  yield all([
    takeEvery(types.CHECK_USER_AUTH, checkUserSaga),
    takeEvery(types.LOGIN_USER, loginUserSaga),
    takeEvery(types.AUTH_SUCCESS, loadUserDataSaga),
    takeEvery(types.LOGOUT, logoutUserSaga),
    takeEvery(types.REGISTER_USER, registerUserSaga),
  ]);
}
