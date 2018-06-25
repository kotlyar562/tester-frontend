import React from 'react';
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

const UserInfoForm = (props) => {
  const {
    user,
    form,
    submitForm,
    cancelClick,
  } = { ...props };
  const helpTxt = 'При изменении адреса электронной почты его нужно будет снова подтвердить';
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
        label="Электронный адрес"
        help={helpTxt}
      >
        {getFieldDecorator('email', {
          rules: [{
            type: 'email', message: 'Введите корректный email!',
          }, {
            required: true, message: 'Это обязательное поле!',
          }],
          initialValue: user.email,
        })(
          <Input type="email" prefix={<Icon type="mail" style={styles.iconPrefix} />} placeholder="Email" />,
        )}
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="Имя"
      >
        {getFieldDecorator('first_name', {
          initialValue: user.first_name,
        })(
          <Input type="text" placeholder="Имя" />,
        )}
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="Фамилия"
      >
        {getFieldDecorator('last_name', {
          initialValue: user.last_name,
        })(
          <Input type="text" placeholder="Фамилия" />,
        )}
      </FormItem>
      <div style={{ marginLeft: '50%' }}>
        <Button type="primary" htmlType="submit" onClick={submitForm}>
          Сохранить
        </Button>
        <Button type="default" onClick={cancelClick}>
          Отмена
        </Button>
      </div>
    </Form>
  );
};

export default Form.create()(UserInfoForm);
