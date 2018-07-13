import { Map } from 'immutable';
import * as actions from '../actions';
import reducer, { InitialState } from '../reducers';


describe('REDUCERS for user auth', () => {
  const defaultState = new InitialState();
  it('default reducer', () => {
    expect(reducer(defaultState, { type: 'NO_EXISTS_TYPE' })).toEqual(defaultState);
  });

  const authRequestState = defaultState.set('status', 'auth_request');
  it('auth request reducer', () => {
    expect(reducer(defaultState, actions.authRequest())).toEqual(authRequestState);
  });

  const authSuccesState = authRequestState.merge({ token: 'token', status: 'auth_success' });
  it('auth success reducer', () => {
    expect(reducer(defaultState, actions.authSuccess('token'))).toEqual(authSuccesState);
  });

  const authErrors = {
    password: ['Это поле не может быть пустым.'],
    email: ['Это поле не может быть пустым.'],
  };
  const authErrorState = authRequestState.set('status', 'auth_error')
    .set('errors', Map(authErrors));
  it('auth error reducer', () => {
    expect(reducer(authRequestState, actions.authError(authErrors))).toEqual(authErrorState);
  });

  it('auth request after error', () => {
    expect(reducer(authErrorState, actions.authRequest())).toEqual(authRequestState);
  });

  it('auth success and errors together', () => {
    expect(reducer(authErrorState, actions.authSuccess('token'))).toEqual(authSuccesState);
  });
});


describe('REDUCERS for load user data', () => {
  const defaultState = new InitialState();
  const requestState = defaultState.set('status', 'load_user_request');
  it('request', () => {
    expect(reducer(defaultState, actions.loadUserRequest())).toEqual(requestState);
  });

  const userData = { email: 'test@test.ru', password: '123456' };
  const successState = requestState.merge({
    status: 'load_user_success',
    user: userData,
    errors: null,
  });
  it('success', () => {
    expect(reducer(requestState, actions.loadUserSuccess(userData))).toEqual(successState);
  });

  const errors = {
    wrong: ['Неправильные данные.'],
  };
  const errorLoadingState = requestState.set('status', 'load_user_error').set('errors', Map(errors));
  it('error', () => {
    expect(reducer(requestState, actions.loadUserError(errors))).toEqual(errorLoadingState);
  });
});


describe('REDUCERS for user register', () => {
  const defaultState = new InitialState();
  const requestState = defaultState.set('status', 'register_request');
  it('request', () => {
    expect(reducer(defaultState, actions.registerRequest())).toEqual(requestState);
  });

  const successState = requestState.set('status', 'register_success');
  it('success', () => {
    expect(reducer(requestState, actions.registerSuccess())).toEqual(successState);
  });

  const registerErrors = {
    password: ['Это поле не может быть пустым.'],
    email: ['Это поле не может быть пустым.'],
  };
  const errorState = requestState.set('status', 'register_error').set('errors', Map(registerErrors));
  it('error', () => {
    expect(reducer(requestState, actions.registerError(registerErrors))).toEqual(errorState);
  });
});

describe('REDUCERS for logout user', () => {
  it('logout', () => {
    const defaultState = new InitialState();
    const userState = defaultState.set('token', 'valid.user.token');
    expect(reducer(userState, actions.logoutUserSuccess())).toEqual(defaultState);
  });
});
/*
it('', () => {
  expect().toEqual()
});
*/
