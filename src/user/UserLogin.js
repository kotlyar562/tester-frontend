import React from 'react';
import { Row, Col } from 'antd';
import LoginForm from '../components/forms/LoginForm';

const UserLogin = () => (
  <Row>
    <Col
      xs={24}
      sm={24}
      md={{ span: 12, offset: 6 }}
      lg={{ span: 12, offset: 6 }}
      xl={{ span: 6, offset: 9 }}
    >
      <LoginForm />
    </Col>
  </Row>
);


export default UserLogin;
