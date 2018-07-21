import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { notification, Icon } from 'antd';
import { statusSelector } from '../auth/ducks';

const style = {
  padding: 10,
  fontSize: 12,
};

class StatusInfo extends Component {

  componentDidMount() {
    notification.config({
      placement: 'bottomRight',
      bottom: 50,
      duration: 3,
    });
  }

  render() {
    const { status } = this.props;
    return (
      <div>
        {status === 'auth_request' && notification.info({
          message: 'Авторизация...',
          style,
        })}
        {status === 'auth_success' && notification.success({
          message: 'Авторизация выполнена успешно',
          style,
        })}
        {status === 'auth_error' && notification.error({
          message: 'Ошибка авторизации',
          style,
        })}
        {status === 'load_user_request' && notification.info({
          message: 'Синхронизация...',
          style,
          icon: <Icon type="loading" />,
        })}
        {status === 'register_request' && notification.info({
          message: 'Регистрация...',
          style,
        })}
        {status === 'register_success' && notification.success({
          message: 'Регистрация выполнена успешно',
          description: 'Мы отправили вам письмо для подтверждения электронной почты.',
          style,
        })}
        {status === 'register_error' && notification.error({
          message: 'Ошибка при регистрации',
          description: 'Проверьте данные и попробуйте еще раз.',
          style,
        })}
        {status === 'change_user_request' && notification.info({
          message: 'Изменение данных',
          style,
          icon: <Icon type="loading" />,
        })}
        {status === 'change_user_success' && notification.success({
          message: 'Изменения сохранены',
          style,
        })}
        {status === 'change_user_error' && notification.error({
          message: 'Ошибка при изменении данных',
          description: 'Проверьте данные и попробуйте еще раз.',
          style,
        })}

      </div>
    );
  }
}

StatusInfo.defaultProps = {
  status: '',
};

StatusInfo.propTypes = {
  status: PropTypes.string,
};

const mapStatetoProps = state => ({
  status: statusSelector(state),
});

export default connect(mapStatetoProps)(StatusInfo);
