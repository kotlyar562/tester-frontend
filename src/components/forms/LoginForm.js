import React from 'react';
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

const LoginForm = (props) => {
  const { form, submitForm } = { ...props };
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
      <FormItem>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true,
        })(
          <Checkbox>
            Запомнить меня
          </Checkbox>,
        )}
        <Divider dashed />
        <Button type="primary" htmlType="submit">
          Вход
        </Button>
      </FormItem>
    </Form>
  );
};


export default Form.create()(LoginForm);
