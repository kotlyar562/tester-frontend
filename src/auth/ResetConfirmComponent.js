import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Alert,
  Spin,
} from 'antd';
import ResetPasswordConfirmForm from '../components/forms/ResetPasswordConfirmForm';
import SuccessPage from './SuccessPage';


const ResetConfirmComponent = (props) => {
  const { auth, resetPasswordConfirm } = props;
  const { uid, token } = props.match.params;
  if (auth && auth.token) return <SuccessPage title="Вы авторизованы!" buttons />;
  if (auth && auth.status === 'reset_password_confirm_success') {
    return (
      <SuccessPage
        title="Пароль успешно изменен"
        description="Вы можете войти на сайт с помощью нового пароля"
      />);
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
          Установка нового пароля
        </h2>
        {auth.errors && auth.errors.toArray().map(
          (item, n) => <Alert key={'alerterr'+n} message={item} type="error" />
        )}
        <Spin
          wrapperClassName="spin_transparent"
          tip="Запрос..."
          spinning={auth.status === 'reset_password_confirm_request'}
          delay={500}
        >
          <ResetPasswordConfirmForm uid={uid} token={token} submitForm={resetPasswordConfirm} />
        </Spin>
      </Col>
    </Row>
  );
};


ResetConfirmComponent.defaulProps = {
  auth: {},
  resetPasswordConfirm: null,
};

ResetConfirmComponent.propTypes = {
  auth: PropTypes.object,
  resetPasswordConfirm: PropTypes.func.isRequired,
};

export default ResetConfirmComponent;
