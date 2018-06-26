import React, { Component } from 'react';
import UserProvider from '../providers';
import UserView from './UserComponent';


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
    return (
      <UserProvider.Consumer>
        {user => (
          <UserView
            user={user}
            changeActiveSider={this.changeActiveSider}
            changeBreadcrumbs={this.changeBreadcrumbs}
            {...this.state}
          />)
        }
      </UserProvider.Consumer>
    );
  }
}

export default UserContainer;
