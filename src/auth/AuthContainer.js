import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';
import ActivateComponent from './ActivateComponent';
import {
  loginUser,
  checkUserAuth,
  registerUser,
  activateUser,
  authSelector,
} from './ducks';


const AuthContainer = props => (
  <div>
    <Route
      path="/auth/login"
      render={() => <LoginComponent auth={props.auth} loginUser={props.loginUser} />}
    />
    <Route
      exact
      path="/auth/register"
      render={() => <RegisterComponent auth={props.auth} registerUser={props.registerUser} />}
    />
    <Route
      path="/auth/register/activate/:uid/:token"
      render={prop => (
        <ActivateComponent
          {...prop}
          auth={props.auth}
          activateUser={props.activateUser}
        />)
      }
    />
  </div>
);


const mapStateToProps = state => ({
  auth: authSelector(state),
});

export default connect(
  mapStateToProps,
  {
    loginUser,
    registerUser,
    checkUserAuth,
    activateUser,
  },
)(AuthContainer);
