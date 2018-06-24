import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Layout } from 'antd';
import './App.css';
import UserProvider from './providers';
import Header from './components/HeaderContainer';
import Footer from './components/Footer';
import Home from './home/HomeContainer';
import Bases from './bases/BasesContainer';

const user = { name: 'Andre Kotlin', email: 'kotlyar562@gmail.com' };

const App = () => (
  <Router>
    <UserProvider.Provider value={user}>
      <Layout>
        <Header />
        <Layout.Content>
          <Route exact path="/" component={Home} />
          <Route path="/bases" component={Bases} />
        </Layout.Content>
        <Footer />
      </Layout>
    </UserProvider.Provider>
  </Router>
);

export default App;
