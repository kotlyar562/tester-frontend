import React from 'react';
import { Row, Col, Alert } from 'antd';
import LoginForm from '../components/forms/LoginForm';

const UserLogin = ({ auth, loginUser }) => (
  <Row>
    <Col
      xs={24}
      sm={24}
      md={{ span: 12, offset: 6 }}
      lg={{ span: 12, offset: 6 }}
      xl={{ span: 6, offset: 9 }}
    >
      <h2>
        Вход
      </h2>
      {auth.errors && auth.errors.toArray().map(
        (item, n) => <Alert key={'alerterr'+n} message={item} type="error" />
      )}
      <LoginForm submitForm={loginUser} />
    </Col>
  </Row>
);


export default UserLogin;
