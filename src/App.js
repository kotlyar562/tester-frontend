import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import './App.css';
import Header from './components/HeaderContainer';
import HomeContainer from './home/HomeContainer';
import BasesContainer from './bases/BasesContainer';
import UserContainer from './user/UserContainer';
import AuthContainer from './auth/AuthContainer';
import StatusInfo from './components/StatusInfo';
import { checkUserAuth } from './auth/ducks';


class App extends Component {
  componentDidMount() {
    this.props.checkUserAuth();
  }

  render() {
    return (
      <Layout>
        <Header />
        <Layout.Content>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/bases" component={BasesContainer} />
          <Route path="/user" component={UserContainer} />
          <Route path="/auth" component={AuthContainer} />
        </Layout.Content>
        <StatusInfo />
      </Layout>
    );
  }
}

export default withRouter(connect(null, { checkUserAuth })(App));
