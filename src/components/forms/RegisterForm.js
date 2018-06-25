import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
  Input,
  Checkbox,
  Divider,
  Icon,
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

  render() {
    const { form, submitForm } = { ...this.props };
    const { getFieldDecorator } = { ...form };
    return (
      <Form onSubmit={submitForm} layout="vertical">
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
        <Divider dashed />
        <Button type="primary" htmlType="submit">
          Заригистрироваться
        </Button>
      </Form>
    );
  }
}


export default Form.create()(RegisterForm);
