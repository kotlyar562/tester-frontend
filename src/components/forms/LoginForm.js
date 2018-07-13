import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
  Input,
  Divider,
  Icon,
} from 'antd';

const FormItem = Form.Item;

const styles = {
  iconPrefix: {
    color: 'rgba(0,0,0,.25)',
  },
};

class LoginForm extends Component {
  checkAndSubmit = (e) => {
    const { form, submitForm } = this.props;
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        submitForm(values.email, values.password);
      }
    });
  }

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form layout="vertical">
        <FormItem label="Электронный адрес">
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'Введите корректный email!',
            },
            {
              required: true, message: 'Это обязательное поле!',
            }],
          })(
            <Input type="email" prefix={<Icon type="mail" style={styles.iconPrefix} />} placeholder="Email" />,
          )}
        </FormItem>
        <FormItem label="Пароль">
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Это обязательное поле!',
            }],
          })(
            <Input prefix={<Icon type="lock" style={styles.iconPrefix} />} type="password" placeholder="Пароль" />,
          )}
        </FormItem>
        <Button type="primary" htmlType="submit" onClick={this.checkAndSubmit}>
          Вход
        </Button>
        <Link to="/auth/register">
          <Button type="default">
            Регистрация
          </Button>
        </Link>
        <Divider />
      </Form>
    );
  }
}


export default Form.create()(LoginForm);
