import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import UserProvider from '../providers';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';
import { loginUser, checkUserAuth, registerUser } from './ducks';


const AuthContainer = (props) => {
  return (
    <UserProvider.Consumer>
      {auth => (
        <div>
          <Route
            path="/auth/login"
            render={() => <LoginComponent auth={auth} loginUser={props.loginUser} />}
          />
          <Route
            path="/auth/register"
            render={() => <RegisterComponent auth={auth} registerUser={props.registerUser} />}
          />
        </div>)
      }
    </UserProvider.Consumer>
  );
};


export default connect(
  null,
  { loginUser, registerUser, checkUserAuth },
)(AuthContainer);
