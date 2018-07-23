import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';
import ActivateComponent from './ActivateComponent';
import ResetComponent from './ResetComponent';
import ResetConfirmComponent from './ResetConfirmComponent';
import {
  loginUser,
  checkUserAuth,
  registerUser,
  activateUser,
  authSelector,
  resetPassword,
  resetPasswordConfirm,
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
    <Route
      exact
      path="/auth/reset"
      render={() => <ResetComponent auth={props.auth} resetPassword={props.resetPassword} />}
    />
    <Route
      path="/auth/reset/confirm/:uid/:token"
      render={prop => (
        <ResetConfirmComponent
          {...prop}
          auth={props.auth}
          resetPasswordConfirm={props.resetPasswordConfirm}
        />)
      }
    />
  </div>
);

AuthContainer.propTypes = {
  auth: PropTypes.object,
  loginUser: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  checkUserAuth: PropTypes.func.isRequired,
  activateUser: PropTypes.func.isRequired,
  resetPassword: PropTypes.func.isRequired,
  resetPasswordConfirm: PropTypes.func.isRequired,
};

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
    resetPassword,
    resetPasswordConfirm,
  },
)(AuthContainer);
