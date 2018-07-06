import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import './App.css';
import UserProvider from './providers';
import Header from './components/HeaderContainer';
import HomeContainer from './home/HomeContainer';
import BasesContainer from './bases/BasesContainer';
import UserContainer from './user/UserContainer';
import AuthContainer from './auth/AuthContainer';
import store from './store';
import { checkUserAuth } from './auth/ducks/sagas';
import { getAuth } from './auth/ducks';


class App extends Component {
  componentDidMount() {
    store.dispatch(checkUserAuth());
  }

  render() {
    const { auth } = { ...this.props };
    return (
      <UserProvider.Provider value={auth}>
        <Layout>
          <Header />
          <Layout.Content>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/bases" component={BasesContainer} />
            <Route path="/user" component={UserContainer} />
            <Route path="/auth" component={AuthContainer} />
          </Layout.Content>
        </Layout>
      </UserProvider.Provider>
    );
  }
}

const mapStateToProps = state => ({
  auth: getAuth(state),
});

export default withRouter(connect(mapStateToProps, { checkUserAuth })(App));
