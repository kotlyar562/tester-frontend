import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';
import {
  loginUser,
  checkUserAuth,
  registerUser,
  authSelector,
} from './ducks';


const AuthContainer = props => (
  <div>
    <Route
      path="/auth/login"
      render={() => <LoginComponent auth={props.auth} loginUser={props.loginUser} />}
    />
    <Route
      path="/auth/register"
      render={() => <RegisterComponent auth={props.auth} registerUser={props.registerUser} />}
    />
  </div>
);


const mapStateToProps = state => ({
  auth: authSelector(state),
});

export default connect(
  mapStateToProps,
  { loginUser, registerUser, checkUserAuth },
)(AuthContainer);
