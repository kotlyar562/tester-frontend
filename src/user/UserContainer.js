import React, { Component } from 'react';
import UserProvider from '../providers';
import UserView from './UserComponent';


class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSider: '',
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

  siderMenuClick = (e) => {
    this.setState({
      activeSider: e.key,
    });
  };

  render() {
    return (
      <UserProvider.Consumer>
        {user => (
          <UserView
            user={user}
            menuClick={this.siderMenuClick}
            changeBreadcrumbs={this.changeBreadcrumbs}
            {...this.state}
          />)
        }
      </UserProvider.Consumer>
    );
  }
}

export default UserContainer;
