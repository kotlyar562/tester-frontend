import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserProfileComponent from './UserProfileComponent';
import {
  changeUser,
  changePassword,
  userSelector,
  statusSelector,
} from '../../auth/ducks';


class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpening: '',
    };
  }

  componentDidMount() {
    const { changeActiveSider } = this.props;
    changeActiveSider('profile');
  }

  showInfoForm = () => {
    this.setState({
      modalOpening: 'infoForm',
    });
  };

  submitInfoForm = (values) => {
    this.props.changeUser(values);
  }

  showPasswordForm = () => {
    this.setState({
      modalOpening: 'passwordForm',
    });
  };

  submitPasswordForm = (values) => {
    this.props.changePassword(values);
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

const mapStateToProps = state => ({
  user: userSelector(state),
  status: statusSelector(state),
});

export default connect(mapStateToProps, { changeUser, changePassword })(UserProfile);
