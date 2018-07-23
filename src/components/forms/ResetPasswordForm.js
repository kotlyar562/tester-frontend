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

class ResetPasswordForm extends Component {
  checkAndSubmit = (e) => {
    const { form, submitForm } = this.props;
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        submitForm(values.email);
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
              type: 'email', message: 'Введите ваш email!',
            },
            {
              required: true, message: 'Это обязательное поле!',
            }],
          })(
            <Input type="email" prefix={<Icon type="mail" style={styles.iconPrefix} />} placeholder="Email" />,
          )}
        </FormItem>
        <Button type="primary" htmlType="submit" onClick={this.checkAndSubmit}>
          Отправить
        </Button>
        <Divider />
      </Form>
    );
  }
}


export default Form.create()(ResetPasswordForm);
