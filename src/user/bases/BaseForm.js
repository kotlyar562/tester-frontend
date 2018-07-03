import React, { Component } from 'react';
import {
  Button,
  Form,
  Input,
  Checkbox,
} from 'antd';

const FormItem = Form.Item;


class BaseForm extends Component {
  checkAndSubmit = (e) => {
    const {
      form,
      base,
      handleChange,
      handleAdd,
    } = { ...this.props };
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        if (base) {
          handleChange(values);
        } else {
          handleAdd(values);
        }
      }
    });
  }

  render() {
    const {
      base,
      form,
      cancelClick,
    } = { ...this.props };
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
          label="Название"
        >
          {getFieldDecorator('title', {
            rules: [{
              required: true, message: 'Это обязательное поле!',
            }],
            initialValue: base && base.title,
          })(
            <Input type="text" placeholder="Название" />,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Класс"
        >
          {getFieldDecorator('klass', {
            initialValue: base && base.klass,
          })(
            <Input type="text" placeholder="Класс" />,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Предмет"
        >
          {getFieldDecorator('discipline', {
            initialValue: base && base.discipline,
          })(
            <Input type="text" placeholder="Учебный предмет" />,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Описание"
        >
          {getFieldDecorator('description', {
            initialValue: base && base.description,
          })(
            <Input.TextArea rows={4} placeholder="Описание" />,
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('publik', {
            valuePropName: 'checked',
            initialValue: base && base.publik,
          })(
            <Checkbox>
              Разрешить другим пользователям копировать базу себе
            </Checkbox>,
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

export default Form.create()(BaseForm);
