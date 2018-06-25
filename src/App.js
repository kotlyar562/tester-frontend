import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Layout } from 'antd';
import './App.css';
import UserProvider from './providers';
import Header from './components/HeaderContainer';
import Home from './home/HomeContainer';
import Bases from './bases/BasesContainer';
import UserContainer from './user/UserContainer';

const user = { name: 'Andre Kotlin', email: 'kotlyar562@gmail.com' };

const App = () => (
  <Router>
    <UserProvider.Provider value={user}>
      <Layout>
        <Header />
        <Layout.Content>
          <Route exact path="/" component={Home} />
          <Route path="/bases" component={Bases} />
          <Route path="/user" component={UserContainer} />
        </Layout.Content>
      </Layout>
    </UserProvider.Provider>
  </Router>
);

export default App;
