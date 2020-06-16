import React from 'react';
import { Layout, Row, Col, Menu, Dropdown } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

// Page
import Sidebar from './layout/sidebar';
import Contentbar from './layout/content';

// Utils
import { removeUserSession, getUser } from "./utils/API";
const { Header, Sider, Content } = Layout;

function Application(props) {
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }

  const menu = (
    <Menu onClick={handleLogout}>
      <Menu.Item>
        Logout
    </Menu.Item>
    </Menu >
  );

  return (
    <Layout>
      <Header className="app-headbar">
        <div>
          <Row align="right">
            <Col span={18}></Col>
            <Col span={6}>
              <span>
                <UserOutlined />&nbsp;&nbsp;&nbsp;
                  <span className="white-text">
                  {localStorage.getItem('orgName')} <DownOutlined />
                </span>
              </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                <span>
                <UserOutlined />&nbsp;&nbsp;&nbsp;
                  <Dropdown overlay={menu} className="white-text">
                  <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    {getUser().FullName} <DownOutlined />
                  </a>
                </Dropdown>
              </span>
            </Col>
          </Row>
        </div>
      </Header>
      <Layout>
        <Sider className="app-sidebar" width={225}>
          <Sidebar />
        </Sider>
        <Content className="app-content" >
          <Contentbar />
        </Content>
      </Layout>
    </Layout>
  );
}

export default Application;