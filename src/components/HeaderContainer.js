import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderComponent from './HeaderComponent';
import UserProvider from '../providers';
import { logoutUser } from '../auth/ducks';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: '',
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
        {auth => (
          <HeaderComponent
            {...this.state}
            user={auth.user}
            logout={this.props.logoutUser}
            changeMenu={this.changeActiveMenu}
          />)
         }
      </UserProvider.Consumer>
    );
  }
}

export default connect(null, { logoutUser })(Header);
