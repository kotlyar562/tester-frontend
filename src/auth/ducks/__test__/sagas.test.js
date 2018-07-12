import { select, put, call } from 'redux-saga/effects';
import { checkUserSaga, loginUserSaga, registerUserSaga } from '../sagas';
import * as actions from '../actions';
import * as types from '../types';
import { tokenSelector } from '../selectors';
import { getCookie, setCookie, deleteCookie } from '../utils';
import {
  verifyToken,
  updateToken,
  fetchLoginUser,
  fetchRegisterUser,
} from '../api';


describe('SAGA check user auth test', () => {
  it('if user no authorized but exist valid token', () => {
    const saga = checkUserSaga();
    expect(saga.next().value).toEqual(select(tokenSelector));
    expect(saga.next().value).toEqual(call(getCookie, 'token'));
    const validToken = 'its.valid.token';
    expect(saga.next(validToken).value).toEqual(call(verifyToken, validToken));
    const successResponse = { success: true };
    expect(saga.next(successResponse).value).toEqual(call(updateToken, validToken));
    const newToken = 'new.valid.token';
    expect(saga.next(newToken).value).toEqual(call(setCookie, 'token', newToken));
    expect(saga.next().value).toEqual(put(actions.authSuccess(newToken)));
    expect(saga.next().done).toEqual(true);
  });

  it('if user no authorized and exist no valid token', () => {
    const saga = checkUserSaga();
    expect(saga.next().value).toEqual(select(tokenSelector));
    expect(saga.next().value).toEqual(call(getCookie, 'token'));
    const noValidToken = 'no.valid.token';
    expect(saga.next(noValidToken).value).toEqual(call(verifyToken, noValidToken));
    const wrongResponse = { success: false };
    expect(saga.next(wrongResponse).value).toEqual(call(deleteCookie, 'token'));
    expect(saga.next().value).toEqual(put(actions.logoutUser()));
    expect(saga.next().done).toEqual(true);
  });

  it('network or server error', () => {
    const saga = checkUserSaga();
    expect(saga.next().value).toEqual(select(tokenSelector));
    expect(saga.next().value).toEqual(call(getCookie, 'token'));
    const token = 'its.any.token';
    expect(saga.next(token).value).toEqual(call(verifyToken, token));
    expect(saga.throw('error').value).toEqual(put(actions.logoutUser()));
    expect(saga.next().done).toEqual(true);
  });

  it('token no exist in cookie', () => {
    const saga = checkUserSaga();
    expect(saga.next().value).toEqual(select(tokenSelector));
    expect(saga.next().value).toEqual(call(getCookie, 'token'));
    expect(saga.next().done).toEqual(true);
  });

  it('token in store', () => {
    const saga = checkUserSaga();
    expect(saga.next().value).toEqual(select(tokenSelector));
    expect(saga.next('token.exist.in_store').done).toEqual(true);
  });
});

describe('SAGA login user', () => {
  it('valid email and password', () => {
    const action = {
      type: actions.LOGIN_USER,
      payload: { email: 'test@test.ru', password: '123456' },
    };
    const saga = loginUserSaga(action);
    expect(saga.next().value).toEqual(put(actions.authRequest()));
    expect(saga.next().value).toEqual(call(fetchLoginUser, action.payload));
    const resp = { success: true, data: { token: 'token' } };
    expect(saga.next(resp).value).toEqual(call(setCookie, 'token', resp.data.token));
    expect(saga.next().value).toEqual(put(actions.authSuccess(resp.data.token)));
    expect(saga.next().done).toEqual(true);
  });
  it('no valid payload', () => {
    const action = {
      type: actions.LOGIN_USER,
      payload: { email: 'test@test.ru', password: '123' },
    };
    const errors = {
      password: ['Это поле не может быть пустым.'],
      email: ['Это поле не может быть пустым.'],
    };
    const saga = loginUserSaga(action);
    expect(saga.next().value).toEqual(put(actions.authRequest()));
    expect(saga.next().value).toEqual(call(fetchLoginUser, action.payload));
    const resp = { success: false, errors };
    expect(saga.next(resp).value).toEqual(put(actions.authError(resp.errors)));
    expect(saga.next().done).toEqual(true);
  });
  it('network/server error', () => {
    const action = {
      type: types.LOGIN_USER,
      payload: { email: 'test@test.ru', password: '123456' },
    };
    const saga = loginUserSaga(action);
    expect(saga.next().value).toEqual(put(actions.authRequest()));
    expect(saga.next().value).toEqual(call(fetchLoginUser, action.payload));
    expect(saga.throw('error').value).toEqual(put(actions.authError('error')));
    expect(saga.next().done).toEqual(true);
  });
});


describe('SAGA register user', () => {
  it('valid data', () => {
    const action = {
      type: types.REGISTER_USER,
      payload: { email: 'test@test.ru', password: '123456' },
    };
    const saga = registerUserSaga(action);
    expect(saga.next().value).toEqual(put(actions.registerRequest()));
    expect(saga.next().value).toEqual(call(fetchRegisterUser, action.payload));
    const resp = { success: true };
    expect(saga.next(resp).value).toEqual(put(actions.registerSuccess()));
    expect(saga.next().done).toEqual(true);
  });

  it('no valid data', () => {
    const action = {
      type: types.REGISTER_USER,
      payload: { email: 'test@test.ru', password: '123' },
    };
    const saga = registerUserSaga(action);
    expect(saga.next().value).toEqual(put(actions.registerRequest()));
    expect(saga.next().value).toEqual(call(fetchRegisterUser, action.payload));
    const errors = {
      password: ['Это поле не может быть пустым.'],
      email: ['Это поле не может быть пустым.'],
    };
    const resp = { success: false, errors };
    expect(saga.next(resp).value).toEqual(put(actions.registerError(resp.errors)));
    expect(saga.next().done).toEqual(true);
  });

  it('network/server error', () => {
    const action = {
      type: types.REGISTER_USER,
      payload: { email: 'test@test.ru', password: '123456' },
    };
    const saga = registerUserSaga(action);
    expect(saga.next().value).toEqual(put(actions.registerRequest()));
    expect(saga.next().value).toEqual(call(fetchRegisterUser, action.payload));
    expect(saga.throw('error').value).toEqual(put(actions.registerError('error')));
    expect(saga.next().done).toEqual(true);
  });
});
