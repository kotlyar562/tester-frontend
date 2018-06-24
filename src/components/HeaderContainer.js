import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import UserProvider from '../providers';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: 'home',
    };
  }

  changeActiveMenu = (e) => {
    this.setState({
      activeLink: e.key,
    });
  }

  render() {
    return (
      <UserProvider.Consumer>
        {user => <HeaderComponent {...this.state} user={user} changeMenu={this.changeActiveMenu} />}
      </UserProvider.Consumer>
    );
  }
}

export default Header;
