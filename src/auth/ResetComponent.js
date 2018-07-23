import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Spin,
} from 'antd';
import ResetPasswordForm from '../components/forms/ResetPasswordForm';
import SuccessPage from './SuccessPage';


const ResetComponent = (props) => {
  const { auth, resetPassword } = props;
  if (auth && auth.token) return <SuccessPage title="Вы авторизованы!" buttons />;
  if (auth.status === 'reset_password_success') {
    return (
      <SuccessPage
        title="Письмо оправлено"
        description="Чтобы установить новый пароль, пройдите по ссылке, отправленной вам в письме."
      />
    );
  }
  return (
    <Row>
      <Col
        xs={24}
        sm={24}
        md={{ span: 6, offset: 9 }}
        lg={{ span: 6, offset: 9 }}
        xl={{ span: 6, offset: 9 }}
        xxl={{ span: 6, offset: 9 }}
      >
        <h2 className="headline">
          Сброс пароля
        </h2>
        <Spin
          wrapperClassName="spin_transparent"
          tip="Авторизация..."
          spinning={auth.status === 'reset_password_request'}
          delay={500}
        >
          <ResetPasswordForm submitForm={resetPassword} />
        </Spin>
      </Col>
    </Row>
  );
};


ResetComponent.defaulProps = {
  auth: {},
  resetPassword: null,
};

ResetComponent.propTypes = {
  auth: PropTypes.object,
  resetPassword: PropTypes.func.isRequired,
};

export default ResetComponent;
