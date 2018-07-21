import React from 'react';
import { Route, Link } from 'react-router-dom';
import {
  Layout,
  Menu,
  Icon,
  Breadcrumb,
} from 'antd';
import Footer from '../components/Footer';
import UserLogin from './UserLogin';
import UserProfile from './profile/UserProfileContainer';
import UserBases from './bases/UserBasesContainer';

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

const UserRouter = (props) => {
  const { changeActiveSider } = props;
  return (
    <div>
      <Route exact path="/user" render={() => <UserDashboard changeActiveSider={changeActiveSider} />} />
      <Route path="/user/profile" render={() => <UserProfile changeActiveSider={changeActiveSider} />} />
      <Route path="/user/bases" render={() => <UserBases changeActiveSider={changeActiveSider} />} />
    </div>
  );
};

const UserView = (props) => {
  const {
    activeSider,
    auth,
    changeActiveSider,
    loginUser,
    breadcrumbs,
  } = props;
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
          selectedKeys={[activeSider]}
          style={{ marginTop: 0 }}
          onClick={e => changeActiveSider(e.key)}
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
          {auth.token
            ? <UserRouter changeActiveSider={changeActiveSider} />
            : <UserLogin auth={auth} loginUser={loginUser} />}
          <Footer />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default UserView;
