import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Layout, Menu, Button, Dropdown, Icon,
} from 'antd';

const styles = {
  header: {
    backgroundColor: 'white',
    padding: 0,
  },
  menu: {
    lineHeight: '64px',
  },
  userBlock: {
    float: 'right',
    marginRight: '20px',
  },
  userEmail: {
    cursor: 'pointer',
  },
};

const UserMenu = (props) => {
  const { user } = { ...props };
  const menu = (
    <Menu>
      <Menu.Item key="user">
        <Link to="/user">
          Профиль
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">
        <Link to="/auth/logout">
          Выход
        </Link>
      </Menu.Item>
    </Menu>);
  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <span style={styles.userEmail}>
        {user.email}
        <Icon type="down" />
      </span>
    </Dropdown>
  );
};

const UserLogin = () => (
  <Button type="dashed">
    <Link to="/auth/login">
      Вход
    </Link>
  </Button>
);

const HeaderComponent = (props) => {
  const { user, activeLink, changeMenu } = { ...props };
  const horizontalMenu = (
    <Menu
      theme="light"
      mode="horizontal"
      selectedKeys={[activeLink]}
      style={styles.menu}
      onClick={changeMenu}
    >
      <Menu.Item key="home">
        <Link to="/">
          Главная
        </Link>
      </Menu.Item>
      <Menu.Item key="bases">
        <Link to="/bases">
          Базы вопросов
        </Link>
      </Menu.Item>
      <Menu.Item key="tests">
        <Link to="/tests">
          Пройти тест
        </Link>
      </Menu.Item>
      <Menu.SubMenu title="Профиль?">
        <Menu.Item key="signin">
          Вход
        </Menu.Item>
        <Menu.Item key="signup">
          Регистрация
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
  return (
    <Layout.Header style={styles.header}>
      <div style={styles.userBlock}>
        {Object.keys(user).length > 0 ? <UserMenu user={user} /> : <UserLogin />}
      </div>
      {horizontalMenu}
    </Layout.Header>
  );
};

HeaderComponent.defaultProps = {
  activeLink: 'home',
  user: {},
  changeMenu: undefined,
};

HeaderComponent.propTypes = {
  activeLink: PropTypes.string,
  user: PropTypes.object,
  changeMenu: PropTypes.func,
};

export default HeaderComponent;
