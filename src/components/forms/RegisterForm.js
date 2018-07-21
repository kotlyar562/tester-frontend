import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
  Input,
  Checkbox,
  Divider,
  Icon,
  Alert,
} from 'antd';

const FormItem = Form.Item;

const styles = {
  iconPrefix: {
    color: 'rgba(0,0,0,.25)',
  },
};

class RegisterForm extends Component {
  checkPassword = (rule, value, callback) => {
    const { form } = { ...this.props };
    if (value && value !== form.getFieldValue('password')) {
      callback('Введенные пароли не совпадают!');
    } else {
      callback();
    }
  };

  checkAgreement = (rule, value, callback) => {
    if (value) {
      callback();
    } else {
      callback('Для регистрации на сайте вы должны согласиться с пользовательским соглашением!');
    }
  };

  checkAndSubmit = (e) => {
    const { form, registerUser } = this.props;
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        registerUser(values.email, values.password);
      }
    });
  }

  render() {
    const { form, auth } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form layout="vertical">
        <FormItem label="Адрес электронной почты ">
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'Введите корректный email!',
            },
            {
              required: true, message: 'Это обязательное поле!',
            }],
          })(
            <div>
              <Input type="email" name="email" prefix={<Icon type="mail" style={styles.iconPrefix} />} placeholder="Email" />
              {auth.errors && auth.errors.get('email') && auth.errors.get('email').map(
                (item, n) => <Alert key={'alerte'+n} message={item} type="error" />
              )}
            </div>,
          )}
        </FormItem>
        <FormItem label="Пароль">
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Это обязательное поле!',
            }],
          })(
            <div>
              <Input prefix={<Icon type="lock" style={styles.iconPrefix} />} type="password" placeholder="Пароль" />
              {auth.errors && auth.errors.get('password') && auth.errors.get('password').map(
                (item, n) => <Alert key={'alertp'+n} message={item} type="error" />
              )}
            </div>,
          )}
        </FormItem>
        <FormItem label="Повторите пароль">
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Это обязательное поле!',
            }, {
              validator: this.checkPassword,
            }],
          })(
            <Input prefix={<Icon type="lock" style={styles.iconPrefix} />} type="password" placeholder="Повторите пароль" />,
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('agreement', {
            rules: [{
              validator: this.checkAgreement,
            }],
            valuePropName: 'checked',
          })(
            <Checkbox>
              Я согласен с
              <Link to="/" target="_blank">
                пользовательским соглашением
              </Link>
            </Checkbox>,
          )}
        </FormItem>
        <Button type="primary" htmlType="submit" onClick={this.checkAndSubmit}>
          Зарегистрироваться
        </Button>
        <Link to="/auth/login">
          <Button type="default">
            Вход
          </Button>
        </Link>
        <Divider />
      </Form>
    );
  }
}


export default Form.create()(RegisterForm);
