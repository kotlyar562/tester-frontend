import React, { Component } from 'react';
import SuccessPage from './SuccessPage';

class ActivateComponent extends Component {
  componentDidMount() {
    const { uid, token } = this.props.match.params;
    this.props.activateUser(uid, token);
  }

  render() {
    const { auth } = this.props;
    if (auth && auth.status === 'activate_user_success') return <SuccessPage title="Активация выполнена!" buttons />;
    return (
      <div />
    );
  }
}

export default ActivateComponent;
