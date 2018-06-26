import React, { Component } from 'react';
import UserProfileComponent from './UserProfileComponent';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpening: '',
    };
  }

  componentDidMount() {
    const { changeActiveSider } = { ...this.props };
    changeActiveSider('profile');
  }

  showInfoForm = () => {
    this.setState({
      modalOpening: 'infoForm',
    });
  };

  submitInfoForm = (values) => {
    console.log(values);
  }

  showPasswordForm = () => {
    this.setState({
      modalOpening: 'passwordForm',
    });
  };

  submitPasswordForm = (values) => {
    console.log(values);
  }

  closeModal = () => {
    this.setState({
      modalOpening: '',
    });
  };

  render() {
    return (
      <UserProfileComponent
        {...this.props}
        {...this.state}
        showInfoForm={this.showInfoForm}
        submitInfoForm={this.submitInfoForm}
        showPasswordForm={this.showPasswordForm}
        submitPasswordForm={this.submitPasswordForm}
        closeModal={this.closeModal}
      />
    );
  }
}


export default UserProfile;
