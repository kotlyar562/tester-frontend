import React from 'react';
import {
  Modal,
  Row,
  Col,
  Card,
  Icon,
} from 'antd';
import UserInfoForm from '../../components/forms/UserInfoForm';
import ChangePasswordForm from '../../components/forms/ChangePasswordForm';

const styles = {
  cardItem: {
    fontSize: 36,
    color: '#aaa',
    marginRight: '10px',
    float: 'left',
  },
  cardItemtext: {
    display: 'block',
    fontSize: 16,
    paddingTop: '3px',
  },
};

const UserProfileComponent = (props) => {
  const {
    modalOpening,
    showInfoForm,
    submitInfoForm,
    showPasswordForm,
    submitPasswordForm,
    closeModal,
    user,
  } = { ...props };
  return (
    <div>
      <Row gutter={16} justify="center">
        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <Card hoverable onClick={showInfoForm}>
            <div>
              <Icon type="idcard" style={styles.cardItem} />
              <span style={styles.cardItemtext}>
                Изменить информацию о себе
              </span>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <Card hoverable onClick={showPasswordForm}>
            <Icon type="lock" style={styles.cardItem} />
            <span style={styles.cardItemtext}>
              Изменить пароль
            </span>
          </Card>
        </Col>
      </Row>
      <Modal
        title="Изменить информацию о себе"
        footer={null}
        visible={modalOpening === 'infoForm'}
        onCancel={closeModal}
      >
        <UserInfoForm user={user} submitForm={submitInfoForm} cancelClick={closeModal} />
      </Modal>
      <Modal
        title="Изменить пароль"
        footer={null}
        visible={modalOpening === 'passwordForm'}
        onCancel={closeModal}
      >
        <ChangePasswordForm user={user} submitForm={submitPasswordForm} cancelClick={closeModal} />
      </Modal>
    </div>
  );
};


export default UserProfileComponent;
