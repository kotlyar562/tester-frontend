import React from 'react';
import { Route, Link } from 'react-router-dom';
import {
  Layout,
  Menu,
  Icon,
  Breadcrumb,
} from 'antd';
import Footer from '../components/Footer';


const styles = {
  sidebar: {
    overflow: 'auto',
    height: '100vh',
    left: 0,
    padding: 0,
  },
  breadcrumb: {
    margin: '16px 0',
  },
};

const UserDashboard = () => (
  <div>
    Dashboard
  </div>
);

const UserProfile = () => (
  <div>
    Profile
  </div>
);

const UserRouter = () => (
  <div>
    <Route exact path="/user" component={UserDashboard} />
    <Route path="/user/profile" component={UserProfile} />
  </div>
);

const UserView = (props) => {
  const {
    activeSider,
    user,
    menuClick,
    breadcrumbs,
  } = { ...props };
  return (
    <Layout>
      <Layout.Sider
        breakpoint="lg"
        collapsible
        style={styles.sidebar}
      >
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['dashboard']}
          selectedKeys={[activeSider]}
          style={{ marginTop: 0 }}
          onClick={menuClick}
        >
          <Menu.Item key="dashboard">
            <Link to="/user">
              <Icon type="dashboard" />
              <span>
                Панель управления
              </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="profile">
            <Link to="/user/profile">
              <Icon type="user" />
              <span>
                Профиль
              </span>
            </Link>
          </Menu.Item>
          <Menu.SubMenu
            key="bases"
            title={
              (
                <span>
                  <Icon type="database" />
                  <span>
                    Базы вопросов
                  </span>
                </span>
              )
            }
          >
            <Menu.Item key="userBases">
              <Link to="/user/bases">
                <span>
                  Мои базы вопросов
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="allBases">
              Доступные базы
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            key="tests"
            title={
              (
                <span>
                  <Icon type="profile" />
                  <span>
                    Тесты
                  </span>
                </span>
              )
            }
          >
            <Menu.Item key="userTests">
              Мои тесты
            </Menu.Item>
            <Menu.Item key="newTest">
              Создать тест
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="results">
            <Link to="/user/results">
              <Icon type="pie-chart" />
              <span>
                Результаты
              </span>
            </Link>
          </Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout>
        <Layout.Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={styles.breadcrumb}>
            {breadcrumbs.map(item => (
              <Breadcrumb.Item key={item.link}>
                <Link to={item.link}>
                  {item.text}
                </Link>
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
          {Object.keys(user).length > 0 ? <UserRouter /> : 'No AUTH!'}
          <Footer />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default UserView;
