import React, { Component } from 'react';
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

class ResetPasswordConfirmForm extends Component {
  checkPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('new_password')) {
      callback('Введенные пароли не совпадают!');
    } else {
      callback();
    }
  };

  checkAndSubmit = (e) => {
    const { form, submitForm, uid, token } = this.props;
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        submitForm({ uid, token, new_password: values.new_password });
      }
    });
  }

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form layout="vertical">
        <FormItem label="Новый пароль">
          {getFieldDecorator('new_password', {
            rules: [{
              required: true, message: 'Это обязательное поле!',
            }],
          })(
            <div>
              <Input prefix={<Icon type="lock" style={styles.iconPrefix} />} type="password" placeholder="Пароль" />
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
        <Button type="primary" htmlType="submit" onClick={this.checkAndSubmit}>
          Изменить
        </Button>
        <Divider />
      </Form>
    );
  }
}


export default Form.create()(ResetPasswordConfirmForm);
