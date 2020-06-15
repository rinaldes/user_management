import React from 'react';
import { Grid, Dropdown, Icon } from 'semantic-ui-react';
import { Layout } from 'antd';

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
    return (
      <Layout>
        <Header className="app-headbar">
          <div>
            <Grid centered>
              <Grid.Column width="4" floated="right">
                <span>
                  <Icon circular inverted name='users' />
                  <Dropdown text={localStorage.getItem('orgName')} className="white-text">
                    <Dropdown.Menu>
                      <Dropdown.Item text=' ' />
                    </Dropdown.Menu>
                  </Dropdown>
                </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span>
                  <Icon circular inverted name='users' />
                  <Dropdown text={this.state.user_login.FullName} className="white-text">
                    <Dropdown.Menu>
                      <Dropdown.Item text='Logout' onClick={this.handleLogout} />
                    </Dropdown.Menu>
                  </Dropdown>
                </span>
              </Grid.Column>
            </Grid>
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