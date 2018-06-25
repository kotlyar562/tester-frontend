import React, { Component } from 'react';
import {
  Button,
  Form,
  Input,
  Icon,
} from 'antd';

const FormItem = Form.Item;

const styles = {
  iconPrefix: {
    color: 'rgba(0,0,0,.25)',
  },
};

class ChangePasswordForm extends Component {
  checkAndSubmit = (e) => {
    const { form, submitForm } = { ...this.props };
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        submitForm(values);
      }
    });
  }

  checkPassword = (rule, value, callback) => {
    const { form } = { ...this.props };
    if (value && value !== form.getFieldValue('new_password')) {
      callback('Введенные пароли не совпадают!');
    } else {
      callback();
    }
  };

  render() {
    const { form, cancelClick } = { ...this.props };
    const { getFieldDecorator } = { ...form };
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    return (
      <Form>
        <FormItem
          {...formItemLayout}
          label="Текущий пароль"
        >
          {getFieldDecorator('current_password', {
            rules: [{
              required: true, message: 'Это обязательное поле!',
            }],
          })(
            <Input type="password" prefix={<Icon type="lock" style={styles.iconPrefix} />} placeholder="Ваш пароль" />,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Новый пароль"
        >
          {getFieldDecorator('new_password', {
            rules: [{
              required: true, message: 'Это обязательное поле!',
            }],
          })(
            <Input type="password" prefix={<Icon type="lock" style={styles.iconPrefix} />} placeholder="Новый пароль" />,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Повторите пароль"
        >
          {getFieldDecorator('new_password1', {
            rules: [{
              required: true, message: 'Это обязательное поле!',
            }, {
              validator: this.checkPassword,
            }],
          })(
            <Input type="password" prefix={<Icon type="lock" style={styles.iconPrefix} />} placeholder="Повторите пароль" />,
          )}
        </FormItem>
        <div style={{ marginLeft: '50%' }}>
          <Button type="primary" htmlType="submit" style={{ marginRight: '20px' }} onClick={this.checkAndSubmit}>
            Сохранить
          </Button>
          <Button type="default" onClick={cancelClick}>
            Отмена
          </Button>
        </div>
      </Form>
    );
  }
}

export default Form.create()(ChangePasswordForm);
