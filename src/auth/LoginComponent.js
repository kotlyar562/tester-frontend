import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import {
  Row,
  Col,
  Alert,
  Spin,
} from 'antd';
import LoginForm from '../components/forms/LoginForm';
import SuccessPage from './SuccessPage';


const LoginComponent = (props) => {
  const { auth, loginUser } = props;
  if (auth && auth.token) return <SuccessPage title="Вы авторизованы!" buttons />;
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
          Вход
        </h2>
        {auth.errors && auth.errors.toArray().map(
          item => <Alert key={shortid.generate()} message={item} type="error" />,
        )}
        <Spin
          wrapperClassName="spin_transparent"
          tip="Авторизация..."
          spinning={auth.status === 'auth_request'}
          delay={500}
        >
          <LoginForm submitForm={loginUser} />
        </Spin>
      </Col>
    </Row>
  );
};


LoginComponent.defaulProps = {
  loginUser: null,
};

LoginComponent.propTypes = {
  auth: PropTypes.object,
  loginUser: PropTypes.func.isRequired,
};

export default LoginComponent;
