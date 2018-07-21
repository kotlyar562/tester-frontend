import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserView from './UserComponent';
import { loginUser, authSelector } from '../auth/ducks';


class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSider: 'dashboard',
      breadcrumbs: [{ text: 'Панель управления', link: '/user' }],
    };
  }

  changeBreadcrumbs = (level, text, link) => {
    const { breadcrumbs } = { ...this.state };
    breadcrumbs[level] = { text, link };
    this.setState({
      breadcrumbs,
    });
  };

  changeActiveSider = (value) => {
    this.setState({
      activeSider: value,
    });
  };

  render() {
    const { auth } = this.props;
    return (
      <UserView
        auth={auth}
        changeActiveSider={this.changeActiveSider}
        changeBreadcrumbs={this.changeBreadcrumbs}
        loginUser={this.props.loginUser}
        {...this.state}
      />
    );
  }
}

const mapStateToProps = state => ({
  auth: authSelector(state),
});

export default connect(mapStateToProps, { loginUser })(UserContainer);
