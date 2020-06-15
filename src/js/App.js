import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Layout, Row, Col, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

// Page
import Sidebar from './layout/sidebar';
import Contentbar from './layout/content';

// Utils
import { removeUserSession, getUser } from "./utils/API";
const { Header, Sider, Content } = Layout;

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_login: getUser(),
    };
  }

  handleLogout = () => {
    removeUserSession();
    this.props.history.push('/login');
  }

  render() {

    const menu = (
      <Menu onClick={this.handleLogout}>
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
                <span className="white-text">
                  <Icon circular inverted name='users' />
                  {localStorage.getItem('orgName')} <DownOutlined />
                </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                <span>
                  <Icon circular inverted name='users' />
                  <Dropdown overlay={menu} className="white-text">
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                      {this.state.user_login.FullName} <DownOutlined />
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
}

export default Application;