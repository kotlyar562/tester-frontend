import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderComponent from './HeaderComponent';
import { logoutUser, userSelector } from '../auth/ducks';

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
    const { user, logoutUser } = this.props;
    return (
      <HeaderComponent
        {...this.state}
        user={user}
        logout={logoutUser}
        changeMenu={this.changeActiveMenu}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: userSelector(state),
});

export default connect(mapStateToProps, { logoutUser })(Header);
