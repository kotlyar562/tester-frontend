import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { notification, Icon } from 'antd';
import { statusSelector, errorsSelector } from '../auth/ducks';

const style = {
  padding: 10,
  fontSize: 12,
};

class StatusInfo extends Component {
  componentDidMount() {
    notification.config({
      placement: 'bottomRight',
      bottom: 20,
    });
  }

  componentDidUpdate(prevProps) {
    const { status, errors } = this.props;
    const error = errors && Object.values(errors).join('\n');
    const loadingIcon = <Icon type="loading" />;
    if (status !== prevProps.status) {
      if (status === 'auth_request') {
        this.showNotification('info', 'Авторизация...');
      } else if (status === 'auth_success') {
        this.showNotification('success', 'Авторизация выполнена успешно');
      } else if (status === 'auth_error') {
        this.showNotification('error', 'Ошибка авторизации', error);
      } else if (status === 'load_user_request') {
        this.showNotification('info', 'Загрузка...', '', loadingIcon);
      } else if (status === 'register_request') {
        this.showNotification('info', 'Регистрация...', '', loadingIcon);
      } else if (status === 'register_success') {
        this.showNotification(
          'success',
          'Регистрация выполнена успешно',
          'Мы отправили вам письмо для подтверждения электронной почты.',
        );
      } else if (status === 'register_error') {
        this.showNotification('error', 'Ошибка при регистрации', error);
      } else if (status === 'change_user_request') {
        this.showNotification('info', 'Изменяем данные...', '', loadingIcon);
      } else if (status === 'change_user_success') {
        this.showNotification('success', 'Изменения сохранены');
      } else if (status === 'change_user_error') {
        this.showNotification('error', 'Ошибка при изменении данных', error);
      } else if (status === 'change_password_request') {
        this.showNotification('info', 'Изменяем пароль...', '', loadingIcon);
      } else if (status === 'change_password_success') {
        this.showNotification('success', 'Пароль успешно изменен');
      } else if (status === 'change_password_error') {
        this.showNotification('error', 'Ошибка при изменении пароля', error);
      } else if (status === 'activate_user_request') {
        this.showNotification('info', 'Активация...', '', loadingIcon);
      } else if (status === 'activate_user_success') {
        this.showNotification('success', 'Активация выполнена');
      } else if (status === 'activate_user_error') {
        this.showNotification('error', 'Ошибка при активации', error);
      } else if (status === 'reset_password_request') {
        this.showNotification('info', 'Запрос...', '', loadingIcon);
      } else if (status === 'reset_password_success') {
        this.showNotification('success', 'Запрос выполнен успешно');
      } else if (status === 'reset_password_error') {
        this.showNotification('error', 'Ошибка при сбросе пароля', error);
      } else if (status === 'reset_password_confirm_request') {
        this.showNotification('info', 'Запрос...', '', loadingIcon);
      } else if (status === 'reset_password_confirm_success') {
        this.showNotification('success', 'Новый пароль установлен');
      } else if (status === 'reset_password_confirm_error') {
        this.showNotification('error', 'Новый пароль не установлен', error);
      }
    }
  }

  showNotification = (type, message, description, icon) => {
    notification[type]({
      message,
      description,
      icon,
      style,
    });
  }

  render() {
    return <div />;
  }
}

StatusInfo.defaultProps = {
  status: '',
  errors: '',
};

StatusInfo.propTypes = {
  status: PropTypes.string,
  errors: PropTypes.object,
};

const mapStatetoProps = state => ({
  status: statusSelector(state),
  errors: errorsSelector(state),
});

export default connect(mapStatetoProps)(StatusInfo);
