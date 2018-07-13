import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Spin,
} from 'antd';
import RegisterForm from '../components/forms/RegisterForm';
import SuccessPage from './SuccessPage';


const RegisterComponent = (props) => {
  const { auth } = props;
  if (auth && auth.token) {
    return <SuccessPage title="Вы уже авторизованы!" buttons />;
  }
  if (auth && auth.status === 'register_success') {
    return <SuccessPage title="Вы успешно зарегистрировались." description="На вашу лектронную почту отправлено письмо для активации аккаунта" />;
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
          Регистрация
        </h2>
        <Spin
          wrapperClassName="spin_transparent"
          tip="Регистрация..."
          spinning={auth.status === 'register_request'}
          delay={500}
        >
          <RegisterForm {...props} />
        </Spin>
      </Col>
    </Row>
  );
};


RegisterComponent.defaulProps = {
  auth: {},
  registerUser: null,
};

RegisterComponent.propTypes = {
  auth: PropTypes.object,
  registerUser: PropTypes.func.isRequired,
};

export default RegisterComponent;
