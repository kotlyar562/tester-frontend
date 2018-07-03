import React from 'react';
import {
  Radio,
  Select,
  Icon,
  Row,
  Col,
  Button,
  Tooltip,
  Modal,
} from 'antd';
import BasesTableComponent from './BasesTableComponent';
import BaseForm from './BaseForm';


const UserBasesComponent = (props) => {
  const {
    listStyle,
    changeListStyle,
    activeBase,
    modalOpening,
    showAddBaseModal,
    closeModal,
    handleChange,
    handleAdd,
  } = { ...props };
  return (
    <div>
      <Row>
        <Col xs={24} sm={9} md={9} lg={9} xl={8}>
          <Select
            mode="multiple"
            placeholder="Классы: Все"
            style={{ width: '85%' }}
          >
            <Select.Option key="8 klass">
              8 класс
            </Select.Option>
            <Select.Option key="9 klass">
              9 класс
            </Select.Option>
            <Select.Option key="10 klass">
              10 класс
            </Select.Option>
          </Select>
        </Col>
        <Col xs={24} sm={9} md={9} lg={9} xl={8}>
          <Select
            mode="multiple"
            placeholder="Предметы: Все"
            style={{ width: '85%' }}
          >
            <Select.Option key="Informatik">
              Информатика
            </Select.Option>
            <Select.Option key="Math">
              Математика
            </Select.Option>
          </Select>
        </Col>
        <Col xs={24} sm={3} md={3} lg={3} xl={4}>
          <Radio.Group value={listStyle} onChange={changeListStyle}>
            <Radio.Button value="table">
              <Icon type="table" />
            </Radio.Button>
            <Radio.Button value="list">
              <Icon type="bars" />
            </Radio.Button>
            <Radio.Button value="preview">
              <Icon type="file-text" />
            </Radio.Button>
          </Radio.Group>
        </Col>
        <Col xs={24} sm={3} md={3} lg={3} xl={4}>
          <Tooltip title="Создать базу вопросов">
            <Button type="primary" shape="circle" size="large" onClick={showAddBaseModal}>
              <Icon type="plus" />
            </Button>
          </Tooltip>
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col>
          <BasesTableComponent {...props} />
        </Col>
      </Row>
      <Modal
        title="Изменить информацию"
        footer={null}
        visible={modalOpening === 'changeBase'}
        onCancel={closeModal}
      >
        <BaseForm
          base={activeBase}
          handleChange={handleChange}
          cancelClick={closeModal}
        />
      </Modal>
      <Modal
        title="Добавить базу вопросов"
        footer={null}
        visible={modalOpening === 'addBase'}
        onCancel={closeModal}
      >
        <BaseForm
          handleAdd={handleAdd}
          cancelClick={closeModal}
        />
      </Modal>
    </div>
  );
};


export default UserBasesComponent;
